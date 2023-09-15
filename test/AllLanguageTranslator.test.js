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
})
