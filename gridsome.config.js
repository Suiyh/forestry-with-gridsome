// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'HailSite',
  siteUrl: `https://www.itsnwa.com`,
  plugins: [{
    use: '@gridsome/source-strapi',
    options: {
      // apiURL: 'http://localhost:1337',
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['post', 'journals'],
      // singleTypes: ['impressum'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      // loginData: {
      //   identifier: '',
      //   password: ''
      // }
    }
  }],
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournals: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
