---
layout: page
title: "Vocabulary of Unknown Origin"
description: "Vocabulary of Unknown Origin"
tags: [Assets]
---
{% include JB/setup %}


### Overview:

This is the first stage of using modern data science tools to investigate the etymological mysteries that David Frank highlighted in his 2007 work ["Sources of St. Lucian Creole Vocabulary'](http://saintluciancreole.dbfrank.net/workpapers/sources_of_vocabulary.pdf) {% cite frank2007sources %}. With the resources available to him at that time, Frank was able to identify Saint Lucian Kwéyòl Vocabulary of French, English, Indian,  African, Amerindian, and Spanish or Portuguese origin {% cite frank2007sources %}. And yet, one of the last sections of that work highlighted 'Vocabulary of Unknown Origin' {% cite frank2007sources %}. That vocabulary list will be the focus of this investigation.

### Methodology:

Current modern tools do not currently accommodate the Saint Lucian Kwéyòl language. However, attempts were made to explore their current capabilities. One can hypothesize that while these tools would not accurately translate the list of Saint Lucian Kwéyòl language words of unknown etymology, underlying etymological links could be drawn from languages detected and their output. Therefore, it was speculated that if similarities were uncovered, the languages' dictionaries could serve as a more direct unveiling of the shared etymology {% cite frank2001kweyol%}. The output could then be clustered for ease of viewing and analysis. Further exploration would include a quantifiable check on the word similarities; particularly, on the manually annotated and highlighted instances. Ultimately, creating a code to automate and link these tasks could improve future efforts at using data science to decipher details of other creole languages.

### Tools:
The word list would be run through two free language detection tools offered by Google. These being GoogleTranslate web application (translate.google.com) and the Google Spreadsheet function  (=GOOGLETRANSLATE(DETECTLANGUAGE(X)) via a personal docs.google.com/spreadsheets account). Both were used as a means of confirming or clarifying details for a more comprehensive final output. 
For example, the results of the GoogleTranslate application can suggest alternative spellings or other possible languages with tweaking of characters or context. However, it only has the exact name of the detected language, but no language code. The Google Spreadsheet can suggest a language code and thus detect a language, however, it is a flawed tool. Some codes appear to be outside of the established 'Codes for the Representation of Names of Languages' {% cite loc_2013 %}, and thus appear to incorrectly detect some languages. While issues, such as detections of English words being recognized as 'on' rather than the standard 'en' can be present, this tool's output can be used to confirm those of GoogleTranslate. However, occasionally, the output can indeed diverge from GoogleTranslate. These instances can, however, be viewed as useful to the refining of overall language comparison options. Notes were made on such observations. 
	
### Results and Discussion *thus far*:

Manual annotations noted some possible similarities in scattered among several languages. For example, "awa"  (meaning ‘No! Oh no!’; typically used to express pity, surprise, or disbelief) was translated as "pity" in the Cebuano language (Ceb). Additionally, "chwichwi" (meaning ‘to whisper’) was translated as "squeak" in Welsh. Notably, these similarities appear to be linked to sounds and possible onomatopoeia. 

The majority of the source vocabulary list was unsurprisingly detected as being Haitian Creole - another creole language within the same region. However, the majority of those words that were detected as Haitian Creole, did not share meanings with Saint Lucian Kwéyòl. Nonetheless, Haitian Creole did have the most instances of possible vocabulary overlap. 

Yet, this was not without confusion. For instance, while both languages share the word 'fòs', meaning 'force, strength'. However, Saint Lucian Kwéyòl assigns an additional meaning to the word. The etymological mystery lies with its use as 'furrow, mound, heap, hillock, knoll for planting'. This issue also occurred with the word 'manm'. Both share the meaning of 'member' (of a group), however, the etymological mystery lies with its use as 'muscle'. The word 'Mèyè' also experiences this confusion. Both words can be used as the adjective 'better', yet the details of the additional use as the title of 'Mistress' is unknown.

The scope had to be narrowed for drawing similarities with manual annotation to reduce possible interpreter bias and subjectivity. For example, one could make the case for similarities in the meaning and application of the word 'galè' While this is yet another word with multiple meanings in Saint Lucian Kwéyòl, its reference to woodwork 'plane' may be associated with Haitian Creole's use as 'galley'; both relate to carpentry.
	
Thus far between four and eleven words were found to overlap in spelling and have matching or similar meanings. The results are in Table 1. For example, the word 'fanmchay' is recognized as 'midwife' in both languages. 

[Table1](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/ht_translationtable.PNG){: width="600" }

Overall, it should be noted that there were some inconsistencies between the output of the two Google language detection tools. For example, it did appear that some words were detected as Belarusian via the Google Spreadsheet, yet Finnish via GoogleTranslate. This also occurred with Bengali (with the former) and  Bangla (with the latter). Other words were detected as English via the Google Spreadsheet, yet Swedish with GoogleTranslate, or viewed as Hungarian with the former, yet English or Dutch with the latter.

Detection of such as 'las', 'pijé', 'tan', 'taza', and 'waz', appeared to be the most problematic. Google Spreadsheet struggled to provide a singular suggestion, and so provided the non-standard language code 'it is', which could be interpreted as bearing Italian and Icelandic options. However, GoogleTranslate detected most of those words as either Italian, Spanish, or English. 

Moreover, Google Spreadsheet produced random codes for languages that GoogleTranslate appeared to handle better. For example, some words that GoogleTranslate detected as Catalan, Google Spreadsheet provided a non-standard language code of 'that'. Other instances included Sundanese words noted as 'its', Esperanto as 'it's the', Corsican as 'What', Arabic as 'With', Japanese (and Estonian) as 'and', Turkish as 'trick', Vietnamese as 'we', and Nyanja as 'new'.



### References:


{% bibliography --cited %}

{% include JB/setup %}