import React, { useState } from "react";
import styles from "./contact-form.module.scss";
import Spinner from "../Spinner/spinner";
import Flip from "react-reveal/Flip";

const ContactForm = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: ""
  };
  const [state, setState] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsSending(true);
      const resp = await fetch("https://formspree.io/mlepdqpa", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(state)
      });
      const r = await resp.json();
      if (r.ok) {
        setSubmitted(true);
        setState(INITIAL_STATE);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className={styles["container"]} id="contact">
      <h1>Get in touch</h1>
      {!submitted ? (
        !isSending ? (
          <Flip top>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-fields"]}>
                <div className={styles["column"]}>
                  <label htmlFor="name">Your name*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={state.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Your email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={state.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles["column"]}>
                  <label htmlFor="message">Your message*</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={state.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className={styles["submit-button"]}
              />
            </form>
          </Flip>
        ) : (
          <Spinner />
        )
      ) : (
        <h3>
          Thank you for sending the message! I'll reply to you within 24 hours.{" "}
        </h3>
      )}
    </div>
  );
};

export default ContactForm;
