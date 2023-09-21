/**
 * Module for the class AllLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'

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
  translateToAllLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = new SuperStringFixer().checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordToAllLanguage(word))
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Public method for translating a string from All Language.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  // translateFromAllLanguage (stringToTranslate) {
  //   // Trim the string and make it lowercase
  //   stringToTranslate = stringToTranslate.trim().toLowerCase()

  //   // Check if the string is valid
  //   this.#checkValidString(stringToTranslate)

  //   // Split the input string into words
  //   const words = stringToTranslate.split(' ')

  //   // Translate each word and join them back into a sentence
  //   const translatedWords = words.map(word => this.#translateWordToAllLanguage(word))
  //   const translatedString = translatedWords.join(' ').toLocaleLowerCase()

  //   return translatedString
  // }

  /**
   * Method to translate a single word to All Language.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordToAllLanguage (word) {
    let index = 0
    while (index < word.length && !this.#isVowel(word[index])) {
      index++
    }
    return word.slice(index) + word.slice(0, index) + 'all'
  }

  /**
   * Method to translate a single word from All Language.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  // #translateWordFromAllLanguage (word) {
  //   return ...
  // }

  /**
   * Method to check if a character is a vowel.
   *
   * @param {char} char - The character to check.
   * @returns {boolean} True if the character is a vowel, otherwise false.
   */
  #isVowel (char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', 'é', 'ü', 'á', 'à', 'è', 'ì', 'ò', 'ú']
    return vowels.includes(char.toLowerCase())
  }
}
