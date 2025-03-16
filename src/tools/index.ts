import { ServerConnector } from "../types";
import { connectGetTask } from "./get-task";
import { connectGetTasksByProject } from "./get-tasks-by-project";

const toolConnectors: ServerConnector[] = [
  connectGetTask,
  connectGetTasksByProject,
];

export const connectTools: ServerConnector = (server, context) => {
  toolConnectors.forEach((connector) => connector(server, context));
};
