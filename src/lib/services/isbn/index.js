import { MAX_ISBN_LENGTH } from '../../utils/constants'

/**
 * ISBN
 * @class
 * @param {string} isbn
 * @returns {boolean}
 * @method isValid - Checks if the ISBN is valid
 *
 */
class ISBN {
  constructor(isbn) {
    this.isbn = isbn
  }

  #hasLengthOf13() {
    return this.isbn.length === MAX_ISBN_LENGTH
  }

  #hasOnlyNumbers() {
    return /^\d+$/.test(this.isbn)
  }

  #hasNoSpaces() {
    return !this.isbn.includes(' ')
  }

  isValid() {
    return !!this.#hasLengthOf13() && !!this.#hasOnlyNumbers() && !!this.#hasNoSpaces()
  }

  toNumber() {
    const eachNumber = this.isValid() ? this.isbn.split('').map(Number) : []
    return eachNumber
  }

  multiplyEachNumber() {
    const eachNumber = this.toNumber()
    const multipliedNumber = eachNumber.map((number, index) => {
      const multiplier = index % 2 === 0 ? 1 : 3
      return number * multiplier
    })
    return multipliedNumber
  }

  sumMultipliedNumbers() {
    const multipliedNumber = this.multiplyEachNumber()
    const sum = multipliedNumber.reduce((a, b) => a + b, 0)
    return sum
  }

  get10Modulus() {
    const sum = this.sumMultipliedNumbers()
    const modulus = sum % 10
    return modulus
  }

  substract10IfLowerTake0() {
    const modulus = this.get10Modulus()
    const check = 10 - modulus
    const result = check === 10 ? 0 : check
    return result
  }

  updateISBN() {
    const finalNumber = this.substract10IfLowerTake0()
    const isbn = this.isbn + finalNumber
    return isbn
  }
}

export default ISBN
