
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

## Reflektion – kapitel 2

### Use intention-revealing names
Koden i modulen visade på både namn där det var lätt att förstå vad som skedde, utan att kolla vidare på koden utan genom att endast läsa namnet. Exempelvis i variabeln stringToTranslate framgick det tydligt att denna sträng senare skulle översättas, och i metoden translateToRobberLanguage var det även lättförståeligt att det i denna metod skulle ske en översättning till rövarspråket. Dock är klassnamnet SuperStringFixer mer otydligt, då det är svårt att utläsa vad som egentligen ska fixas i denna klass. Därtill används variabelnamnet words ofta genom hela modulen, vilket tyvärr saknar information om vilket språk som ordet är på, vilket kan leda till onödig förvirring i och med att så många olika språk hanteras i denna modul. Bättre alternativ istället för att enkom ha words som variabelnamn hade varit att skapa tydligare distinktioner mellan klasserna och metoderna genom att exempelvis ha namnen figWords, robberWords och pWords istället.

### Use domain names
I vissa fall i modulen finns det exempel på när namn borde ha bytts ut till mer domän-specifika. Ett sådan fall återfinns i metoden #translateWordsFromFigLanguage där en namngivning såsom exempelvis lastPartOfWord och firstPartOfWord kunde ha använts istället, då detta hade kunnat medföra extra tydlighet för personer med kunskap inom fikonspråkets domän (då de förhoppningsvis kunde inneha kännedom om att vid översättning från fikonspråket behövs det delar av två ord för att kombinera ihop till ett svenskt ord). 

### Pick one word per concept
Genomgående i modulen har metodnamn med prefixen translateTo valts för att visa på att något ska översättas, och där finns även metodnamn med prefixen translateWorsTo för att visa på att det är endast ett ord som skall översättas i den berörda metoden.

### Method names and class names
Generellt genom hela modulen så är namnen på metoderna verb – såsom translateToFigLanguage – och namnen på klasserna är substantiv – såsom AllLanguageTranslator.


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

## Reflektion – kapitel 3

### DRY (Don’t Repeat Yourself)
Flera av klasserna har väldigt liknande translateTo-metoder. Detta hade varit bra att arbeta bort och göra koden mer i linje med DRY-principen, men tyvärr har jag inte kommit på hur detta skulle kunna göras. Även metoden #isVowel bryter mot DRY-principen eftersom den finns i varje translator-klass. Denna hade möjligtvis gått att bryta ut till en metod i en egen klass, som sedan hade kunnat anropas från varje translator-klass.

### Do one thing
I denna modul finns det både exempel på metoder som håller sig till riktlinjen om att endast utföra en sak, men det finns även metoder som bryter mot den. En metod som bryter mot denna princip är checkFixString eftersom att den utför både valideringar av strängen som matas in (där det därtill kastas Errors om strängen på något sätt inte är giltig) och även förändrar strängen genom att ta bort onödiga mellanslag samt göra hela strängen till gemener. Detta är absolut inte att endast göra en sak, men jag har dock svårt att komma på hur jag skulle organisera om koden så att varje del av detta görs av endast en metod, och där koden samtidigt blir så DRY som möjligt.

Däremot finns det också flera exempel på metoder som endast gör en sak. Exempelvis alla metoder med prefixet translateWordTo där metoderna endast översätter ett ord till det berörda språket, samt metoden isVowel som endast kontrollerar om den bokstav som är input är en vokal eller inte, och som då returnerar ett booleanskt värde utifrån detta.

### Small functions
Generellt består modulen av klasser med metoder som är relativt små. Flera metoder är endast 5 rader kod – såsom checkStringLength, checkEmptyString, och isVowel – och de längsta metoderna är runt 14-16 rader kod – såsom translateWordFromRobberLanguage, translateWordFromPLanguage, och translateWordsFromFigLanguage. Dessa längsta metoder kan dock ändå betraktas som ganska korta, och verkar vara en okej längd enligt boken, då en enligt den helst inte bör överstiga 20 rader per funktion.


