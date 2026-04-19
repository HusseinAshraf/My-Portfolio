import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contact from '../../assets/contact_animation/Contact.json';
import {
  RiLinkedinBoxFill, RiMailSendFill, RiPhoneFill, RiWhatsappFill,
  RiGithubFill, RiCheckboxCircleFill, RiErrorWarningFill,
  RiSendPlaneFill, RiLoader4Line,
} from '@remixicon/react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

function Toast({ status, message, onClose }) {
  if (!status) return null;
  const ok = status === 'success';
  return (
    <div
      className="flex items-center gap-3 rounded-xl mb-6"
      style={{
        padding: '14px 18px',
        background: ok ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
        border: `1px solid ${ok ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
        color: ok ? '#22c55e' : '#ef4444',
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      {ok ? <RiCheckboxCircleFill size={18} /> : <RiErrorWarningFill size={18} />}
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: 'inherit', opacity: 0.7, lineHeight: 1 }}
      >
        ×
      </button>
    </div>
  );
}

const SOCIAL = [
  { key: 'linkedin',  Icon: RiLinkedinBoxFill, label: 'LinkedIn',  sub: 'hussein-ashraf', href: 'https://www.linkedin.com/in/hussein-ashraf-1018a7203/', color: '#6d6aff', bg: 'rgba(109,106,255,0.12)' },
  { key: 'whatsapp', Icon: RiWhatsappFill,     label: 'WhatsApp', sub: '+20 111 126 8591',  href: 'https://wa.me/+201112685912?text=Hi%20Hussein%2C%20I\'m%20interested%20in%20your%20frontend%20skills!', color: '#22c55e', bg: 'rgba(34,197,94,0.12)' },
  { key: 'email',    Icon: RiMailSendFill,     label: 'Email',    sub: 'husseinashraf7414@gmail.com', href: 'mailto:husseinashraf7414@gmail.com', color: '#f472b6', bg: 'rgba(244,114,182,0.12)' },
  { key: 'phone',    Icon: RiPhoneFill,        label: 'Phone',    sub: '+20 111 126 8591',  href: 'tel:+201112685912',  color: '#4ecdc4', bg: 'rgba(78,205,196,0.12)' },
  { key: 'github',   Icon: RiGithubFill,       label: 'GitHub',   sub: 'github.com/HusseinAshraf', href: 'https://github.com/HusseinAshraf', color: 'var(--text-secondary)', bg: 'var(--bg-elevated)' },
];

function FormInput({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'all 0.2s ease',
  resize: 'vertical',
};

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setToast(null);
    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_8qk8go4';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9ak1uhu';
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'xYphINXzM8WTLu5VN';
    emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(() => {
        setSending(false);
        setToast({ status: 'success', message: t('contact.successText') });
        formRef.current.reset();
      })
      .catch(err => {
        setSending(false);
        setToast({ status: 'error', message: `${t('contact.sendFailed')}: ${err?.text || err?.message || 'Unknown error'}` });
      });
  };

  const focusInput = e => {
    e.target.style.borderColor = 'var(--accent)';
    e.target.style.background = 'var(--bg-card)';
    e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)';
  };
  const blurInput = e => {
    e.target.style.borderColor = 'var(--border)';
    e.target.style.background = 'var(--bg-elevated)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" style={{ padding: '96px 0', position: 'relative' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>

        {/* Heading */}
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full mb-3"
            style={{ padding: '5px 14px', background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            {t('contact.label')}
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 8 }}>
            {t('Contact')}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480 }}>
            {t('TextInContact')}
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Left: social links */}
          <div
            className="md:col-span-2 rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                {t('GetInTouch')}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Available for new projects and collaborations. Let's build something great.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {SOCIAL.map(({ key, Icon, label, sub, href, color, bg }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl no-underline transition-all duration-200"
                  style={{ padding: '12px 14px', background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}
                >
                  <div
                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ width: 36, height: 36, background: bg, color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</div>
                    <div className="truncate" style={{ fontSize: 11, color: 'var(--text-muted)' }}>{sub}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: 14, color: 'var(--text-muted)' }}>→</span>
                </a>
              ))}
            </div>

            <Lottie animationData={contact} style={{ width: '100%', maxHeight: 120, opacity: 0.85 }} />
          </div>

          {/* Right: Form */}
          <div
            className="md:col-span-3 rounded-2xl overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 0.12s, transform 0.6s ease 0.12s',
              position: 'relative',
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)' }} />

            <div style={{ padding: '28px 32px' }}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{ width: 36, height: 36, background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', color: 'var(--accent)' }}
                >
                  <RiMailSendFill size={17} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' }}>
                  {t('Contact')}
                </h3>
              </div>

              <Toast status={toast?.status} message={toast?.message} onClose={() => setToast(null)} />

              <form ref={formRef} onSubmit={handleSendEmail} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <FormInput label={t('Name')}>
                    <input
                      type="text"
                      name="user_name"
                      placeholder={t('FullName')}
                      required
                      autoComplete="name"
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </FormInput>
                  <FormInput label={t('Email')}>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="example@email.com"
                      required
                      autoComplete="email"
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </FormInput>
                </div>

                <div className="mb-6">
                  <FormInput label={t('Message')}>
                    <textarea
                      name="message"
                      placeholder={t('MessagePlaceholder')}
                      required
                      rows={5}
                      style={{ ...inputStyle, minHeight: 120 }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </FormInput>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200"
                  style={{
                    padding: '13px 24px',
                    background: sending ? 'var(--text-muted)' : 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    fontSize: 14,
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px var(--accent-glow-strong)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  {sending
                    ? <><RiLoader4Line size={17} className="spin-icon" /> Sending…</>
                    : <><RiSendPlaneFill size={17} /> {t('SendMessage')}</>
                  }
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
