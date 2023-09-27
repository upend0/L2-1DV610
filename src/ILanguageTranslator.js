/**
 * Module for the class ILanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

// * 29 lines of code
// * 2 if/for/while

import { SuperStringFixer } from './SuperStringFixer.js'

/**
 * Represents a translator that translates a string to ILanguage.
 */
export class ILanguageTranslator {
  #superStringFixer

  /**
   * Creates an instance of ILanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
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
   * Public method for translating a string from ILanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  // translateIToSwedish (stringToTranslate) {
  //   // Check and fix the string
  //   stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

  //   // Split the string into words
  //   const words = stringToTranslate.split(' ')
  //   // & Maybe change this to IWords

  //   // Translate each word and join them back into a sentence
  //   const translatedWords = words.map(word => this.#translateWordFromILanguage(word))
  //   // & Maybe change this to swedishWords
  //   const translatedString = translatedWords.join(' ')
  //   // & Maybe change this to swedishString

  //   return translatedString
  // }

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
      if (this.#isVowel(word[i])) {
        // Add an i instead of the vowel
        translatedWord += 'i'
      } else {
        // Just add the consonant
        translatedWord += word[i]
      }
    }

    return translatedWord
  }

  /**
   * Method to translate a word from ILanguage to Swedish.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  // #translateWordFromILanguage (word) {
  //   // & Maybe change word to IWord
  //   let translatedWord = ''
  //   // & Maybe change this to swedishWord

  //   // Loop through the letters in the word
  //   for (let i = 0; i < word.length; i++) {
  //     // Check if the letter is a vowel
  //     if (this.#isVowel(word[i])) {
  //       // Add the vowel to the translated word
  //       translatedWord += word[i]
  //     } else {
  //       // Else the letter is a consonant

  //       // Check if the consonant is followed by an 'o' and by the same consonant again
  //       if (word[i + 1] === 'o' && word[i + 2] === word[i]) {
  //         // Add the consonant to the translated word
  //         translatedWord += word[i]
  //         // Skip the 'o' and the consonant
  //         i += 2
  //       } else {
  //         throw new Error('The string is not in ILanguage.')
  //       }
  //     }
  //   }
  //   return translatedWord
  // }

  /**
   * Method to check if a character is a vowel.
   *
   * @param {string} char - The character to check.
   * @returns {boolean} True if the character is a vowel, otherwise false.
   */
  #isVowel (char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', 'é', 'ü', 'á', 'à', 'è', 'ì', 'ò', 'ú']
    return vowels.includes(char.toLowerCase())
  }
}
