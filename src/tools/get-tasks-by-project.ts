import { z } from "zod";

import { createTextContent } from "../utils/create-text-content";
import { getName } from "../utils/get-name";
import { ServerConnector } from "../types";

export const connectGetTasksByProject: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    getName("get_tasks_by_project"),
    "This tool gets asana tasks by project id",
    {
      project_id: z.string(),
      offset: z.string().optional(),
      limit: z.number().optional(),
    },
    async ({ project_id, offset, limit = 10 }) => {
      const response = await asana.tasks.getTasksForProject(project_id, {
        offset,
        limit,
      });

      const { data, next_page } = response._response;

      return {
        content: [createTextContent({ data, next_page })],
      };
    }
  );
};
