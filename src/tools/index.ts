import { ServerConnector } from "../types";
import { connectGetTask } from "./get-task";

const toolConnectors: ServerConnector[] = [connectGetTask];

export const connectTools: ServerConnector = (server, context) => {
  toolConnectors.forEach((connector) => connector(server, context));
};
