let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day = new Date();
    let hours = day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning Rizwaan Sir");
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Rizwaan Sir");
    }
    else{
        speak("Good evening Rizwaan Sir");
    }
}
window.addEventListener('load', ()=>{
    wishMe();
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    btn.style.display = "flex";
    voice.style.display = "none";
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
})

function takeCommand(message){
    btn.style.display = "flex";
    voice.style.display = "none";
    if(message.includes("hello") || message.includes("hello")){
        speak("hello sir what can i help you")
    }
    if(message.includes("help")){
        speak("yes I can help you")
    }
    else if(message.includes("who are you") || message.includes("hu r u")){
        speak("i am vyana virtual assistant created by rizwaan sir and saumyaa mam");
    }
    else if(message.includes("how are you") || message.includes("how r u")){
        speak("I am fine what about you");
    }
    else if(message.includes("tum kaisi ho")){
        speak("mai bahut achchee hun aap bataayeye");
    }
    else if(message.includes("open youtube")){
        speak("opening you tube");
        window.open("https://www.youtube.com/", "_blank");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp");
        window.open("https://web.whatsapp.com/", "_blank");
    }
    else if(message.includes("open google")){
        speak("opening google");
        window.open("https://www.google.com/", "_blank");
    }
    else if(message.includes("can you talk with me")){
        speak("yes i can talk to you");        
    }
    else if(message.includes("kya tum mujhse baat kar sakti ho")){
        speak("haa me aapse baat kar sakti hun");        
    }
    else if(message.includes("kya tum meri madad kar sakti ho")){
        speak("haa mai apki madad kar sakti hun btaayeye aap ko kaisee madad chahiye");        
    }
    else if(message.includes("open facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com/", "_blank");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram");
        window.open("https://www.instagram.com/", "_blank");
    }
    else if(message.includes("open chat gpt")){
        speak("opening chat gpt");
        window.open("https://chatgpt.com/", "_blank");
    }
    else if(message.includes("open pw skill")){
        speak("opening pw skills");
        window.open("https://www.pwskills.com/", "_blank");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator");
        window.open("calculator://");
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
      }
      else if(message.includes("date")){
          let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
          speak(date)
        }
    else{
        let finalText="this is what i found on internet regarding your question"
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}