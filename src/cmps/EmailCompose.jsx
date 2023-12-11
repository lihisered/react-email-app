import { useNavigate } from 'react-router-dom'

export function EmailCompose() {
    const navigate = useNavigate()

    function onCloseCompose() {
        const url = `/email`
        navigate(url)
    }

    return (
        <section className="email-compose">
            COMPOSE
            <button onClick={onCloseCompose} className="close-btn">x</button>
        </section>
    )
}