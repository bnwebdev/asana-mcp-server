import { z } from "zod";

import { createTextContent } from "../utils/create-text-content";
import { getName } from "../utils/get-name";
import { ServerConnector } from "../types";

export const connectGetProjects: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    getName("get_projects"),
    "This tool gets projects from asana",
    async () => {
      const { data: projects } = await asana.projects.getProjects();

      return {
        content: [createTextContent(projects)],
      };
    }
  );
};
