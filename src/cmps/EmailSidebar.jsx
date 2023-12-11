import { useNavigate } from 'react-router-dom'

export function EmailSidebar() {
    const navigate = useNavigate()

    function onOpenCompose() {
        const url = `/email?compose=new`
        navigate(url)
    }

    return (
       <section className="sidebar">
        <button onClick={onOpenCompose} className="compose-btn">Compose</button>
        <nav className="actions">
          <a className="selected">Inbox</a>
          <a>Starred</a>
          <a>Sent</a>
          <a>Draft</a>
          <a>Trash</a>
        </nav>
       </section>
    )
}