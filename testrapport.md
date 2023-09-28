# Testrapport

Här är en testrapport som visar alla test som har utförts i modulen. Testerna är uppdelade och presenteras var klass för sig.

Samtliga tester körs med Jest. 
- Installera Jest genom kommandot `npm install` 
- Kör testerna genom kommandot `npm run test`

## Tester av AllLanguageTranslator

| Vad som testats / Ex metodnamn, eller krav | Hur det testats                                     | Testresultat  |
|-------------------------------------------|-----------------------------------------------------|----------------|
| should translate "hej på dig" to "ejhall åpall igdall"          | Metoden `translateToAllLanguage` anropades med "hej på dig". Förväntat resultat var "ejhall åpall igdall". | ✅       |
| should translate a single character word "ö" to "öall"      | Metoden `translateToAllLanguage` anropades med "ö". Förväntat resultat var "öall". | ✅       |
| should translate a word that starts with a vowel correctly | Metoden `translateToAllLanguage` anropades med "äpple". Förväntat resultat var "äppleall". | ✅       |
| should translate a word that ends with a vowel correctly | Metoden `translateToAllLanguage` anropades med "sjö". Förväntat resultat var "ösjall". | ✅       |
| should translate a word that contains a special character correctly     | Metoden `translateToAllLanguage` anropades med "idé". Förväntat resultat var "idéall". | ✅       |
| should translate a word with all lowercase letters correctly      | Metoden `translateToAllLanguage` anropades med "hej". Förväntat resultat var "ejhall". | ✅       |
| should translate a word with all uppercase letters correctly    | Metoden `translateToAllLanguage` anropades med "HEJ". Förväntat resultat var "ejhall". | ✅       |
| should handle leading and trailing spaces correctly | Metoden `translateToAllLanguage` anropades med "  hej på dig  ". Förväntat resultat var "ejhall åpall igdall". | ✅       |
| should handle multiple spaces between words correctly | Metoden `translateToAllLanguage` anropades med "hej    på    dig". Förväntat resultat var "ejhall åpall igdall". | ✅       |
| should handle mixed case input correctly | Metoden `translateToAllLanguage` anropades med "HeJ pÅ dIg". Förväntat resultat var "ejhall åpall igdall". | ✅       |

Alla dessa tester lyckades.

## Tester av FigLanguageTranslator

| Vad som testats / Ex metodnamn, eller krav | Hur det testats                                     | Testresultat  |
|-----------------------------------------------------------------|---------------------------------------------------|---------------|
| should translate "kaffe" to "fiffe kakon"                      | Metoden `translateToFigLanguage` anropades med "kaffe". Förväntat resultat var "fiffe kakon". | ✅       |
| should translate a single character word "ö" to "fi ökon"       | Metoden `translateToFigLanguage` anropades med "ö". Förväntat resultat var "fi ökon". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translateToFigLanguage` anropades med "äpple". Förväntat resultat var "fipple äkon". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translateToFigLanguage` anropades med "sjö". Förväntat resultat var "fi sjökon". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translateToFigLanguage` anropades med "idé". Förväntat resultat var "fidé ikon". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translateToFigLanguage` anropades med "kopp". Förväntat resultat var "fipp kokon". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translateToFigLanguage` anropades med "KOPP". Förväntat resultat var "fipp kokon". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translateToFigLanguage` anropades med "  hej   ". Förväntat resultat var "fij hekon". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translateToFigLanguage` anropades med "hej    på    dig". Förväntat resultat var "fij hekon fi påkon fig dikon". | ✅       |
| should handle mixed case input correctly                        | Metoden `translateToFigLanguage` anropades med "HeJ pÅ dIg". Förväntat resultat var "fij hekon fi påkon fig dikon". | ✅       |
| should translate "fiffe kakon" to "kaffe"                     | Metoden `translateFigToSwedish` anropades med "fiffe kakon". Förväntat resultat var "kaffe". | ✅       |
| should translate a single character word "fi ökon" to "ö"       | Metoden `translateFigToSwedish` anropades med "fi ökon". Förväntat resultat var "ö". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translateFigToSwedish` anropades med "fipple äkon". Förväntat resultat var "äpple". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translateFigToSwedish` anropades med "fi sjökon". Förväntat resultat var "sjö". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translateFigToSwedish` anropades med "fidé ikon". Förväntat resultat var "idé". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translateFigToSwedish` anropades med "fipp kokon". Förväntat resultat var "kopp". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translateFigToSwedish` anropades med "FIPP KOKON". Förväntat resultat var "kopp". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translateFigToSwedish` anropades med "  fij hekon   ". Förväntat resultat var "hej". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translateFigToSwedish` anropades med "fij   hekon   fi   påkon   fig   dikon". Förväntat resultat var "hej på dig". | ✅       |
| should handle mixed case input correctly                        | Metoden `translateFigToSwedish` anropades med "FiJ hEkOn Fi pÅkOn FiG dIkOn". Förväntat resultat var "hej på dig". | ✅       |
| should throw an error if the string is not in Fig Language     | Flera olika icke giltiga inmatningar testades. Alla förväntades kasta följande felmeddelande; "The string is not in FigLanguage." | ✅       |

Också alla dessa tester lyckades.

## Testning av ILanguageTranslator

| Vad som testats / Ex metodnamn, eller krav | Hur det testats                                     | Testresultat  |
|-----------------------------------------------------------------|---------------------------------------------------|---------------|
| should translate "hej på dig" to "hij pi dig"                  | Metoden `translateToILanguage` anropades med "hej på dig". Förväntat resultat var "hij pi dig". | ✅       |
| should translate a single character word "ö" to "i"            | Metoden `translateToILanguage` anropades med "ö". Förväntat resultat var "i". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translateToILanguage` anropades med "äpple". Förväntat resultat var "ippli". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translateToILanguage` anropades med "sjö". Förväntat resultat var "sji". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translateToILanguage` anropades med "idé". Förväntat resultat var "idi". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translateToILanguage` anropades med "hej". Förväntat resultat var "hij". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translateToILanguage` anropades med "HEJ". Förväntat resultat var "hij". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translateToILanguage` anropades med "  hej   ". Förväntat resultat var "hij". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translateToILanguage` anropades med "hej    på    dig". Förväntat resultat var "hij pi dig". | ✅       |
| should handle mixed case input correctly                        | Metoden `translateToILanguage` anropades med "Hej På Dig". Förväntat resultat var "hij pi dig". | ✅       |

Även alla dessa tester lyckades.

## Testning av PLanguageTranslator

| Vad som testats / Ex metodnamn, eller krav | Hur det testats                                     | Testresultat  |
|-----------------------------------------------------------------|---------------------------------------------------|---------------|
| should translate "hej på dig" to "hepej påpå dipig"           | Metoden `translateToPLanguage` anropades med "hej på dig". Förväntat resultat var "hepej påpå dipig". | ✅       |
| should translate a single character word "ö" to "öpö"          | Metoden `translateToPLanguage` anropades med "ö". Förväntat resultat var "öpö". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translateToPLanguage` anropades med "äpple". Förväntat resultat var "äpäpplepe". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translateToPLanguage` anropades med "sjö". Förväntat resultat var "sjöpö". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translateToPLanguage` anropades med "idé". Förväntat resultat var "ipidépé". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translateToPLanguage` anropades med "hej". Förväntat resultat var "hepej". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translateToPLanguage` anropades med "HEJ". Förväntat resultat var "hepej". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translateToPLanguage` anropades med "  hej   ". Förväntat resultat var "hepej". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translateToPLanguage` anropades med "hej    på    dig". Förväntat resultat var "hepej påpå dipig". | ✅       |
| should handle mixed case input correctly                        | Metoden `translateToPLanguage` anropades med "Hej På Dig". Förväntat resultat var "hepej påpå dipig". | ✅       |
| should translate "hepej påpå dipig" to "hej på dig"           | Metoden `translatePToSwedish` anropades med "hepej påpå dipig". Förväntat resultat var "hej på dig". | ✅       |
| should translate a single character word "öpö" to "ö"          | Metoden `translatePToSwedish` anropades med "öpö". Förväntat resultat var "ö". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translatePToSwedish` anropades med "äpäpplepe". Förväntat resultat var "äpple". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translatePToSwedish` anropades med "sjöpö". Förväntat resultat var "sjö". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translatePToSwedish` anropades med "ipidépé". Förväntat resultat var "idé". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translatePToSwedish` anropades med "hepej". Förväntat resultat var "hej". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translatePToSwedish` anropades med "HEPEJ". Förväntat resultat var "hej". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translatePToSwedish` anropades med "  hepej   ". Förväntat resultat var "hej". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translatePToSwedish` anropades med "hepej    påpå    dipig". Förväntat resultat var "hej på dig". | ✅       |
| should handle mixed case input correctly                        | Metoden `translatePToSwedish` anropades med "Hepej Påpå Dipig". Förväntat resultat var "hej på dig". | ✅       |
| should throw an error if the string is not in PLanguage         | Metoden `translatePToSwedish` anropades med olika strängar som inte är i P-språket. Förväntat resultat var att ett fel skulle kastas med meddelandet "The string is not in PLanguage.". | ✅       |

Även samtliga dessa test lyckades.

## Testning av RobberLanguageTranslator

| Vad som testats / Ex metodnamn, eller krav | Hur det testats                                     | Testresultat  |
|-----------------------------------------------------------------|---------------------------------------------------|---------------|
| should translate "hej på dig" to "hohejoj popå dodigog"       | Metoden `translateToRobberLanguage` anropades med "hej på dig". Förväntat resultat var "hohejoj popå dodigog". | ✅       |
| should translate a single character word "ö" to "ö"            | Metoden `translateToRobberLanguage` anropades med "ö". Förväntat resultat var "ö". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translateToRobberLanguage` anropades med "äpple". Förväntat resultat var "äpoppoplole". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translateToRobberLanguage` anropades med "sjö". Förväntat resultat var "sosjojö". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translateToRobberLanguage` anropades med "idé". Förväntat resultat var "idodé". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translateToRobberLanguage` anropades med "hej". Förväntat resultat var "hohejoj". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translateToRobberLanguage` anropades med "HEJ". Förväntat resultat var "hohejoj". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translateToRobberLanguage` anropades med "  hej   ". Förväntat resultat var "hohejoj". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translateToRobberLanguage` anropades med "hej    på    dig". Förväntat resultat var "hohejoj popå dodigog". | ✅       |
| should handle mixed case input correctly                        | Metoden `translateToRobberLanguage` anropades med "Hej På Dig". Förväntat resultat var "hohejoj popå dodigog". | ✅       |
| should translate "kokafoffofe" to "kaffe"                     | Metoden `translateRobberToSwedish` anropades med "kokafoffofe". Förväntat resultat var "kaffe". | ✅       |
| should translate a single character word "ö" to "ö"            | Metoden `translateRobberToSwedish` anropades med "ö". Förväntat resultat var "ö". | ✅       |
| should translate a word that starts with a vowel correctly     | Metoden `translateRobberToSwedish` anropades med "äpoppoplole". Förväntat resultat var "äpple". | ✅       |
| should translate a word that ends with a vowel correctly       | Metoden `translateRobberToSwedish` anropades med "sosjojö". Förväntat resultat var "sjö". | ✅       |
| should translate a word that contains a special character correctly | Metoden `translateRobberToSwedish` anropades med "idodé". Förväntat resultat var "idé". | ✅       |
| should translate a word with all lowercase letters correctly  | Metoden `translateRobberToSwedish` anropades med "hohejoj". Förväntat resultat var "hej". | ✅       |
| should translate a word with all uppercase letters correctly  | Metoden `translateRobberToSwedish` anropades med "HOHEJOJ". Förväntat resultat var "hej". | ✅       |
| should handle leading and trailing spaces correctly            | Metoden `translateRobberToSwedish` anropades med "  hohejoj   ". Förväntat resultat var "hej". | ✅       |
| should handle multiple spaces between words correctly          | Metoden `translateRobberToSwedish` anropades med "hohejoj    popå    dodigog". Förväntat resultat var "hej på dig". | ✅       |
| should handle mixed case input correctly                        | Metoden `translateRobberToSwedish` anropades med "Hohejoj Popå Dodigog". Förväntat resultat var "hej på dig". | ✅       |
| should throw an error if the string is not in RobberLanguage   | Metoden `translateRobberToSwedish` anropades med olika strängar som inte är på rövarspråket. Förväntat resultat var att ett fel skulle kastas med meddelandet "The string is not in RobberLanguage.". | ✅       |

Dessa testter lyckades även de samtliga.

## Testning av SuperStringFixer

| Vad som testats / Ex metodnamn, eller krav | Hur det testats                                     | Testresultat  |
|-----------------------------------------------------|---------------------------------------------------|---------------|
| should throw an error when the string is empty      | Ett testfall kördes med en tom sträng som inmatning. Förväntat beteende var att kasta ett fel med meddelandet "The string is empty." | ✅       |
| should throw an error when the string exceeds the maximum allowed length | Ett testfall kördes med en sträng som överskrider den maximalt tillåtna längden (10 000 tecken). Förväntat beteende var att kasta ett fel med meddelandet "The string exceeds the maximum allowed length of 10000 characters." | ✅       |
| should throw an error when the string contains invalid characters | Ett testfall kördes med en sträng som innehöll ogiltiga tecken; "hej123!". Förväntat beteende var att kasta ett fel med meddelandet "The string contains invalid characters." | ✅       |
| should throw an error for input with potential XSS attack | Flera testfall kördes med inmatningssträngar som potentiellt kan användas för XSS-attacker. Förväntat beteende var att kasta ett fel med meddelandet "The string contains invalid characters." för varje inmatning. | ✅       |

Också alla dessa tester lyckades.

