import { z } from "zod";

import { createTextContent } from "../utils/create-text-content";
import { ServerConnector } from "../types";

export const connectGetProjects: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    "get_projects",
    "This tool gets projects from asana",
    async () => {
      const { data: projects } = await asana.projects.getProjects();

      return {
        content: [createTextContent(projects)],
      };
    }
  );
};
