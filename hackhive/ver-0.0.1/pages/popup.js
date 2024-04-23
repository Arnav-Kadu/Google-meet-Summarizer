console.log("working")
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['isMeetPage'], function(result) {
        if (result.isMeetPage) {
            document.getElementById('message').textContent = 'Ready for a Google Meet!';
        } else {
            document.getElementById('message').textContent = 'This page is not a Google Meet page.';
        }
    });
});

