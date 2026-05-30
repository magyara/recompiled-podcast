<script>
  let email = '';
  let done = false;

  function submit(e) {
    e.preventDefault();
    done = true;
  }
</script>

<section id="about" style="max-width:1080px;margin:0 auto;padding:40px 24px 80px;">
  <div
    style="
      position: relative;
      background: var(--surface-inverse);
      color: var(--on-surface-inverse);
      border-radius: 18px;
      padding: clamp(28px, 5vw, 56px);
      display: grid; gap: 32px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      align-items: center;
      overflow: hidden;
    "
  >
    <div
      style="
        position: absolute; inset: 0;
        background: radial-gradient(circle at 90% -10%, var(--surface-inverse-glow), transparent 60%);
        pointer-events: none;
      "
    ></div>

    <div style="position:relative;">
      <div
        style="
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--on-surface-inverse-eyebrow); font-weight: 600;
        "
      >RSS · EMAIL</div>
      <h2
        style="
          font-family: var(--font-display); font-weight: 700;
          font-size: clamp(26px, 3.4vw, 36px); letter-spacing: -0.025em;
          line-height: 1.1; margin: 10px 0 10px; color: var(--on-surface-inverse);
          text-wrap: balance; max-width: 380px;
        "
      >New episode every Tuesday. Get it in your inbox.</h2>
      <p style="font-family:var(--font-body);font-size:15px;color:var(--on-surface-inverse-muted);margin:0;max-width:380px;">
        Show notes, transcript, and the one link we couldn&rsquo;t stop talking about.
      </p>
    </div>

    <form on:submit={submit} style="position:relative;display:flex;flex-direction:column;gap:10px;">
      {#if done}
        <div
          style="
            background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
            padding: 16px; border-radius: 12px; font-family: var(--font-body);
            color: var(--on-surface-inverse); display: flex; gap: 10px; align-items: center;
          "
        >
          <span style="width:8px;height:8px;border-radius:99px;background:#7eebb5;"></span>
          Subscribed. See you Tuesday.
        </div>
      {:else}
        <input
          type="email" required bind:value={email}
          placeholder="hello@example.com"
          style="
            font-family: var(--font-body); font-size: 15px;
            padding: 14px 16px;
            border: 1.5px solid rgba(255,255,255,0.18);
            border-radius: 12px; background: rgba(255,255,255,0.08);
            color: var(--on-surface-inverse); outline: none;
          "
        />
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button
            type="submit"
            class="rc-btn"
            style="
              font-family: var(--font-body); font-weight: 600; font-size: 14px;
              padding: 11px 20px; border-radius: 999px; border: 0;
              background: #fff; color: var(--surface-inverse); cursor: pointer;
            "
          >Subscribe</button>
          <button
            type="button"
            class="rc-btn"
            style="
              font-family: var(--font-body); font-weight: 600; font-size: 14px;
              padding: 11px 20px; border-radius: 999px;
              border: 1.5px solid rgba(255,255,255,0.22);
              background: transparent; color: var(--on-surface-inverse); cursor: pointer;
              display: inline-flex; align-items: center; gap: 8px;
            "
          >
            <i data-lucide="rss" style="width:16px;height:16px;"></i>
            RSS feed
          </button>
        </div>
      {/if}
    </form>
  </div>
</section>
