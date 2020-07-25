<script>
  import Title from "./Title.svelte";
  import Settings from "./Settings.svelte";
  import Timer from "./Timer.svelte";
  import Controls from "./Controls.svelte";
  import Beep from "./Beep.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Title />
  <Settings />
  <Timer />
  <Controls />
  <Beep />
</main>
