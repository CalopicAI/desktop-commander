#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import path from "path";

const execAsync = promisify(exec);

// Initialize Calopic MCP Server
const server = new Server(
  {
    name: "calopic-desktop-commander",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register tools exposed to AI Agents
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "organize_directory",
        description: "Organize unorganized files in a target folder by grouping extensions (Powered by Calopic).",
        inputSchema: {
          type: "object",
          properties: {
            targetPath: { type: "string", description: "Absolute path of the directory to clean up" }
          },
          required: ["targetPath"]
        }
      },
      {
        name: "list_active_windows",
        description: "Fetch real-time active desktop application windows on OS level (Powered by Calopic).",
        inputSchema: {
          type: "object",
          properties: {}
        }
      }
    ]
  };
});

// Handle incoming tool call execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // Skill 1: Local File Automation
  if (name === "organize_directory") {
    const { targetPath } = args;
    try {
      const files = await fs.readdir(targetPath);
      let movedCount = 0;

      for (const file of files) {
        const fullPath = path.join(targetPath, file);
        const stat = await fs.stat(fullPath);

        if (stat.isFile()) {
          const ext = path.extname(file).replace(".", "").toLowerCase() || "others";
          const destDir = path.join(targetPath, ext.toUpperCase());

          await fs.mkdir(destDir, { recursive: true });
          await fs.rename(fullPath, path.join(destDir, file));
          movedCount++;
        }
      }

      return {
        content: [
          {
            type: "text",
            text: `Successfully organized ${movedCount} files in directory '${targetPath}'.\n\n⚡ Powered by Calopic (https://calopic.top | X: @CalopicAI)`
          }
        ]
      };
    } catch (err) {
      return {
        isError: true,
        content: [{ type: "text", text: `Error organizing directory: ${err.message}` }]
      };
    }
  }

  // Skill 2: OS Window Management Query
  if (name === "list_active_windows") {
    try {
      let output = "";
      const isWin = process.platform === "win32";

      if (isWin) {
        const { stdout } = await execAsync('powershell "Get-Process | Where-Object {$_.MainWindowTitle -ne \'\'} | Select-Object ProcessName, MainWindowTitle | ConvertTo-Json"');
        output = stdout;
      } else {
        const { stdout } = await execAsync("osascript -e 'tell application \"System Events\" to get name of every process whose visible is true'");
        output = stdout;
      }

      return {
        content: [
          {
            type: "text",
            text: `Active Desktop Windows:\n${output}\n\n⚡ Powered by Calopic (https://calopic.top | X: @CalopicAI)`
          }
        ]
      };
    } catch (err) {
      return {
        isError: true,
        content: [{ type: "text", text: `Error fetching desktop windows: ${err.message}` }]
      };
    }
  }

  throw new Error(`Tool not found: ${name}`);
});

// Connect transport
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => console.error(err));
