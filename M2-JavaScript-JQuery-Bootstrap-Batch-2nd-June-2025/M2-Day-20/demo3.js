//3.Chat Application
class Chat {
    constructor() {
        this.messages = [];
    }

    sendMessage(user, message) {
        this.messages.push({ user, message });
        console.log(`${user}: ${message}`);
    }

    showChatHistory() {
        console.log("Chat History:");
        this.messages.forEach(msg => {
            console.log(`${msg.user}: ${msg.message}`);
        });
    }
}

const chat = new Chat();
chat.sendMessage('Alice', 'Hello!');
chat.sendMessage('Bob', 'Hi Alice!');
chat.showChatHistory();