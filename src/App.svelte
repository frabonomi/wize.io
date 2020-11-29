<script>
  import Logo from './Logo.svelte'
  import Background from './Background.svelte'
</script>

<style lang="postcss">
  main {
    color: #2e3038;
    font-family: 'Basier Square';
  }

  .w-app {
    position: relative;
  }

  .w-app__container {
    margin: 0 auto;
    padding: 2rem;
    max-width: 90%;
    width: 960px;
  }

  .w-app__logo {
    margin-top: 1rem;
    width: 6rem;
  }

  .w-app__actions {
    margin-top: 5rem;
  }

  .w-app__button {
    margin-right: 1rem;
    opacity: 0.7;
  }

  .w-app__button:hover {
    opacity: 1;
  }

  h1 {
    font-size: 2.75rem;
    letter-spacing: 0.015em;
    line-height: 1.2;
    margin-top: 4rem;
  }

  h1 em {
    color: #85a5ad;
    font-style: normal;
    margin-left: 0.5rem;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
</style>

<main class="w-app">
  <Background />

  <div class="w-app__container">
    <div class="w-app__logo">
      <Logo />
    </div>
    <h1>
      I help businesses develop products that people enjoy using.
      <em>I believe in thoughtful and honest design that makes people love
        technology.</em>
    </h1>

    <p>My name is Francesco.</p>
    <p>
      Currently I'm working at
      <a href="https://stampit.co" target="_blank">Stamp</a>.
    </p>

    <div class="w-app__actions">
      <a
        href="https://github.com/frabonomi"
        target="_blank"
        class="w-app__button">
        <box-icon type="logo" name="github" size="lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/fbonomi/"
        target="_blank"
        class="w-app__button">
        <box-icon name="linkedin-square" type="logo" size="lg" />
      </a>
      <a
        href="https://twitter.com/frabonomi"
        target="_blank"
        class="w-app__button">
        <box-icon name="twitter" type="logo" size="lg" />
      </a>
    </div>
  </div>
</main>
