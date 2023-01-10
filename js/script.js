const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})



// # Tailwind Manage Landing Page

// ![Alt text](/img/screen.png?raw=true)

// # Usage

// Install dependencies (Tailwind)

// ```
// npm install
// ```

// Run the Tailwind CLI to compile the **input.css** during development. The output file is **css/main.css**

// ```
// npm run watch
// ```

// To build once run...

// ```
// npm run build
// ```

// You can edit the scripts in package.json and the tailwind.config.js file to change input/output locations
