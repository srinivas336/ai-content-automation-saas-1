import { openRouterChat } from "@/lib/openrouter";

export async function generateContent(
  platform: string,
  topic: string,
  tone: string,
  userEmail?: string
) {
  const prompt = `
You are an expert social media content creator.

Create a high-quality ${platform} post.

Topic:
${topic}

Tone:
${tone}

User email:
${userEmail ?? "demo user"}

Requirements:
- Make it engaging.
- Use emojis where appropriate.
- Include relevant hashtags.
- End with a call to action.
- Return only the final content without explanations.
`;

  const data = await openRouterChat(prompt);

  const text = data?.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("No content returned from the AI service.");
  }

  return text;
}