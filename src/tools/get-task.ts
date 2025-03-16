import { z } from "zod";

import { ServerConnector } from "../types";
import { createTextContent } from "../utils/create-text-content";

export const connectGetTask: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    "get_task",
    "This tool gets a task from asana",
    { task_id: z.string() },
    async ({ task_id }) => {
      const { data: task } = await asana.tasks.getTask(task_id);

      return {
        content: [createTextContent(task)],
      };
    }
  );
};
