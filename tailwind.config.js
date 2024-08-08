/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}"
    ],
    "theme": {
          "extend": {
                "colors": {
                      "silver": "#c3c8cf",
                      "background": "#17153b",
                      "text-color": "#fff"
                },
                "spacing": {},
                "fontFamily": {
                      "inter": "Inter"
                }
          },
          "fontSize": {
                "mini": "15px",
                "inherit": "inherit"
          }
    },
    "corePlugins": {
          "preflight": false
    }
}