import {NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const badgesDir = path.join(process.cwd(), 'public/skill-badges');
    const files = await fs.promises.readdir(badgesDir);
    const svgFiles = files.filter(file => file.endsWith('.svg'));

    // randomize
    for (let i = svgFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [svgFiles[i], svgFiles[j]] = [svgFiles[j], svgFiles[i]];
    }

    return NextResponse.json(svgFiles);
}
