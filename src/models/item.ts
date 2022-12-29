import { Schema, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    color: { type: String },
    gas: { type: String, enum: ["gasoline", "eletric"] },
    year: { type: Number },
    description: { type: String },
    price: { type: Number },
    name: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const ItemModel: Model<Car> = model("Item", ItemSchema);

export { ItemModel };
