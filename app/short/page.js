import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { createShortLink, editLink, deleteLink } from "@/lib/links";

const prisma = new PrismaClient();

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  // ---------------- Server Actions ----------------
  async function handleCreate(formData) {
    "use server";
    const url = formData.get("url")?.trim();
    const short = formData.get("shortUrl")?.trim();
    if (!url) return;

    await createShortLink(session.user.id, url, short || undefined);
    redirect("/short");
  }

  async function handleEdit(formData) {
    "use server";
    const id = formData.get("id");
    const url = formData.get("url")?.trim();
    const short = formData.get("shortUrl")?.trim();
    if (!url) return;

    await editLink(session, id, url, short || undefined);
    redirect("/short");
  }

  async function handleDelete(formData) {
    "use server";
    const id = formData.get("id");
    await deleteLink(session, id);
    redirect("/short");
  }

  // ---------------- Load data ----------------
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { links: true },
  });

  const links = user.links || [];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>URL Shortener Dashboard</h1>

      {/* --- New Link --- */}
      <form action={handleCreate} style={{ marginBottom: "1rem" }}>
        <input name="shortUrl" placeholder="Short (optional)" />
        <input name="url" placeholder="https://example.com" required />
        <button type="submit">Shorten</button>
      </form>

      {/* --- List Links --- */}
      <ul>
        {links.map((l) => (
          <li key={l.id} style={{ marginBottom: "0.5rem" }}>
            <a
              href={`/s/${l.shortCode}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {process.env.NEXT_PUBLIC_BASE_URL + "/s/" + l.shortCode}
            </a>
            {" → "}
            {l.url}

            {/* Edit Form */}
            <form
              action={handleEdit}
              style={{ display: "inline", marginLeft: "0.5rem" }}
            >
              <input type="hidden" name="id" value={l.id} />
              <input name="url" defaultValue={l.url} style={{ width: 200 }} />
              <input
                name="shortUrl"
                defaultValue={l.shortCode}
                style={{ width: 100 }}
              />
              <button type="submit">Edit</button>
            </form>

            {/* Delete Form */}
            <form
              action={handleDelete}
              style={{ display: "inline", marginLeft: "0.5rem" }}
            >
              <input type="hidden" name="id" value={l.id} />
              <button type="submit" style={{ color: "red" }}>
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
