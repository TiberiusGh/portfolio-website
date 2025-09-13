import { htmlTemplate } from "./custom-nav.html"
import { cssTemplate } from "./custom-nav.css"

customElements.define(
  "custom-nav",
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    #currentView = "info"
    #toggleButtons = null
    #contentViews = null
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor() {
      super()
      this.attachShadow({ mode: "open" })
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
    }

    /**
     * Returns an array of attributes to be observed for changes.
     *
     * @returns {string[]} The list of attributes to be observed.
     */
    static get observedAttributes() {
      return ["active-view"]
    }

    /**
     * Called when one of the observed attributes changes.
     *
     * @param {string} name The name of the attribute that changed.
     * @param {string} oldValue The old value of the attribute.
     * @param {string} newValue The new value of the attribute.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "active-view" && newValue !== oldValue) {
        if (newValue === "info" || newValue === "work") {
          this.#currentView = newValue
          if (this.#toggleButtons && this.#contentViews) {
            this.#updateView()
          }
        }
      }
    }

    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback() {
      this.#toggleButtons = this.shadowRoot.querySelectorAll(".toggle-button")
      this.#contentViews = this.shadowRoot.querySelectorAll(".content-view")

      // Set initial view based on attribute or default to 'info'
      if (this.hasAttribute("active-view")) {
        const initialView = this.getAttribute("active-view")
        if (initialView === "info" || initialView === "work") {
          this.#currentView = initialView
        }
      }

      this.#toggleButtons.forEach((button) => {
        button.addEventListener("click", this.#handleToggleClick)
      })

      // Initialize the view
      this.#updateView()
    }

    /**
     * Updates the UI to reflect the current view selection.
     */
    #updateView = () => {
      // Update toggle buttons
      this.#toggleButtons.forEach((button) => {
        if (button.getAttribute("data-view") === this.#currentView) {
          button.classList.add("selected")
        } else {
          button.classList.remove("selected")
        }
      })

      // Update content views
      this.#contentViews.forEach((view) => {
        if (view.classList.contains(`${this.#currentView}-view`)) {
          view.classList.add("active")
        } else {
          view.classList.remove("active")
        }
      })

      // Dispatch custom event about view change
      this.dispatchEvent(
        new CustomEvent("view-changed", {
          detail: { view: this.#currentView },
        })
      )
    }

    /**
     * Handles clicks on the toggle buttons.
     * @param {Event} event The click event.
     */
    #handleToggleClick = (event) => {
      const clickedView = event.target.getAttribute("data-view")
      if (clickedView) {
        // Get the button's position information
        const buttonRect = event.target.getBoundingClientRect()
        const buttonPosition = {
          x: buttonRect.x,
          y: buttonRect.y,
          width: buttonRect.width,
          height: buttonRect.height,
          center: {
            x: buttonRect.x + buttonRect.width / 2,
            y: buttonRect.y + buttonRect.height / 2,
          },
        }

        // Update the current view if changed
        const viewChanged = clickedView !== this.#currentView
        if (viewChanged) {
          this.#currentView = clickedView
          this.setAttribute("active-view", clickedView)
          this.#updateView()
        }

        // Dispatch the toggle-clicked custom event with position information
        // This happens regardless of whether the view actually changed
        this.dispatchEvent(
          new CustomEvent("toggle-clicked", {
            detail: {
              view: clickedView,
              position: buttonPosition,
              viewChanged: viewChanged,
            },
          })
        )
      }
    }

    /**
     * Sets the active view.
     * @param {string} value The view to activate ('info' or 'work').
     */
    set activeView(value) {
      if (value === "info" || value === "work") {
        this.#currentView = value
        this.setAttribute("active-view", value)
        if (this.#toggleButtons && this.#contentViews) {
          this.#updateView()
        }
      }
    }

    /**
     * Gets the currently active view.
     * @returns {string} The active view ('info' or 'work').
     */
    get activeView() {
      return this.#currentView
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
      // Clean up event listeners
      if (this.#toggleButtons) {
        this.#toggleButtons.forEach((button) => {
          button.removeEventListener("click", this.#handleToggleClick)
        })
      }

      // Clear references
      this.#toggleButtons = null
      this.#contentViews = null
    }
  }
)
