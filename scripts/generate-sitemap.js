const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
    baseUrl:'https://www.restauramente.com.br',
    pagesDirectory:path.resolve(__dirname,'../pages/'),
    targetDirectory: path.resolve(__dirname ,'../public/') ,
    ignoredPaths:[ 
        '_document',
        '_app',
        'email',
        'hello'
    ]
})