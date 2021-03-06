import skulletor, { applyFadeOut } from '../src/adapter/vanilla'
import { applyBaseCSS, applyAnimation } from '../src/middlewares'

import { announceBlock, announceLine } from './shapes'

document.getElementsByTagName('h1')[0].innerText = 'Skulletor.js Vanilla Sandbox'

const dom = document.getElementById('root')

const skel1 = skulletor(
  {
    'max-width: 639px': [announceBlock(), announceBlock()],
    'min-width: 640px': [announceLine(), announceLine()],
  },
  [applyBaseCSS, applyAnimation, applyFadeOut],
)

dom.appendChild(skel1.Skulletor)

const dom2 = document.getElementById('root2')

const skel2 = skulletor(
  {
    'max-width: 639px': [announceBlock(), announceBlock()],
    'min-width: 640px': [announceLine(), announceLine()],
  },
  [applyBaseCSS, applyAnimation, applyFadeOut],
)

setTimeout(() => {
  dom2.appendChild(skel2.Skulletor)
}, 1500)

const fakePromise = new Promise((resolve) => {
  setTimeout(() => resolve('Loading finished'), 3000)
})

fakePromise.then((message) => {
  skel1.end().then(() => (dom.innerHTML = message))
  skel2.end().then(() => (dom2.innerHTML = message))
})
