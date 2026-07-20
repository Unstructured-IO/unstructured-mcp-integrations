# Changelog

All notable changes to the Unstructured Transform Cursor plugin are documented here.

## [1.0.0] - 2026-07-20

### Added

- Initial release.
- Remote Transform MCP server (`mcp.json`) using Cursor-native OAuth over streamable HTTP — no API key or `mcp-remote` shim required.
- Always-on rule (`rules/transform.mdc`) that teaches the agent when to reach for Transform.
- `/parse` command (`commands/parse.md`) for a one-move upload → transform → poll → results flow.
