import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contact from '../../assets/contact_animation/Contact.json';
import {
  RiLinkedinBoxFill,
  RiMailSendFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiGithubFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiSendPlaneFill,
  RiLoader4Line,
} from '@remixicon/react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

/* ── inline toast instead of SweetAlert2 ── */
function Toast({ status, message, onClose }) {
  if (!status) return null;
  const isSuccess = status === 'success';
  return (
    <div className={`contact-toast ${isSuccess ? 'contact-toast--success' : 'contact-toast--error'}`}>
      <div className="toast-icon">
        {isSuccess ? <RiCheckboxCircleFill size={20} /> : <RiErrorWarningFill size={20} />}
      </div>
      <p className="toast-msg">{message}</p>
      <button className="toast-close" onClick={onClose} aria-label="close">×</button>
    </div>
  );
}

/* social links config */
const SOCIAL = [
  {
    key: 'linkedin',
    Icon: RiLinkedinBoxFill,
    label: 'LinkedIn',
    sub: 'hussein-ashraf',
    href: 'https://www.linkedin.com/in/hussein-ashraf-1018a7203/',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    key: 'whatsapp',
    Icon: RiWhatsappFill,
    label: 'WhatsApp',
    sub: '+20 111 126 8591',
    href: `https://wa.me/+201112685912?text=${encodeURIComponent("Hi Hussein, I'm interested in your frontend skills!")}`,
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.25)',
  },
  {
    key: 'email',
    Icon: RiMailSendFill,
    label: 'Email',
    sub: 'husseinashraf7414@gmail.com',
    href: 'mailto:husseinashraf7414@gmail.com',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.25)',
  },
  {
    key: 'phone',
    Icon: RiPhoneFill,
    label: 'Phone',
    sub: '+20 111 126 8591',
    href: 'tel:+201112685912',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.25)',
  },
  {
    key: 'github',
    Icon: RiGithubFill,
    label: 'GitHub',
    sub: 'github.com/HusseinAshraf',
    href: 'https://github.com/HusseinAshraf',
    color: '#94a3b8',
    glow: 'rgba(148,163,184,0.2)',
  },
];

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { status, message }

  const handleSendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setToast(null);

    /* Hardcoded fallback so it works even if .env isn't loaded in dev */
    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_8qk8go4';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9ak1uhu';
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'xYphINXzM8WTLu5VN';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(
        () => {
          setSending(false);
          setToast({ status: 'success', message: t('contact.successText') });
          formRef.current.reset();
        },
        (err) => {
          setSending(false);
          /* err.text (v3) OR err.message (v4) */
          const reason = err?.text || err?.message || 'Unknown error';
          setToast({ status: 'error', message: `${t('contact.sendFailed')}: ${reason}` });
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="contact-heading">
          <span className="section-label">{t('contact.label')}</span>
          <h2 className="section-heading">{t('Contact')}</h2>
          <p className="contact-sub">{t('TextInContact')}</p>
        </div>

        <Toast status={toast?.status} message={toast?.message} onClose={() => setToast(null)} />

        <div className="contact-grid">

          {/* ── Left: social links + lottie ── */}
          <div className="contact-info">
            <p className="contact-info-title">{t('GetInTouch')}</p>

            <div className="contact-social-grid">
              {SOCIAL.map(({ key, Icon, label, sub, href, color, glow }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--card-color': color, '--card-glow': glow }}
                >
                  <div className="social-card-icon">
                    <Icon size={22} />
                  </div>
                  <div className="social-card-text">
                    <span className="social-card-label">{label}</span>
                    <span className="social-card-sub">{sub}</span>
                  </div>
                  <div className="social-card-arrow">→</div>
                </a>
              ))}
            </div>

            <Lottie animationData={contact} className="contact-lottie" />
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-form-wrapper">
            {/* decorative top bar */}
            <div className="form-top-bar" />

            <form ref={formRef} className="contact-form" onSubmit={handleSendEmail} noValidate>
              <div className="form-header">
                <div className="form-header-icon">
                  <RiMailSendFill size={18} />
                </div>
                <h3 className="contact-form-title">{t('Contact')}</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">{t('Name')}</label>
                  <input
                    type="text"
                    id="c-name"
                    name="user_name"
                    placeholder={t('FullName')}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">{t('Email')}</label>
                  <input
                    type="email"
                    id="c-email"
                    name="user_email"
                    placeholder="example@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-message">{t('Message')}</label>
                <textarea
                  id="c-message"
                  name="message"
                  placeholder={t('MessagePlaceholder')}
                  required
                />
              </div>

              <button type="submit" className={`contact-submit-btn ${sending ? 'sending' : ''}`} disabled={sending}>
                {sending ? (
                  <><RiLoader4Line size={18} className="spin-icon" /> Sending…</>
                ) : (
                  <><RiSendPlaneFill size={18} /> {t('SendMessage')}</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
