
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

## Generell reflektion 

### Namngivning
En viktig lärdom att dra från dessa reflektioner är angående namngivningen av klasser, metoder och variabler. Det är av stor vikt att använda tydliga och informativa namn som gör koden läsbar och lättförståelig. Namnen bör tydligt indikera på vad som ska ske i metoden eller med variabeln, så att det går att endast läsa namnen och sedan förstå vad som händer utan att läsa själva koden. Och även om det kan vara lockande att försöka skoja till det lite i namngivningen, så är det bra att erinra sig om att detta nog tyvärr kan leda till ökad förvirring. 

### Funktioner/metoder
Därtill finns det flera viktiga lärdomar att dra från reflektionerna kring funktioner. Något viktigt är att se till att varje funktion/metod endast gör en sak (som helst är att antingen utföra något eller returnera något), att den håller sig till samma abstraktionsnivå, och att den inte har några sidoeffekter. Dessutom är det av stor vikt att metoderna är små och lättöverskådliga, samt har namn som tydligt beskriver vad de gör. Det är också av stor vikt att aktivt arbeta med att inte upprepa kod; att hålla koden DRY.

### Kommentarer
I denna modul finns det otroligt mycket kommentarer. Har JSDOC-kommenterar till varje metod samt klass, och de tillför inte någon ytterligare information om varför något görs, utan förklarar mer vad som görs. Enligt boken kan dessa JSDOC-kommentarer anses redundanta, vilket jag till mångt och mycket kan hålla med om. Dock anser jag även att dessa kommentarer har en viss betydelse när det kommer till få en snabb förståelse för parametrar och vad en metod returnerar, eftersom att det (inbyggt?) i VSC finns möjligheten att hovra över ett metodnamn och då få upp en ruta innehållande informationen i JSDOC-kommentaren, där det då snabbt blir tydligt vilka argument och returer som kan förväntas.

Därtill finns det väldigt många radkommentarer i denna modul. Dessa kommentarer uppkommer oftast för att de har blivit en del av min utvecklingsprocess, där jag brukar punkta upp vad som jag tänkt ska göras i kommentarer först, och sedan skriver själva koden. Därtill lägger jag också till olika frågor och funderingar angående koden genom att skriva radkommentarer (som dessutom kan färgkodas eftersom jag använder tillägget Colorful Comments). Därutöver så har jag märkt att jag som utvecklare föredrar kod med lite för mycket kommentarer över kod med lite för lite kommentarer, och brukar därför inte snåla med mina egna kommentarer. Även att jag särskilt mot slutet av ett projekt brukar gå igenom de flesta kommentarerna för att radera onödiga sådana, så brukar många bli kvar i slutändan, vilket även är tydligt i denna modul.

