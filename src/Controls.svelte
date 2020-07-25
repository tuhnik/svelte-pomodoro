<script>
  import {
    ticking,
    breakLength,
    sessionLength,
    seconds,
    mode,
  } from "./store.js";
  import { stopBeep } from "./Beep.svelte";
  import { MINUTE, SESSION_MODE } from "./constants";

  const startTicking = () => {
    ticking.update((n) => !n);
  };
  const reset = () => {
    ticking.update(() => false);
    breakLength.update(() => 5 * MINUTE);
    sessionLength.update(() => 25 * MINUTE);
    seconds.update(() => 25 * MINUTE);
    mode.update(() => SESSION_MODE);
    stopBeep();
  };
</script>

<main>
  <button on:click={startTicking}>{$ticking ? 'pause' : 'start'}</button>
  <button on:click={reset}>reset</button>
</main>
