import User from '../models/user.model';
import { Transaction } from '../models/transaction.model';
import { profileExist } from '../utils/profileAndPhoto-validations';
import { unexpectedError } from '../utils/error_handling/unexpected_error';
import { createObjectCsvWriter } from 'csv-writer';

export async function getProfile(req, res, next) {
  const id = req.userID;
  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const profile = await User.findById(id).populate('avatarId').exec();
    res.status(200).json({
      success: true,
      data: {
        profile,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
} 

export async function updateProfile(req, res, next) {
  const { firstName, lastName } = req.body;
  const id = req.userID;

  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const updated = await User.findByIdAndUpdate(id, { firstName, lastName }, {new: true}).populate('avatarId').exec();
    res.status(200).json({
      success: true,
      data: {
        updated,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
}

export async function exportTransactions(req, res, next) {
  const id = req.userID;
  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const transactions = await Transaction.find({userId: id});
    const csvWriter = createObjectCsvWriter({
      path: `${__dirname}/out.csv`,
      header: [
        {id: '_id', title: '_id'},
        {id: 'transactionType', title: 'transactionType'},
        {id: 'sum', title: 'sum'},
      ]
    })
    await csvWriter.writeRecords(transactions);
    res.sendFile(`${__dirname}/out.csv`, {
      headers: {
        'Content-Type': 'text/csv'
      }
    });
    // await fs.unlink(`${__dirname}/out.csv`);
  } catch(err) {
    unexpectedError(err, next);
  }
} 


export async function deleteProfile(req, res, next) {
  const id = req.userID;

  const check = await profileExist(id);
  if(!check) {
    return res.status(400).json({
      success: false,
      message: 'Profile does not exist',
    });
  }

  try {
    const deleted = await User.findByIdAndDelete(id);
    res.status(204).json({
      success: true,
      data: {
        deleted,
      },
    });
  } catch(err) {
    unexpectedError(err, next);
  }
}