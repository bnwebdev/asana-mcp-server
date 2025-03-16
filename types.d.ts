declare module "asana" {
  export class ApiClient {
    authentications: {
      token: {
        accessToken: string;
      };
    };

    static instance: ApiClient;
  }

  type Response<T> = {
    data: T;
  };

  type PaginatedResponse<T> = Response<T[]> & {
    _response: Response<T[]> & {
      next_page: {
        offset: string;
        path: string;
        uri: string;
      } | null;
    };
  };

  type PaginationParams = {
    limit: number;
    offset?: string;
  };

  type Task = {
    gid: string;
    actual_time_minutes: number | null;
    assignee: {
      gid: string;
      name: string;
      resource_type: string;
    };
    assignee_status: string;
    assignee_section: {
      gid: string;
      name: string;
      resource_type: string;
    };
    completed: boolean;
    completed_at: string | null;
    created_at: string;
    due_at: string | null;
    due_on: string | null;
    followers: {
      gid: string;
      name: string;
      resource_type: string;
    }[];
    hearted: boolean;
    hearts: any[];
    liked: boolean;
    likes: any[];
    memberships: {
      project: {
        gid: string;
        name: string;
        resource_type: string;
      };
      section: {
        gid: string;
        name: string;
        resource_type: string;
      };
    }[];
    modified_at: string;
    name: string;
    notes: string;
    num_hearts: number;
    num_likes: number;
    parent: null;
    permalink_url: string;
    projects: {
      gid: string;
      name: string;
      resource_type: string;
    }[];
    resource_type: string;
    start_at: string | null;
    start_on: string | null;
    tags: any[];
    resource_subtype: string;
    workspace: {
      gid: string;
      name: string;
      resource_type: string;
    };
  };

  type TaskPreview = Pick<
    Task,
    "gid" | "name" | "resource_type" | "resource_subtype"
  >;

  export class TasksApi {
    getTask(taskId: string, options?: unknown): Promise<Response<Task>>;

    getTasksForProject(
      projectId: string,
      paginationParams: PaginationParams
    ): Promise<PaginatedResponse<TaskPreview>>;

    getTasksForSection(
      sectionId: string,
      params: PaginationParams & { opt_fields?: string }
    ): Promise<PaginatedResponse<TaskPreview>>;
  }

  type Story = {
    gid: string;
    created_at: string;
    created_by: {
      gid: string;
      name: string;
      resource_type: string;
    };
    resource_type: string;
    text: string;
    type: string;
    resource_subtype: string;
  };

  type StoryPreview = Pick<
    Story,
    | "gid"
    | "created_at"
    | "created_by"
    | "resource_type"
    | "text"
    | "type"
    | "resource_subtype"
  >;

  export class StoriesApi {
    getStoriesForTask(
      taskId: string,
      opts: PaginationParams
    ): Promise<PaginatedResponse<StoryPreview>>;
  }

  type Section = {
    gid: string;
    name: string;
    resource_type: string;
  };

  type SectionPreview = Pick<Section, "gid" | "name" | "resource_type">;

  export class SectionsApi {
    getSectionsForProject(
      projectId: string,
      paginationParams: PaginationParams
    ): Promise<PaginatedResponse<SectionPreview>>;
  }

  type Project = {
    gid: string;
    name: string;
    resource_type: string;
  };

  type ProjectPreview = Pick<Project, "gid" | "name" | "resource_type">;

  export class ProjectsApi {
    getProjects(
      params?: PaginationParams & { workspace: string }
    ): Promise<PaginatedResponse<Project>>;
  }
}
