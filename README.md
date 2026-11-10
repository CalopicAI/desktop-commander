# 🖥️ Desktop Commander (by Calopic)

> **The Ultimate Open-Source Model Context Protocol (MCP) Server for Native Desktop & Workspace Automation. Empower your AI Agents with secure, local operating system controls.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-green.svg)](https://modelcontextprotocol.io)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS-lightgrey.svg)](https://github.com/CalopicAI/desktop-commander)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![Official Website](https://img.shields.io/badge/Website-calopic.top-blueviolet)](https://calopic.top)
[![Official X (Twitter)](https://img.shields.io/badge/X-%40CalopicAI-black)](https://x.com/CalopicAI)

---

## 🌟 Executive Summary & Introduction

Welcome to **Desktop Commander**—a high-performance, enterprise-grade open-source **Model Context Protocol (MCP) server** engineered from the ground up by the **[Calopic](https://calopic.top)** team. 

As modern AI workflows evolve from simple browser-based text generation to autonomous local agent execution, developers face a critical bottleneck: *AI models are blind and deaf to local desktop environments.* **Desktop Commander** solves this by serving as a secure, standardized bridge. It translates natural language instructions from LLMs (such as Claude, Cursor, and custom agents) into deterministic, secure local operating system commands. 

Whether you need an automated file organization agent or real-time desktop window inspection, Desktop Commander gives your AI workspace true native hands and eyes.

### ⚡ Powered by Calopic Ecosystem
This open-source repository is a core contribution to the developer ecosystem by **[Calopic](https://calopic.top)**. 
- 🌐 **Official Website & GUI Workspace**: [https://calopic.top](https://calopic.top)
- 🐦 **Official X (Twitter) Updates**: [@CalopicAI](https://x.com/CalopicAI)
- 🚀 **Join the Early Access Waitlist**: [Explore Calopic Desktop Workspace](https://calopic.top)

---

## 🚀 Core Features & Capabilities

1. **Intelligent File & Directory Management (`organize_directory`)**
   - Automatically scans chaotic directories (such as `Downloads`, `Desktop`, or temporary build paths).
   - Groups files dynamically by extension (e.g., `.pdf`, `.png`, `.zip`, `.code`) or custom criteria.
   - Moves and structures files securely while logging precise execution summaries.

2. **OS-Level Window & Process Inspection (`list_active_windows`)**
   - Direct integration with Windows PowerShell and macOS System Events/AppleScript.
   - Provides AI agents with real-time situational awareness of active application windows, helping context-aware assistants understand what you are currently working on.

3. **Privacy-First Local Execution Architecture**
   - Operates strictly on your local host machine using standardized Standard Input/Output (`stdio`) communication transport streams.
   - Zero telemetry leaks: No personal file paths, contents, or system commands are ever transmitted to external clouds or third-party servers.

4. **Universal MCP Protocol Interoperability**
   - Built natively on the official `@modelcontextprotocol/sdk`.
   - Plug-and-play compatible with **Claude Desktop**, **Cursor IDE**, **Continue.dev**, and the **Calopic AI Desktop Workspace**.

---

## 📋 System Requirements & Prerequisites

Before setting up Desktop Commander, ensure your workstation satisfies the following requirements:
- **Node.js**: Runtime version `18.0.0` or higher (`node -v`).
- **npm / npx**: Package manager included with your Node.js installation.
- **Operating System**: 
  - **Windows**: Windows 10 or Windows 11 (PowerShell enabled).
  - **macOS**: macOS 11.0 (Big Sur) or newer.

---

## 🛠️ Comprehensive Step-by-Step Installation & Setup Tutorial

You can run Desktop Commander instantly via `npx` without manual code compilation, or clone the repository for local developer modifications.

---

### Method 1: Instant Execution via `npx` (Recommended for AI Clients)

#### Step 1: Locate Your AI Client Configuration File
Depending on your AI application, locate or create your MCP configuration JSON file:
* **Claude Desktop (macOS)**: `~/Library/Application Support/Claude/claude_desktop_config.json`
* **Claude Desktop (Windows)**: `%APPDATA%\Claude\claude_desktop_config.json`
* **Cursor IDE**: Navigate to `Settings` -> `Features` -> `MCP Servers`.

#### Step 2: Add Desktop Commander to Your MCP Servers
Edit your configuration file to register the `desktop-commander` server block:

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@calopic/desktop-commander"
      ]
    }
  }
}
