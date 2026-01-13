import React from 'react';
import Layout from '../components/layout';

import Seo from '../components/Seo';

import '../styles/contact.scss';

const Contact: React.FC = () => (
  <Layout>
    <Seo
      title="Contact Aaron Lau"
      description="aaron-lau@aaron-lau.com"
    />

    <main className="contact">
      <h1>Hello, it's nice to meet you.</h1>
      <p>
        Whether you'd like to work together, or just want to say hi, I'd love to hear from you
      </p>

      <ContactForm />
    </main>
  </Layout>
);

function ContactForm() {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
    >
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <label>
        <span className="contact-form__label">Full Name</span>
        <input type="text" name="name" required />
      </label>

      <label>
        <span className="contact-form__label">Email Address</span>
        <input type="email" name="email" required />
      </label>

      <label>
        <span className="contact-form__label">Company / Organization</span>
        <input type="text" name="company_name" />
      </label>

      <label>
        <span className="contact-form__label">Message</span>
        <textarea rows={20} cols={50} placeholder="Your message" name="message" required />
      </label>

      <button className="btn btn--hover">SUBMIT</button>
    </form>
  );
}

export default Contact;
