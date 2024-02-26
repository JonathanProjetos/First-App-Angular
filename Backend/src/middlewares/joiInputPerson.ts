import joi from 'joi';
import { IPeopleBodyInput } from '../interface/IPeople';

const verifyInputPerson = (body: IPeopleBodyInput) => {
  const schemaPerson = joi.object({
    email: joi.string().email().required().messages({
      'string.email': '404|Invalid email format',
      'any.required': '404|Email is required',
      'string.empty': '404|Email is required'
    }),

    name: joi.string().required().messages({
      'any.required': '404|Name is required',
      'string.empty': '404|Name is required'
    })
  })

  const { error, value } = schemaPerson.validate(body)

  if (error) {
    throw new Error(error.message)
  }

  return value
}

export default verifyInputPerson;