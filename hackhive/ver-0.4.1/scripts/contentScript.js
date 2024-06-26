// Check if the current page is a Google Meet page
let transcript = [];
if (location.href.includes("meet.google.com")) {
    let transcriptTime = [],
        lastMessage = {};

    function startTimer() {
        setTimeout(recordTranscript, 5000); // Check every 5 seconds
    }

    function recordTranscript() {
        if (!location.href.includes("meet.google.com")) {
            saveTranscript(); // Call this function when the user leaves the Google Meet page, indicating the meeting has ended.
            return; // Stop the recording process.
        }

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

    function saveTranscript() {
        let combinedTranscript = [];
        for (let i = 0; i < transcript.length; i++) {
            combinedTranscript.push(transcriptTime[i]);
            combinedTranscript.push("\t");
            combinedTranscript.push(transcript[i]);
            combinedTranscript.push("\n");
        }
        let blob = new Blob([combinedTranscript.join("")], {type: "text/csv"});
        let link = document.createElement("a");
        link.download = "transcript_" + Date.now().toString() + ".csv";
        link.href = window.URL.createObjectURL(blob);
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
    }

    recordTranscript();
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "exportTranscript") {
        saveTranscript();
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "summarizer") {
        console.log("Summarizer in Porsche");
    }
});



