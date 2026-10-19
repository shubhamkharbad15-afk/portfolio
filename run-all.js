import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("==============================================");
console.log("  Starting Shubham Kharbad Portfolio Suite   ");
console.log("==============================================");

// Spawn Server
const server = spawn("npm", ["run", "start"], {
  cwd: path.join(__dirname, "server"),
  shell: true,
  stdio: "inherit",
});

// Spawn Client
const client = spawn("npm", ["run", "dev"], {
  cwd: path.join(__dirname, "client"),
  shell: true,
  stdio: "inherit",
});

const cleanup = () => {
  console.log("\nShutting down development servers...");
  server.kill();
  client.kill();
  process.exit(0);
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
