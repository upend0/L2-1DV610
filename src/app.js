import { AllLanguageTranslator } from './AllLanguageTranslator.js'

try {
  // Read the input from the user
  // The first input is a number for a menu choice, where 1 is to translate to All Language and 2 is to translate from All Language.
  // The second input is the string to translate.
  const menuChoice = Number(process.argv[2])
  const stringToTranslate = process.argv.slice(3).join(' ')

  console.log(menuChoice)
  console.log(stringToTranslate)

  // Create a new allLanguageTranslator object
  const allLanguageTranslator = new AllLanguageTranslator()

  // Translate the string
  const translatedString = allLanguageTranslator.translateString(stringToTranslate)

  // Print the translated string
  console.log(translatedString)
} catch (error) {
  console.error(error)
}
