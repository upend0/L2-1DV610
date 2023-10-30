import { TheAllLanguageTranslator } from '../src/TheAllLanguageTranslator.js'

describe('AllLanguageTranslator', () => {
  let theAllTranslator

  beforeEach(() => {
    theAllTranslator = new TheAllLanguageTranslator()
  })

  it('should translate "hej på dig" to "ejhall åpall igdall"', () => {
    // & Maybe I should change the name of the variable argument and input to stringToTranslate
    const argument = 'hej på dig'
    const expectedOutput = 'ejhall åpall igdall'
    const result = theAllTranslator.translateToTheAllLanguage(argument)
    // The test is written is this way because it checks for the output of the method - output verification
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "öall"', () => {
    const argument = 'ö'
    const expectedOutput = 'öall'
    const result = theAllTranslator.translateToTheAllLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpple'
    const expectedOutput = 'äppleall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjö'
    const expectedOutput = 'ösjall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'idé'
    const expectedOutput = 'idéall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'hej'
    const expectedOutput = 'ejhall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'HEJ'
    const expectedOutput = 'ejhall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hej på dig  '
    const expectedOutput = 'ejhall åpall igdall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hej    på    dig'
    const expectedOutput = 'ejhall åpall igdall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'HeJ pÅ dIg'
    const expectedOutput = 'ejhall åpall igdall'
    const result = theAllTranslator.translateToTheAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })
})
