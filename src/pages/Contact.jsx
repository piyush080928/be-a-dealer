import React from "react";
import ContactForm from "../Contact/ContactForm";
import Faq from "../Contact/Faq";
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* CONTACT FORM */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <ContactForm />
      </div>

      {/* FAQ */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <Faq />
      </div>

      {/* FOOTER */}
      <div className="w-full mt-auto">
        <Footer />
      </div>

    </div>
  );
}

export default Contact;
