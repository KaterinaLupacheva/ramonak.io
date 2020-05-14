import React, { useState } from "react";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
  };
  return (
    <div className={styles["container"]}>
      <h1>Get in touch</h1>
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
    </div>
  );
};

export default ContactForm;
