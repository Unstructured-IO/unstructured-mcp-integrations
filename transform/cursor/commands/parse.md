---
name: parse
description: Parse a document into clean structured text or JSON with Unstructured Transform
---

Parse the file the user names (the command argument, or the most recently shared document) using the connected `transform` MCP server.

1. Determine the source. A public `https://` URL can be passed directly; a local path or workspace file must be uploaded first — request an upload URL, then `PUT` the bytes to it.
2. Start a transform job. Default to Markdown output unless the user asks for JSON or element/layout structure.
3. Poll until the job completes, then read back the structured result.
4. Summarize what was actually extracted from the result you received — pages, notable sections, and any tables visible in the output. Report element or layout counts only when JSON output was used; do not infer them from Markdown. Then ask what the user wants to do next — RAG ingestion, extraction, summarization, and so on.

If the `transform` server is not connected, tell the user to install the Unstructured Transform plugin and complete the OAuth sign-in on first connection.
