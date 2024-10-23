import {NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const badgesDir = path.join(process.cwd(), 'public/skill-badges');
    const files = await fs.promises.readdir(badgesDir);
    const svgFiles = files.filter(file => file.endsWith('.svg'));
    return NextResponse.json(svgFiles);
}
