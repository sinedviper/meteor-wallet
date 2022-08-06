import SimpleSchema from "simpl-schema";

SimpleSchema.defineValidationErrorTransform((err) => {
  const ddpError = new Meteor.Error(err.message);
  ddpError.error = "validation-error";
  ddpError.details = err.details;
  return ddpError;
});
