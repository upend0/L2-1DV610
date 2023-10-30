/**
 * Module for the class TheAllLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

// * 25 lines of code
// * 1 if/for/while
// * 1 public method

import { SuperStringFixer } from './SuperStringFixer.js'

/**
 * Represents a translator that translates a string to the All Language.
 */
export class TheAllLanguageTranslator {
  #superStringFixer

  /**
   * Creates an instance of TheAllLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
  }

  /**
   * Public method for translating a string to the All Language.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateToTheAllLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordToTheAllLanguage(word))
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Method to translate a single word to the All Language.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordToTheAllLanguage (word) {
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
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', 'é', 'ü', 'á', 'à', 'è', 'ì', 'ò', 'ú']
    return vowels.includes(char.toLowerCase())
  }
}
