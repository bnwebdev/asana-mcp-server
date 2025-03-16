import { z } from "zod";
import { ServerConnector } from "../types";

export const connectGetProjects: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    "get_projects",
    "This tool gets projects from asana",
    async () => {
      const projects = await asana.projects.getProjects();

      return {
        content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      };
    }
  );
};
