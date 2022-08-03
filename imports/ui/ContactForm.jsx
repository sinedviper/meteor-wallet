import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { Meteor } from "meteor/meteor";
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const saveContact = () => {
    Meteor.call("contacts.insert", { name, email, image }, (error) => {
      if (error) {
        setError(error.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        setName("");
        setEmail("");
        setImage("");
        setSuccess("Contact saved.");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    });
  };

  return (
    <form className="mt-6">
      {error && <ErrorAlert message={error} />}
      {success && <SuccessAlert message={success} />}
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="pb-5">
          <button
            type="button"
            onClick={saveContact}
            className="block w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Contact
          </button>
        </div>
      </div>
    </form>
  );
};
