import { Car } from "../interfaces/car.interface";
import { ItemModel } from "../models/item";

const insertCar = async (item: Car) => {
  const car = await ItemModel.create(item);
  return car;
};

const getAllCars = async () => {
  const cars = await ItemModel.find({});
  return cars;
};

const getCarById = async (id: string) => {
  const car = await ItemModel.findOne({
    _id: id,
  });
  return car;
};

const updateCar = async (id: string, item: Car) => {
  const car = await ItemModel.findOneAndUpdate(
    {
      _id: id,
    },
    item,
    {
      new: true,
    }
  );
  return car;
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({
    _id: id,
  });
  return response;
};

export { insertCar, getAllCars, getCarById, updateCar, deleteCar };
