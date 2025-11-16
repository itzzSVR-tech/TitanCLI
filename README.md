<div align="center">
  <br />
      <img src="./Titan CLI Intro.png" alt="Project Banner">
  <br />

  <h2 align="center">Titan CLI</h2>

  <div>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="next.js" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="prisma" />
    <img src="https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white" alt="Gemini" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
  </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Introducing TitanCLI, the ultimate AI agent CLI designed to supercharge your productivity with unmatched intelligence and versatility. Whether you're engaging in seamless chat conversations, leveraging powerful integrated tools, or activating autonomous agent mode for complex tasks, TitanCLI is your command-center companion built for the future. Built for developers and tech enthusiasts alike, it combines cutting-edge AI capabilities with a sleek, intuitive interface to bring your ideas to life faster and smarter than ever before. Step into the future of AI-driven command line power with TitanCLI.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Commander.js
- Prisma
- Node.js
- PostgreSQL (Neon DB)
- Google Gemini

## <a name="features">🔋 Features</a>

👉 **Natural Language Chat**: Engage in intuitive conversation with the AI agent for quick commands, explanations, and assistance.

👉 **Multi-Modal Input**: Accept not only text but also images, sketches, and web content for enhanced context and code generation.

👉 **Code Understanding & Generation**: Query, generate, refactor, and debug code across large codebases with natural language prompts.

👉 **Autonomous Agent Mode**: Activate multi-step, autonomous workflows for complex tasks with dynamic planning and error recovery.

👉 **Tool Integration**: Built-in support for a variety of specialized tools and protocols to extend capabilities seamlessly.

👉 **Real-Time Context Awareness**: Ground prompts with real-time web search or project-specific context files to stay updated.

👉 **Custom Commands**: Create reusable custom commands for your specific workflows and preferences.

👉 **Multi-Agent Orchestration**: Coordinate multiple specialized agents for large projects with task delegation and parallel execution.

👉 **Advanced Search**: Use fuzzy, neural code, and full-text search to find relevant code snippets or documentation.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:itzzSVR-tech/TitanCLI.git
cd TitanCLI
```

**Installation**

Install the project dependencies using npm in both the client and server folders:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the server folder of your project and add the following content:

```env
PORT=<your port number>
DATABASE_URL=<your database URL>

# Better Auth
BETTER_AUTH_SECRET=<your secret>
BETTER_AUTH_URL=http://localhost:3005

# Github OAuth
GITHUB_CLIENT_ID=<your client ID>
GITHUB_CLIENT_SECRET=<your client secret>

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=<your API key>
TITANAI_MODEL=<your prefered model>
```

Replace the placeholder values with your actual credentials.

**Running the Project**

Run the Following command in the server folder (`Side Note`: Run this command in the Git Bash):

```bash
chmod +x ./src/cli/main.js
```
Then in the client folder:

```bash
npm run dev
```

Open `http://localhost:{PORT}` in your browser to view the project.

Also in the server folder:

```bash
npm run dev
```

Then run

```bash
<your_command> login
```

This will open a browser window to authenticate you with GitHub.