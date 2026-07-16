# unstructured-mcp-integrations

Integration templates and runnable examples for the **Unstructured Transform MCP
server** across registries, marketplaces, and agent frameworks. This is the
canonical, public home for these integrations.

## What Transform MCP is

Transform MCP turns any file into agent-ready data, called directly from your
agent session with no separate pipeline to wire up. Drop in a PDF, spreadsheet,
scan, or email and get back partitioned, enriched, chunked, and embedded output
ready for RAG, vector stores, or agent memory. 60+ formats, one call.

## Connection reference

| Field | Value |
| --- | --- |
| Endpoint | `https://mcp.transform.unstructured.io` |
| Transport | Remote, streamable-HTTP (connect directly, or via `npx mcp-remote` for clients without native remote-MCP support) |
| Tools | `request_file_upload_url`, `transform_files`, `check_transform_status`, `get_transform_results` |
| Docs | https://docs.unstructured.io/transform/overview |
| Support | mcp-support@unstructured.io |
| Security | https://trust.unstructured.io |

## Integrations

One folder per integration under [`transform/`](transform/). Copy
[`_template/`](_template/) to add one. This table is the index of what exists and
where each one stands.

| Integration | Category | Auth | Status | Owner |
| --- | --- | --- | --- | --- |
| [Cline](transform/cline/) | marketplace | OAuth / API key | Not started | @simoncoombes |
| [Gemini CLI](https://github.com/Unstructured-IO/transform-gemini-extension) | extension | OAuth | Published | @simoncoombes |

Gemini CLI installs a whole repo with a root `gemini-extension.json`, so it ships
as its own extension repo at
[`Unstructured-IO/transform-gemini-extension`](https://github.com/Unstructured-IO/transform-gemini-extension)
rather than under `transform/`. Install it with
`gemini extensions install https://github.com/Unstructured-IO/transform-gemini-extension`.

## Adding an integration

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: copy `_template/` into
`transform/<name>/`, fill in the README, example, assets, and `meta.yaml`, then
open a PR.
