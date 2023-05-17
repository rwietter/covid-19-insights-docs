const path = require('path')

const pathName = path.resolve(__dirname, 'theme.config.tsx')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: pathName,
})

module.exports = withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
