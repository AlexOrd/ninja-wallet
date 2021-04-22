import express from 'express';
import * as userPhotoCtrl from '../controllers/userPhoto.controller';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

router.route('/:id')
  .post(validate(schema.userPhoto), (req, res, next) => userPhotoCtrl.createPhoto(req, res, next))
  .put(validate(schema.userPhoto), (req, res, next) => userPhotoCtrl.updatePhoto(req, res, next));

export default router;