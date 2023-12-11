import { useEffect, useState } from "react"
import { Outlet, useSearchParams, useParams } from 'react-router-dom'


import { EmailList } from '../cmps/EmailList'
import { EmailSidebar } from '../cmps/EmailSidebar'
import { EmailCompose } from '../cmps/EmailCompose'

import { emailService } from "../services/email.service"

export function EmailIndex() {
  const [emails, setEmails] = useState(null)
	const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    loadEmails()
  }, [])

  async function loadEmails() {
    try {
      const emails = await emailService.query()
      setEmails(emails)
    } catch (err) {
      console.log("Had issues loading emails", err)
    }
  }

  async function onRemoveEmail(emailId) {
    try {
      await emailService.remove(emailId)
			setEmails(prevEmails => prevEmails.filter(email => email.id !== emailId))
    } catch (err) {
      console.log('Had issues removing email', err)
    }
  }

  async function onUpdateEmail(emailId, key) {
    try {
      const email = await emailService.getById(emailId)
      email[key] = !email[key]
      const updatedEmail = emailService.save(email)
      setEmails(prevEmails => prevEmails.map(email => email.id === updatedEmail.id ? updatedEmail : email))
    } catch (err) {
      console.log('Had issues updating email', err)
    }
  }

	const isComposeOpen = !!searchParams.get('compose')

  return (
    <section className="email-index">
      {emails && 
        <>
          <EmailSidebar />
          <EmailList emails={emails} onRemoveEmail={onRemoveEmail} onUpdateEmail={onUpdateEmail}/>
        </>
      }
      {isComposeOpen && (<EmailCompose />)}
    </section>
  )
}
