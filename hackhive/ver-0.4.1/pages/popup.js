console.log("working")
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['isMeetPage'], function(result) {
        if (result.isMeetPage) {
            document.getElementById('message').textContent = 'Ready for a Google Meet!';
        } 
        else if (result.anyMeetPageOpen) {
            document.getElementById('message').textContent = 'Ready for a Google Meet!';
        }
        else {
            document.getElementById('message').textContent = 'This page is not a Google Meet page.';
        }
    });

    document.getElementById('export-transcript').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "exportTranscript"});
        });
    });

    document.getElementById('summarize').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "summarizer"});
        });
    });
});



