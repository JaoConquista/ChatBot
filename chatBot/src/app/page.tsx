import { Chat } from "@/components/Chat";
import VoiceRecognition from "@/components/VoiceRecognition";
import 'regenerator-runtime/runtime'
export default function Home() {

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center flex-column">
      <Chat/>
      {/* <VoiceRecognition/>  */}
    </div>
  );
}
