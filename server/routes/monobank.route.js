import express from 'express';

import * as monobankCtrl from '../controllers/monobank.controller';

const router = express.Router();

router.route('/get-user-info/').get(monobankCtrl.getUserInfo);

router.route('/create-monobank-account').post(monobankCtrl.addMonobankAccountToUser);

router.route('/get-monobank-accounts').get(monobankCtrl.getUserMonobankDataAccounts);

router.route('/get-statement-info').post(monobankCtrl.getStatementData);

router.route('/apply-transaction').post(monobankCtrl.applyTransaction);

router.route('/dismiss-transaction').post(monobankCtrl.dismissTransaction);

export default router;
