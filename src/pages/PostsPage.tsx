import { allPosts } from '../content'
import { PostCard } from '../components/PostCard'

export function PostsPage() {
  return (
    <div className="page">
      <section className="page-heading">
        <p className="page-heading__eyebrow">All Articles</p>
        <h1>全部文章</h1>
      </section>

      <section className="posts-grid">
        {allPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  )
}
