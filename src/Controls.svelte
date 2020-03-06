<script>
    import { ticking, breakLength, sessionLength } from './store.js'
    const startTicking = () => {
        ticking.update(n => !n)
    }
    const reset = () => {
        ticking.update(n => false)
        breakLength.update(n => 5 * 60)
        sessionLength.update(n=> 25 * 60)
    }
</script>

<main>
    <button on:click={startTicking}>{$ticking?"pause":"start"}</button>
    <button on:click={reset}>reset</button>
</main>

<style>

</style>