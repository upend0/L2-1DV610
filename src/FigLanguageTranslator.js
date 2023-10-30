/**
 * Module for the class FigLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { SuperStringFixer } from './SuperStringFixer.js'
import { Utilities } from './Utilities.js'

/**
 * Represents a translator that translates a string to FigLanguage.
 */
export class FigLanguageTranslator {
  #superStringFixer
  #utilities

  /**
   * Creates an instance of FigLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()
    this.#utilities = new Utilities()
  }

  /**
   * Public method for translating a string to FigLanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateToFigLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordToFigLanguage(word))
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Public method for translating a string from FigLanguage.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateFigToSwedish (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the string into words
    const words = stringToTranslate.split(' ')
    // & Maybe change this to figWords

    const translatedWords = this.#translateWordsFromFigLanguage(words)

    // Join the translated words into a string
    const translatedString = translatedWords.join(' ')

    return translatedString
  }

  /**
   * Method to translate a single word to FigLanguage.
   *
   * @param {string} word - The word to translate.
   * @returns {string} The translated word.
   */
  // & A comment that isn't correct anymore - now words are returned instead of word
  #translateWordToFigLanguage (word) {
    // Find the index of the first vowel
    let index = 0
    while (index < word.length && !this.#utilities.isVowel(word[index])) {
      index++
    }

    // Set the index to the letter after the first vowel
    index++

    // Split the word into two parts. Make the split after the first vowel.
    const part1 = word.slice(0, index)
    const part2 = word.slice(index)

    // Construct the translated word in FigLanguage
    const translatedWords = `fi${part2} ${part1}kon`

    return translatedWords
  }

  /**
   * Method to translate an array of words from FigLanguage to Swedish.
   *
   * @param {string[]} words - The words to translate.
   * @returns {string[]} The translated words.
   */
  #translateWordsFromFigLanguage (words) {
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
        throw new Error('The string is not in FigLanguage.')
      }
    }

    return translatedWords
  }
}
