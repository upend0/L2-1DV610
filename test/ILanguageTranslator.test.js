import { ILanguageTranslator } from '../src/ILanguageTranslator.js'

describe('ILanguageTranslator', () => {
  let iTranslator

  beforeEach(() => {
    iTranslator = new ILanguageTranslator()
  })

  it('should translate "hej på dig" to "hij pi dig"', () => {
    const argument = 'hej på dig'
    const expectedOutput = 'hij pi dig'
    const result = iTranslator.translateToILanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "i"', () => {
    const argument = 'ö'
    const expectedOutput = 'i'
    const result = iTranslator.translateToILanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpple'
    const expectedOutput = 'ippli'
    const result = iTranslator.translateToILanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjö'
    const expectedOutput = 'sji'
    const result = iTranslator.translateToILanguage(input)
    expect(result).toEqual(expectedOutput)
  })
})
