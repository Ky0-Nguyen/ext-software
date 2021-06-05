import { isNaN } from 'lodash'
import pluralize from 'pluralize'

export const pluralizeText = (inputNumber: number, text = '') => {
  if (isNaN(inputNumber) || !text) {
    return text
  }
  return `${inputNumber} ${pluralize(text, inputNumber)}`
}