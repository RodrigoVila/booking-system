import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Resend } from "resend";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { SectionTitle, SectionWrapper } from "@components/Section";
import ContactEmail from "@components/EmailTemplates/ContactEmail";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = () => {
  const [contactForm, setContactForm] = useState(INITIAL_STATE);

  const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

  const { name, email, subject, message } = contactForm;

  const isContactFormCompleted = Object.values(contactForm).every(
    (value) => value !== "",
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!isContactFormCompleted) {
      alert("All inputs required");
      return;
    }

    if (!EMAIL_REGEX.test(contactForm.email)) {
      alert("Please enter valid email");
      return;
    }

    if (contactForm.message.length < 10) {
      alert("Message should be longer than 10 characers");
      return;
    }

    try {
      const response = await resend.emails.send({
        from: email,
        to: import.meta.env.VITE_STUDIO_EMAIL,
        subject: "Nuevo contacto desde la web",
        react: (
          <ContactEmail
            name={name}
            email={email}
            subject={subject}
            message={message}
          />
        ),
      });
      console.log("Mail sent OK", response);
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };

  // useEffect(() => {
  //   !isContactFormLoading && isContactFormCompleted && clearForm();
  // }, [isContactFormLoading]);

  const inputStyle =
    "mb-2 w-full rounded-md text-sm border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 placeholder:tracking-wider focus:border-white focus:outline-none";
  return (
    <SectionWrapper id="contact" className="bg-[url('/hands.jpg')]">
      <SectionTitle>Contact</SectionTitle>
      <div className="mt-8 flex w-full flex-col px-8 md:w-2/3 md:px-0 lg:w-1/2 xl:w-2/5">
        <Input
          name="name"
          placeholder="Name"
          className={inputStyle}
          value={contactForm.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          placeholder="Email"
          className={inputStyle}
          value={contactForm.email}
          onChange={handleChange}
          pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
        />
        <Input
          name="subject"
          placeholder="Subject"
          className={inputStyle}
          value={contactForm.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Write a message"
          rows={5}
          maxLength={250}
          className={`${inputStyle} resize-none xl:text-lg`}
          value={contactForm.message}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          variant="transparent"
          className="mt-4 font-semibold tracking-widest disabled:pointer-events-none disabled:opacity-30"
          disabled={!isContactFormCompleted}
          // loading={isContactFormLoading}
        >
          Send
        </Button>
      </div>
    </SectionWrapper>
  );
};
