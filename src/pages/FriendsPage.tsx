const friends = [
  {
    name: "ChakerAt's Cyber Nest",
    desc: "查子的个人主页",
    url: "https://cha-at.github.io/",
  },
  {
    name: "NinJATE's blog",
    desc: "NinJATE的博客",
    url: "https://ninjate11.github.io/",
  },
  {
    name: "Yinzo的小窝",
    desc: "Yinzo的个人博客",
    url: "https://qwq9scan114514.github.io/"
  }
]

export function FriendsPage() {
  return (
    <div className="page">
      <section className="page-heading">
        <p className="page-heading__eyebrow">Friends</p>
        <h1>友链</h1>
      </section>

      <section className="friend-list">
        {friends.map((friend) => (
          <a
            key={friend.name}
            className="friend-card"
            href={friend.url}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{friend.name}</h3>
            <p>{friend.desc}</p>
            <span>访问站点 →</span>
          </a>
        ))}
      </section>
    </div>
  )
}
