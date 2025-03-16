# Asana MCP Server

A Model Context Protocol (MCP) server implementation for Asana integration. This package enables AI assistants to interact with Asana through a standardized protocol, allowing them to manage tasks, projects, and other Asana resources.

## Features

- Asana task management through MCP
- Project and section listing
- Task comments retrieval
- Seamless integration with AI assistants

## Installation

You can install this package globally using npm:

```bash
npm install -g tiny-asana-mcp-server
```

Or run it directly using npx:

```bash
npx tiny-asana-mcp-server
```

## Configuration

Before using the server, you need to set up your Asana credentials. Create a `.env` file in your project root with the following content or provide envs via command line:

```env
ASANA_TOKEN=your_asana_personal_access_token
```

or

```bash
env ASANA_TOKEN=your_asana_personal_access_token npx tiny-asana-mcp-server
```

You can obtain your Asana Personal Access Token from [Asana Developer Console](https://app.asana.com/0/developer-console).

## Usage

### Starting the Server

```bash
tiny-asana-mcp-server
```

The server will start and connect to the MCP client, allowing AI assistants to interact with your Asana workspace.

### Available Tools

The server provides the following MCP tools:

- `asana_get_projects`: List all accessible projects
- `asana_get_sections_by_project`: List sections in a project
- `asana_get_task_stories`: Get comments on a task
- `asana_get_task`: Retrieve details of a specific task
- `asana_get_tasks_by_project`: List tasks in a project
- `asana_get_tasks_by_section`: List tasks in a section

## Plans

- [x] Create MVP to provide asana integration
- [ ] Add environment-based tool configuration (enable/disable specific tools via environment variables)
- [ ] Cover all existing endpoints

## Development

To set up the development environment:

1. Clone the repository:

```bash
git clone git@github.com:bnwebdev/tiny-asana-mcp-server.git
cd tiny-asana-mcp-server
```

2. Install dependencies:

```bash
yarn install
```

3. Start in development mode:

```bash
yarn dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/bnwebdev/tiny-asana-mcp-server/blob/main/LICENSE) file for details.

### Third-Party Licenses

This software uses the [Asana Node.js client library](https://github.com/Asana/node-asana), which is licensed under the Apache License, Version 2.0.
