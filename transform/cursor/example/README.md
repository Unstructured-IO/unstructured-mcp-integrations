# Cursor example

Two ready-to-paste MCP server configs for Cursor's `mcp.json` (`~/.cursor/mcp.json`
for global, or `.cursor/mcp.json` per project). Installing the plugin from the
marketplace writes this for you; these are for manual, server-only setup.

- `mcp.oauth.json` - native OAuth, no API key. Cursor opens a browser for sign-in on
  first connection.
- `mcp.apikey.json` - direct streamable HTTP with your API key in the header.

Paste one, then ask the agent:

> Parse report.pdf to Markdown and summarize the key findings.

Manual setup connects the `transform` server only; the always-on rule and the `/transform`
command ship with the installed plugin.

Never commit a real key. Replace `YOUR_UNSTRUCTURED_API_KEY` with your own key
(from https://transform.unstructured.io) when you paste, not in this file.
