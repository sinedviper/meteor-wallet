import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
  "contacts.insert"({ name, email, image }) {
    check(name, String);
    check(email, String);
    check(image, String);
    if (!name) {
      throw new Meteor.Error("Name is requeired");
    }
    return ContactsCollection.insert({
      name,
      email,
      image,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    ContactsCollection.remove(contactId);
  },
});
