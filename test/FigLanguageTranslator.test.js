import { FigLanguageTranslator } from '../src/FigLanguageTranslator.js'

describe('FigLanguageTranslator', () => {
  let figTranslator

  beforeEach(() => {
    figTranslator = new FigLanguageTranslator()
  })

  it('should translate "kaffe" to "fiffe kakon"', () => {
    const argument = 'kaffe'
    const expectedOutput = 'fiffe kakon'
    const result = figTranslator.translateToFigLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a single character word "ö" to "fi ökon"', () => {
    const argument = 'ö'
    const expectedOutput = 'fi ökon'
    const result = figTranslator.translateToFigLanguage(argument)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that starts with a vowel correctly', () => {
    const input = 'äpple'
    const expectedOutput = 'fipple äkon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that ends with a vowel correctly', () => {
    const input = 'sjö'
    const expectedOutput = 'fi sjökon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word that contains a special character correctly', () => {
    const input = 'idé'
    const expectedOutput = 'fidé ikon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all lowercase letters correctly', () => {
    const input = 'kopp'
    const expectedOutput = 'fipp kokon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should translate a word with all uppercase letters correctly', () => {
    const input = 'KOPP'
    const expectedOutput = 'fipp kokon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle leading and trailing spaces correctly', () => {
    const input = '  hej   '
    const expectedOutput = 'fij hekon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple spaces between words correctly', () => {
    const input = 'hej    på    dig'
    const expectedOutput = 'fij hekon fi påkon fig dikon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle mixed case input correctly', () => {
    const input = 'HeJ pÅ dIg'
    const expectedOutput = 'fij hekon fi påkon fig dikon'
    const result = figTranslator.translateToFigLanguage(input)
    expect(result).toEqual(expectedOutput)
  })
})
