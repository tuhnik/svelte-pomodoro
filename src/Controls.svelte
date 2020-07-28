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

  const toggleTicking = () => {
    ticking.update((n) => !n);
  };
  const reset = () => {
    ticking.set(false);
    mode.set(SESSION_MODE)
    seconds.set(25 * 60)
    breakLength.set(5)
    sessionLength.set(25);
    stopBeep();
  };
</script>

<div>
  <button id="start_stop" on:click={toggleTicking}>{$ticking ? 'pause' : 'start'}</button>
  <button id="reset" on:click={reset}>reset</button>
</div>
