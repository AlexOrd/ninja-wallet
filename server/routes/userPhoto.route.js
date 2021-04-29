import express from 'express';
import * as userPhotoCtrl from '../controllers/userPhoto.controller';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

router.route('/').post(validate(schema.userPhoto), (req, res, next) => userPhotoCtrl.createPhoto(req, res, next));
router.route('/:id').put(validate(schema.userPhoto), (req, res, next) => userPhotoCtrl.updatePhoto(req, res, next));

export default router;