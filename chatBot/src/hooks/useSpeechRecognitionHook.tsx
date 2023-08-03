import { useEffect, useState } from "react";

interface SpeechRecognitionProps {
  isListening: boolean;
  text?: string;
  startListening: () => void;
  stopListening: () => void;
  hasRecognitionSupport: boolean;
}
const useSpeechRecognition = (): SpeechRecognitionProps => {
  let recognition: any = null;
  if ("webkitSpeechRecognition") {
    recognition = new webkitSpeechRecognition();
    recognition.continuos = true;
    recognition.lang = "pt-BR";
  }
  ("");
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (isListening) {
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        console.log("event", event);
        setText(event.results[0][0].transcript);
        setIsListening(false);
      };

      recognition.start()
    }
  }, [isListening]);

  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    isListening,
    text,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};
export default useSpeechRecognition;
