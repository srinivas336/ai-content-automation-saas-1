const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

function createFallbackResponse(prompt: string) {
  const platformMatch = prompt.match(/Create a high-quality (.+?) post\./);
  const topicMatch = prompt.match(/Topic:\s*(.+)/);
  const toneMatch = prompt.match(/Tone:\s*(.+)/);

  const platform = platformMatch?.[1] ?? "social media";
  const topic = topicMatch?.[1] ?? "an important topic";
  const tone = toneMatch?.[1] ?? "professional";

  const content = `Here is a ${tone.toLowerCase()} ${platform.toLowerCase()} post about ${topic}. Keep it engaging, add a call to action, and keep sentences short.`;

  return {
    choices: [
      {
        message: {
          content,
        },
      },
    ],
  };
}

export async function openRouterChat(prompt: string) {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();

  if (!apiKey) {
    return createFallbackResponse(prompt);
  }

  const response = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}