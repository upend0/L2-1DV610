import { AllLanguageTranslator } from './AllLanguageTranslator.js'
import { FigLanguageTranslator } from './FigLanguageTranslator.js'
import { ILanguageTranslator } from './ILanguageTranslator.js'
import { PLanguageTranslator } from './PLanguageTranslator.js'
import { RobberLanguageTranslator } from './RobberLanguageTranslator.js'

// & Kanske byta namn till TheAllLanguageTranslator eller ThePretendAllLanguageTranslator...?

export const translator = {
  allLanguageTranslator: new AllLanguageTranslator(),
  figLanguageTranslator: new FigLanguageTranslator(),
  iLanguageTranslator: new ILanguageTranslator(),
  pLanguageTranslator: new PLanguageTranslator(),
  robberLanguageTranslator: new RobberLanguageTranslator()
}
