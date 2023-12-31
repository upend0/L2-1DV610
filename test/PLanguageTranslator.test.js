import { PLanguageTranslator } from '../src/PLanguageTranslator.js'

describe('PLanguageTranslator', () => {
  let pTranslator

  beforeEach(() => {
    pTranslator = new PLanguageTranslator()
  })

  it('should translate "hej på dig" to "hepej påpå dipig"', () => {
    const argument = 'hej på dig'
    const expectedOutput = 'hepej påpå dipig'
    const result = pTranslator.translateToPLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "öpö"', () => {
    const argument = 'ö'
    const expectedOutput = 'öpö'
    const result = pTranslator.translateToPLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpple'
    const expectedOutput = 'äpäpplepe'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjö'
    const expectedOutput = 'sjöpö'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'idé'
    const expectedOutput = 'ipidépé'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'hej'
    const expectedOutput = 'hepej'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'HEJ'
    const expectedOutput = 'hepej'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hej   '
    const expectedOutput = 'hepej'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hej    på    dig'
    const expectedOutput = 'hepej påpå dipig'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'Hej På Dig'
    const expectedOutput = 'hepej påpå dipig'
    const result = pTranslator.translateToPLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate "hepej påpå dipig" to "hej på dig"', () => {
    const argument = 'hepej påpå dipig'
    const expectedOutput = 'hej på dig'
    const result = pTranslator.translatePToSwedish(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "öpö" to "ö"', () => {
    const argument = 'öpö'
    const expectedOutput = 'ö'
    const result = pTranslator.translatePToSwedish(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpäpplepe'
    const expectedOutput = 'äpple'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjöpö'
    const expectedOutput = 'sjö'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'ipidépé'
    const expectedOutput = 'idé'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'hepej'
    const expectedOutput = 'hej'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'HEPEJ'
    const expectedOutput = 'hej'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hepej   '
    const expectedOutput = 'hej'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hepej    påpå    dipig'
    const expectedOutput = 'hej på dig'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'Hepej Påpå Dipig'
    const expectedOutput = 'hej på dig'
    const result = pTranslator.translatePToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should throw an error if the string is not in PLanguage', () => {
    const inputs = [
      'hej på dig',
      'hepj påpå dipig',
      'hepej påp dipig',
      'hepej påpå dig'
    ]

    inputs.forEach(input => {
      expect(() => pTranslator.translatePToSwedish(input)).toThrow('The string is not in PLanguage.')
    })
  })
})
