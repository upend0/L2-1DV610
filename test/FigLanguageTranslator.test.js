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
})
