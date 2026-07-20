# Installing the Unstructured Transform MCP server (Cursor)

Instructions for AI agents installing this server for a user in Cursor. The server is
hosted; there is nothing to clone, build, or run locally.

## Steps

1. Add this entry to the user's MCP configuration (Cursor: `~/.cursor/mcp.json` for
   global, or `.cursor/mcp.json` in the project). Installing the plugin from the
   marketplace does this automatically via the bundled `mcp.json`:

   ```json
   {
     "mcpServers": {
       "transform": {
         "type": "streamable-http",
         "url": "https://mcp.transform.unstructured.io"
       }
     }
   }
   ```

2. On first connection, Cursor opens a browser window for OAuth sign-in. Tell the user
   to complete the sign-in there. No API key is needed.

3. Verify the installation: the `transform` server should connect and expose its file
   parsing tools (upload, start job, check status, get results).

## API-key alternative (headless use)

If the user prefers an API key (from https://transform.unstructured.io), add it as a
header instead of using OAuth:

```json
{
  "mcpServers": {
    "transform": {
      "type": "streamable-http",
      "url": "https://mcp.transform.unstructured.io",
      "headers": {
        "Authorization": "Bearer ${env:UNSTRUCTURED_API_KEY}"
      }
    }
  }
}
```

Ask the user to provide their key themselves; never read it from other files, and never
echo it back.

## Troubleshooting

- Auth errors: restart the `transform` server connection to reopen the browser sign-in.
