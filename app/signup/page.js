"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { signupUser } from "@/lib/signup";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signupUser(email, password);

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res?.ok) {
        setError("Failed to log in after Sign Up");
        setLoading(false);
        return;
      }

      router.push("/short");
    } catch (err) {
      console.error(err);
      setError(err.message || "Error while Signing Up");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Create Account"}
      </button>
    </form>
  );
}
