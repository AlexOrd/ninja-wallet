import express from 'express';
import * as profileCtrl from '../controllers/profile.controller';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

router.route('/:id')
  .get((req, res, next) => {
    profileCtrl.getProfile(req, res, next);
  })
  .put(validate(schema.profile), (req, res, next) => {
    profileCtrl.updateProfile(req, res, next);
  })
  .delete((req, res, next) => {
    profileCtrl.deleteProfile(req, res, next);
  });

export default router;