---
layout: page
title: "Vocabulary of Unknown Origin"
description: "Vocabulary of Unknown Origin"
tags: [Assets]
---
{% include JB/setup %}
### Overview:

Modern communication and educational tools can facilitate the ease of creation of new languages as well as the study and preservation of others. The complexity of creoles can demonstrate a unique symbiotic relationship with current language detection tools; for example, the mysteries of a low-resource creole language can be explored, while simultaneously challenging current language detection/ identification tools. For example, within the Caribbean, several creoles exist; many of which are intrinsically linked due to their different yet shared histories of colonization. This work aims to explore the outputs of various modern language detection/ tools when encountering a language that is not included in their knowledge banks and addresses lingering etymological concerns.

Saint Lucian Kwéyòl can currently be viewed as a low-resource language as it is mostly orally passed on, its current vitality is unknown, and is unavailable via most modern language translation tools. Moreover, it bears etymological mysteries that David Frank manually annotated in his 2007 work ['Sources of St. Lucian Creole Vocabulary'](http://saintluciancreole.dbfrank.net/workpapers/sources_of_vocabulary.pdf) {% cite frank2007sources %}. With the resources available to him at that time, Frank was able to identify Saint Lucian Kwéyòl Vocabulary of French, English, Indian, African, Amerindian, and Spanish or Portuguese origin {% cite frank2007sources %}. And yet, one of the last sections of that work highlighted that almost twelve percent of his language dataset consisted of 'Vocabulary of Unknown Origin' {% cite frank2007sources %}. This Saint Lucian Kwéyòl language and the mysteries of its unknown vocabulary list will be the focus of this investigation. 

### Literature review:

Living languages can continuously evolve as long as it is learned and spoken by the youth of the population. Creoles are the evolved forms of pidgins where the language has set rules passed on as the first language of newer generations of the population. Many creoles still exist around the world - some better documented than others.

Note that as of 2018, an assessment of creoles in the Caribbean suggested that while there is at least one dictionary for every French Creole spoken in the French-speaking Caribbean', 'the French Creoles of Trinidad, Venezuela, Grenada, and San Miguel (Panama) still do not have a dictionary' {% cite siegel2018lexicography %}. This therefore can also imply that these languages would also not be included in most modern language tools.

Saint Lucian Kwéyòl (also known as Saint Lucian Creole French, Kreyol, Kwéyòl, Patois, or Antillean French Creole), is one such language. Via the International Organization for Standardization (ISO) it bears the three-character codes of 'ACF' (based on the aforementioned name of Antillean French Creole) {% cite sil_codes2021 %}. It is believed to be a living language, however, there is no definitive quantifiable modern study to confirm if the language is still spoken among the majority of the island's inhabitants or spoken among the youth as a first language.

.....

It should be noted that Frank did include a few of his attempts at addressing the issues of the vocabulary list. He suggested that some of these could indeed have a French source, but that he could not provide a precise French form that adequately matched up with the Kwéyòl equivalent. While not all words of this list would have links to the French language, 'ankléwant', 'finisman', 'hayisans', and 'kléwé', were noted as possibly having French sources. Thus the existing hypothesis is that most of the unknown words may have French sources that are yet to be revealed.


* *need to include literature review details on other currently available language detection/identification software/tools*

* *need to include other details concerning the exploration of words by dimensions matrix*


### Methodology:

Current modern tools do not currently accommodate the Saint Lucian Kwéyòl language. This study therefore also seeks to prove or disprove Frank's hypothesis that most of the unknown vocabulary is likely to have French origins. However, another hypothesis being explored is quite contrary to this. It is based on the hypothesis that the percentage of unknown vocabulary with Indian language origins is higher than currently assumed (and is possibly beyond the current assumed semantic domain of food items).

Attempts were made to explore their current capabilities. One can hypothesize that while these tools would not accurately translate the list of Saint Lucian Kwéyòl language words of unknown etymology, underlying etymological links could be drawn from languages detected and their output. Therefore, it was speculated that if similarities were uncovered, the languages' actual dictionaries could serve as a more direct unveiling of the shared etymology {% cite frank2001kweyol%}. The output could then be clustered for ease of viewing and analysis. 

Further exploration would include a quantifiable check on the word similarities using dimensions matrix models. This exploration would be done on the entire dataset, yet would include a focus on the vocabulary that had been manually annotated by Frank, and those manually highlighted in the aforementioned exploratory phase. Ultimately, creating a code to automate and link these tasks could improve future efforts at using data science to decipher details of other creole languages.

* *Explain how words by dimensions matrix will be used here*

### Tools:

The word list would be run through two free language detection tools offered by Google. These being GoogleTranslate web application (translate.google.com) and the Google Spreadsheet function  (=GOOGLETRANSLATE(DETECTLANGUAGE(X)) via a personal docs.google.com/spreadsheets account). Both were used as a means of confirming or clarifying details for a more comprehensive final output. 
For example, the results of the GoogleTranslate application can suggest alternative spellings or other possible languages with tweaking of characters or context. However, it only has the exact name of the detected language, but no language code. The Google Spreadsheet can suggest a language code and thus detect a language, however, it is a flawed tool. Some codes appear to be outside of the established 'Codes for the Representation of Names of Languages' {% cite loc_2013 %}, and thus appear to incorrectly detect some languages. While issues, such as detections of English words being recognized as 'on' rather than the standard 'en' can be present, this tool's output can be used to confirm those of GoogleTranslate. However, occasionally, the output can indeed diverge from GoogleTranslate. These instances can, however, be viewed as useful to the refining of overall language comparison options. Notes were made on such observations. 
	
### Results and Discussion *thus far*:

*So far I have created a [Google spreadsheet](https://docs.google.com/spreadsheets/d/1eQUGn4ctRv5oCrpVZf_GCJQ8WL9hmrON4sMsudlnMx8/edit?usp=sharing) to note the results of both tools when compared to the definitions of Frank's ACF dictionary.

As noted before, Frank did attempt to address the issues of the vocabulary list by suggesting that most of these words might have French sources. However, only a few words in this dataset aligned with his French suggestion and were indeed detected as French. For example, the word 'ankléwant' (shiny) was suggested to have a French source. This assumption was supported by both Google tools. The strongest connection appears to have been with Frank's annotation that the French's 'soeur' had a direct connection with ACF's 'sésé' (sister). This assumption was supported by both Google tools. 

[Table1](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/GT_French.PNG){: width="600" }

The majority of the source vocabulary list was unsurprisingly detected as being Haitian Creole - another creole language within the same region.  While about 26 instances of French were detected, at least 127 instances of Haitian creole were detected. However, the majority of those words that were detected as Haitian Creole, did not appear to share meanings with Saint Lucian Kwéyòl with the initial exploratory check. 

However, it should be noted that upon a second passing, the number of similarities increased. It does appear that both HC and ACF have high levels of polysemy. When consulting both actual Haitian dictionaries, the second available definition was often shared. However, while the official Haitian dictionary does have the exact same meaning and phrasing "deaf person", it does not have etymological details. In fact, most words in the two Haitian Dictionaries used did not include etymological details unless they were notably French or Spanish. While this would seem to ease and support Frank's assumption that most of the vocabulary is actually French, not much of the shared vocabulary had etymological details.

Confusion with polysemy arises when discussing a word shared by both languages - 'fòs', meaning 'force, strength'. Saint Lucian Kwéyòl assigns an additional meaning to the word; the etymological mystery lies with its use as 'furrow, mound, heap, hillock, knoll for planting'. This issue also occurred with the word 'manm'. Both share the meaning of 'member' (of a group), however, the etymological mystery lies with its use as 'muscle'. The word 'Mèyè' also experiences this confusion. Both words can be used as the adjective 'better', yet the etymology details of the additional use as the title of 'Mistress' is unknown. In the Haitian dictionary, the word 'davwa' would translate to the conjunction 'for, because, as, since. (pop) More common is ‘paske’. Davwa’l fè sa yo pini’l Because he did that they punish him.


And yet, definitions appeared to be shared in the presence of additional context such as articles. While this outcome may not apply to all other languages, this was a notable observation with Haitian Creole. For example, gòl in ACF translates to ‘robe, gown’, yet Google's tools detected it as HT and translated it as 'goal'. However, when reviewing an actual  HT dictionary, 'ròb la' is comparable to the English word 'robe'  or 'dress'; yet some sample sentences did not use such articles (Pran ròb - To take the veil, enter religious orders. Ròb jip a kòsaj - A two-piece dress (blouse and skirt)) {% cite targete1993haitian %}. 

Moreover, the ACF word 'bitasyon' translates to 'countryside, estate’,  and is detected by Google tools as H; a base similarity can be observed as the tools translate this to 'farm". However, one can state that translation using actual dictionaries may be more alike with the inclusion of one or two characters that aid with context. One dictionary noted the following output 'abitasyon an, labitasyon an, bitasyon an n 1. Plan
tation, farm, habitation*. Rural farmhouse (dwelling) during colonial times including land around it' {% cite targete1993haitian %}.

On an interesting cultural note, though both Saint Lucian and Haitian cultures share the presence of practitioners of supernatural arts, it was surprising that the vocabulary on the matter was not shared. Nonetheless, Haitian Creole did have the most instances of possible vocabulary overlap. 

Manual annotations noted some possible similarities in scattered among several languages. For example, "awa"  (meaning ‘No! Oh no!’; typically used to express pity, surprise, or disbelief) was translated as "pity" in the Cebuano language (Ceb). Additionally, "chwichwi" (meaning ‘to whisper’) was translated as "squeak" in Welsh. Notably, these similarities appear to be linked to sounds and possible onomatopoeia. 

The scope had to be narrowed for drawing similarities with manual annotation to reduce possible interpreter bias and subjectivity. For example, one could make the case for similarities in the meaning and application of the word 'galè' While this is yet another word with multiple meanings in Saint Lucian Kwéyòl, its reference to woodwork 'plane' may be associated with Haitian Creole's use as 'galley'; both relate to carpentry.
	
Thus far, between four and eleven words were found to overlap in spelling and have matching or similar meanings. The results are in Table 1. For example, the word 'fanmchay' is recognized as 'midwife' in both languages. 

[Table2](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/ht_translationtable.PNG){: width="600" }

Overall, it should be noted that there were some inconsistencies between the output of the two Google language detection tools. For example, it did appear that some words were detected as Belarusian via the Google Spreadsheet, yet Finnish via GoogleTranslate. This also occurred with Bengali (with the former) and  Bangla (with the latter). Other words were detected as English via the Google Spreadsheet, yet Swedish with GoogleTranslate, or viewed as Hungarian with the former, yet English or Dutch with the latter.

Detection of such words as 'las', 'pijé', 'tan', 'taza', and 'waz', appeared to be the most problematic. Google Spreadsheet struggled to provide a singular suggestion, and so provided the non-standard language code 'it is', which could be interpreted as bearing Italian and Icelandic options. However, GoogleTranslate detected most of those words as either Italian, Spanish, or English. This could be due to some word structures (stems, etc.) being shared or being to others within the same Romance language grouping {% cite degraff2009language %}; Spanish, Italian, Romanian, Portuguese, and French fall into this category, however, Spanish and Italian appear to be difficult to decipher.

Moreover, Google Spreadsheet produced random codes for languages that GoogleTranslate appeared to handle better. For example, some words that GoogleTranslate detected as Catalan, Google Spreadsheet provided a non-standard language code of 'that'. Other instances included Sundanese words noted as 'its', Esperanto as 'it's the', Corsican as 'What', Arabic as 'With', Japanese (and Estonian) as 'and', Turkish as 'trick', Vietnamese as 'we', and Nyanja as 'new'.


### References:


{% bibliography --cited %}

{% include JB/setup %}