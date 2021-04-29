import { Card } from '../models/card.model'

export const validateCard = async (card, userId) => {
  const isCreditCardExist = await Card.findOne({ cardNumber: card.cardNumber })
  const isCardNameExist = await Card.findOne({ cardName: card.cardName, userId })

  if(isCreditCardExist) {
    return {
      success: false,
      message: 'Credit card already exist!'
    }
  }

  if(isCardNameExist) {
    return {
      success: false,
      message: 'Card name already exist!'
    }
  }

  return { success: true }
}

export const isCardExist = async cardId => { 
  const card = await Card.findOne({ _id: cardId })

  if(card) {
    return {
      success: true
    }
  }

  return { success: false, message: 'Card does not exist.' }
}


export const checkCardOwner = (card, userId) => card.userId.toString() === userId.toString() ? true: false
