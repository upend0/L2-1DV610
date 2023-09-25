/**
 * Module for the class RobberLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'

/**
 * Represents a translator that translates a string to RobberLanguage.
 */
export class RobberLanguageTranslator {
  #superStringFixer

  /**
   * Creates an instance of RobberLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
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
  // translateFigToSwedish (stringToTranslate) {
  //   // Check and fix the string
  //   stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

  //   // Split the string into words
  //   const words = stringToTranslate.split(' ')
  //   // & Maybe change this to figWords

  //   const translatedWords = this.#translateWordsFromRobberLanguage(words)

  //   // Join the translated words into a string
  //   const translatedString = translatedWords.join(' ')

  //   // // Translate each word and join them back into a sentence
  //   // const translatedWords = words.map(word => this.#translateWordFromRobberLanguage(word))
  //   // // & Maybe change this to swedishWords
  //   // const translatedString = translatedWords.join(' ')
  //   // // & Maybe change this to swedishString

  //   return translatedString
  // }

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
      if (this.#isVowel(word[i])) {
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
   * Method to translate an array of words from RobberLanguage to Swedish.
   *
   * @param {string[]} words - The words to translate.
   * @returns {string[]} The translated words.
   */
  #translateWordsFromRobberLanguage (words) {
    const translatedWords = []

    // Loop through the words
    for (let i = 0; i < words.length; i += 2) {
      // Check if the word starts with "fi" and the word after ends with "kon"
      if (words[i].startsWith('fi') && words[i + 1].endsWith('kon')) {
        // Remove "fi" and "kon" from the first and second word
        words[i] = words[i].slice(2)
        words[i + 1] = words[i + 1].slice(0, -3)
        // & Change variable name to lastPartOfWord and firstPartOfWord

        // Join the two words together
        const joinedWord = words[i + 1] + words[i]

        // Add the joined word to the array
        translatedWords.push(joinedWord)
      } else {
        throw new Error('The string is not in RobberLanguage.')
      }

      // // Translate each word and join them back into a sentence
      // translatedWords.push(this.#translateWordFromRobberLanguage(words[i]))
    }

    return translatedWords
  }

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
