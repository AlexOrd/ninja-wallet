import express from 'express';
import * as profileCtrl from '../controllers/profile.controller';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    profileCtrl.getProfile(req, res);
  })
  .put(validate(schema.profile), (req, res) => {
    profileCtrl.updateProfile(req, res);
  })
  .delete((req, res) => {
    profileCtrl.deleteProfile(req, res);
  });

export default router;