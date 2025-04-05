/**
 * @file App window custom element implementation.
 * @module content-table.js
 * @author Tiberius Gherac <tiberius.gherac@gmail.com>
 * @description 
 */

import { cssTemplate } from './content-table.css'
import { htmlTemplate } from './content-table.html'

/**
 * 
 */
customElements.define('content-table',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
   
    /**
     * Controller for managing event listeners
     *
     * @private
     * @type {AbortController}
     */
    #abortController

    /**
     * Creates an instance of the window element.
     * Initializes the shadow DOM, sets up component references, and brings window to front.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))

      this.#abortController = new AbortController()
    }

    /**
     * Specifies which attributes should be observed for changes.
     *
     * @returns {string[]} Array containing '' attribute
     * @static
     */
    static get observedAttributes () {
      return ['']
    }

    /**
     * Handles changes to observed attributes.
     * Updates window title when title attribute changes.
     *
     * @param {string} name - Name of the changed attribute
     * @param {string} oldValue - Previous value of the attribute
     * @param {string} newValue - New value of the attribute
     */
    attributeChangedCallback (name, oldValue, newValue) {
      
    }

    /**
     * Called when the element is connected to the DOM.
     * Sets up window dragging functionality and control button handlers.
     */
    connectedCallback () {
    }

    /**
     * Called when the element is disconnected from the DOM.
     * Cleans up by aborting any active event listeners.
     */
    disconnectedCallback () {
      this.#abortController.abort()

    }
  })
