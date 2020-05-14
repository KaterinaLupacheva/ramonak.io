import React, { useState } from "react";

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
  return (
    <div>
      <form>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ContactForm;
