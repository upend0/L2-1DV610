/**
 * Module for the class AllLanguageTranslator.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

// * 25 lines of code
// * 1 if/for/while

import { SuperStringFixer } from './SuperStringFixer.js'
import * as fs from 'fs'
import { promisify } from 'util'

const readFileAsync = promisify(fs.readFile)

/**
 * Represents a translator that translates a string to All Language.
 */
export class AllLanguageTranslator {
  #superStringFixer
  #swedishWords

  /**
   * Creates an instance of AllLanguageTranslator.
   */
  constructor () {
    this.#superStringFixer = new SuperStringFixer()

    // ^^ Lazy load instead of this...?
    // Read the JSON file with the swedish words
    // fs.readFile('../data/svenska-ord.json', 'utf8', (err, data) => {
    //   if (err) {
    //     throw err
    //   }

    //   // Parse the JSON data and save it as an array
    //   this.#swedishWords = JSON.parse(data)
    // })

    this.#loadSwedishWords()
  }

  /**
   * Public method for translating a string to All Language.
   *
   * @param {string} stringToTranslate - The string to translate.
   * @returns {string} The translated string.
   */
  translateToAllLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

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
  translateFromAllLanguage (stringToTranslate) {
    // Check and fix the string
    stringToTranslate = this.#superStringFixer.checkFixString(stringToTranslate)

    // Split the input string into words
    const words = stringToTranslate.split(' ')

    // Translate each word and join them back into a sentence
    const translatedWords = words.map(word => this.#translateWordFromAllLanguage(word))
    const translatedString = translatedWords.join(' ').toLocaleLowerCase()

    return translatedString
  }

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
  async #translateWordFromAllLanguage (word) {
    let translatedWord = ''

    // Check if the word ends with 'all'
    if (word.endsWith('all')) {
      // Remove the 'all' from the end of the word
      word = word.slice(0, -3)

      // Check if the last letter in the word a vowel, since only consonants would have been moved to the end of the word
      if (this.#isVowel(word[word.length - 1])) {
        // Then it is just that word
        translatedWord = word

        // Otherwise, consonants have been moved from the front of the swedish word to the end of the word
        // But we don't know how many consonants have been moved, so we have to try combination after combination and continuously check if the word is in the list of swedish words
      } else {
        // Check if the array with swedish words is null, and if it is, load the swedish words
        // if (this.#swedishWords === null) {
        //   await this.#loadSwedishWords()
        // }

        // Check if the word is in the list of swedish words
        if (this.#swedishWords.includes(word)) {
          translatedWord = word
        } else {
          // If the word is not in the list of swedish words, move one consonant from the end of the word to the front of the word
          // & Maybe I should have a method for this
          // let numberOfConsonants = 1
          // let consonants = word.slice(-numberOfConsonants)
          // let newWord = consonants + word.slice(0, -numberOfConsonants)

          // // Check if the new word is in the list of swedish words
          // while (!this.#swedishWords.includes(newWord)) {
          //   // If the new word is not in the list of swedish words, move one more consonant from the end of the word to the front of the word
          //   numberOfConsonants++
          //   consonants = word.slice(-numberOfConsonants)
          //   newWord = consonants + word.slice(0, -numberOfConsonants)
          // }

          // Move the last consonant from the end of the word to the front of the word and check if the new word is in the list of swedish words
          // Then move the last two consonants from the end of the word to the front of the word and check if the new word is in the list of swedish words
          // And then the last three consonants, and so on
          let newWord = ''
          let numberOfConsonants = 0
          do {
            numberOfConsonants++

            // Copy the last consonant from the end of the word
            const consonants = word.slice(-numberOfConsonants)

            // Move the consonants from the end of the word to the front of the word
            newWord = consonants + word.slice(0, -numberOfConsonants)
          } while (!this.#swedishWords.includes(newWord))

          // When the new word is in the list of swedish words, the while loop ends and the word is translated
          translatedWord = newWord
        }

        // let numberOfConsonants = 0

        // // As long as word is not in the list of swedish words, move one or many consonants from the end of the word to the front of the word
        // while (!this.#swedishWords.includes(word)) {

        // }

        // // When the word is in the list of swedish words, the while loop ends and the word is translated
        // translatedWord = word
      }
    } else {
      // Throw an error if the word doesn't end with 'all'
      throw new Error(`The word '${word}' is not a valid All Language word.`)
    }
    return translatedWord
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

  /**
   * Private method to load the swedish words from the JSON file.
   */
  async #loadSwedishWords () {
    try {
      // Read the JSON file with the swedish words
      // const data = await fs.readFile('../data/svenska-ord.json', 'utf8')

      // // Parse the JSON data and save it as an array
      // this.#swedishWords = JSON.parse(data)

      // Read the JSON file with the swedish words
      await fs.readFileAsync('./data/svenska-ord.json', 'utf8', (err, data) => {
        if (err) {
          throw err
        }

        // Parse the JSON data and save it as an array
        this.#swedishWords = JSON.parse(data)
        console.log(this.#swedishWords)
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
