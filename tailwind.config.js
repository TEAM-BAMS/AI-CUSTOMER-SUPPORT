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
                        "color": "#433d8b",
                        "white": "#fff",
                        "midnightblue": "#2e236c",
                        "linear": "#ec83bb",
                        "aliceblue": "#e8eff7",
                        "darkgray": "#9d9ea6",
                        "gray-footprint": "#9a9b9f",
                      "text-color": "#fff"

                },
                "spacing": {},
                "fontFamily": {
                      "inter": "Inter",
                      "m3-title-medium": "'Product Sans'",
                      "poppins": "Poppins",
                      "montserrat": "Montserrat"
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