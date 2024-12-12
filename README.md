# Chat UI Integration Project

## Project Overview

This project integrates a simple private chat functionality within a webpage. A chat button is injected into the page, and upon clicking, a chat window appears allowing users to send and display messages. The messages are displayed in a chat container, and the user can interact with the chat through a simple input field.

The chat UI is designed to toggle visibility on button click, allowing a clean and interactive experience without taking up too much space on the page.

## Setup Instructions

### Prerequisites

- A modern browser (Chrome, Firefox, Edge, etc.)
- Node.js (if you plan to run the project locally using a build tool or server)

### Installation Steps

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/Nachiketh-vn/Gasby.git
   ```

2. **Navigate into the project folder**:


3. **Install dependencies** (if any) by running the following command:

   ```bash
   npm install
   ```

4. **Build the React Project** in your terminal or run on local system .

  

   ```bash
   npm run build
   ```

5. Once the project is built, use the dist folder in the chrome extension for using the extension in your Browser.

## Key Features

- **Chat Button:** A button labeled "Chat" that toggles the visibility of the chat window.
- **Chat Window:** A hidden chat window containing a message container and a text area for input.
- **Message Display:** Messages are displayed inside the chat window in message bubbles.
- **Input Field:** A text area for typing messages and a "Send" button for sending them.
- **Toggle Visibility:** Clicking the chat button shows or hides the chat window.
- **Auto-scroll:** The chat container scrolls automatically when new messages are added, ensuring the most recent message is always visible.

## Any Additional Notes or Assumptions

- **Creating group:** Currently, the chat only is visible for the user but we can add functionality where we can make the group of users and use this chat functionality to chat between the meeting.
- **Browser Compatibility:** The project is expected to work in modern browsers that support basic JavaScript and DOM manipulation.
- **Initially I had planned to add the chat in the google meet chat but the parent div Id and Class of the chat container where regualarly changing so it was not posiible to integrate it there, so I have made a separate chat window.**
