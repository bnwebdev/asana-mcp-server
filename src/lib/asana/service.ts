import {
  ApiClient,
  SectionsApi,
  StoriesApi,
  TasksApi,
  ProjectsApi,
} from "asana";
import { AsanaServiceInterface } from "../../types";

export class AsanaService implements AsanaServiceInterface {
  tasks: TasksApi;
  stories: StoriesApi;
  sections: SectionsApi;
  projects: ProjectsApi;

  constructor(accessToken: string) {
    this.connectAccessToken(accessToken);

    this.tasks = new TasksApi();
    this.stories = new StoriesApi();
    this.sections = new SectionsApi();
    this.projects = new ProjectsApi();
  }

  connectAccessToken(accessToken: string) {
    const client = ApiClient.instance;
    client.authentications["token"].accessToken = accessToken;
  }
}
