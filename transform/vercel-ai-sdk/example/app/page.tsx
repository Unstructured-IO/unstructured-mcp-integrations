'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

const SAMPLE_URL =
  'https://raw.githubusercontent.com/Unstructured-IO/unstructured/main/example-docs/pdf/layout-parser-paper.pdf';

export default function Home() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState('');

  const busy = status === 'submitted' || status === 'streaming';

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text });
    setInput('');
  }

  return (
    <div className="wrap">
      <div className="header">
        <h1>📄 Unstructured Transform MCP + Vercel AI SDK</h1>
        <p>
          Paste a public document URL and ask a question. The model calls
          Unstructured&apos;s Transform MCP server to parse it into clean,
          structured content.
        </p>
      </div>

      {messages.length === 0 && (
        <div className="hint">
          Try:{' '}
          <em>
            &ldquo;Parse this PDF into markdown and summarize the sections:{' '}
            <code>{SAMPLE_URL}</code>&rdquo;
          </em>
        </div>
      )}

      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`msg ${message.role}`}>
            <div className="role">{message.role}</div>
            {message.parts.map((part, i) => {
              if (part.type === 'text') {
                return <span key={i}>{part.text}</span>;
              }
              // MCP tools surface as dynamic tool parts — show a lightweight trace.
              if (part.type === 'dynamic-tool') {
                return (
                  <div key={i} className="tool">
                    🔧 calling <strong>{part.toolName}</strong>…
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>

      <div className="composer">
        <form onSubmit={submit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste a document URL and ask a question…"
            disabled={busy}
          />
          <button type="submit" disabled={busy || !input.trim()}>
            {busy ? '…' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
