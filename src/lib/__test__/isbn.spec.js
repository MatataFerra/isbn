import { describe, test, expect } from 'vitest'
import { ISBN } from '../services'

describe('ISBN', () => {
  test("should return false if it doesn't have a length of 13", () => {
    const isbn = new ISBN('1234')
    expect(isbn.isValid()).toBeFalsy()
  })

  test('should return false if it has letters', () => {
    const isbn = new ISBN('123456789101g')
    expect(isbn.isValid()).toBeFalsy()
  })

  test('should return false if it has spaces', () => {
    const isbn = new ISBN('123 4567891012')
    expect(isbn.isValid()).toBeFalsy()
  })

  test('should return true if it has a length of 13, only numbers and no spaces', () => {
    const isbn = new ISBN('123456789101')
    expect(isbn.isValid()).toBeTruthy()
  })

  test('should return an array of numbers', () => {
    const isbn = new ISBN('978014300723')
    expect(isbn.toNumber()).toEqual([9, 7, 8, 0, 1, 4, 3, 0, 0, 7, 2, 3])
  })

  test('should return an array of numbers multiplied by 1 or 3', () => {
    const isbn = new ISBN('978014300723')
    expect(isbn.multiplyEachNumber()).toEqual([9, 21, 8, 0, 1, 12, 3, 0, 0, 21, 2, 9])
  })

  test('should return the sum of the multiplied numbers', () => {
    const isbn = new ISBN('978014300723')
    expect(isbn.sumMultipliedNumbers()).toEqual(86)
  })

  test('should return the modulus of the sum', () => {
    const isbn = new ISBN('978014300723')
    expect(isbn.get10Modulus()).toEqual(6)
  })

  test('should return the result of the substraction of 10 if the modulus is 10 take 0', () => {
    const isbn = new ISBN('978014300723')
    expect(isbn.substract10IfLowerTake0()).toEqual(4)
  })
})
