export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6187d00c8b75c11c215ed0be',
                  title: 'Sanity Studio',
                  name: 'fff-sanity-blog-studio',
                  apiId: '39cf2683-a246-4ab2-9999-c58f9edb5854'
                },
                {
                  buildHookId: '6187d00cab3b81e915fd9b96',
                  title: 'Blog Website',
                  name: 'fff-sanity-blog',
                  apiId: 'b79f2d6c-aa84-46e5-b2d1-32b4fc8f518d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aboeddeker10/fff-sanity-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fff-sanity-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
