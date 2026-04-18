import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <NavBar />
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}
