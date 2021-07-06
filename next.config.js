module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    return config
  }
}

const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: 'https://joaocouto.ga/',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});


const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})