import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const submissionsPath = path.join(process.cwd(), "data", "quote-submissions.json");
    const dir = path.dirname(submissionsPath);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let submissions = [];
    if (fs.existsSync(submissionsPath)) {
      submissions = JSON.parse(fs.readFileSync(submissionsPath, "utf8"));
    }

    submissions.push({
      ...data,
      submittedAt: new Date().toISOString(),
      id: Date.now().toString(),
    });

    fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
