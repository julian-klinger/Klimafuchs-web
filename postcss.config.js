const tailwind = require('tailwindcss')

module.exports = () => ({
    plugins: [tailwind('./tailwind.js')],
    plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
})