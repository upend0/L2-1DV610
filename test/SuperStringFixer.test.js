import { SuperStringFixer } from '../src/SuperStringFixer.js'

describe('SuperStringFixer', () => {
  let superStringFixer

  beforeEach(() => {
    superStringFixer = new SuperStringFixer()
  })

  it('should throw an error when the string is empty', () => {
    const argument = ''
    // The test is written in this way because it checks for the expected behavior of the method - behavior verification
    expect(() => superStringFixer.checkFixString(argument)).toThrow('The string is empty.')
  })

  it('should throw an error when the string exceeds the maximum allowed length', () => {
    const maxStringLength = 10000
    // Create a string that exceeds the maximum allowed length
    const argument = 'a'.repeat(maxStringLength + 1)

    expect(() => superStringFixer.checkFixString(argument, maxStringLength)).toThrow(
      `The string exceeds the maximum allowed length of ${maxStringLength} characters.`
    )
  })

  it('should throw an error when the string contains invalid characters', () => {
    const argument = 'hej123!'
    expect(() => superStringFixer.checkFixString(argument)).toThrow('The string contains invalid characters.')
  })

  it('should throw an error for input with potential XSS attack', () => {
    const inputs = [
      '<script>alert("XSS Attack");</script>',
      '"><img src=x onerror=alert("XSS Attack")>',
      '<img src=x onclick="alert(\'XSS Attack\')">',
      '<iMg SrC=javascript:alert("XSS Attack")>'
    ]

    inputs.forEach((input) => {
      expect(() => superStringFixer.checkFixString(input)).toThrow('The string contains invalid characters.')
    })
  })
})
