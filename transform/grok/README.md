# Grok Build

Production-grade document processing your AI agent calls as MCP tools. Connect the
Unstructured Transform MCP server to [Grok Build](https://x.ai/news/grok-plugin-marketplace)
and parse PDFs, invoices, spreadsheets, and 60+ file types with tables and layout
intact — partitioned, enriched, chunked, and embedded output ready for RAG, vector
stores, or agent memory. One call, no separate pipeline to wire up, 15,000 free
pages a month.

**Use when:** the user shares or references a PDF, spreadsheet, scan, or email in a
Grok Build session and wants it turned into structured text the agent can read and
reason over — for summarization, extraction, or RAG ingestion.

This is an MCP-only listing, not a full plugin bundle. [`.grok-plugin/plugin.json`](.grok-plugin/plugin.json)
and [`.mcp.json`](.mcp.json) in this folder are the actual plugin source: the xAI
marketplace entry is a `url` source pinned to a commit SHA of this repo, scoped to
this subdirectory (`path: transform/grok`) — no separate copy vendored in the xAI
fork. No skills, commands, or agents included.

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
ready to paste from [`.mcp.json`](.mcp.json):

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
