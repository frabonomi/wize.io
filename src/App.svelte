<script>
  import Logo from './Logo.svelte'
  import Background from './Background.svelte'
</script>

<main class="w-app">
  <Background />

  <div class="w-app__container">
    <div class="w-app__logo">
      <Logo />
    </div>
    <h1>
      I help businesses develop products that people enjoy using.
      <em
        >I believe in thoughtful and honest design that makes people love
        technology.</em
      >
    </h1>

    <div class="w-app__paragraphs">
      <p>Hey there, my name is Francesco.</p>
      <p>I'm a software developer and UX/UI designer.</p>
    </div>

    <div class="w-app__actions">
      <a
        href="https://github.com/frabonomi"
        target="_blank"
        class="w-app__button"
      >
        GitHub
      </a>
      •
      <a
        href="https://www.linkedin.com/in/fbonomi/"
        target="_blank"
        class="w-app__button"
      >
        LinkedIn
      </a>
      •
      <a href="https://x.com/frabonomi" target="_blank" class="w-app__button">
        Twitter
      </a>
    </div>
  </div>
</main>

<style lang="postcss">
  :focus {
    outline: 2px solid #2e3038;
    outline-offset: 0.15rem;
  }

  *::selection {
    background-color: #2e3038;
    color: #fff;
  }

  main {
    color: #2e3038;
    font-family: 'Basier Square';
  }

  .w-app {
    min-height: 100vh;
    position: relative;
  }

  .w-app__container {
    margin: 0 auto;
    padding: 2rem;
    max-width: 100%;
    width: 960px;
  }

  .w-app__logo {
    margin-top: 1rem;
    width: 6rem;
  }

  .w-app__paragraphs {
    margin-top: 3rem;
  }

  .w-app__actions {
    align-items: center;
    display: flex;
    gap: 0.25rem;
    margin-top: 3rem;
  }

  .w-app__button {
    border-radius: 0.25rem;
    padding: 0.15rem 0.25rem;

    &:hover,
    &:focus {
      background-color: #2e3038;
      color: #fff;
      text-decoration: none;
    }
  }

  .w-app__button:hover {
    opacity: 1;
  }

  h1 {
    font-size: 2rem;
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

  @media (min-width: 600px) {
    h1 {
      font-size: 2.75rem;
    }
  }
</style>
