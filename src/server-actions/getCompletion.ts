"use server";

// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

export async function getCompletion(
  messageHistory: {
    role: "user" | "assistant";
    content: string;
  }[]
) {
  // function implementation will be here
  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: messageHistory,
  // });

  const assistant = "assistant" as "assistant";
  const gptRes = "3";

  const messages = [
    ...messageHistory,
    {
      role: assistant,
      content: gptRes
    },
  ];

  return { messages };
}