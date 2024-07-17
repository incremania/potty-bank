const { Schema, default: mongoose } = require("mongoose");

const OrderCardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },

    
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed",
    },
    
    address: {
      type: String,
      required: [true, 'please provide mailing address']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderCard", OrderCardSchema);