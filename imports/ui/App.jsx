import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";

//Contact: name, email, imageUrl
export const App = () => (
  <div>
    <h1>Contact from:</h1>
    <ContactForm />
    <ContactList />
  </div>
);
