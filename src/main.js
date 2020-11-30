import App from './App.svelte'
import 'boxicons'
import mixpanel from 'mixpanel-browser'

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
})

mixpanel.init(
  '164fd793ee0b9db6cb34b905a4b34cce',
  { api_host: 'https://api-eu.mixpanel.com' },
  ''
)

export default app
