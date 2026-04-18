import { Link } from 'react-router-dom'
import type { BlogPost } from '../content'

type PostCardProps = {
  post: BlogPost
  compact?: boolean
}

export function PostCard({ post, compact = false }: PostCardProps) {
  return (
    <article className={`post-card${compact ? ' post-card--compact' : ''}`}>
      <div className="post-card__meta">{post.time}</div>
      <h3 className="post-card__title">{post.title}</h3>
      <p className="post-card__preview">{post.preview}...</p>
      <Link to={`/posts/${post.slug}`} className="post-card__link">
        阅读全文
      </Link>
    </article>
  )
}
