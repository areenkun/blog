import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.areen.is-a.dev',
  title: 'areen-c',
  subtitle: 'Codeforces is love, codeforces is life (•̀ᴗ•́ )و',
  lang: 'en-US',
  description: 'Passionate lifelong learner always looking to build new projects and expand my skills and a follower of current events who stays up to date on tech.',
  author: {
    avatar: '/assets/avatar.webp',
    name: 'Areen el-Haq',
    status: '🦍',
    bio: 'Arch geek and ex-fansubber<br> with a passion for Linux, logic, languages, and shell scripting (•̀ᴗ•́ )و'
  },
  themeColor: '#3D4451'
}
