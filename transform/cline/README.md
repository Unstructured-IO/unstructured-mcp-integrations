# Cline

Connect the Unstructured Transform MCP server to [Cline](https://cline.bot), the
AI coding agent for VS Code, so an agent can parse files into structured data
without leaving your editor.

**Use when:** the user shares a PDF, spreadsheet, scan, or email in a Cline
session and wants it turned into clean, structured text (Markdown or JSON) the
agent can read and reason over.

## Requirements

- [Cline](https://cline.bot) installed in VS Code, or another Cline-compatible client.
- Node.js 18 or later, only for the OAuth method (it runs `npx mcp-remote`).
- Either an Unstructured account for browser sign-in, or an API key from
  [transform.unstructured.io](https://transform.unstructured.io) for the header method.

## Connect

There are two ways to connect. The endpoint, transport, and tool list are in the
[root README](../../README.md); this section only shows the Cline config.

**OAuth, no API key.** Add this under *MCP Servers -> Configure* (which edits
`cline_mcp_settings.json`). A browser window opens for sign-in on first connection:

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

**API key, headless.** Connect directly over streamable HTTP with your key in the
header:

```json
{
  "mcpServers": {
    "transform": {
      "type": "streamableHttp",
      "url": "https://mcp.transform.unstructured.io",
      "headers": { "Authorization": "Bearer YOUR_UNSTRUCTURED_API_KEY" },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

If the header method will not connect, use the OAuth method above. Some Cline
versions have known bugs with manually configured streamable-HTTP remote servers.

Both configs are ready to paste from [`example/`](example/). The guide Cline's
agent follows when installing from the marketplace is
[`llms-install.md`](llms-install.md).

## Parse example

Once the `transform` server is connected, ask Cline to parse a file:

> Parse report.pdf to Markdown and summarize the key findings.

Cline uploads the file, starts a transform job, polls until it finishes, and reads
back the structured result. The tools it drives for a parse are
`request_file_upload_url`, `start_transform_job`, `check_job_status`, and
`get_job_results`.

## Structured data extraction example

To pull specific fields out of a document instead of converting the whole thing,
ask for an extraction:

> Extract each line item, the invoice total, and the due date from invoice.pdf as JSON.

Cline parses the file first, then runs the extraction over the parsed element JSON
using `suggest_extraction_schema_for_file` (when you have not supplied a schema)
and `start_extraction_job`, polling with the same `check_job_status` and
`get_job_results` tools. Results come back as JSON matching the schema, wrapped
with the source filename and the element JSON reference they were pulled from.

Extraction quality depends on the parse, so for images, PowerPoint, and PDFs ask
for a high-fidelity parse if a first attempt looks sparse. See
[Structured data extraction](https://docs.unstructured.io/transform/sde) for
prompt patterns.

## Limits

- Files up to 50 MB each. Large or scanned documents can take a few minutes.
- See the [root README](../../README.md) and the
  [Transform docs](https://docs.unstructured.io/transform/overview) for supported
  formats, parsing options, and billing.

## Next steps

- [Transform overview](https://docs.unstructured.io/transform/overview)
- [Cline MCP Marketplace](https://github.com/cline/mcp-marketplace)
