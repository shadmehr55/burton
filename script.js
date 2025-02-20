document.addEventListener('DOMContentLoaded', function() {
    // پیام‌های هکری که باید نمایش داده بشه
    const hackingMessages = [
        "Communicating with the system",
        "Unauthorized connection",
        "Access to drivers",
        "Password decryption",
        "Hack done.",
        "Loading BURTON",
        "The system is reliable.",
        "You were hacked."
    ];

    // تابعی برای نمایش پیام‌ها به تدریج
    function showHackingMessages() {
        let messageContainer = document.getElementById('messagesSection');
        let index = 0;

        // هر 2 ثانیه یک پیام جدید نمایش داده می‌شود
        let interval = setInterval(() => {
            if (index < hackingMessages.length) {
                let newMessage = document.createElement('div');
                newMessage.classList.add('message');
                newMessage.textContent = hackingMessages[index];
                messageContainer.appendChild(newMessage);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 2000);
    }

    // آغاز نمایش پیام‌ها بعد از لود کامل صفحه
    showHackingMessages();
});