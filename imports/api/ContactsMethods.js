import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
  "contacts.insert"({ name, email, image, walletId }) {
    check(name, String);
    check(email, String);
    check(image, String);
    check(walletId, String);
    if (!name) {
      throw new Meteor.Error("Name is requeired");
    }
    if (!walletId) {
      throw new Meteor.Error("Wallet ID is requeired");
    }

    return ContactsCollection.insert({
      name,
      email,
      image,
      walletId,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    ContactsCollection.remove(contactId);
  },
});
