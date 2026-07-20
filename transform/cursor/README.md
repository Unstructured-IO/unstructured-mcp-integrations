# Unstructured Transform

Connect the Unstructured Transform MCP server to [Cursor](https://cursor.com) so the
agent can turn any file — PDF, spreadsheet, scan, email, image, 60+ formats — into
clean, agent-ready structured data (Markdown or JSON) without leaving your editor.

**Use when:** the user shares or references a PDF, spreadsheet, scan, or email in a
Cursor session and wants it turned into structured text the agent can read and reason
over — for summarization, extraction, or RAG ingestion.

This is a full Cursor plugin, not just an MCP entry. It bundles:

- **MCP server** (`mcp.json`) — the remote Transform server, connected over streamable
  HTTP with Cursor-native OAuth. No API key and no `mcp-remote` shim.
- **Rule** (`rules/transform.mdc`) — an always-on rule that teaches the agent when to
  reach for Transform, so it picks the tool without being told.
- **Command** (`commands/parse.md`) — `/parse` runs the whole upload → transform →
  poll → results flow in one move.

## Requirements

- [Cursor](https://cursor.com) with plugin/MCP support.
- An Unstructured account for OAuth sign-in, **or** an API key from
  [transform.unstructured.io](https://transform.unstructured.io) for the header method.

## Connect

Install the plugin from the Cursor Marketplace (recommended) — Cursor writes the bundled
`mcp.json` and connects the `transform` server for you. On first connection a browser
window opens for OAuth sign-in; there is no API key to paste.

To wire it up manually instead, add this to `~/.cursor/mcp.json` (global) or
`.cursor/mcp.json` (per project). The endpoint, transport, and tool list are in the
[root README](../../README.md); this only shows the Cursor config:

**OAuth, no API key (default):**

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

**API key, headless:** connect with your key in the header instead of OAuth:

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

## Parse example

Once the `transform` server is connected, run the bundled command:

```
/parse report.pdf
```

Or just ask in natural language:

> Parse report.pdf to Markdown and summarize the key findings.

Cursor uploads the file, starts a transform job, polls until it finishes, and reads back
the structured result. The guide Cursor's agent follows when installing from the
marketplace is [`llms-install.md`](llms-install.md).

## Limits

- Files up to 50 MB each. Large or scanned documents can take a few minutes.
- See the [root README](../../README.md) and the
  [Transform docs](https://docs.unstructured.io/transform/overview) for supported
  formats, parsing options, and billing.

## Next steps

- [Transform overview](https://docs.unstructured.io/transform/overview)
- [Cursor plugins](https://cursor.com/docs/plugins)
- [Cursor Marketplace](https://cursor.com/marketplace)
