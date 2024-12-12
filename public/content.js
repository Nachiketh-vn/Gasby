console.log("Injecting chat button");

const createChatUI = () => {
  const chatButton = document.createElement("button");
  chatButton.id = "private-chat-btn";
  chatButton.innerHTML = "Chat";
  chatButton.className = "chat-btn";

  const chatWindow = document.createElement("div");
  chatWindow.id = "private-chat-window";
  chatWindow.className = "chat-window hidden"; 
  chatWindow.innerHTML = `
    <div class="chat-container" id="private-chat-container"></div>
    <textarea id="private-chat-input" class="chat-input" placeholder="Type your message..."></textarea>
    <button id="send-private-message" class="send-btn">Send</button>
  `;

  document.body.appendChild(chatButton);
  document.body.appendChild(chatWindow);

  chatButton.addEventListener("click", () => {
    const chatWindow = document.getElementById("private-chat-window");
    chatWindow.classList.toggle("hidden"); 
  });

 
  document
    .getElementById("send-private-message")
    .addEventListener("click", () => {
      const messageInput = document.getElementById("private-chat-input");
      const message = messageInput.value.trim();
      if (message) {
        const chatContainer = document.getElementById("private-chat-container");

        const messageBubble = document.createElement("div");
        messageBubble.className = "message-bubble";
        messageBubble.textContent = message;

        chatContainer.appendChild(messageBubble);
        messageInput.value = ""; 
        chatContainer.scrollTop = chatContainer.scrollHeight; 
      }
    });
};

window.addEventListener("load", createChatUI);
