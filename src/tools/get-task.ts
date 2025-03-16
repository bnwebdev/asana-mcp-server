import { z } from "zod";

import { createTextContent } from "../utils/create-text-content";
import { getName } from "../utils/get-name";
import { ServerConnector } from "../types";

export const connectGetTask: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    getName("get_task"),
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
