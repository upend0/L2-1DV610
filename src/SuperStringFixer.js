/**
 * Module for the class SuperStringFixer.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a SuperStringFixer that fixes a string.
 */
export class SuperStringFixer {
  static maxStringLength = 10000
  /**
   * Public method to check and fix the string.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The checked and fixed string.
   */
  // & Maybe I should change the name of the method
  // & Maybe change the name of the argument
  checkFixString (stringToTranslate) {
    // Check if the string is empty
    this.#checkEmptyString(stringToTranslate)

    // Check the length of the string
    // & Could I have this magic constant in something else?
    this.#checkStringLength(stringToTranslate)

    // Trim the string and make it lowercase
    stringToTranslate = stringToTranslate.trim().toLowerCase()
    // & This does two things, maybe I should split it up into two methods

    // Check if the string is valid
    this.#checkValidString(stringToTranslate)
    // & Change this name to checkValidCharacters maybe since the method has changed what it does and the check for empty string has been taken out to its own method

    // Replace multiple spaces with a single space
    stringToTranslate = stringToTranslate.replace(/\s+/g, ' ')
    // & Maybe I should have this in its own method

    return stringToTranslate
  }

  /**
   * Private method to check the length of the string.
   *
   * @param {string} stringToTranslate - The string to translate.
   */
  #checkStringLength (stringToTranslate) {
    if (stringToTranslate.length > SuperStringFixer.maxStringLength) {
      throw new Error(`The string exceeds the maximum allowed length of ${SuperStringFixer.maxStringLength} characters.`)
    }
  }

  /**
   * Private method to check if the string is empty.
   *
   * @param {string} stringToTranslate - The string to translate.
   */
  #checkEmptyString (stringToTranslate) {
    if (stringToTranslate === '' || stringToTranslate === null || stringToTranslate === undefined) {
      throw new Error('The string is empty.')
    }
  }

  /**
   * Private method to check if the string contains only letters and spaces.
   *
   * @param {string} stringToTranslate - The string to translate.
   */
  #checkValidString (stringToTranslate) {
    const regex = /^[a-zåäöéüáàèìòúñ ]+$/i
    if (!regex.test(stringToTranslate)) {
      throw new Error('The string contains invalid characters.')
    }
  }
}
