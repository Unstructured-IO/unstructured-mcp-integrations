# Contributing

This repo holds integration templates and runnable examples for the Unstructured
Transform MCP server. The goal is one consistent shape for every integration so
they are easy to find, copy, and maintain.

## Add an integration

1. Copy `_template/` to `transform/<integration-name>/`.
2. Fill in the folder:
   - `README.md` — what it is, requirements, connect steps, a runnable parse example, limits, next steps.
   - `example/` — a runnable script plus its dependencies (`pyproject.toml` or `package.json`, `.env.example`). Never commit real keys.
   - `assets/` — logo and screenshots, if the target marketplace needs them.
   - `meta.yaml` — name, category, auth method, vendor PR link, review status, optional issue link, owner.
3. Open a PR. It is reviewed before merge.

## Conventions

- **Lead with the task, not the architecture.** In any tool or integration
  description, say what job it does first (parse a PDF, extract tables) and add an
  explicit "use when" line. Models pattern-match on this when deciding whether to
  call the tool.
- **Issue-first vendors.** Some vendors (NVIDIA, for example) require an issue
  before a PR. File it first and link it in `meta.yaml`.
- **Docs pages** still live in `Unstructured-IO/docs`. Link the docs PR from
  `meta.yaml` and keep runnable code here.
- **No secrets.** Use `.env.example` with placeholders. Never commit an API key.
- **One canonical reference.** The endpoint and auth live in the root README.
  Link to it rather than restating, so there is one source of truth to update.

## Structure

```
transform/<integration>/   README.md, example/, assets/, meta.yaml
_template/                  copy this to start a new integration
```
