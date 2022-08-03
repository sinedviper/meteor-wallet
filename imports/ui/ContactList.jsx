import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  });

  const removeContact = (e, _id) => {
    e.preventDefault();
    Meteor.call("contacts.remove", { contactId: _id });
  };

  return (
    <>
      <div>
        <div className="mt-10">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Contact List
          </h3>
          <ul
            className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            role="list"
          >
            {contacts.map((contact) => (
              <li
                key={contact._id}
                className="py-4 flex items-center justify-between space-x-3"
              >
                <div className="min-w-0 flex-1 flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      src={contact.image}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {contact.name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {contact.email}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      onClick={(e) => removeContact(e, contact._id)}
                      className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded"
                    >
                      Remove
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};