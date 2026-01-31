```markdown
# 🤖 Gemini AI Chatbot (MERN Stack)

A full-stack AI chatbot application leveraging the **gemini-3-flash-preview**. This project features a modern React interface with real-time streaming-like feel, Markdown support for code snippets, and a secure Node.js/Express backend.> This project uses the Google Gemini API. AI-generated responses are produced by Google Gemini and may not always be accurate.

---

## 🚀 Features

* 💬 **Real-time Interaction**: Seamless chat experience with the Gemini AI model.
* ✨ **Markdown Support**: Renders AI responses with formatting, bold text, and code blocks using `react-markdown`.
-   📱 **Responsive UI**: Built with **Bootstrap 5** for a clean, mobile-friendly layout.
-   📥 **Auto-Scroll**: Automatically scrolls to the latest message for a better user experience.
-   🔐 **Environment Security**: Sensitive API keys are managed securely on the backend.

---

## 📂 Project Structure

```text
AI_CHAT_PROJECT/
├── client/                # React Frontend
│   ├── public/            # Static assets (favicons, manifest)
│   └── src/               # Application logic
│       ├── App.js         # Main Chat UI Logic
│       ├── index.js       # React entry point
│       └── App.css        # Custom chat styling
├── server/                # Express Backend
│   ├── .env               # API Key (Private)
│   ├── server.js          # Gemini API Integration
│   └── package.json       # Backend dependencies
├── .gitignore             # Git exclusion rules
└── README.md              # Documentation

```

---

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React.js, Axios, Bootstrap 5, React-Markdown |
| **Backend** | Node.js, Express.js |
| **AI Engine** | Google Generative AI (Gemini 1.5 Flash) |
| **Utilities** | Remark-Gfm, Dotenv, CORS |

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone [https://github.com/Kavipriya47/Gemini-AI-Chatbot-Mern.git](https://github.com/Kavipriya47/Gemini-AI-Chatbot-Mern.git)
cd Gemini-AI-Chatbot-Mern

```

### 2. Backend Setup

Navigate to the server folder and install dependencies:

```bash
cd server
npm install

```

**Configure Environment Variables:**
Create a `.env` file inside the `server` directory:

```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=4005

```

**Start Backend:**

```bash
node server.js

```

### 3. Frontend Setup

Open a new terminal, navigate to the client folder, and install dependencies:

```bash
cd client
npm install

```

**Start Frontend:**

```bash
npm start

```

The app will open at `http://localhost:3000`.

---

## 🔌 API Endpoints

### Chat Interaction

* **URL:** `/chat`
* **Method:** `POST`
* **Payload:** `{ "message": "Your prompt here" }`
* **Response:** `{ "reply": "AI generated text..." }`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

Developed by [Kavipriya](https://github.com/Kavipriya47)

```
```"# Gemini-AI-Chatbot-Mern" 
