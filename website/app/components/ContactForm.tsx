'use client'

import emailjs from '@emailjs/browser'
import { FormEvent, useState } from 'react'

const field =
  'contact-field mt-2 w-full rounded-xl border border-white/15 bg-[#0a0a0a] px-5 py-4 text-base text-white outline-none transition-[border-color,box-shadow] placeholder:text-white/35 focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/30'

function errorMessage(err: unknown) {
  if (err && typeof err === 'object') {
    const text = 'text' in err ? String((err as { text?: string }).text ?? '') : ''
    const status = 'status' in err ? Number((err as { status?: number }).status) : 0
    if (status === 429 || /rate|limit|too many/i.test(text)) {
      return 'Too many messages — please wait a minute and try again.'
    }
    if (/public key|invalid/i.test(text) || status === 400) {
      return 'Contact form is misconfigured. Please email me directly.'
    }
    if (/non-browser|disabled|origin|unauthorized|403/i.test(text) || status === 403) {
      return 'Email service blocked this request. Check EmailJS domain allowlist / security settings.'
    }
    if (text) return `Send failed (${status || 'error'}): ${text}`
  }
  if (err instanceof Error && err.message) {
    return `Send failed: ${err.message}`
  }
  return 'Something went wrong. Please try again or email me directly.'
}

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMsg('')
    setOk(false)

    // Capture before any await — React nulls currentTarget after the event yields
    const form = e.currentTarget

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      setMsg('Contact form is not configured yet. Please email me directly.')
      return
    }

    const data = new FormData(form)
    const fromName = String(data.get('name') ?? '').trim()
    const fromEmail = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (!fromName || !fromEmail || !message) {
      setMsg('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: fromName,
          name: fromName,
          from_email: fromEmail,
          email: fromEmail,
          reply_to: fromEmail,
          // Included in {{message}} so the address shows even if the template omits {{from_email}}.
          message: `From: ${fromName} <${fromEmail}>\n\n${message}`,
        },
        { publicKey }
      )
      form.reset()
      setOk(true)
      setMsg("Thanks! I'll get back to you as soon as possible.")
    } catch (err) {
      console.error('[ContactForm] EmailJS error:', err)
      setOk(false)
      setMsg(errorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="mt-10 flex max-w-3xl flex-col gap-6 rounded-3xl border border-white/10 bg-black/50 p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)] backdrop-blur-md sm:p-10 md:p-12"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-base font-medium text-white/80">
          Your name
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className="block text-base font-medium text-white/80">
          Your email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-base font-medium text-white/80">
        Your message
        <textarea name="message" required rows={8} className={`${field} min-h-[12rem] resize-y`} />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center rounded-2xl bg-white px-10 text-base font-semibold text-black transition-colors duration-200 hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
      >
        {loading ? 'Sending...' : 'Send message'}
      </button>
      {msg ? (
        <p
          className={`text-base ${ok ? 'text-orbit' : 'text-white/70'}`}
          role={ok ? 'status' : 'alert'}
        >
          {msg}
        </p>
      ) : null}
    </form>
  )
}
