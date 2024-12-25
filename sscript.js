let recognition;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();

        if (command.includes('hello')) {
            speak("Hello! How can I help you?");
        } else if (command.includes('teach me')) {
            speak("Sure, what would you like to read?");
        } else if (command.includes('alphabets')) {
            speak("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");
        } else if (command.includes('numbers')) {
            speak("0 1 2 3 4 5 6 7 8 9");
        } else {
            speak("Sorry, I didn't catch that command.");
        }
    };

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function startListening() {
        recognition.start();
        console.log("Listening...");
    }

    function stopListening() {
        recognition.stop();
        console.log("Stopped listening.");
    }

    function speakElevateSkills() {
        speak("Elevate your skills");
    }
    function speakshop() {
        speak("Shop essential kit");
    }

    // Example usage:
    startListening(); // Start listening for voice commands
} else {
    console.error('Speech recognition not supported in this browser.');
}
