import { z } from "zod";

import { createTextContent } from "../utils/create-text-content";
import { getName } from "../utils/get-name";
import { ServerConnector } from "../types";

export const connectGetSectionsByProject: ServerConnector = (
  server,
  context
) => {
  const { asana } = context;

  server.tool(
    getName("get_sections_by_project"),
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
        content: [createTextContent({ data, next_page })],
      };
    }
  );
};
