/**
 * @file The HTML template for the content-switch web component.
 * @module content-switch.html
 */
// Define the HTML template.
export const htmlTemplate = document.createElement("template")
htmlTemplate.innerHTML = `
<div class="navbar">
  <div class="navbar-left">
    <div class="logo-container">
      <div class="square-icon" id="actionButton">+</div>
    </div>
    <div class="info-container">
      <div class="name">Tiberius Gherac</div>
      <div class="title">Product Developer</div>
    </div>
  </div>
  
  <div class="navbar-center">
    <div class="toggle-container">
      <div class="toggle-button" data-view="info">Info</div>
      <div class="toggle-button" data-view="work">Work</div>
    </div>
  </div>
  
  <div class="navbar-right">
    <a href="https://linkedin.com/in/" class="social-link linkedin-link" target="_blank">LinkedIn ↗</a>
  </div>
</div>

<div class="content-area">
  <div class="content-view info-view">
    <!-- Info content will go here -->
    <slot name="info-content"></slot>
  </div>
  
  <div class="content-view work-view">
    <!-- Work content will go here -->
    <slot name="work-content"></slot>
  </div>
</div>
`
