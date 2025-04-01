import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ||"dwtn1ccxa",
  api_key: process.env.CLOUDINARY_API_KEY||"593333852659353",
  api_secret: process.env.CLOUDINARY_API_SECRET||"GY0hMmIqaBHiK-Fy9MEejNz1Pus",
});

export default cloudinary;
