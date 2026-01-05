"use client";

import { useEffect, useState } from "react";

export default function TestLikes() {
  const [result, setResult] = useState<string>("Loading...");

  useEffect(() => {
    async function test() {
      try {
        // Test GET
        const getRes = await fetch('/api/likes');
        const getData = await getRes.json();

        let output = `GET /api/likes:\n${JSON.stringify(getData, null, 2)}\n\n`;

        // Test POST
        const postRes = await fetch('/api/likes', { method: 'POST' });
        const postData = await postRes.json();

        output += `POST /api/likes:\n${JSON.stringify(postData, null, 2)}`;

        setResult(output);
      } catch (error) {
        setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    test();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      <h1>API Test Results</h1>
      <div>{result}</div>
    </div>
  );
}
