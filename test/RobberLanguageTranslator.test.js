import { RobberLanguageTranslator } from '../src/RobberLanguageTranslator.js'

describe('RobberLanguageTranslator', () => {
  let robberTranslator

  beforeEach(() => {
    robberTranslator = new RobberLanguageTranslator()
  })

  it('should translate "hej på dig" to "hohejoj popå dodigog"', () => {
    const argument = 'hej på dig'
    const expectedOutput = 'hohejoj popå dodigog'
    const result = robberTranslator.translateToRobberLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "ö"', () => {
    const argument = 'ö'
    const expectedOutput = 'ö'
    const result = robberTranslator.translateToRobberLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpple'
    const expectedOutput = 'äpoppoplole'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjö'
    const expectedOutput = 'sosjojö'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'idé'
    const expectedOutput = 'idodé'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })
})
