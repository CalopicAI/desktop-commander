🖥️ Desktop Commander (by Calopic)The Ultimate Open-Source Model Context Protocol (MCP) Server for Native Desktop & Workspace Automation. Empower your AI Agents with secure, local operating system controls. 
LICENSE
https://modelcontextprotocol.io
https://github.com/CalopicAI/desktop-commander
https://nodejs.org
https://calopic.top
https://x.com/CalopicAI 
 
🌟 Executive Summary & Introduction
 
Welcome to Desktop Commander—a high-performance, enterprise-grade open-source Model Context Protocol (MCP) server engineered from the ground up by the Calopic team.
 
As modern AI workflows evolve from simple browser-based text generation to autonomous local agent execution, developers face a critical bottleneck: AI models are blind and deaf to local desktop environments. Desktop Commander solves this by serving as a secure, standardized bridge. It translates natural language instructions from LLMs (such as Claude, Cursor, and custom agents) into deterministic, secure local operating system commands.
 
Whether you need an automated file organization agent or real-time desktop window inspection, Desktop Commander gives your AI workspace true native hands and eyes.
 
⚡ Powered by Calopic Ecosystem
 
This open-source repository is a core contribution to the developer ecosystem by Calopic.
• 🌐 Official Website & GUI Workspace: https://calopic.top
• 🐦 Official X (Twitter) Updates: @CalopicAI
• 🚀 Join the Early Access Waitlist: Explore Calopic Desktop Workspace 
 
🚀 Core Features & Capabilities
1. Intelligent File & Directory Management (organize_directory)
	• Automatically scans chaotic directories (such as Downloads, Desktop, or temporary build paths).
	• Groups files dynamically by extension (e.g., .pdf, .png, .zip, .code) or custom criteria.
	• Moves and structures files securely while logging precise execution summaries.
2. OS-Level Window & Process Inspection (list_active_windows)
	• Direct integration with Windows PowerShell and macOS System Events/AppleScript.
	• Provides AI agents with real-time situational awareness of active application windows, helping context-aware assistants understand what you are currently working on.
3. Privacy-First Local Execution Architecture
	• Operates strictly on your local host machine using standardized Standard Input/Output (stdio) communication transport streams.
	• Zero telemetry leaks: No personal file paths, contents, or system commands are ever transmitted to external clouds or third-party servers.
4. Universal MCP Protocol Interoperability
	• Built natively on the official @modelcontextprotocol/sdk.
	• Plug-and-play compatible with Claude Desktop, Cursor IDE, Continue.dev, and the Calopic AI Desktop Workspace. 
 
📋 System Requirements & Prerequisites
 
Before setting up Desktop Commander, ensure your workstation satisfies the following requirements:
• Node.js: Runtime version 18.0.0 or higher (node -v).
• Operating System:
	• Windows: Windows 10 or Windows 11 (PowerShell enabled).
	• macOS: macOS 11.0 (Big Sur) or newer. 
 
🛠️ Comprehensive Step-by-Step Installation & Setup Tutorial
 
You can run Desktop Commander by cloning the repository and building it locally for developer modifications. 
 
Method 1: Local Build from Source
 
Step 1: Clone the Repository
git clone https://github.com/CalopicAI/desktop-commander.git
cd desktop-commander
 
Step 2: Install Dependencies and Build
 
Follow the project's local build instructions to compile the server from source.
 
Step 3: Locate Your AI Client Configuration File
 
Depending on your AI application, locate or create your MCP configuration JSON file:
• Claude Desktop (macOS): ~/Library/Application Support/Claude/claude_desktop_config.json
• Claude Desktop (Windows): %APPDATA%\Claude\claude_desktop_config.json
• Cursor IDE: Navigate to Settings -> Features -> MCP Servers. 
Step 4: Add Desktop Commander to Your MCP Servers
 
Edit your configuration file to register the desktop-commander server block, pointing to your locally built entry point:
{
  "mcpServers": {
    "desktop-commander": {
      "command": "node",
      "args": [
        "/absolute/path/to/desktop-commander/dist/index.js"
      ]
    }
  }
}