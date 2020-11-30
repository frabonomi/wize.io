<script>
  import { onMount } from 'svelte'
  import Parallax from 'parallax-js'

  onMount(() => {
    const scene = document.getElementById('background')
    new Parallax(scene)

    const circle = document.getElementById('circle-inner')
    new Parallax(circle)
  })
</script>

<style lang="postcss">
  :root {
    --circle-size: 130vw;
  }

  #background {
    left: 0;
    position: absolute;
    height: 100%;
    overflow: hidden;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  #circle {
    background-color: #e4eef1;
    border-radius: 50%;
    height: var(--circle-size);
    left: 14vw !important;
    position: absolute;
    top: -90vw !important;
    width: 200vw;
  }

  #picture {
    display: none;
    left: 25% !important;
    opacity: 0.4;
    position: absolute;
    top: 82% !important;
    width: 50vw;
  }

  #circle-inner {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media (min-width: 600px) {
    #picture {
      display: block;
      width: 450px;
    }

    #circle {
      width: var(--circle-size);
    }
  }
</style>

<div id="background">
  <div data-depth="0.1" id="circle">
    <div id="circle-inner">
      <img
        data-depth="0.1"
        id="picture"
        src="images/portrait.jpg"
        alt="Portrait of Francesco" />
    </div>
  </div>
</div>
