import express from 'express';
import * as userPhotoCtrl from '../controllers/userPhoto.controller';

const router = express.Router();

router.route('/:id')
  .post((req, res) => userPhotoCtrl.createPhoto(req, res))
  .put((req, res) => userPhotoCtrl.updatePhoto(req, res));

export default router;