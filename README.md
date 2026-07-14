# unstructured-mcp-integrations

Integration templates and runnable examples for the **Unstructured Transform MCP
server** across registries, marketplaces, and agent frameworks. This is the
canonical, public home for these integrations.

## What Transform MCP is

Transform MCP turns any file into agent-ready data, called directly from your
agent session with no separate pipeline to wire up. Drop in a PDF, spreadsheet,
scan, or email and get back partitioned, enriched, chunked, and embedded output
ready for RAG, vector stores, or agent memory. 60+ formats, one call.

Docs: https://docs.unstructured.io/transform/overview

## Connection reference

> ⚠️ **TODO: verify these values against platform-api #1162 before relying on them.**
> They are drafted from sprint notes and public PRs and have not all been confirmed verbatim.

| Field | Value |
| --- | --- |
| Endpoint | `https://mcp.transform.unstructured.io` |
| Transport | Remote, streamable-HTTP |
| Auth | OAuth 2.1 (DCR, PKCE, token refresh) for personal accounts; API key for business / multi-account / headless use. Confirm whether the key is passed as a bearer token. |
| Tools | `request_file_upload_url`, `transform_files`, `check_transform_status`, `get_transform_results` |
| Support | mcp-support@unstructured.io |
| Security | https://trust.unstructured.io |

## Integrations

One folder per integration under [`transform/`](transform/). Copy
[`_template/`](_template/) to add one. This table is the index of what exists and
where each one stands.

| Integration | Category | Auth | Status | Owner |
| --- | --- | --- | --- | --- |
| _(none yet)_ | | | | |

## Adding an integration

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: copy `_template/` into
`transform/<name>/`, fill in the README, example, assets, and `meta.yaml`, then
open a PR.
