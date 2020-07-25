<script context="module">
  let beep;
  export const stopBeep = () => {
    beep.pause();
    beep.currentTime = 0;
  };
  export const playBeep = () => {
    beep.play();
  };
</script>

<main>
  <audio
    bind:this={beep}
    id="beep"
    src="./assets/BeepSound.wav"
    preload="auto" />
</main>
