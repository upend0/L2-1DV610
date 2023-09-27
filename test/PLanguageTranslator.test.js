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
})
