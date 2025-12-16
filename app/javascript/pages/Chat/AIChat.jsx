import React from "react";
import { useForm, usePage } from "@inertiajs/react";

export default function AIChat() {
  const { props } = usePage();
  const { data, setData, post, processing, errors } = useForm({
    prompt: props.prompt ?? "",
  });

  const reply = props.reply;
  const serverError = props.error;

  function submit(e) {
    e.preventDefault();
    post("/food-chat", {
      preserveScroll: true,
      // 必要なら onSuccess / onError も書ける
    });
  }

  return (
    <div style={{ padding: 24, maxWidth: 760 }}>
      <h1>AI Chat</h1>

      <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
        <textarea
          rows={5}
          value={data.prompt}
          onChange={(e) => setData("prompt", e.target.value)}
          placeholder="Ask something..."
        />
        <button type="submit" disabled={processing || !data.prompt.trim()}>
          {processing ? "Asking..." : "Send"}
        </button>
      </form>

      {(errors.prompt || serverError) && (
        <div style={{ marginTop: 12 }}>
          {errors.prompt && <div>{errors.prompt}</div>}
          {serverError && <div>{serverError}</div>}
        </div>
      )}

      {reply && (
        <div style={{ marginTop: 24 }}>
          <h2>Reply</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{reply}</pre>
        </div>
      )}
    </div>
  );
}
