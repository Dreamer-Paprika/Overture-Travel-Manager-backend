import { Schema, model } from "mongoose";

const imageSchema = new Schema(
  {
    link: {
      type: String
    }
  },
  { versionKey: false }
);

const Image = model("overture-travel-manager", imageSchema);

export { Image };
