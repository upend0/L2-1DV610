/**
 * Module for the class PLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'
import { Utilities } from './Utilities.js'

/**
 * Represents a translator that translates a string to PLanguage.
 */
export class PLanguageTranslator {
  #superStringFixer
  #utilities

  /**
   * Creates an instance of PLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
    this.#utilities = new Utilities()
  }

  /**
   * Public method for translating a string to PLanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateToPLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordToPLanguage(word))
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Public method for translating a string from PLanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translatePToSwedish (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')
    // & Maybe change this to PWords

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordFromPLanguage(word))
    // & Maybe change this to swedishWords
    const translatedString = translatedWords.join(' ')
    // & Maybe change this to swedishString

    return translatedString
  }

  /**
   * Method to translate a single word to PLanguage.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordToPLanguage (word) {
    let translatedWord = ''

    // Loop through the letters in the word
    for (let i = 0; i < word.length; i++) {
      // & Maybe more clear to use another for loop, so the naming can be 'letter' instead of 'word[i]'
      // Check if the letter is a vowel
      if (this.#utilities.isVowel(word[i])) {
        // Add the vowel, and a p, and the vowel again to the translated word
        translatedWord += word[i] + 'p' + word[i]
      } else {
        // Else the letter is a consonant, so just add it to the translated word
        translatedWord += word[i]
      }
    }

    return translatedWord
  }

  /**
   * Method to translate a word from PLanguage to Swedish.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordFromPLanguage (word) {
    // & Maybe change word to PWord
    let translatedWord = ''
    // & Maybe change this to swedishWord

    // Loop through the letters in the word
    for (let i = 0; i < word.length; i++) {
      // Check if the letter is a consonant
      if (!this.#utilities.isVowel(word[i])) {
        // Add the consonant to the translated word
        translatedWord += word[i]
      } else {
        // Else the letter is a vowel

        // Check if the vowel is followed by an 'p' and by the same vowel again
        if (word[i + 1] === 'p' && word[i + 2] === word[i]) {
          // Add the vowel to the translated word
          translatedWord += word[i]
          // Skip the 'p' and the vowel
          i += 2
        } else {
          throw new Error('The string is not in PLanguage.')
        }
      }
    }
    return translatedWord
  }
}
