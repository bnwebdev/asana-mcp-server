import { z } from "zod";
import { ServerConnector } from "../types";

export const connectGetSectionsByProject: ServerConnector = (
  server,
  context
) => {
  const { asana } = context;

  server.tool(
    "get_sections_by_project",
    "This tool gets sections from a asana project",
    {
      project_id: z.string(),
      limit: z.number().optional().default(10),
      offset: z.string().optional(),
    },
    async ({ project_id, limit, offset }) => {
      const response = await asana.sections.getSectionsForProject(project_id, {
        limit,
        offset,
      });

      const { data, next_page } = response._response;

      return {
        content: [
          { type: "text", text: JSON.stringify({ data, next_page }, null, 2) },
        ],
      };
    }
  );
};
