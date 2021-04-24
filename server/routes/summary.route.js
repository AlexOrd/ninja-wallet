import express from 'express';
import { Transaction } from '../models/transaction.model';
import { unexpectedError } from '../utils/error_handling/unexpected_error';
import Category from '../models/category.model';


const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        const userId = req.userID;
        try {
            const transactionsThisMonth = await Transaction.find({
                createdAt: {
                    $gte: new Date().setMonth(new Date().getMonth() - 1),
                    $lt: new Date()
                },
                userId
            })
            const transactionsLastMonth = await Transaction.find({
                createdAt: {
                    $gte: new Date().setMonth(new Date().getMonth() - 2),
                    $lt: new Date().setMonth(new Date().getMonth() - 1),
                },
                userId
            })

            const categories = await Category.find({ userId })

            const transactionsThisMonthSum = transactionsThisMonth?.reduce((acc, el) => acc + el.sum, 0) || 0
            const transactionsLastMonthSum = transactionsLastMonthSum?.reduce((acc, el) => acc + el.sum, 0) || 0
            res.status(200).json({
                success: true,
                data: {
                    transactionsCount: transactionsThisMonth?.length,
                    transactionsDifference: transactionsThisMonth?.length - transactionsLastMonth?.length,
                    transactionsSum: transactionsThisMonthSum,
                    transactionsSumDifference: transactionsThisMonthSum - transactionsLastMonthSum,
                    categoriesCount: categories?.length
                },
            });
        } catch (err) {
            console.log(err)
            unexpectedError(err, next);
        }
    })
export default router;