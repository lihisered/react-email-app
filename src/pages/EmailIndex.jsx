import { useEffect, useState } from "react"
import { Outlet } from "react-router"

import { EmailList } from '../cmps/EmailList'
import { SideNav } from '../cmps/SideNav'

import { emailService } from "../services/email.service"

export function EmailIndex() {
  const [emails, setEmails] = useState(null)

  useEffect(() => {
    loadEmails()
  }, [emails])

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
      emailService.remove(emailId)
    } catch (err) {
      console.log('Had issues removing email', err)
    }
  }

  async function onUpdateEmail(emailId, key) {
    try {
      const email = await emailService.getById(emailId)
      email[key] = !email[key]
      emailService.save(email)
    } catch (err) {
      console.log('Had issues updating email', err)
    }
  }

  return (
    emails && (
      <section className="email-index">
        {/* <Outlet /> */}
        <SideNav />
        <EmailList emails={emails} onRemoveEmail={onRemoveEmail} onUpdateEmail={onUpdateEmail}/>
      </section>
    )
  )
}
