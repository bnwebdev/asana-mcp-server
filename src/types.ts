import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";

import { ProjectsApi } from "asana";
import { SectionsApi, StoriesApi, TasksApi } from "asana";

export type AsanaServiceInterface = {
  tasks: TasksApi;
  stories: StoriesApi;
  sections: SectionsApi;
  projects: ProjectsApi;
};

export type AppContext = {
  asana: AsanaServiceInterface;
};

export type ServerConnector = (server: McpServer, context: AppContext) => void;

export type TextContent = {
  type: "text";
  text: string;
};
