'use client'


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px] m-[12px]  grid-grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Usind vercel SDK to create a chat bot .
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sn">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback> JC </AvatarFallback>
                  <AvatarImage src="https://images.unsplash.com/photo-1689126437563-f5d936a06713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback> AI </AvatarFallback>
                  <AvatarImage src="https://images.unsplash.com/photo-1684369586188-bad829e7c51f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=664&q=80" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === 'user' ? 'Usuário' : 'AI'}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}

        <div className="flex gap-3 text-slate-600 text-sn">
          <Avatar>
            <AvatarFallback> AI </AvatarFallback>
            <AvatarImage src="https://images.unsplash.com/photo-1684369586188-bad829e7c51f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=664&q=80" />
          </Avatar>
          <p className="leading-relaxed">
            <span className="block font-bold text-slate-700">AI: </span>
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you ?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
