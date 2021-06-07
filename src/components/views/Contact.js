import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("mknkrdor");
  if (state.succeeded) {
    return <p>The form has been successfully sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2
        className="heading"
        style={{
          marginBottom: "50px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Contact Me
      </h2>
      <fieldset id="fs-frm-inputs">
        <input
          className="form-control"
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last name"
          required=""
        />
        <input
          className="form-control"
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="Email"
          required=""
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          className="form-control"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required=""
        />
        <textarea
          className="form-control"
          rows="5"
          name="message"
          id="message"
          placeholder="Message"
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
}

export default Contact;
