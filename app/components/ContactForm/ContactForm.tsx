"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../TextInput/TextInput";
import styles from "./ContactForm.module.css";

export type Inputs = {
  name: string;
  email: string;
  description: string;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset();
    setIsSubmitted(true);
  };

  return (
    <section className={styles.section} id="contact-form">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.description}>
          Have a role, product, or collaboration in mind? Send me a message.
        </p>
      </div>
      <div className={styles.formWrap}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="name"
            label="Your name"
            placeholder="Your name"
            register={register}
            isError={!!errors.name}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            register={register}
            isError={!!errors.email}
          />
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Your message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message"
              className={[
                styles.textarea,
                errors.description ? styles.error : "",
              ]
                .filter(Boolean)
                .join(" ")}
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div>
            <input
              className={styles.submit}
              type="submit"
              value="Send message"
            />
          </div>
        </form>
        {isSubmitted ? (
          <p className={styles.success}>Your message was sent!</p>
        ) : null}
      </div>
    </section>
  );
}
