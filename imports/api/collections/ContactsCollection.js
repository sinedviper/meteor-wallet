import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const ContactsCollection = new Mongo.Collection("contacts");

const ContactsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    //regEx: SimpleSchema.RefEx.Email,
  },
  image: {
    type: String,
    optional: true,
  },
  walletId: {
    type: String,
    //regEx: SimpleSchema.RefEx.Id,
  },
  createAt: {
    type: Date,
  },
});

ContactsCollection.attachSchema(ContactsSchema);
