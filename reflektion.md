
- tabellreflektioner för kap 2 med fem namn
- kort reflektion för hela kap 2
- tabellreflektioner för kap 3 med fem funktioner
- kort reflektion för hela kap 3
- Reflektion om kodkvalitet mer generell


## Tabellreflektion - kapitel 2

| Namn och förklaring             | Reflektion och regler från ch 2 Clean Code                                             |
|---------------------------------|-------------------------------------------------------------------------------------------|
| SuperStringFixer – klass med metoder som kontrollerar och snyggar till strängar                | Use intention-revealing names – svårt att förstå vad som egentligen sker i denna klass |
|                                 | Don't be cute – lite väl klatschigt namn istället för att det är informativt         |
| word/words – variablenamn använt i många klasser och metoder, när en sträng delas upp i ord för översättning                      | Use intention-revealing names – förtäljer inte vilket språk ordet är på, eller vad en kan/vill göra med ordet |
|                                 | Make meaningful distinctions – visserligen sträcker sig inte variablernas scope så långt att de kan ställa till det för varandra, men det hade ändå varit tydligare om det fanns tydliga distinktioner i namnen såsom figWords, robberWord, och pWord |
| words[i] och words[i + 1] – används i #translateWordsFromFigLanguage för att benämna den sista samt första delen av det svenska ordet        | Use domain names – variabelnamn såsom lastPartOfWord och firstPartOfWord borde ha använts istället, vilket hade medfört extra tydlighet för personer med kunskaper inom fikonspråkets uppbyggnad (att orden delas upp) |
| translateToFigLanguage och translateToRobberLanguage – publika metoder där strängar översätts till respektive språk | Method names – innehåller verb som förklarar tydligt vad metoderna gör |
|                                 | Use intention-revealing names – går att förstå vad metoderna gör genom att bara titta på namnen |
|                                 | Pick one word per concept – för översättning till ett påhittat språk har konsekvent translateTo använts |
| translatedString – den översatta strängen               | Avoid encodings – borde inte skriva in string i namnet, men eftersom js inte är hårt typat tycker jag att det bidrar till tydlighet i denna viktiga variabel |
|                                 | Use domain names – andra programmerare kan förstå typen av variabel och att det kan vara allt från ett ord långt till flera meningar |


## Tabellreflektion - kapitel 3

| Namn och förklaring                        | Reflektion och regler från ch 3 Clean Code                                        |
|--------------------------------------------|----------------------------------------------------------------------------------|
| checkFixString – kontrollerar att strängen som inkommer är okej, tar bort onödiga mellanslag, gör alla bokstäver till gemener | Do one thing – denna metod gör en massa saker, både gällande validering och att snygga till strängen |
|                                             | Use descriptive names – ganska oklart vad för någon ”fix” som utförs |
|                                             | Command query separation – metoden både utför kontroller och returnerar en tillfixad sträng |
|                                             | One abstraction level – mestadels hög abstraktionsnivå, men sen kommer det helt plötsligt .trim() och .toLowerCase() som är på lägre abstraktionsnivå |
| isVowel – kontrollerar om en bokstav är en vokal | DRY – finns i varje translator-klass |
|                                             | Use descriptive names – namnet berättar tydligt vad metoden gör, och skvallrar dessutom om att det bör vara en boolean som returneras eftersom metodnamnet börjar på ”is” |
|                                             | Do one thing – metoden gör endast denna kontroll |
| translateWordFromPLanguage – översätter ett ord från P-språket till svenska | Indentation level – denna metod innehåller tre lager av nästlade for och if, vilket kan göra koden onödigt komplicerad och svårförståelig |
| translateWordToFigLanguage – översätter ett ord till fikon-språket | Do one thing – denna metod gör bara detta |
|                                             | Side effects – metoden har inga observerbara sidoeffekter, utan den returnerar endast ordet översatt, och har ingen påverkan på originalordet |
| checkEmptyString – kontrollerar om den inmatade strängen är tom, och slänger i sådana fall ett Error | Small functions – metoden är endast fyra rader |
|                                             | One abstraction level – hela metoden har låg abstraktionsnivå |
|                                             | Monadic – tar in ett arguments, vilket det ställs en fråga om |
|                                             | Side effects – har svårt att avgöra om ett kastat Error kan betraktas som en sidoeffekt… |

