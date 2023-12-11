import { Link, NavLink, useNavigate } from "react-router-dom"

export function AppHeader() {
  const navigate = useNavigate()

  return (
    <header className="app-header">
      <section className="info">
        <img onClick={() => navigate('/')} src={'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'} alt="" />
        <input className="search" type="text" placeholder="Search in mail" />
      </section>
    </header>
  )
}
