/**
 * Module for the class ILanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'
import { Utilities } from './Utilities.js'

/**
 * Represents a translator that translates a string to ILanguage.
 */
export class ILanguageTranslator {
  #superStringFixer
  #utilities

  /**
   * Creates an instance of ILanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
    this.#utilities = new Utilities()
  }

  /**
   * Public method for translating a string to ILanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateToILanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordToILanguage(word))
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Method to translate a single word to ILanguage.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordToILanguage (word) {
    let translatedWord = ''

    // Loop through the letters in the word
    for (let i = 0; i < word.length; i++) {
      // & Maybe more clear to use another for loop, so the naming can be 'letter' instead of 'word[i]'
      // Check if the letter is a vowel
      if (this.#utilities.isVowel(word[i])) {
        // Add an i instead of the vowel
        translatedWord += 'i'
      } else {
        // Just add the consonant
        translatedWord += word[i]
      }
    }

    return translatedWord
  }
}
