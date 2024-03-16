// Check if the current page is a Google Meet page
if (location.href.includes("meet.google.com")) {
    var transcript = [],
        transcriptTime = [],
        lastMessage = {};

    function startTimer() {
        setTimeout(recordTranscript, 5000); // Check every 5 seconds
    }

    function recordTranscript() {
        var messages = document.getElementsByClassName("iTTPOb"), // Adjust class name if needed
            timestamps = document.getElementsByClassName("zs7s8d"); // Adjust class name if needed

        for (var s = 0; s < messages.length; s++) {
            var messageText = messages[s].innerText,
                timestampText = timestamps[s].innerText;

            if (messageText == null || messageText == "") {
                return void startTimer();
            }

            var formattedMessage = timestampText + ": " + messageText;
            console.log(formattedMessage);

            var lastMessageIndex = lastMessage[timestampText];

            if (lastMessageIndex == null) {
                transcript.push(formattedMessage);
                transcriptTime.push(Date.now());
                lastMessageIndex = transcript.length - 1;
                lastMessage[timestampText] = lastMessageIndex;
            } else if (formattedMessage.includes(transcript[lastMessageIndex])) {
                transcript[lastMessageIndex] = formattedMessage;
            } else {
                transcript.push(formattedMessage);
                transcriptTime.push(Date.now());
                lastMessageIndex = transcript.length - 1;
                lastMessage[timestampText] = lastMessageIndex;
            }
        }

        startTimer();
        
    }

    

    recordTranscript();
}
