<script>
  import svelteLogo from '../assets/svelte.svg'
  let catImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fcat-transparent-cute-1.png&f=1&nofb=1&ipt=7fa9b03b8cf7377621f56e28c5d6bf82f00de64041b0c182a3f436cba82e4387&ipo=images"
</script>

<div>
<a href="https://svelte.dev" target="_blank" rel="noreferrer">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
</a>
<a href="/login" target="_self" rel="noreferrer">
    <img src={catImg} class="logo cat" alt="Svelte Logo" />
</a>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.cat:hover {
    filter: drop-shadow(0 0 2em #b1afa7)
  }
  .read-the-docs {
    color: #888;
  }
</style>
