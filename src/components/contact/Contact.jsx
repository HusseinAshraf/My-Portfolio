import { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import SectionHeading from '../ui/SectionHeading';
import contact from '../../assets/contact_animation/Contact.json';
import { RiLinkedinBoxFill, RiMailSendFill, RiPhoneFill, RiWhatsappFill } from '@remixicon/react';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const phoneNumber = '+201112685912';
  const message =
    "Hi, I'm interested in your frontend skills. Can you tell me more about your self?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleSendEmail = (e) => {
    e.preventDefault();

    // Log form values
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Message:", messageRef.current.value);

    // Validate if all fields are filled
    if (!nameRef.current.value || !emailRef.current.value || !messageRef.current.value) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all fields before sending the message.',
        icon: 'error',
      });
      return;
    }

    // Send the email
    emailjs
      .sendForm('service_8qk8go4', 'template_9ak1uhu', formRef.current, {
        publicKey: 'XTyipkAa6MqkpnVAe',
        user_email: 'husseinashraf7414@gmail.com',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully',
            icon: 'success',
          });
          nameRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: `Message failed to send: ${error.text}`,
            icon: 'error',
          });
        }
      );
  };

  return (
    <section className="contact-section relative px-16 pb-3 pt-9  z-20 mt-5 w-full overflow-hidden bg-stone-950/30  backdrop-blur-lg" id="contact">
      <SectionHeading>{t('Contact')}</SectionHeading>

      <div className="mx-auto mb-16 max-w-7xl ">
        <div className="flex flex-col  items-center justify-between md:flex-row">
          {/* Contact Info Section */}
          <div className="mb-8 ml-1 text-center md:mb-0 md:w-1/2 md:text-start">
            <h2 className="mb-3 text-3xl font-bold text-purple-500">{t('GetInTouch')}</h2>
            <p className="mb-4">
              {t('TextInContact')}
            </p>
            <div
              className={`flex items-center ${i18n.language === 'ar' ? 'justify-start space-x-reverse' : 'justify-end'
                } space-x-4 md:justify-start`}
            >
              <a href="https://www.linkedin.com/in/hussein-ashraf-1018a7203/" className="text-[#0a66c2]" target="_blank">
                <RiLinkedinBoxFill aria-label="LinkedIn" />
              </a>
              <a href={whatsappUrl} className="text-[#25d366]" target="_blank" rel="noopener noreferrer">
                <RiWhatsappFill aria-label="WhatsApp" />
              </a>
              <a href="tel:+201112685912" className="text-[#06f55e]">
                <RiPhoneFill aria-label="Phone" />
              </a>
            </div>

            <Lottie
              animationData={contact}
              className="mx-auto w-[300px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px]"
            />
          </div>

          {/* Form Section */}
          <form
            ref={formRef}
            className="w-full rounded-lg border border-purple-500 p-6 shadow-sm shadow-purple-500 md:w-1/2"
            onSubmit={handleSendEmail}
          >
            <h1 className="text-center md:text-start mb-7 text-4xl font-bold">{t("Contact")}</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">{t("Name")}</label>
              <input
                type="text"
                id="name"
                name="user_name"
                ref={nameRef}
                placeholder={t("FullName")}
                required
                className="mx-auto mt-2 block w-full rounded-md border-purple-500 p-2 text-stone-800 shadow-sm outline-none focus:border-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">{t("Email")}</label>
              <input
                type="email"
                id="email"
                name="user_email"
                ref={emailRef}
                placeholder={t("Email")}
                required
                className="mx-auto mt-2 block w-full rounded-md border-purple-500 p-2 text-stone-800 shadow-sm outline-none focus:border-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">{t("Message")}</label>
              <textarea
                id="message"
                name="message"
                ref={messageRef}
                placeholder={t("MessagePlaceholder")}
                required
                className="focus:ring-opacity- mx-auto mt-2 block h-32 w-full resize-none rounded-md border-purple-500 p-2 text-stone-800 shadow-sm outline-none focus:border-purple-600 focus:ring focus:ring-purple-500"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <Button btnAnimated="primary">
                {t("SendMessage")} <RiMailSendFill className="ml-3" size={20} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
