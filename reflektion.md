
- tabellreflektioner för kap 2 med fem namn
- kort reflektion för hela kap 2
- tabellreflektioner för kap 3 med fem funktioner
- kort reflektion för hela kap 3
- Reflektion om kodkvalitet mer generell


## Tabellreflektion - kapitel 2

| Namn och förklaring             | Reflektion och regler från ch 2 Clean Code                                             |
|---------------------------------|-------------------------------------------------------------------------------------------|
| SuperStringFixer                | Use intention-revealing names – svårt att förstå vad som egentligen sker i denna klass |
|                                 | Don't be cute – lite väl klatschigt namn istället för att det är informativt         |
| word/words                      | Use intention-revealing names – förtäljer inte vilket språk ordet är på, eller vad en kan/vill göra med ordet |
|                                 | Make meaningful distinctions – visserligen sträcker sig inte variablernas scope så långt att de kan ställa till det för varandra, men det hade ändå varit tydligare om det fanns tydliga distinktioner i namnen såsom figWords, robberWord, och pWord |
| words[i] och words[i + 1]        | Use domain names – variabelnamn såsom lastPartOfWord och firstPartOfWord borde ha använts istället, vilket hade medfört extra tydlighet för personer med kunskaper inom fikonspråkets uppbyggnad (att orden delas upp) |
| translateToFigLanguage och translateToRobberLanguage | Method names – innehåller verb som förklarar tydligt vad metoderna gör |
|                                 | Use intention-revealing names – går att förstå vad metoderna gör genom att bara titta på namnen |
|                                 | Pick one word per concept – för översättning till ett påhittat språk har konsekvent translateTo använts |
| translatedString                | Avoid encodings – borde inte skriva in string i namnet, men eftersom js inte är hårt typat tycker jag att det bidrar till tydlighet i denna viktiga variabel |
|                                 | Use domain names – andra programmerare kan förstå typen av variabel och att det kan vara allt från ett ord långt till flera meningar |

