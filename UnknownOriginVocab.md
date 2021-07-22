---
layout: page
title: "Vocabulary of Unknown Origin"
description: "Vocabulary of Unknown Origin"
tags: [Assets]
---
{% include JB/setup %}

### Overview:

The complexity of creoles can demonstrate a unique symbiotic relationship with current language detection tools; for example, the mysteries of a low-resource creole language can be explored, while simultaneously challenging current language detection/ identification tools.

This work will first explore various modern data science tools to investigate the etymological mysteries that David Frank manually annotated in his 2007 work ['Sources of St. Lucian Creole Vocabulary'](http://saintluciancreole.dbfrank.net/workpapers/sources_of_vocabulary.pdf) {% cite frank2007sources %}. With the resources available to him at that time, Frank was able to identify Saint Lucian Kwéyòl Vocabulary of French, English, Indian,  African, Amerindian, and Spanish or Portuguese origin {% cite frank2007sources %}. 

And yet, one of the last sections of that work highlighted that almost twelve percent of his language dataset consisted of 'Vocabulary of Unknown Origin' {% cite frank2007sources %}. That Kwéyòl (language code ACF) vocabulary list will be the focus of this investigation. 

It should be noted that Frank did include a few of his attempts at addressing the issues of the vocabulary list. He suggested that some of these could indeed have a French source, but that he could not provide a precise French form that adequately matched up with the Kwéyòl equivalent. While not all words of this list would have links to the French language, 'ankléwant', 'finisman', 'hayisans', and 'kléwé', were noted as possibly having French sources. Thus the existing hypothesis is that most of the unknown words may have French sources that are yet to be revealed.

* *need to include literature review details on other currently available language detection/identification software/tools*

* *need to include other details concerning the exploration of words by dimensions matrix*


### Methodology:

Current modern tools do not currently accommodate the Saint Lucian Kwéyòl language. However, attempts were made to explore their current capabilities. One can hypothesize that while these tools would not accurately translate the list of Saint Lucian Kwéyòl language words of unknown etymology, underlying etymological links could be drawn from languages detected and their output. Therefore, it was speculated that if similarities were uncovered, the languages' dictionaries could serve as a more direct unveiling of the shared etymology {% cite frank2001kweyol%}. The output could then be clustered for ease of viewing and analysis. Further exploration would include a quantifiable check on the word similarities; particularly, on the manually annotated and highlighted instances. Ultimately, creating a code to automate and link these tasks could improve future efforts at using data science to decipher details of other creole languages.

* *Explain how words by dimensions matrix will be used here*

### Tools:

The word list would be run through two free language detection tools offered by Google. These being GoogleTranslate web application (translate.google.com) and the Google Spreadsheet function  (=GOOGLETRANSLATE(DETECTLANGUAGE(X)) via a personal docs.google.com/spreadsheets account). Both were used as a means of confirming or clarifying details for a more comprehensive final output. 
For example, the results of the GoogleTranslate application can suggest alternative spellings or other possible languages with tweaking of characters or context. However, it only has the exact name of the detected language, but no language code. The Google Spreadsheet can suggest a language code and thus detect a language, however, it is a flawed tool. Some codes appear to be outside of the established 'Codes for the Representation of Names of Languages' {% cite loc_2013 %}, and thus appear to incorrectly detect some languages. While issues, such as detections of English words being recognized as 'on' rather than the standard 'en' can be present, this tool's output can be used to confirm those of GoogleTranslate. However, occasionally, the output can indeed diverge from GoogleTranslate. These instances can, however, be viewed as useful to the refining of overall language comparison options. Notes were made on such observations. 
	
### Results and Discussion *thus far*:

*So far I have created a [Google spreadsheet](https://docs.google.com/spreadsheets/d/1eQUGn4ctRv5oCrpVZf_GCJQ8WL9hmrON4sMsudlnMx8/edit?usp=sharing) to note the results of both tools when compared to the definitions of Frank's ACF dictionary.

As noted before, Frank did attempt to address the issues of the vocabulary list by suggesting that most of these words might have French sources. However, only a few words in this dataset aligned with his French suggestion and were indeed detected as French. For example, the word 'ankléwant' (shiny) was suggested to have a French source. This assumption was supported by both Google tools. The strongest connection appears to have been with Frank's annotation that the French's 'soeur' had a direct connection with ACF's 'sésé' (sister). This assumption was supported by both Google tools. 

[Table1](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/GT_French.PNG){: width="600" }

The majority of the source vocabulary list was unsurprisingly detected as being Haitian Creole - another creole language within the same region.  While about 26 instances of French were detected, at least 127 instances of Haitian creole were detected. However, the majority of those words that were detected as Haitian Creole did not share meanings with Saint Lucian Kwéyòl. Nonetheless, Haitian Creole did have the most instances of possible vocabulary overlap. 

Yet, this was not without confusion. For instance, while both languages share the word 'fòs', meaning 'force, strength'. However, Saint Lucian Kwéyòl assigns an additional meaning to the word. The etymological mystery lies with its use as 'furrow, mound, heap, hillock, knoll for planting'. This issue also occurred with the word 'manm'. Both share the meaning of 'member' (of a group), however, the etymological mystery lies with its use as 'muscle'. The word 'Mèyè' also experiences this confusion. Both words can be used as the adjective 'better', yet the details of the additional use as the title of 'Mistress' is unknown.

Manual annotations noted some possible similarities in scattered among several languages. For example, "awa"  (meaning ‘No! Oh no!’; typically used to express pity, surprise, or disbelief) was translated as "pity" in the Cebuano language (Ceb). Additionally, "chwichwi" (meaning ‘to whisper’) was translated as "squeak" in Welsh. Notably, these similarities appear to be linked to sounds and possible onomatopoeia. 

The scope had to be narrowed for drawing similarities with manual annotation to reduce possible interpreter bias and subjectivity. For example, one could make the case for similarities in the meaning and application of the word 'galè' While this is yet another word with multiple meanings in Saint Lucian Kwéyòl, its reference to woodwork 'plane' may be associated with Haitian Creole's use as 'galley'; both relate to carpentry.
	
Thus far, between four and eleven words were found to overlap in spelling and have matching or similar meanings. The results are in Table 1. For example, the word 'fanmchay' is recognized as 'midwife' in both languages. 

[Table2](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/ht_translationtable.PNG){: width="600" }

Overall, it should be noted that there were some inconsistencies between the output of the two Google language detection tools. For example, it did appear that some words were detected as Belarusian via the Google Spreadsheet, yet Finnish via GoogleTranslate. This also occurred with Bengali (with the former) and  Bangla (with the latter). Other words were detected as English via the Google Spreadsheet, yet Swedish with GoogleTranslate, or viewed as Hungarian with the former, yet English or Dutch with the latter.

Detection of such words as 'las', 'pijé', 'tan', 'taza', and 'waz', appeared to be the most problematic. Google Spreadsheet struggled to provide a singular suggestion, and so provided the non-standard language code 'it is', which could be interpreted as bearing Italian and Icelandic options. However, GoogleTranslate detected most of those words as either Italian, Spanish, or English. This could be due to some word structures (stems, etc.) being shared or being to others within the same Romance language grouping; Spanish, Italian, Romanian, Portuguese, and French fall into this category, however, Spanish and Italian appear to be difficult to decipher.

Moreover, Google Spreadsheet produced random codes for languages that GoogleTranslate appeared to handle better. For example, some words that GoogleTranslate detected as Catalan, Google Spreadsheet provided a non-standard language code of 'that'. Other instances included Sundanese words noted as 'its', Esperanto as 'it's the', Corsican as 'What', Arabic as 'With', Japanese (and Estonian) as 'and', Turkish as 'trick', Vietnamese as 'we', and Nyanja as 'new'.



### References:


{% bibliography --cited %}

{% include JB/setup %}