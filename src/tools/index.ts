import { ServerConnector } from "../types";
import { connectGetTask } from "./get-task";
import { connectGetTasksByProject } from "./get-tasks-by-project";
import { connectGetProjects } from "./get-projects";

const toolConnectors: ServerConnector[] = [
  connectGetTask,
  connectGetTasksByProject,
  connectGetProjects,
];

export const connectTools: ServerConnector = (server, context) => {
  toolConnectors.forEach((connector) => connector(server, context));
};
