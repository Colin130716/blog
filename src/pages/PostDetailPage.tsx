import { Link, Navigate, useParams } from 'react-router-dom'
import { getPostBySlug } from '../content'

export function PostDetailPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/posts" replace />
  }

  return (
    <div className="page">
      <article className="article-detail">
        <Link to="/posts" className="text-link">
          ← 返回文章列表
        </Link>
        <header className="article-detail__header">
          <p className="article-detail__time">{post.time}</p>
          <h1>{post.title}</h1>
        </header>
        <div
          className="article-detail__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}
