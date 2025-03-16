import config from "../../../interactor-ai/.commit.json"; // TODO: use envs
import { AsanaService } from "./lib/asana/service";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";
import { connectTools } from "./tools";

const bootstrap = async () => {
  const server = new McpServer(
    {
      name: "Asana MCP Server",
      version: "0.0.1",
    },
    {
      capabilities: {
        tools: {},
        prompts: {},
      },
    }
  );

  const asanaService = new AsanaService(config.asana.apiKey);

  connectTools(server, { asana: asanaService });

  const transport = new StdioServerTransport();

  console.log("Connecting to MCP server...");
  await server.connect(transport);
  console.log("Connected to MCP server");
};

bootstrap().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
