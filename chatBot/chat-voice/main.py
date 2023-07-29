#converts speech to text
import speech_recognition as sr
import pyttsx3
#conection with chatGPT
import openai
import os 
import sys
from dotenv import load_dotenv
load_dotenv()

current_dir = os.path.join("..")

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY

def SpeakText(command):

    # Initialize the engine
    engine = pyttsx3.init()
    engine.setProperty('voice', 'pt-BR')
    engine.say(command)
    engine.runAndWait()

# Initialize the recognizer
r = sr.Recognizer()


def record_text(): 
    while(1):
        try:
            with sr.Microphone() as source2:

                #Recognized receive a input
                r.adjust_for_ambient_noise(source2, duration=0.2)

                r.energy_threshold = 2000
                r.dynamic_energy_threshold = True
                r.pause_threshold = 0.8


                print("Diga Algo ...")

                #listen the user input voice
                audio2 = r.listen(source2)

                #Using google to recognize audio
                MyText = r.recognize_google(audio2, language='pt-BR')

                print("Você : ", MyText)

                return MyText

        except sr.RequestError as e:
            print("Could not request results {0}".format(e))
        
        except sr.UnknownValueError:
            print("Unknown error occurred")
        
def send_to_chatGPT(messages, model="gpt-3.5-turbo"):
    
    response = openai.ChatCompletion.create(
        model = model,
        messages = messages,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.8
    )
    message = response.choices[0].message.content
    messages.append(response.choices[0].message)

    return message
    
messages = []

while(1):
    text = record_text()
    messages.append({"role": "user", "content": text})
    response = send_to_chatGPT(messages)
    SpeakText(response)

    print("IA : " + response)


