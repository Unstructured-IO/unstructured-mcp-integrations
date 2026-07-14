# Cline example

Two ready-to-paste MCP server configs for Cline's `cline_mcp_settings.json`
(open it in Cline via *MCP Servers -> Configure*):

- `cline_mcp_settings.oauth.json` - browser OAuth via `npx mcp-remote`, no API key.
- `cline_mcp_settings.apikey.json` - direct streamable HTTP with your API key in the header.

Paste one, then ask the agent:

> Parse report.pdf to Markdown and summarize the key findings.

Never commit a real key. Replace `YOUR_UNSTRUCTURED_API_KEY` with your own key
(from https://transform.unstructured.io) when you paste, not in this file.
