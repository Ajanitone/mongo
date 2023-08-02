// import multer from "multer";
// import cloudinaryV2 from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import dotenv from "dotenv";

// dotenv.config();

// const cloudinary = cloudinaryV2.v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "trikania-hebs",
//     resource_type: "auto",
//     format: async (req, file) => {
//       console.log("file inside multer", file);

//       let extension = "";

//       if (file.mimetype.includes("image")) {
//         extension = file.mimetype.slice(6);
//       }

//       return extension;
//     },
//     // public_id: (req, file) => {
//     //   if (req.user && req.user.profileImage) {
//     //     return `${req.user}-${req.user.profileImage}`;
//     //   }

//     //   return `${req.user}-`;
//     // },
//     public_id: (req, file) => {
//       const uniqueId = Date.now().toString(); // Generate a unique identifier

//       if (req.user && req.user.profileImage) {
//         return `${uniqueId}-${req.user.profileImage}`;
//       }

//       return `${uniqueId}-`;
//     },
//   },
// });

// // export default multer({ storage });

// const upload = multer({ storage: storage });

// export default upload.fields([
//   { name: "image", maxCount: 1 },
//   { name: "audiofile", maxCount: 1 },
// ]);

import multer from "multer";
import path from "path";
import cloudinaryV2 from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

const cloudinary = cloudinaryV2.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "e04",
//     format: async (req, file) => {
//       console.log("file inside multer", file);

//       let extension = "";

//       if (file.mimetype.includes("image")) extension = file.mimetype.slice(6);

//       return extension;
//     },
//     public_id: (req, file) => `${req.user}-profileImage`,
//   },
// });

// export default multer({ storage });
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "e04",
    format: async (req, file) => {
      const extension = path.extname(file.originalname);
      return extension;
    },
    public_id: (req, file) => `${req.user}-profileImage`,
  },
});

export default multer({ storage });