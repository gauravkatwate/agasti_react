const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => "png",
    public_id: (req, file) => file.originalname.split(".")[0] + "",
  },
});

const cloudinaryFileUploder = multer({ storage: storage });

const storageLocal = multer.diskStorage({
  destination:function(req,file,cb)
  {
      cb(null,'uploads/');
  },
  filename:function(req,file,cb){
      cb(null,file.originalname);
  }
});

const uploadlocal = multer({storage : storageLocal});

module.exports = {
  cloudinaryFileUploder,uploadlocal
};
