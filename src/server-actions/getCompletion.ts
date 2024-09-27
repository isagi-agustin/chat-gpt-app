"use server";

import { createChat, updateChat } from "@/db";
import { auth as getServerSession } from "@/auth";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

export async function getCompletion(
  id: number | null,
  messageHistory: {
    role: "user" | "assistant";
    content: string;
  }[]
) {
  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: messageHistory,
  // });
  
  
  const messages = [
    ...messageHistory,
    {
      role: "assistant" as const,
      content: "When you request the homepage from a server, it sends back everything that isn't wrapped in Suspense first. It holds the connection open until all the Suspense boundaries are resolved. Then, it takes the output of the Suspense boundaries and streams it to the client. The client goes ahead and updates that content anywhere on the page based on its own schedule. This is why it's referred to as out- of - order streaming." as const
    },
  ];

  const session = await getServerSession();
  let chatId = id;
  if (!chatId) {
    chatId = await createChat(
      session?.user?.email!,
      messageHistory[0].content,
      messages
    );
  } else {
    await updateChat(chatId, messages);
  }

  return {
    messages,
    id: chatId,
  };
}