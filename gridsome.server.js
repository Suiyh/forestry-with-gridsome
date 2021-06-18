// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })
  api.loadSource(async store => {
    store.addMetadata('site', {
      siteFooter: 'Hail @ 2021',
      darkMode: false,
      siteDescription: '描述我就随便写的',
      heroTitle: '更快、更高、更强',
      heroSubtitle: '没副标题了'
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
