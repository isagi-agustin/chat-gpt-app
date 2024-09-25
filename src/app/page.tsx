import Chat from '@/app/components/Chat';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      <Separator className="my-5" />
      <Chat />
    </main>
  );
}