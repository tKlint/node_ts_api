import multer from 'multer';
import path from 'path';
import { Router } from 'express';

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/upload"))
  },
  filename: function (req, file, cb) {
    const timeStamp = Date.now();
    const ramdomStr = Math.random().toString(36).slice(-6);
    const ext = path.extname(file.originalname);
    const filename = `${timeStamp}-${ramdomStr}${ext}`;
    cb(null, filename);
  }
})

const imgUpload = multer({ 
  storage: storage,
  limits: {
    fileSize: 150 * 1024,
  },
  fileFilter(req, file, cb) {
    //验证文件后缀名
    const extname = path.extname(file.originalname);
    const whitelist = [".jpg", ".gif", ".png"];
    if (whitelist.includes(extname)) {
      cb(null, true);
    } else {
      cb(new Error(`your ext name of ${extname} is not support`));
    }
  },
})

router.post('/', imgUpload.single('img'), (req, resp) => {
  if (!req.file) {
    resp.send({
      code: 0,
      msg: "无效文件",
      data: null,
    });
    return
  }
  const url = `/upload/${req.file.filename}`;
  resp.send({
    code: 0,
    msg: "",
    data: url,
  });
})

export default router;
