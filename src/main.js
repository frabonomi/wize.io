import App from './App.svelte'
import 'boxicons'

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
})

export default app
