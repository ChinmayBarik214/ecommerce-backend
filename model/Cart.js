const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// DO NOT MESS BELOW
const virtual = cartSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
// DO NOT MESS ABOVE

exports.Cart = mongoose.model("Cart", cartSchema);
