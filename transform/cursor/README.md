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

**Once this plugin is published to the Cursor Marketplace,** installing it is the
recommended path — Cursor writes the bundled `mcp.json`, registers the rule and `/parse`
command, and connects the `transform` server for you. A browser window opens for OAuth
sign-in on first connection; there is no API key to paste.

Until then — or if you only want the server — wire up the MCP server manually: add this to
`~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (per project). **Manual setup connects
the `transform` server only**; the always-on rule and the `/parse` command ship with the
installed plugin, so install it to get those. The endpoint, transport, and tool list are in
the [root README](../../README.md); this only shows the Cursor config:

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

Both configs are ready to paste from [`example/`](example/).

## Parse example

With the plugin installed, run the bundled command:

```
/parse report.pdf
```

Or, with just the `transform` server connected, ask in natural language:

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
