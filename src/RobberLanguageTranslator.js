/**
 * Module for the class RobberLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'
import { Utilities } from './Utilities.js'

/**
 * Represents a translator that translates a string to RobberLanguage.
 */
export class RobberLanguageTranslator {
  #superStringFixer
  #utilities

  /**
   * Creates an instance of RobberLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
    this.#utilities = new Utilities()
  }

  /**
   * Public method for translating a string to RobberLanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateToRobberLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordToRobberLanguage(word))
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Public method for translating a string from RobberLanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateRobberToSwedish (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')
    // & Maybe change this to robberWords

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordFromRobberLanguage(word))
    // & Maybe change this to swedishWords
    const translatedString = translatedWords.join(' ')
    // & Maybe change this to swedishString

    return translatedString
  }

  /**
   * Method to translate a single word to RobberLanguage.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordToRobberLanguage (word) {
    let translatedWord = ''

    // Loop through the letters in the word
    for (let i = 0; i < word.length; i++) {
      // & Maybe more clear to use another for loop, so the naming can be 'letter' instead of 'word[i]'
      // Check if the letter is a vowel
      if (this.#utilities.isVowel(word[i])) {
        // Add the letter to the translated word
        translatedWord += word[i]
      } else {
        // Else the letter is a consonant, so add the letter, an 'o' and the letter again to the translated word
        translatedWord += word[i] + 'o' + word[i]
      }
    }

    return translatedWord
  }

  /**
   * Method to translate a word from RobberLanguage to Swedish.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  #translateWordFromRobberLanguage (word) {
    // & Maybe change word to robberWord
    let translatedWord = ''
    // & Maybe change this to swedishWord

    // Loop through the letters in the word
    for (let i = 0; i < word.length; i++) {
      // Check if the letter is a vowel
      if (this.#utilities.isVowel(word[i])) {
        // Add the vowel to the translated word
        translatedWord += word[i]
      } else {
        // Else the letter is a consonant

        // Check if the consonant is followed by an 'o' and by the same consonant again
        if (word[i + 1] === 'o' && word[i + 2] === word[i]) {
          // Add the consonant to the translated word
          translatedWord += word[i]
          // Skip the 'o' and the consonant
          i += 2
        } else {
          throw new Error('The string is not in RobberLanguage.')
        }
      }
    }
    return translatedWord
  }
}
