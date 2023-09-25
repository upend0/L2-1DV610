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

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'hej'
    const expectedOutput = 'hohejoj'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'HEJ'
    const expectedOutput = 'hohejoj'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hej   '
    const expectedOutput = 'hohejoj'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hej    på    dig'
    const expectedOutput = 'hohejoj popå dodigog'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'Hej På Dig'
    const expectedOutput = 'hohejoj popå dodigog'
    const result = robberTranslator.translateToRobberLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate "kokafoffofe" to "kaffe"', () => {
    const argument = 'kokafoffofe'
    const expectedOutput = 'kaffe'
    const result = robberTranslator.translateRobberToSwedish(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "ö"', () => {
    const argument = 'ö'
    const expectedOutput = 'ö'
    const result = robberTranslator.translateRobberToSwedish(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpoppoplole'
    const expectedOutput = 'äpple'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sosjojö'
    const expectedOutput = 'sjö'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'idodé'
    const expectedOutput = 'idé'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'hohejoj'
    const expectedOutput = 'hej'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'HOHEJOJ'
    const expectedOutput = 'hej'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hohejoj   '
    const expectedOutput = 'hej'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hohejoj    popå    dodigog'
    const expectedOutput = 'hej på dig'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'Hohejoj Popå Dodigog'
    const expectedOutput = 'hej på dig'
    const result = robberTranslator.translateRobberToSwedish(input)
    expect(result).toEqual(expectedOutput)
  })
})
