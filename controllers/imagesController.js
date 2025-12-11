import { Image } from "../models/imageModel.js";
// prettier-ignore


const getAllImages = async (req, res) => {
  const images = await Image.find();
  res.json(images);

};




// prettier-ignore
export { getAllImages};                                        