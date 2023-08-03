"use client";
import  useSpeechRecognition  from "../hooks/useSpeechRecognitionHook";
import { useEffect, useState } from "react";
import React from "react";

const VoiceRecognition = () => {
  const {
    isListening,
    text,
    startListening,
    stopListening,
    hasRecognitionSupport} = useSpeechRecognition();

  return (
    <div>
      <>
        {hasRecognitionSupport ? (
            <>
            <div>
                <button onClick={startListening}>start</button>
            </div>
            <div>
                <button onClick={stopListening}>stop</button>
            </div>
            {isListening ? (
                <h2>O browser esta ouvindo</h2>
            ): null}
            {text}
            </>
        ): (
        <>
            <h2>Tour browser version not support this : (</h2>
        </>
        )}
      </>
    </div>
  );
};

export default VoiceRecognition;
