/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
          "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // Add this if using Next.js App Directory
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    "theme": {
          "extend": {
                "colors": {
                      "silver": "#c3c8cf",
                      "background": "#17153b",
                      "mediumblue": "#253bdd",
                      "mediumslateblue": "#2642e0",
                      "mediumseagreen": {
                        "100": "#63bb7e",
                        "200": "#23bd7a"
                        },
                        "firebrick": "#be2f2f",
                        "secondary-colour": "#433d8b",
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