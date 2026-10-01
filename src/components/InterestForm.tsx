"use client";
import { useState } from 'react';
import { site } from '@/config/site';
export function InterestForm() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const endpoint: string = site.formEndpoint;
  const enabled = /^https?:\/\//.test(endpoint) || (endpoint.startsWith('/') && !endpoint.startsWith('//'));
  return <form className="form" onSubmit={async e => {
    e.preventDefault();
    if (!enabled || busy) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    setBusy(true); setStatus('');
    try {
      const response = await fetch(endpoint, { method: 'POST', body: data });
      if (!response.ok) throw new Error('Request failed');
      setStatus("Thanks. Your request has been submitted."); form.reset();
    } catch { setStatus('Your request could not be sent. Please try again later.'); }
    finally { setBusy(false); }
  }}>
    <input name="firstName" aria-label="First name" required placeholder="First name"/>
    <input name="email" aria-label="Email" required type="email" placeholder="Email"/>
    <input name="phone" aria-label="Phone" type="tel" placeholder="Phone (optional)"/>
    <label><input name="meetupReminders" type="checkbox"/> Meetup reminders</label>
    <label><input name="foundingUpdates" type="checkbox"/> Founding 100 updates</label>
    <label><input name="adult" required type="checkbox"/> I am 18 or older</label>
    <input name="website" aria-label="Leave blank" className="hp" tabIndex={-1} autoComplete="off"/>
    <button className="btn" disabled={!enabled || busy}>{busy ? 'Sending…' : 'Keep me posted'}</button>
    {!enabled && <p role="status">Meetup reminder signup is coming soon. Check this page for updates.</p>}
    {status && <p role="status">{status}</p>}
  </form>;
}
