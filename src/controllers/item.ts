import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "Not found";
    if (response.length === 0) {
      res.send({ message: "Not found" });
    } else {
      res.send(response);
    }
  } catch (e) {
    handleHttp(res, "err_get_item");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "err_get_items");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "err_update_item");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
    console.log(body);
  } catch (e) {
    handleHttp(res, "err_pos_item", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "err_delete_item");
  }
};

export { getItem, getItems, postItem, deleteItem, updateItem };
