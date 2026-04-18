import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { recentPosts } from '../content'
import { PostCard } from '../components/PostCard'

export function HomePage() {
  const [title, setTitle] = useState('Hello, world!')

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await fetch('https://v1.hitokoto.cn/?c=f&encode=text')
        const text = await response.text()
        setTitle(text)
      } catch (error) {
        console.error('Failed to fetch Hitokoto:', error)
      }
    }

    fetchTitle()
  }, [])

  return (
    <div className="page page--home">
      <section className="hero-panel">
        <span className="hero-panel__eyebrow">Colin130716's Blog</span>
        <h1 className="hero-panel__title">{title}</h1>
        <div className="hero-panel__actions">
          <Link to="/posts" className="button button--primary">
            浏览全部文章
          </Link>
          <Link to="/about" className="button button--ghost">
            了解这个站点
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-block__head">
          <div>
            <p className="section-block__eyebrow">Recent Posts</p>
            <h2>最近文章</h2>
          </div>
          <Link to="/posts" className="text-link">
            查看全部
          </Link>
        </div>
        <div className="posts-grid posts-grid--three">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} compact />
          ))}
        </div>
      </section>
    </div>
  )
}
