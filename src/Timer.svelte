<script>
  import {
    breakLength,
    sessionLength,
    ticking,
    seconds,
    mode,
  } from "./store.js";
  import { playBeep } from "./Beep.svelte";
  import formatTime from "./utils/formatTime.js";
  import { SESSION_MODE, BREAK_MODE } from "./constants";

  const countdown = () => {
    if ($ticking) {
      seconds.update((n) => n - 1);
      if (!$seconds) {
        if ($mode === SESSION_MODE) {
          mode.update((mode) => BREAK_MODE);
          seconds.update((_) => $breakLength);
        } else {
          mode.update((mode) => SESSION_MODE);
          seconds.update((_) => $sessionLength);
        }
        playBeep();
      }
    }
  };
  setInterval(countdown, 1000);
</script>

<main>
  <h1 id="timer-label">{$mode === SESSION_MODE ? 'Session' : 'Break'}</h1>
  <h2 id="time-left">{formatTime($seconds)}</h2>
</main>
