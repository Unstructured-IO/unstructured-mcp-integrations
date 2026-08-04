# Grok Build

Connect the Unstructured Transform MCP server to [Grok Build](https://x.ai/news/grok-plugin-marketplace)
so the agent can turn any file — PDF, spreadsheet, scan, email, image, 60+ formats —
into clean, agent-ready structured data (Markdown or JSON) as part of a build session.

**Use when:** the user shares or references a PDF, spreadsheet, scan, or email in a
Grok Build session and wants it turned into structured text the agent can read and
reason over — for summarization, extraction, or RAG ingestion.

This is an MCP-only listing, not a full plugin bundle. It registers the remote
`transform` server via the Grok plugin marketplace's `external_plugins/` convention
(mirrors the existing Neon listing there) — no skills, commands, or agents included.

## Requirements

- Grok Build with plugin marketplace support (`/marketplace` inside a session).
- An Unstructured account, to sign in through the browser the first time Grok Build
  calls a Transform tool.

## Connect

**Once this listing is merged into the [xAI plugin marketplace](https://github.com/xai-org/plugin-marketplace),**
installing it is the recommended path: run `/marketplace` inside Grok Build, find
`unstructured-transform`, and press `i` to install. That registers the `transform`
server for you.

Until then, or to connect without the marketplace, add this to your MCP config
manually. The endpoint, transport, and tool list are in the
[root README](../../README.md); this only shows the Grok-specific config, and is
ready to paste from [`example/.mcp.json`](example/.mcp.json):

```json
{
  "mcpServers": {
    "transform": {
      "type": "http",
      "url": "https://mcp.transform.unstructured.io"
    }
  }
}
```

## Parse example

Ask in natural language:

> Parse report.pdf to Markdown and summarize the key findings.

Grok Build uploads the file, starts a transform job, polls until it finishes, and
reads back the structured result.

## Limits

- Files up to 50 MB each. Large or scanned documents can take a few minutes.
- See the [root README](../../README.md) and the
  [Transform docs](https://docs.unstructured.io/transform/overview) for supported
  formats, parsing options, and billing.

## Next steps

- [Transform overview](https://docs.unstructured.io/transform/overview)
- [Grok plugin marketplace](https://github.com/xai-org/plugin-marketplace)
