/**
 * @file A CSS template string for the content-switch web component.
 * @module content-switch.css
 */
// Define the CSS template.
export const cssTemplate = document.createElement("template")
cssTemplate.innerHTML = `
<style>
:host {
  display: block;
  width: 100%;
}

/* Navigation Bar Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.navbar-right {
  margin-left: 20px;
}

/* Logo and Info Styles */
.logo-container {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.square-icon {
  width: 34px;
  height: 30px;
  border: 2px solid #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ffffff;
  line-height: 1;
  padding-bottom: 4px;
}

.info-container {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}

.title {
  font-size: 14px;
  color: #9e9e9e;
}

/* Toggle Container Styles */
.toggle-container {
  display: flex;
  background-color: rgba(30, 30, 30, 0.8);
  border-radius: 25px;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(70, 70, 70, 0.5);
  overflow: hidden;
  width: fit-content;
}

.toggle-button {
  padding: 8px 20px;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: medium;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 2px;
  user-select: none;
}

.toggle-button.selected {
  background-color: rgba(60, 60, 60, 0.8);
  color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.toggle-button:not(.selected):hover {
  background-color: rgba(45, 45, 45, 0.3);
}

/* LinkedIn Link Style */
.social-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 20px;
  transition: all 0.2s ease;
}

/* .linkedin-link {
  background-color: #0077b5;
}

.linkedin-link:hover {
  background-color: #0066a1;
} */

/* Content Area Styles */
.content-area {
  margin-top: 80px; /* Add space for fixed navbar */
  padding: 20px;
  position: relative;
}

.content-view {
  transition: opacity 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  padding: 20px;
}

.content-view.active {
  opacity: 1;
  visibility: visible;
  position: relative;
}
</style>
`
