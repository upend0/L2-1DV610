/**
 * Module for the class TheAllLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'
import { Utilities } from './Utilities.js'

/**
 * Represents a translator that translates a string to the All Language.
 */
export class TheAllLanguageTranslator {
  #superStringFixer
  #utilities

  /**
   * Creates an instance of TheAllLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
    this.#utilities = new Utilities()
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
    // while (index < word.length && !this.#isVowel(word[index])) {
    //   index++
    // }
    while (index < word.length && !this.#utilities.isVowel(word[index])) {
      index++
    }
    return word.slice(index) + word.slice(0, index) + 'all'
  }
}
