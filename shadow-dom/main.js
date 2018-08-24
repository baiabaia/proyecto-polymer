/* global HTMLElement,HTMLButtonElement, window */
class PokeLabel extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = '<span>Pokelabel in the shadows</span>'
  }

  get name () {
    return this.getAttribute('name')
  }
  set name (newName) {
    this.setAttribute('name', newName)
  }
}

window.customElements.define('poke-label', PokeLabel)
window.customElements.whenDefined('poke-label')
  .then(() => console.log('poke-label defined'))

class PokeButton extends HTMLButtonElement {
  constructor () {
    super()
    this.textContent = 'I am a PokeButton'
  }

  get name () {
    return this.getAttribute('name')
  }
  set name (newName) {
    this.setAttribute('name', newName)
  }
}

window.customElements.define('poke-button', PokeButton, {extends: 'button'})
window.customElements.whenDefined('poke-button')
  .then(() => console.log('poke-button defined'))

class PokeCard extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <button is="poke-button" name=""></button>
      <poke-label name=""></poke-label>
    `
  }
}

window.customElements.define('poke-card', PokeCard)
