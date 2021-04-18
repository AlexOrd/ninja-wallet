import express from 'express';
import * as userPhotoCtrl from '../controllers/userPhoto.controller';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

router.route('/:id')
  .post(validate(schema.userPhoto), (req, res) => userPhotoCtrl.createPhoto(req, res))
  .put(validate(schema.userPhoto), (req, res) => userPhotoCtrl.updatePhoto(req, res));

export default router;