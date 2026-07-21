import { NextRequest, NextResponse } from "next/server";
import { generateContent } from "@/services/ai.service";

export async function POST(req: NextRequest) {
  try {
    const { platform, topic, tone, userEmail } = await req.json();

    if (!userEmail) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!platform || !topic || !tone) {
      return NextResponse.json(
        {
          error: "Platform, topic and tone are required.",
        },
        {
          status: 400,
        }
      );
    }

    const text = await generateContent(platform, topic, tone, userEmail);

    return NextResponse.json({
      text,
    });
  } catch (error: any) {
    console.error("Generate API Error:", error);

    return NextResponse.json(
      {
        error: error.message || "Failed to generate content.",
      },
      {
        status: 500,
      }
    );
  }
}