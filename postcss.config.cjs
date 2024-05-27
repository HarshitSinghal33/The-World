module.exports = ({ env }) => ({plugins: [
  require('tailwindcss')(),
  require('autoprefixer')()
]})
// export default {
//   plugins: {
//     tailwindcss,
//     autoprefixer,
//   },
// }