# Transform MCP × Vercel AI SDK — deploy template

A Next.js chat app that wires the [Vercel AI SDK](https://ai-sdk.dev) to
[Unstructured's Transform MCP server](https://docs.unstructured.io/transform/overview).
Paste a public document URL, ask a question, and the model calls Transform MCP's tools to
parse it — no parsing code of your own.

This app lives in a subfolder of the
[`unstructured-mcp-integrations`](../../../) monorepo. The Deploy button below uses
Vercel's `root-directory` parameter to deploy just this folder.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FUnstructured-IO%2Funstructured-mcp-integrations&root-directory=transform%2Fvercel-ai-sdk%2Fexample&env=ANTHROPIC_API_KEY,UNSTRUCTURED_API_KEY&envDescription=API%20keys%20for%20Claude%20and%20the%20Unstructured%20Transform%20MCP%20server&envLink=https%3A%2F%2Fgithub.com%2FUnstructured-IO%2Funstructured-mcp-integrations%2Fblob%2Fmain%2Ftransform%2Fvercel-ai-sdk%2Fexample%2F.env.example&project-name=transform-mcp-vercel-ai-sdk&repository-name=transform-mcp-vercel-ai-sdk)

Clicking the button clones the monorepo, sets the root directory to this folder, prompts
for the two environment variables below, and deploys.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | ✅ | Powers the chat model (Claude). Get one at [console.anthropic.com](https://console.anthropic.com/settings/keys). |
| `UNSTRUCTURED_API_KEY` | ✅ | Authenticates the Transform MCP server. Get one at [transform.unstructured.io](https://transform.unstructured.io). |
| `UNSTRUCTURED_MCP_URL` | — | Override the MCP endpoint. Defaults to `https://mcp.transform.unstructured.io`. |

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your two keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and paste a public document URL.

## How it works

The route ([`app/api/chat/route.ts`](app/api/chat/route.ts)) connects to Transform MCP
over streamable HTTP with your key as a bearer token ([`lib/mcp.ts`](lib/mcp.ts)), fetches
the server's tools with `mcp.tools()`, and hands them to `streamText`. The model chains
the calls it needs — start the transform, `wait` between status polls, fetch results, then
`downloadText` the parsed Markdown from the pre-signed URL — and streams the answer back.

The full walkthrough is the installation doc:
[Unstructured-IO/docs#990](https://github.com/Unstructured-IO/docs/pull/990).

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Vercel AI SDK v7](https://ai-sdk.dev) — `ai`, `@ai-sdk/react`, `@ai-sdk/anthropic`, `@ai-sdk/mcp`
- [Unstructured Transform MCP](https://docs.unstructured.io/transform/overview)
