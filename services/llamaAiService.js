import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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"
});

export async function generateTestCases(prompt) {
  const response = await groq.chat.completions.create({
    model: "llama3-70b-8192", // high quality
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
