import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    monobankToken: { type: String, required: true },
    dismissedTransactionIds: { type: [String], default: [] },
    appliedTransactionIds: { type: [String], default: [] },
    monobankAccountId: { type: String, required: true },
    card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, collection: 'MonobankUsersData' }
);

const MonobankUserDataModel = mongoose.model('MonobankUserData', schema);
export { MonobankUserDataModel };