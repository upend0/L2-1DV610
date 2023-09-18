import { AllLanguageTranslator } from '../src/AllLanguageTranslator.js'

describe('AllLanguageTranslator', () => {
  let allTranslator

  beforeEach(() => {
    allTranslator = new AllLanguageTranslator()
  })

  it('should translate "hej på dig" to "ejhall åpall igdall"', () => {
    // & Maybe I should change the name of the variable argument and input to stringToTranslate
    const argument = 'hej på dig'
    const expectedOutput = 'ejhall åpall igdall'
    const result = allTranslator.translateToAllLanguage(argument)
    // The test is written is this way because it checks for the output of the method - output verification
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "öall"', () => {
    const argument = 'ö'
    const expectedOutput = 'öall'
    const result = allTranslator.translateToAllLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpple'
    const expectedOutput = 'äppleall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjö'
    const expectedOutput = 'ösjall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'idé'
    const expectedOutput = 'idéall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'hej'
    const expectedOutput = 'ejhall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'HEJ'
    const expectedOutput = 'ejhall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hej på dig  '
    const expectedOutput = 'ejhall åpall igdall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hej    på    dig'
    const expectedOutput = 'ejhall åpall igdall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'HeJ pÅ dIg'
    const expectedOutput = 'ejhall åpall igdall'
    const result = allTranslator.translateToAllLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should throw an error when the string is empty', () => {
    const argument = ''
    // The test is written in this way because it checks for the expected behavior of the method - behavior verification
    expect(() => allTranslator.translateToAllLanguage(argument)).toThrow('The string is empty.')
  })

  it('should throw an error when the string exceeds the maximum allowed length', () => {
    const maxStringLength = 10000
    // Create a string that exceeds the maximum allowed length
    const argument = 'a'.repeat(maxStringLength + 1)

    expect(() => allTranslator.translateToAllLanguage(argument, maxStringLength)).toThrow(
      `The string exceeds the maximum allowed length of ${maxStringLength} characters.`
    )
  })

  it('should throw an error when the string contains invalid characters', () => {
    const argument = 'hej123!'
    expect(() => allTranslator.translateToAllLanguage(argument)).toThrow('The string contains invalid characters.')
  })

  it('should throw an error for input with potential XSS attack', () => {
    const inputs = [
      '<script>alert("XSS Attack");</script>',
      '"><img src=x onerror=alert("XSS Attack")>',
      '<img src=x onclick="alert(\'XSS Attack\')">',
      '<iMg SrC=javascript:alert("XSS Attack")>'
    ]

    inputs.forEach((input) => {
      expect(() => allTranslator.translateToAllLanguage(input)).toThrow('The string contains invalid characters.')
    })
  })
})
