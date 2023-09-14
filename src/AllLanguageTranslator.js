/**
 * Module for the class AllLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a translator that translates a string to All Language.
 */
export class AllLanguageTranslator {
  /**
   * Public method for translating a string to All Language.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateString (stringToTranslate) {
    // Trim the string and make it lowercase
    stringToTranslate = stringToTranslate.trim().toLowerCase()

    // Check if the string is valid
    this.#checkValidString(stringToTranslate)

    // Split the input string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWord(word))
    const translatedString = translatedWords.join(' ').toLocaleLowerCase()

    return translatedString
  }

  /**
   * Private method to check if the string is valid.
   *
   * @param {string} stringToTranslate - The string to translate.
   */
  #checkValidString (stringToTranslate) {
    if (stringToTranslate === '') {
      throw new Error('The string is empty.')
    }

    // Check if the string contains only letters and spaces
    const regex = /^[a-zåäö ]+$/i
    if (!regex.test(stringToTranslate)) {
      throw new Error('The string contains invalid characters.')
    }
  }

  /**
   * Method to translate a single word.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWord (word) {
    let index = 0
    while (index < word.length && !this.#isVowel(word[index])) {
      index++
    }
    return word.slice(index) + word.slice(0, index) + 'all'
  }

  /**
   * Method to check if a character is a vowel.
   *
   * @param {char} char - The character to check.
   * @returns {boolean} True if the character is a vowel, otherwise false.
   */
  #isVowel (char) {
    return ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö'].includes(char.toLowerCase())
  }
}
