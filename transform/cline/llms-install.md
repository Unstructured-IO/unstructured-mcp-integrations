# Installing the Unstructured Transform MCP server

Instructions for AI agents (such as Cline) installing this server for a user. The
server is hosted; there is nothing to clone, build, or run locally.

## Requirements

- Node.js 18 or later (for `npx mcp-remote`).

## Steps

1. Add this entry to the user's MCP server configuration (in Cline: the global
   `cline_mcp_settings.json`, via *MCP Servers -> Configure*):

   ```json
   {
     "mcpServers": {
       "transform": {
         "command": "npx",
         "args": ["-y", "mcp-remote", "https://mcp.transform.unstructured.io"]
       }
     }
   }
   ```

2. On first connection, `mcp-remote` opens a browser window for OAuth sign-in.
   Tell the user to complete the sign-in there. No API key is needed.

3. Verify the installation: the `transform` server should expose the tools
   `request_file_upload_url`, `transform_files`, `check_transform_status`, and
   `get_transform_results`.

## API-key alternative (headless use)

If the user prefers an API key (from https://transform.unstructured.io), configure
a direct remote server instead:

```json
{
  "mcpServers": {
    "transform": {
      "type": "streamableHttp",
      "url": "https://mcp.transform.unstructured.io",
      "headers": {
        "Authorization": "Bearer YOUR_UNSTRUCTURED_API_KEY"
      }
    }
  }
}
```

Ask the user to paste their key themselves; never read it from other files, and
never echo it back.

## Troubleshooting

- Auth errors: restart the `transform` server connection to reopen the browser
  sign-in.
