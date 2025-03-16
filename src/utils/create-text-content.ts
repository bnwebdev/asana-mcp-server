import { TextContent } from "../types";

export const createTextContent = (data: unknown): TextContent => {
  if (typeof data === "string") {
    return {
      type: "text",
      text: data,
    };
  }

  return {
    type: "text",
    text: JSON.stringify(data, null, 2),
  };
};
