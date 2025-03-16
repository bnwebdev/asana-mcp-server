import {
  ApiClient,
  SectionsApi,
  StoriesApi,
  TasksApi,
  ProjectsApi,
} from "asana";

export class AsanaService {
  tasks: TasksApi;
  stories: StoriesApi;
  sections: SectionsApi;
  projects: ProjectsApi;

  constructor(accessToken: string) {
    const client = ApiClient.instance;
    client.authentications["token"].accessToken = accessToken;

    this.tasks = new TasksApi();
    this.stories = new StoriesApi();
    this.sections = new SectionsApi();
    this.projects = new ProjectsApi();
  }
}
