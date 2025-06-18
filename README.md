# 📘 Educational Materials Generator

An interactive web-based tool that allows users to select an IT stream and sub-topic, search for specific content, and generate custom educational materials powered by **Google Gemini API**.

## 🚀 Features

- Dropdown selection of major IT streams and their respective subfields  
- Search bar for keyword-based refinement  
- Gemini API integration for generating learning content  
- Content displayed in real-time on the web interface  
- One-click **PDF download** of generated material  
- Responsive, mobile-friendly UI

## 🛠️ Tech Stack

| Technology        | Purpose                        |
|------------------|--------------------------------|
| HTML/CSS/JS      | Frontend interface              |
| Node.js + Express| Backend server for Gemini API   |
| Google Gemini API| AI-generated content            |
| jsPDF            | PDF download functionality      |
| CORS             | Cross-origin request handling   |

## 📂 Project Structure

```
Educational-Gen/
│
├── public/               # Frontend files
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── server/               # Node.js backend
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

## 📦 Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/educational-gen.git
   cd educational-gen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory**  
   Add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the server**
   ```bash
   node server/server.js
   ```

5. **Open the app**
   Navigate to `public/index.html` in your browser (or serve it using Live Server)

## 🌐 Example Use

1. Select a stream like **Cybersecurity**
2. Choose a sub-topic like **Pentester**
3. Add keywords like `"tools and techniques"`
4. Click **Generate**
5. View the content and **Download as PDF**

## 🧠 Credits

- [Gemini API](https://ai.google.dev)
- [jsPDF](https://github.com/parallax/jsPDF)

## 📄 License

This project is licensed under the MIT License.
