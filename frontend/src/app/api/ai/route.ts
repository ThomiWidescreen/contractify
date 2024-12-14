import { NextResponse } from "next/server";

const GROQ_API_KEY = "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";

export async function POST(request: Request) {
  try {
    const { contractType, content } = await request.json();

    if (!contractType || !content) {
      return NextResponse.json(
        { error: "Missing required fields: contractType or content" },
        { status: 400 }
      );
    }

    // Construct a more effective prompt
    const prompt = `
You are a legal expert specializing in writing and enhancing contracts. Your task is to improve the following ${contractType} contract to make it:

1. Clear and concise, ensuring no ambiguous terms remain.
2. Readable for both parties, avoiding legal jargon where unnecessary.
3. Divided into clear sections with proper headings and subheadings.
4. Explicit about the responsibilities and rights of each party.
5. Designed to minimize disputes by addressing potential misunderstandings.

Here is the contract that needs enhancement:

"${content}"

Please enhance this contract and return it in Markdown format with clear formatting and headings.
    `;

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      return NextResponse.json({ error: errorText }, { status: groqResponse.status });
    }

    const data = await groqResponse.json();
    const enhancedContent = data.choices[0]?.message?.content || "Enhancement failed.";

    return NextResponse.json({ enhancedContent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
