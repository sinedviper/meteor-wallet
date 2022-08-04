import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { TransactionsCollection } from "./TransactionsCollection";

Meteor.methods({
  "transitions.insert"({
    isTransferring,
    sourceWalletId,
    destinationWalletId,
    amount,
  }) {
    check(isTransferring, Boolean);
    check(sourceWalletId, String);
    check(destinationWalletId, String);
    check(amount, Number);
    if (!sourceWalletId) {
      throw new Meteor.Error("Source wallet is requeired");
    }
    if (isTransferring && !destinationWalletId) {
      throw new Meteor.Error("Destination wallet is requeired");
    }
    if (!amount || amount <= 0) {
      throw new Meteor.Error("Amount is required.");
    }

    return TransactionsCollection.insert({
      type: isTransferring ? "TRANSFER" : "ADD",
      sourceWalletId,
      destinationWalletId: isTransferring ? destinationWalletId : null,
      amount,
      createdAt: new Date(),
    });
  },
});
