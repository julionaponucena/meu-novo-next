const withPwa = require('next-pwa')({
  dest:"public",
  register:true,
    sw:'./sw.js'
})

module.exports = withPwa({
  reactStrictMode: true
})
