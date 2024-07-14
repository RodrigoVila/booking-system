import { ChangeEvent, SyntheticEvent, useState } from "react";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { SectionTitle, SectionWrapper } from "@components/Section";
import { OpacityWrapper } from "@components/OpacityWrapper";
import { FaWhatsapp } from "react-icons/fa";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Contact = () => {
  const [contactForm, setContactForm] = useState(INITIAL_STATE);

  const isContactFormCompleted = Object.values(contactForm).every(
    (value) => value !== "",
  );
  // TODO: WHY LOADING BUTTON KEEPS LOADING FOREVER EVEN AFTER SUCCESS
  // const clearForm = () => setContactForm(INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isContactFormCompleted) {
      // displayInfoMessage(formatMessage({ id: "ALL_INPUTS_REQUIRED" }));
      return;
    }
    // sendContactForm(contactForm);
  };

  // useEffect(() => {
  //   !isContactFormLoading && isContactFormCompleted && clearForm();
  // }, [isContactFormLoading]);

  const inputStyle =
    "mb-2 w-full rounded-md text-sm border-2 border-transparent bg-[rgba(255,255,255,0.2)] py-2 pl-2 placeholder:text-slate-300 placeholder:tracking-wider focus:border-white focus:outline-none";
  return (
    <SectionWrapper
      id="contact"
      className="bg-[url('/hands.jpg')] bg-cover bg-center p-0"
    >
      <OpacityWrapper className="h-screen flex-col gap-8">
        <div className="z-[1] flex h-full w-full max-w-7xl flex-col items-center justify-center gap-3">
          <SectionTitle>Contact</SectionTitle>
          <div className="flex w-1/2 flex-col">
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
              disabled
              // loading={isContactFormLoading}
            >
              Send
            </Button>
          </div>
        </div>
      </OpacityWrapper>
    </SectionWrapper>
  );
};
