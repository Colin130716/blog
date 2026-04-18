import { marked } from 'marked'

// 配置 marked 选项
marked.setOptions({
  breaks: true,
  gfm: true,
})

const blogModules = import.meta.glob('../blogs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export type BlogPost = {
  slug: string
  title: string
  time: string
  preview: string
  content: string
  html: string
}

type FrontmatterData = {
  title: string
  time: string
}

function parseFrontmatter(raw: string): { data: FrontmatterData; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)

  if (!match) {
    return {
      data: { title: '', time: '' },
      content: raw,
    }
  }

  const [, frontmatter, content] = match
  const data = frontmatter.split('\n').reduce<FrontmatterData>(
    (acc, line) => {
      const separatorIndex = line.indexOf(':')

      if (separatorIndex === -1) {
        return acc
      }

      const key = line.slice(0, separatorIndex).trim()
      const value = line.slice(separatorIndex + 1).trim()

      if (key === 'title') {
        acc.title = value
      }

      if (key === 'time') {
        acc.time = value
      }

      return acc
    },
    { title: '', time: '' },
  )

  return { data, content }
}

function extractPreview(markdown: string) {
  return markdown
    .replace(/[#>*`\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120)
}

export const allPosts: BlogPost[] = Object.entries(blogModules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? ''

    return {
      slug,
      title: typeof data.title === 'string' ? data.title : slug,
      time: typeof data.time === 'string' ? data.time : '',
      preview: extractPreview(content),
      content,
      html: marked.parse(content) as string,
    }
  })
  .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())

export const recentPosts = allPosts.slice(0, 3)

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}
