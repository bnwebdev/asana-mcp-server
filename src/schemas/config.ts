import { z } from "zod";

export const configValidationSchema = z.object({
  ASANA_TOKEN: z.string(),
});
