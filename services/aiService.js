import OpenAI from "openai";
import path from "path";
import dotenv from "dotenv";
dotenv.config( {path: path.resolve(process.cwd(), ".env")} );
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY});

export async function generateTestCases(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // fast + cheap; swap as needed
    messages: [
      {
        role: "system",
        content: prompt
      }
    ],
    temperature: 0.2
  });

  return response.choices[0].message.content;
}
