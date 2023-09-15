import { AllLanguageTranslator } from '../src/AllLanguageTranslator.js'

describe('AllLanguageTranslator', () => {
  let allTranslator

  beforeEach(() => {
    allTranslator = new AllLanguageTranslator()
  })

  it('should translate "hej på dig" to "ejhall åpall igdall"', () => {
    const argument = 'hej på dig'
    const expectedOutput = 'ejhall åpall igdall'
    const result = allTranslator.translateToAllLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should throw an error when the string is empty', () => {
    const argument = ''
    expect(() => allTranslator.translateToAllLanguage(argument)).toThrow('The string is empty.')
  })

  it('should throw an error when the string contains invalid characters', () => {
    const argument = 'hej123!'
    expect(() => allTranslator.translateToAllLanguage(argument)).toThrow('The string contains invalid characters.')
  })
})
