# L2-1DV610

This is a school project done in the course 1dv610 at Linnaeus University.

The project includes translators for various made-up languages, including All-Language, Robber Language, Fig Language, I-Language, and P-Language.

## Disclaimer
The code in this project is not the best it could be, and it still has a lot of areas that could be improved in accordance with the guidelines presented in the book Clean Code - A Handbook of Agile Software Craftmanship written by Robert C. Martin. Many of these areas are discussed (in Swedish) in the [reflektion.md](./reflektion.md), and some can also be seen by looking at line comments with discussions about improvements. There were simply not enough time to fix more of the imperfections.

However, some imperfections have been fixed, like:
* Writing a more explanatory and explicit README
* Changing the confusing name of AllLanguage to TheAllLanguage
* Changing the app.js to export all the translator-classes from one place.
* Make the code a bit more DRY (Don't Repeat Yourself) by creating the Utilities class and place the much used isVowel method there.

## Installation
Install the dependencies with `npm install`

## Information about the languages (in Swedish)
- [All-språket - Wikipedia](https://sv.wikipedia.org/wiki/Allspr%C3%A5ket)
- [Fikonspråket - Wikipedia](https://sv.wikipedia.org/wiki/Fikonspr%C3%A5ket)
- [I-språket - Wikipedia](https://sv.wikipedia.org/wiki/I-spr%C3%A5ket)
- [P-språket - Rilpedia](https://sv.rilpedia.org/wiki/P-spr%C3%A5ket)
- [Rövarspråket - Wikipedia](https://sv.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket)

### Examples of translations

Translating the Swedish sentence "hej på dig":
| Language         | Translation                  |
|------------------|------------------------------|
| All-språket      | ejhall åpall igdall         |
| Fikonspråket     | fij hekon fi påkon fig dikon |
| I-språket        | hij pi dig                   |
| P-språket        | hepej påpå dipig            |
| Rövarspråket     | hohejoj popå dodigog         |


## Classes and their public methods

### Class: TheAllLanguageTranslator
A class that translates a string to the All Language.

#### Public methods
* `translateToTheAllLanguage(stringToTranslate)`: Translates a string to the All Language.

### Class: RobberLanguageTranslator
A class that translates a string to Robber Language and vice versa.

#### Public methods
* `translateToRobberLanguage(stringToTranslate)`: Translates a string to Robber Language.
* `translateRobberToSwedish(stringToTranslate)`: Translates a string from Robber Language to Swedish.

### Class: FigLanguageTranslator
A class that translates a string to Fig Language and vice versa.

#### Public methods
* `translateToFigLanguage(stringToTranslate)`: Translates a string to Fig Language.
* `translateFigToSwedish(stringToTranslate)`: Translates a string from Fig Language to Swedish.

### Class: ILanguageTranslator
A class that translates a string to ILanguage.

#### Public methods
* `translateToILanguage(stringToTranslate)`: Translates a string to ILanguage.

### Class: PLanguageTranslator
A class that translates a string to PLanguage and vice versa.

#### Public methods
* `translateToPLanguage(stringToTranslate)`: Translates a string to PLanguage.
* `translatePToSwedish(stringToTranslate)`: Translates a string from PLanguage to Swedish.

## Tests
The tests are done with Jest. After the dependencies (which includes Jest) have been installed, run the tests with `npm run test`

## Further development

### Code quality improvement
The code base can still be improved a lot in accordance with the guidelines presented in the book Clean Code - A Handbook of Agile Software Craftmanship written by Robert C. Martin. Many of these areas of improvement are discussed (in Swedish) in the [reflektion.md](./reflektion.md), and some can also be seen by looking at line comments with discussions about improvements.

### Extensions used
When developing, Visual Studio Code has been used along with some extensions. One extension that has been used frequently is named Colorful Comments, and it makes the comments color coded, which is helpful for dividing comments in different topics - like comments about areas to improve.

### List of Swedish words
The list of Swedish words that are used in this project comes from [GitHub - almgru - svenska-ord](https://github.com/almgru/svenska-ord.txt). This is not used right now, but it is still there for when the module is developed further to implement a translator from AllLanguage to Swedish and from ILanguage to Swedish.

## Author 
Maria Fredriksson <mf223wk@student.lnu.se>