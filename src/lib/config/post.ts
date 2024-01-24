import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    comment: {
        use: ['Giscus'],
        style: 'boxed', // comment system bar styles: none / bordered / lifted / boxed
        giscus: {
          repo: 'areenkun/blog',
          repoID: 'R_kgDOLI0H3w',
          category: 'Comments',
          categoryID: 'DIC_kwDOIyERSs4CTt5a',
          reactionsEnabled: true, // reactions: true / false
          inputPosition: 'top', // position of comment box: top / bottom
          lang: 'en', // language
          theme: 'preferred_color_scheme', // theme
          loading: 'lazy',
        }
      }    
}
