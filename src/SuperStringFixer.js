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
  /**
   * Public method to check and fix the string.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The checked and fixed string.
   */
  // & Maybe I should change the name of the method
  // & Maybe change the name of the argument
  checkFixString (stringToTranslate) {
    // Check the length of the string
    const maxStringLength = 10000
    // & Could I have this magic constant in something else?
    this.#checkStringLength(stringToTranslate, maxStringLength)

    // Trim the string and make it lowercase
    stringToTranslate = stringToTranslate.trim().toLowerCase()

    // Check if the string is empty
    this.#checkEmptyString(stringToTranslate)

    // Check if the string is valid
    this.#checkValidString(stringToTranslate)
    // & Change this name to checkValidCharacters maybe since the method has changed what it does and the check for empty string has been taken out to its own method

    // Replace multiple spaces with a single space
    stringToTranslate.replace(/\s+/g, ' ')

    return stringToTranslate
  }

  /**
   * Private method to check the length of the string.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @param {number} maxStringLength - The maximum allowed length of the string.
   */
  #checkStringLength (stringToTranslate, maxStringLength) {
    if (stringToTranslate.length > maxStringLength) {
      throw new Error(`The string exceeds the maximum allowed length of ${maxStringLength} characters.`)
    }
  }

  /**
   * Private method to check if the string is empty.
   *
   * @param {string} stringToTranslate - The string to translate.
   */
  #checkEmptyString (stringToTranslate) {
    if (stringToTranslate === '') {
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

  /**
   * Method to check if a character is a vowel.
   *
   * @param {char} char - The character to check.
   * @returns {boolean} True if the character is a vowel, otherwise false.
   */
  // TODO: Decide where I should have this method
  #isVowel (char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', 'é', 'ü', 'á', 'à', 'è', 'ì', 'ò', 'ú']
    return vowels.includes(char.toLowerCase())
  }
}
