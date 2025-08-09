import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    console.log("Received prompt:", prompt); // Log the received prompt

    // Check if API key is set correctly
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("API key not found in environment variables.");
      return NextResponse.json(
        { error: "API key not found. Please check environment variables." },
        { status: 500 }
      );
    }

    // Making the request to the OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant helping users draft contact messages." },
          { role: "user", content: prompt }
        ]
      })
    });

    // Handle API response
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error from OpenRouter API:", errorData); // Log the error from the API
      return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
    }

    // Parse and return the response data
    const data = await response.json();
    console.log("AI Response:", data); // Log the AI response

    // Extract and return the AI generated message
    const result = data?.choices?.[0]?.message?.content;
    if (!result) {
      console.error("AI response missing content.");
      return NextResponse.json({ error: "AI response is empty or malformed." }, { status: 500 });
    }

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error in AI generation:", error);
    return NextResponse.json({ error: "An error occurred while generating the message." }, { status: 500 });
  }
}
