import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
      user_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "User",
        },
      report_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Report",
        },
      status: { type: String, enum: ["Approved","Handled"] },
      is_read: { type: Boolean, default: false },
    },
    { timestamps: true }
  );
  
  const Notification = mongoose.model("Notification", notificationSchema);
  
    export default Notification;