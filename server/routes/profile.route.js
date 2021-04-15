import express from 'express';
import * as profileCtrl from '../controllers/profile.controller';

const router = express.Router();

router.route('/')
    .get((req, res) => {
      profileCtrl.getProfile(req, res);
    })
    .put((req, res) => {
      profileCtrl.updateProfile(req, res);
    })
    .delete((req, res) => {
      profileCtrl.deleteProfile(req, res);
    });

export default router;