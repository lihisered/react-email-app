import { utilService } from "../services/util.service"

export function EmailPreview({ email, onRemoveEmail, onUpdateEmail }) {
  return (
      // <div className="email-preview">
      <div className={`email-preview ${email.isRead ? 'read' : ''}`}>
        {/* <span onClick={() => onUpdateEmail(email.id, 'isStarred')}>⭐</span> */}
        <p className="sender">{email.from}</p>
        <p className="subject">{email.subject}</p>
        <span className="dash"> - </span>
        <p className="body">{email.body}</p>
        {/* <p className="date">{utilService.formatDate(email.sentAt)}</p> */}
        {/* <span onClick={() => onRemoveEmail(email.id)}>✖</span> */}
        {/* <span onClick={() => onUpdateEmail(email.id, 'isRead')}>📩</span> */}
        {/* <span>📲</span> */}
      </div>
  )
}
