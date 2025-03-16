import { z } from "zod";
import { ServerConnector } from "../types";

export const connectGetTaskStories: ServerConnector = (server, context) => {
  const { asana } = context;

  server.tool(
    "get_task_stories",
    "This tool gets stories/comments from a asana task",
    {
      task_id: z.string(),
      limit: z.number().optional().default(10),
      offset: z.string().optional(),
    },
    async ({ task_id, limit, offset }) => {
      const comments = await asana.stories.getStoriesForTask(task_id, {
        limit,
        offset,
      });

      const { data, next_page } = comments._response;

      return {
        content: [
          { type: "text", text: JSON.stringify({ data, next_page }, null, 2) },
        ],
      };
    }
  );
};
