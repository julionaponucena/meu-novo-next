const withPwa = require('next-pwa')

module.exports = withPwa({
  reactStrictMode: true,
  pwa:{
    dest:"public",
    register:true,
    sw:'./sw.js'
  }
})
