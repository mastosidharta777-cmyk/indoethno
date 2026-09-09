'use client';

import { useState, type FormEvent } from 'react';
import './ComingSoonSignup.css';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ComingSoonSignup() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');

  function clearFeedback() {
    if (state === 'success' || state === 'error') {
      setState('idle');
      setMessage('');
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === 'submitting') return;

    setState('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, website }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || 'We could not save your email. Please try again.');
      }

      setEmail('');
      setConsent(false);
      setState('success');
      setMessage("You're on the list. We'll let you know when IndoEthno launches.");
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error ? error.message : 'We could not save your email. Please try again.');
    }
  }

  return (
    <div id="join" className="comingSignupBlock">
      <p>Be the first to know when we launch.</p>
      <form className="comingSignupForm" onSubmit={handleSubmit}>
        <div className="signup comingSignup">
          <input
            aria-label="Email address"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              clearFeedback();
            }}
            maxLength={254}
            required
            disabled={state === 'submitting'}
          />
          <input
            className="comingHoneypot"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
          <button aria-label="Notify me" type="submit" disabled={state === 'submitting'}>
            {state === 'submitting' ? '…' : '→'}
          </button>
        </div>
        <label className="comingConsent">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => {
              setConsent(event.target.checked);
              clearFeedback();
            }}
            required
            disabled={state === 'submitting'}
          />
          <span>I’m interested in travel, culture and music updates from IndoEthno.</span>
        </label>
        <div
          className={`comingSignupStatus ${state === 'error' ? 'isError' : state === 'success' ? 'isSuccess' : ''}`}
          aria-live="polite"
        >
          {message}
        </div>
      </form>
    </div>
  );
}
