const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
    baseUrl:'https://www.restauramente.com.br',
    pagesDirectory:path.resolve(__dirname,'../app/'),
    targetDirectory: path.resolve(__dirname ,'../../public/') ,
    ignoredPaths:[
        '_document',
        '_app',
        'api',
        'email',
        'hello'
    ]
})
