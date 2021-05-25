---
layout: page
title: "Brief Introduction: Low-resource Cross-lingual Framework"
description: "Introduction to Low-resource Cross-lingual Framework"
---
{% include JB/setup %}

#### __Working Title:__
Data science investigations into Saint Lucian Creole; preserving a low resource creole language through compiling, deciphering, and understanding creole data.

#### __Working Statement of Problem:__

What are the factors associated with Saint Lucian Creole's exclusion from most modern machine translation platforms, and how can this exclusion be addressed through Data Science tools and techniques?

#### __Introduction and Justification of the Problem:__

When exploring the matter of Multilingual Natural Language Processing, Dr. Benjamin Elson's 1987 *Linguistic Creed* comes to mind {% cite sil_international_2018 ferreira2013bible %}.

*“As the most uniquely human characteristic a person has, a person's language is associated with his self-image. Interest in and appreciation of a person's language is tantamount to interest in and appreciation of the person himself. All languages are worthy of preservation in written form by means of grammars, dictionaries, and written texts. This should be done as part of the heritage of the human race."*

In the realm of cross-lingual or multilingual natural language processing (NLP), it does appear that some languages tend to garner more attention. Typically well-established languages, with a plethora of linguistic resources to build from, often thrive while low-resource creole languages are left to languish. Creoles are a particular challenge to the NLP community as these languages tend to arise from oftentimes frantic and urgent needs to establish harmony in communication within cacophonous settings. 

### __The Problematic Nature of Saint Lucian French Creole\ Kwéyòl\ Patwa\Patois: __

A creole language is different from a pidgin as it has established language rules that have been learned as a first language for one or more generations. While most are recognized as French-based, there is an increasing academic argument to officially recognize additional unique variants of English-based creoles within those settings (instead of simply viewing them as the poor application of English) {% cite irvine2020st irvine2020language %}. Even some sample sentences of the official Kwéyòl dictionary are actually English-based creole ones, rather than standard  English {% cite frank2001writing frank2001kweyol%}. Thus, settings like Saint Lucia, which had over 14 territorial wars between the British and the French, may exhibit English and French creole {% cite irvine2020st irvine2020language %}.

In the Caribbean, creole languages emerged as a means of survival, and endured as a result of resilience; often speakers struggled to work within the bounds of a dominant prestige language while retaining unique traces of heritage languages or contact languages. The resilience of this language is currently being tested with the advent of the SARS-CoV-2 pandemic;  it created a situation where effective and timely communication is needed, while also threatening the lives of the older, more fluent, language-keepers. Therefore, the careful creation of tools and frameworks is needed to facilitate society's creole language needs. 

The Caribbean has had a complicated past of trade, colonization, slavery, indentured labor, and more recently voluntary immigration. This, therefore, leads to a present setting of an actively multilingual environment that is ever-changing due to evolving political and legal policies (such as Citizenship by Investment (CIP) {% cite bayat_2020 gis_CIP_2017 slu_cip_2020 capital_CIP_2020 harvey_2020 investvisa_2016 %}.

It is this very discordant origin and complexity of structure that presents issues to the preservation of creole languages. For example, the Saint Lucian French creole writing system is phonemically-based {% cite frank2001writing frank2001kweyol%}, therefore, this makes writing the language and establishing a uniform spelling of words challenging. Moreover, the current state of creole's language vitality is unknown as no survey has been conducted within the 21st century. Additionally, most words in Saint Lucian Kwéyòl/creole focus on emotions, the weather, and other aspects of the immediate natural environment, including endemic animals and food sources {% cite frank2007sources %}. Therefore, finding domain-equivalent literature sources outside of certain contexts can be challenging.

According to Douglas Midgett's work on the anthropological linguistics of Saint Lucia, the island's inhabitants have struggled in their appreciation of its heritage language {% cite midgett1970bilingualism %}. Historically there were negative connotations with Saint Lucian Kwéyòl (Antillean Creole/Patios), and upon emancipation, there was intense enmity among English and Creole in the newly free community; the use was negatively equated "with all that is backward, rural, Negro, and unsophisticated" {% cite midgett1970bilingualism %}. Midgett highlighted that the formal teaching of Patois would be viewed as "unjustifiable and in any case, would never be tolerated by even its most ardent user". 

Ultimately, Midgett did, however, acknowledge that "English is the language of all national institutions... Patois is the language of folk institutions"; therefore, it is not surprising that some are still encouraged to learn and converse in English, rather than in Saint Lucian Kwéyòl, to appear more professional or polished {% cite oas_2018 %}. At the time, he noted that most people agreed that increased proficiency in spoken and written English (or French) would be an educational must, however, writers and other academics and actual educators had differing views; the former group believed that the use of creole in schools could aid with recognizing English as a second language, whereas educators adamantly argued against any use of Creoles in the schools.

He believed that the use of Patois in the schools interchangeably with less formal, more colloquial English would aid in establishing English in the minds of students as a functional Patois equivalent. He suggested that as long as educational institutions reinforce the conventional traditional opinion of separating the two languages, the campaign for English literacy and spoken usage will not have widespread effectiveness. Midgett, however, underestimated how pervasive the English language would be; in fact, it is the creole language that currently lacks proper literacy among the public {% cite midgett1970bilingualism %}.

Nonetheless, as of May 1970, Midgett suggested that the vitality of the language may yet ensure; he stated that "there still exists a situation in which virtually every native-born St. Lucian can speak Patois" {% cite midgett1970bilingualism %}. Today the language still appears to exist albeit under an inconclusive status; despite the recent surge in appeal due to governmental and pop culture support, the lingering lack of definitive vitality data could inadvertently permit an unabated decline {% cite marmion2014community midgett1970bilingualism kabir_dennerysegment2020creolization%}. 

In 1998, Frank explored and even expanded the written form of the creole language in Saint Lucia while attempting to effectively translate an English bible into the local language. Upon concluding his tasks he remarked that the bible would indirectly boost creole literacy through the motivational passages of the bible:

 *'... for all practical purposes Creole remains an unwritten language for the majority of the population, which remains unaware of the books published in Creole. Attempts to teach Creole literacy have not met with much success because of lack of interest. Motivation is the most important factor in the success of any literacy program, and having something people want to read is the most important motivating factor'* {% cite frank1998lexical %}. 

 English is currently the main language spoken (a prestige language) in Saint Lucia, however, Saint Lucian Kwéyòl (Antillean Creole/ Patios/ Patwa) is the heritage language of the island. There are several other languages officially taught (French and Spanish) and generally spoken in the close-knit Caribbean (such as Dutch, Portuguese, Hindi, Arabic, and even Japanese, Mandarin and increasingly Russian) {% cite hillman2009understanding everyculture_2020 kobayashi_2020 nesheim_CIP_2020 CBF_2020 %}.

Frank's 2008 work on "Sources of St. Lucian Creole Vocabulary" suggested that just over 83% of vocabulary words he came across had French origins, roughly 3% is English-based, and Amerindian, African,  East Indian sources account for about a  ½ % of the total each, and .1 % was Spanish/Portuguese-based {% cite frank2007sources %}. Even this author of the official creole dictionary acknowledged gaps in its vocabulary being due to the lack of official etymological details of nearly 12 % of documented words {% cite frank2001kweyol frank2007sources %}.

![vocab](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/vocabo.PNG){: width="600" }

![Vocabop](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Vocabop.PNG){: width="600" }

Despite the advantage of cross-referencing parallel language data sources, the language challenges are made more complex by many of the vocabulary words lacking details on their origins. Ultimately, the situation could be described as bearing a "Mondrian-like" language setting. This image seems apt to explain this low-resource creole being close to parallel and monolingual data with high-resource languages (like French and English), yet the present language data may belong to different domains {% cite ranzato2020 %}.  Addressing this etymological mystery might be an apt challenge for natural language processing and machine translation.

Moreover, there are challenges present in natural language processing, particularly when dealing with sentiment analysis, word-sense disambiguation, and issues with dependency parsers in cross-lingual settings. Bearing this in mind, it may also be useful to leverage the natural annotation provided by crowdsourced online dictionaries related to low-resource languages, such as [Wiwords](http://wiwords.com/). For example, this could actively/continuously address word sense disambiguation issues that arise from the text analysis of Saint Lucian Kwéyòl's online social media chatter on various platforms, like Facebook, Instagram, Twitter, etc. By improving word sense disambiguation issues with the creole language, one may be better able to evaluate the language's vitality via assessing the frequency of its usage in social media posts. 

For example, avocado translates to zabòka[2](https://www.webonary.org/kweyol/gfdb5d87c-f3e9-49f6-a80e-f9dddeb2e358/) in the official Saint Lucian Kwéyòl dictionary. However, on Instagram[3](https://www.instagram.com/explore/tags/zaboca/?hl=en), Facebook[4](https://www.facebook.com/embracedominica/posts/known-locally-as-pear-or-zaboca-the-avocado-is-a-flowering-plant-native-to-mexic/1796956037194101/), and Twitter[5](https://twitter.com/itzbuellzfool/status/1312498381860659200) (and even a [book on Amazon](https://www.amazon.com/Under-Zaboca-Tree-Glynis-Guevara/dp/1771333294), refers to the same item using the spelling 'zaboca', 'zabocca' [6](https://www.facebook.com/BarbadosCulinaryJourney/photos/avocado-or-zabocca-originally-found-in-the-deep-forests-of-south-america-and-tak/1037910523023415/g)[7](https://pdfs.semanticscholar.org/5204/05cfd523532ee8a3d9470bbeb200c17af9cc.pdf), and 'zaboka'[8](https://twitter.com/lylythervil/status/998975906738733058). Yet, the crowdsourced online dictionary Wiwords notes the same item with the spelling 'zaboca'[9](http://wiwords.com/word/zaboca) and includes pictures for clarification.

A cursory search of Twitter revealed that the 'zaboca' spelling was just about as common as ' zaboka',  yet the accented spelling, 'zabòka', was not present. One could say that Wiwords did indeed reflect the term's typical informal (social media) form. While Wiwords does not list the official spelling or all other alternative spellings, it does assist with understanding instances of the presence or absence of diacritical marks and providing needed context to improving the word sense disambiguation.

A major challenge of lexical semantics is creating training data and algorithms that facilitate downstream tasks. Furthermore, it has also been said that while there is a lingering 'bias towards contemporary Indo-European languages', treebanks for other language families and treebanks for classical languages are on the rise {% cite nivre2016universal %}. Yet, there are multiple reasons to explore NLP topics on creole data. The increasing popularity of opinion-rich resources such as blogs {% cite kweyol_works_joseph %}, shopping websites, review portals, and social media platforms {% cite kweyol_fb_joseph %} are rapidly attracting business people, governments, and researchers alike. 

Additionally, sentiment analysis often garners high interest from businesses. Effective language detection and translation models for creole may address topics on word sense disambiguation; particularly the problems polysemy poses to sentiment analysis and how that impacts machine translation in low-resource languages. Phrase-based parsing techniques may also impact the model's accuracy(adequacy and fluency of translation). 

Not much NLP research has tackled adapting its components to creole languages; however, the academic tide has been changing as of 2020 {% cite soto2020language  %}. As of late 2020, even Carnegie Mellon University and Stanford have taken steps forward with the curate course materials that could aid directly this language preservation undertaking. Multilingual NLP, low-resource NLP, low resource machine translation {% cite ranzato2020 %}.  It has been suggested that categorizing the challenges and formalizing their interpretation using Universal Dependencies may help create a Saint Lucian Kwéyòl dependency treebank, and later facilitate other needed NLP tasks (such as sentiment analysis of texts). A Saint Lucian Kwéyòl parser may be constructed by leveraging the base knowledge of French syntax. However, these may not be the only tools required to tackle the challenges of digitizing and analyzing creole languages. Therefore, it may be helpful to develop a framework to improve the models for linguistics. Perhaps an extendable framework that can demonstrate its application to low-resource creole languages.

#### Issues with natural annotation (challenges and solutions for annotating Saint Lucian Kwéyòl)

As noted before, Saint Lucian Kwéyòl is highly influenced by 'imported vocabulary'; the majority of which is French followed by English, however, it should be noted that the third largest portion of the language has definitive etymological sources. These words may constitute out-of-vocabulary (OOV) regarding a standard English or French treebank and could result in difficulties for using English-trained tools on Saint Lucian Kwéyòl {% cite Wang2020FromGT %}. Moreover, in terms of topic prominence, this language is regarded as a 'Subject-Predicate-Object' ordered language {% cite frank1992clause %}.

There may also be issues with transliteration when dealing with the etymology of words with non-Latin based characters that somewhat contribute to the creole vocabulary; this mostly would focus on target languages of Tamil and Hindi* {% cite frank2007sources %}. Also, academics have suggested that despite their obvious connection, there is not always singular and direct relationships between Kwéyòl and French words {% cite frank2001kweyol frank1998lexical %}. Frank highlighted that there are many cases where a Kwéyòl noun originates from a French preposition and/or article plus noun; for example, Kwéyòl's "lavi" is related to French's 'la vie', "nanj" to 'un ange', "zòdi"  to 'les ordures' and "dlo" to 'de l’eau' {% cite frank2001kweyol frank1998lexical %}.

It is also important to note that additional natural language processing issues may arise when manipulating the creole language, or attempting to adapt it to a digital environment such as a comprehensive online-dictionary. Public contributors may understand the language in terms of speaking it, however, they may not be the best teachers; that is to say that contributors may not always be clear in their explanations or contributions. Overall, straying from official spellings of words can contribute to data entry issues. For example, one can observe the accents used with "chofé" - "to heat up",  and "chofè" - a "driver" {% cite frank2001kweyol %}. These words without context and accents would be very difficult to decipher. Persons inaccurately applying accents, or unable to access the necessary unique characters were required (diacritics) for formal grammar can present problems in documenting the language.

As noted by Frank, some dictionary entries can present as variants of keywords, and debates can arise concerning which word should be the dominant standard form, and which should be the variant form {% cite frank2001kweyol %}. For example, the Saint Lucian Kwéyòl dictionary notes *jòdi* as the standard form of the adverb 'today', and *hòdi* as the variant form {% cite frank2001kweyol %}. Frank is said to address the issue of determining the Kwéyòl form of words by noting the 'commonly-used form that is closest to the French origin (or, in some cases, origin from another source) was chosen for a full entry, and other forms less directly related to the form of the etymological source were said to be the variants' {% cite frank2001kweyol %}.


#### Problems of polysemy in Saint Lucian Kwéyòl

Another issue with dictionary compilation in this region may deal with the overlap of meanings attributed to certain words. Polysemy is a common occurrence in the low-resource language of Saint Lucian Kwéyòl {% cite Mayeux2019RethinkingD cope2017creole %}. An indication of a polysemous verb in English is one that corresponds to different verbs when translated into other languages. For example, one can review the English word for 'ask' (for information) and 'ask' (for action). This can be interpreted as one word "vragen" in Dutch, however, the majority of other languages use different words for each English interpretation like "fragen" and "bitten" in German, "preguntar" and "pedir" in Spanish, and "fråg" and "bedja" in Swedish, respectively {% cite kreidler1998introducing pado2005cross %}.

In Saint Lucian Kwéyòl,  this can be seen where the term "mwen" can signify the pronouns for 'I, me, my, or mine'; the term "asou" is a preposition that can mean 'on, on top of, atop, upon', ' off, off of, from', 'toward' or 'about, concerning' {% cite frank2001kweyol %}. The term "vè" can mean 'glass', 'green', or 'worm'; the creole word 'kay' can indicate future tense as well as 'house/, building', 'scale' (appearing on the skin), and 'reef'. "Lè" can mean 'room', 'space',  and 'time/ hour' (including discussions of 'when' and 'if'). "Tan" can represent nouns of 'time', 'weather', and an adjective indicating a 'vague amount of something'. As a noun, "kwi" could represent the act of 'crying/ screaming/ shouting', as well as refer to a 'calabash bowl or plate'; as an adjective, it could indicate the state of being 'raw' {% cite frank2001kweyol %}.

It is important to note that there may need to be considerations for word sense disambiguation issues that arise from the intermingling of an almost identical creole from the neighboring island of Dominica. Both islands appear to sound similar and some words are indeed the same, but the written form appears to vary slightly. This might be due to the liberties taken by the different authors of their dictionaries; Frank highlighted his penchant for leaning on French when considering the spelling of words {% cite frank2001kweyol %}. Overall, it appears that while both countries agree that the Creole writing system is phonemically-based (which can make it easier to learn than English to a certain extent) {% cite frank2001kweyol %}, there are slight differences in diacritic use and placement and spelling between countries; this issue can then permeate and linger in both creole speaking countries. 

It is said that the shared creole alphabet writing system arose out of two creole ethnography workshops held in St. Lucia in January 1981 and September in 1982; this was developed through the efforts of researchers at "the University of the West Indies (U.W.I.), The Université Antilles – Guyane groups from St. Lucia (MOKWÉYÓL), Dominica (K.E.K.) and the Groupé d’Etude et de Recherche en Espace, Creolophone (GEREC) from Martinique and Guadeloupe" {% cite creoleconference1980s %}. Dominicans write 'goodnight' as *'bon swé'*, whereas Saint Lucians write *'bonswè'* {% cite frank2001kweyol dominica_dic2018 %}. Additionally, take a look at the days of the week; the words for Sunday, Monday, Tuesday, and Saturday are the same, yet, Wednesday, Thursday, and Friday are different. Dominicans write Wednesday as *Mèkwédi* whereas Saint Lucians write it as *Mékwédi*, and Dominicans write Thursday as *Jèdi* whereas Saint Lucians write it as *Jédi*; the accent placement is different {% cite dominica_dic2018 frank2001kweyol %}. Dominicans write Friday as *Vanwédi* whereas Saint Lucians write it as *Vandwédi*; here, while the accent is the same, the Saint Lucians appear to include an additional 'd', reminiscent of the original French [< Fr. *vendredi*] (according to Frank {% cite frank2001kweyol dominica_dic2018 %}).

Even the word, "Creole" can be viewed as a contested, polysemous term in the English language {% cite cope2017creole %}. The term has been employed at varied periods and in several regions to distinguish a wide range of entities; this includes 'identities, 'languages, peoples, ethnicities, racial heritages, and cultural artifacts' {% cite cope2017creole %}. As an adjective, Creole was applied as an indicator of higher status bestowed upon Louisiana-born slaves to distinguish them from those born in Africa {% cite cope2017creole brasseaux2005french %}. It was also used as a noun to designate local birth in Louisiana, regardless of racial heritage; later Americans used creole when referring to people of Spanish or French descent, yet it has often been conflated with the term "Cajan" (which described French colonists that settled in Canada’s Acadia region, then migrated to Louisiana). In fact, for some time, there was also a misconception that the term only referred to whites born in Louisiana {% cite brasseaux2005french %}. 

Currently, Creole primarily refers to one's linguistic heritage as the main source of their ethnic identity ('often French culture and a unique Franco-linguistic dialect') {% cite cope2017creole %}. This is particularly true of those of mixed or ancestry foreign to the location {% cite definecreole2020 cope2017creole %}. In the Caribbean, the terms 'Creole', 'Kreyol', 'Kweyol', or Kwéyòl can also indicate the regional creole languages such as Antillean Creole (Dominican and Saint Lucian Kwéyòl), Haitian Creole, and Jamaican Creole {% cite definecreole2020 defineacreole2020 %}. 

Polysemy may indeed present an issue when attempting to study a language or dialects, however, these complications are in fact, often viewed positively in the cultures where creole is spoken; they are often the premise and appeal of much literature in these creole languages. Calypso, and most other endemic forms of music, may celebrate this ability to utilize words or phrases bearing double meanings to indirectly discuss topics that are often crude {% cite stephens2013imagining %}. Philips suggested that Calypsos can engage this method via ‘lamina lyrics’. *Much like an onion, these Calypsos have a number of different levels of meaning, concealed one underneath the other. Achieving this phenomenon, Calypsonians use frames and masks that manifest in Calypsos as a metaphor, metonym, polysemy, irony, and satire* {% cite phillips2006recognising %}. 

**Summary of Challenges:**

- It should be noted, however, that when the size of annotated resources is imbalanced, the encoder can be anticipated as being biased toward the resource-dominant language. 
- As the number of N-grams increase, more data is required.
- The official Saint Lucian Kwéyòl dictionary is a work in progress; not fully comprehensive (it does not even have a word for the color pink).
- The largest possible parallel dataset among most of the languages being examined would be the bible; therefore, semantic domain challenges may arise.
- While there may be several sources of creole text data, not all have parallel data.
- Attempts to translate sample sentences from the creole dictionary into lexifier languages may be challenging due to the words endemic to the creole's setting; a tropical Caribbean island. 
- Not all languages have a separate word for an indefinite article or definite article, some have multiple words.
- The other contributing languages, (hat, gcf, car, arw, etc.), have varying degrees of available resources; yet most are low in resources.
- The LIWC does not currently factor in all recent Unicode emojis, thus may be a flawed system in detecting the full context of modern social media discussions.
- Phrase structure can be viewed as difficult to define in languages with free word order.

**Assumptions:**

- Linguistic universals can exist; all languages typically have vowels and consonants, and typically languages distinguish between nouns and verbs.
- An understanding and focus on cognates can be important to the cross-lingual or multilingual NLP techniques associated with language translation and detection.
- Identification of deictic pronouns is important to determining context.
- Saint Lucian Kwéyòl is a low resource language.
- French (fr) is the main lexifier language of "Kwéyòl; it is a former prestige language of Saint Lucia.
- The official French dictionary is adequately comprehensive.
- English (en) is the current prestige language of Saint Lucia; it is currently the only official language of Saint Lucia.
- The official English dictionary is adequately comprehensive.
- Lexifiers can be assigned ranks based on an established assumed similarity to the target language.
- Additional confirmed contributor languages: Guadeloupean Creole French (gcf), Haitian Creole (hat), Spanish/Portuguese (sp/pt), Amerindian (Carib -car, Arawak -arw,), Indian (Hindi-hi, Tamil-ta), African (Yoruba-yor, Fulani-ful, Bantu-bnt, Igbo-ibo, Kikongo-kon, Mende-men).
- Exploring and categorizing the semantic domains of the vocabulary of unknown origin, may assist with word-sense disambiguation issues with other languages. 

**Example of "Kwéyòl language rules according to David Frank {% cite  frank2001writing %}:**

The relevant diacritics/ written accents for "Kwéyòl are à, é, è, and ò;  the "à" does not appear very often, but when it does it would most likely appear before an n (as in "pàn" - bread).

"While the vowels a, e, and o combine with an n to form a digraph in which the n is not to be pronounced as a consonant, the same is not true for the vowels i, é, è, ou, and ò, which are never combined with n as a digraph. So any time the reader sees one of these latter vowel symbols followed by an n, he should interpret it as the combination of a vowel plus a consonant rather than as a single nasal vowel sound. In cases where a true n sound is preceded by a nasal vowel, two ns have to be written. Note the spellings of the following words:"

- lapé = l + a + p + é  = ‘peace’

- lapen  = l + a + p + en  = ‘rabbit’

- lapenn  = l + a + p + en + n  = ‘sorrow

"Most punctuation works the same way in St. Lucian Creole as in English. However, special attention must be given to the uses of the hyphen and the apostrophe."

"*Hyphen:* The definite article (that is, the Creole equivalent of English ‘the’) is attached to the preceding word with a hyphen. The Creole definite article can take four forms, depending on the context: -a, -la, -an, and -lan. Here are some examples:"

- latè-a  = ‘the earth’

- tab-la  = ‘the table’

- tan-an =  ‘the time/weather’

- lanp-lan =  ‘the lamp’

- Mwen kouté listwa-a i wakonté-a. ‘I listened to the story he told.’


*Apostrophe:* As in English, there are some words in Creole that are commonly contracted, and the contraction of two words is marked with an apostrophe.

Here are some examples:

- mwen + pa = m’a

- mwen + ka = ng’a (or n’a)

- mwen + kay = ng’ay (or n’ay)

- si + ou = s’ou

- pa + ankò = p’òkò

When the pronouns i (‘he’ or ‘she’) and ou (‘you’) follow a word that ends with a vowel sound, they are sometimes converted to ’y and ’w respectively and attached to the preceding word, as in the following examples:
- *Mwen kay pwédyé ba ou.* becomes *Mwen kay pwédyé ba’w.* 
- *Tifi i bo i.* becomes *Tifi’y bo’y.*

 Note: Words that begin with the letter "r" are only used in words borrowed from English like "radyo" (radio).


#### __Draft Hypotheses:__

- *Hypothesis:* While English is the current prestige/official language of Saint Lucia, and French is the main lexifier language of "Kwéyòl, the origins of the unknown vocabulary are mostly composed of roots from the lesser linked languages (arw, car, sp, Indian, and African) are most likely to hold the remaining details; due to their continual depletion, ties may originally have been difficult to confirm. Particularly Indian languages might have more of an influence than the previously suggested .4%.

- *Hypothesis:* Since the dictionary is not comprehensive it may be possible to explore the current Kwéyòl corpora towards the creation of word lists based on the semantic similarity (or any other techniques) that can reveal vocabulary terms that are missing from the dictionary); through these term associations, it may be possible to create word lists for various semantic domains (not just finance). And perhaps the output terms could be added to an online annotated dictionary. It's kinda like when Ford does the iterations of his phrase parser; gradually discovering information, and adding terms as they come up. Ultimately I want to run through as much text as possible to extract vocabulary not present in the current dictionary and log them so that their definitions can be expanded on by official linguists etc.

- *Hypothesis:* Exploration of word phrases and word frequencies can aid in addressing issues of polysemy and word sense disambiguation in creole languages. Alpha and beta phrase parsers (Tumbling frequency parser) can reduce issues of polysemy and word sense disambiguation in ACF.

- *Hypothesis:* Exploring the semantic similarity of corpus related to, yet better documented than, creole (such as Haitian Creole and Guadeloupean Creole French), may assist with unsupervised statistical machine translation testing.

- *Hypothesis:* Facebook appears to be an online playground with increasing instances of written Kwéyòl, and vocabulary terms that may not have been captured by the current edition of the dictionary. Careful observation of social media texts can aid in building the corpus of a low-resource language, and reducing issues of polysemy and word sense disambiguation, thus improving areas such as sentiment analysis.

- *Hypothesis:* The natural annotation of crowdsourced online dictionaries can be useful for building the corpus of a low-resource language, and reducing issues of polysemy and word sense disambiguation; this will be useful for building and updating vocabulary lists of current dictionaries that are not quite comprehensive. It may be useful to explore a future possibility of leveraging the natural annotation provided by crowdsourced online dictionaries related to low-resource languages, such as [Wiwords](http://wiwords.com/).

- *Hypothesis:* In exploring the depth of the current Kwéyòl corpora, it may be possible to better gauge the nature of the semantic domains present; the hope is that various domains are fairly balanced, however, some may have a greater presence than others. For example, it is believed that the majority of the vocabulary words have links to biocultural diversity, rather than business; that since most creole words were created for survival, the vocabulary is simplistic, and mostly related to nature, food, and relationships. Therefore the results may confirm or disprove this belief.

- *Hypothesis:*  Since no language survey has been conducted after the 1970s only assumptions can be made about the current status of the language's vitality. As of that time, about 90 percent of the population was believed to be capable of communicating in creole, however, the degree of fluency of several newer generations is unknown. Therefore, survey results may confirm or disprove this belief, while simultaneously bringing attention to the preservation needs of the language.

- *Hypothesis:* Since there is a notable difference between the Saint Lucian English Creole present in the current trilingual acf dictionary, and Standard English, Zero-shot machine translation can be used, with the French language as a base, for the better English translation of the final product. 

 - *Hypothesis:* Improving name tagging for a low-resource creole language using annotations from related languages (other established creole languages and other established target languages such as French, English, and Spanish). This would be achieved through a process like "Cross-lingual Multi-Level Adversarial Transfer to Enhance Low-Resource Name Tagging".

- *Hypothesis:* A novel CNN-based semantic indexing method can be applied to multilingual data. Semantic domain vocabulary lists can be used with NLP tools for enhancing language learning tools (and should ease/improve language translation outcomes on Kwéyòl data); for example, lists associated with folklore/folktales, flora, fauna, entertainment, health/emergencies, business, politics, and science where possible, can be created.

- *Hypothesis:* Since the language is mostly orally passed on and spelled phonetically (though inconsistently), it may be possible to find the origin of the words, not only through text analysis but through cross-lingual acoustic models. The mystery words will not only be compared to words of similar text cognates etc. but also compared with vocal sound files from nearby languages.





#### __Draft methodology:__

In summary, Creole is complex as it is an amalgamation of different languages adapted for survival and solidified through generations of oral and written communication. David Frank's paper on *Sources of St. Lucian Creole Vocabulary* piqued my interest, particularly the section on *Vocabulary of Unknown Origin*. I became intrigued by the complexity and mysteries within Saint Lucian creole / "Kwéyòl" and hoped to preserve and explore the creole language through modern data science tools, and possibly create a more accurate modern dictionary; ultimately producing a comprehensively compiled creole corpora to the public, and introducing instances of its utilization to address language weaknesses (such as lacking vocabulary lists, and polysemy/word sense disambiguation).

Currently, I am leaning towards using multilingual NLP to combat the challenges of creole conservation; to create a language detection and translation model capable of tracing the origin of Saint Lucian creole "Kwéyòl", via supervised and unsupervised statistical machine translation. For instance, I would want to address the words of unknown etymology by exploring other target languages; possibly comparing the differences in word frequencies to other similar creole languages. However, to do so, I must explore and understand the underlying language structures, such as dependency parsing, treebanks, and sentiment semantic indexing on multilingual data. For example, of the two types of linguistic structures, dependency parsing can be viewed as more applicable to multilinguality, as it demonstrates the relationships between words in a straightforward way. Phrase structure can be viewed as difficult to define in languages with free word order. I may need to explore  Zero-shot machine translation and Cross-lingual Multi-Level Adversarial Transfer.

Ultimately, outcomes of this endeavor will include, contributions of new and/ or improved Saint Lucian "Kwéyòl corpora for future analysis, and new techniques and tools for exploring NLP in low resource languages.  I want to use cross-lingual machine translation to find the unknown origins of vocabulary words. To properly explore this topic, I will need to search for and prepare the sample Saint Lucian "Kwéyòl corpora; locating as much parallel data as I can find. 

![nlp_overview](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/nlp_overview.PNG){: width="600" }

![types_of_ling_structure_dep_n_phrase.PNG](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/types_of_ling_structure_dep_n_phrase.PNG){: width="600" }

![model_ex_unsup_n_sup](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/model_ex_unsup_n_sup.PNG){: width="600" }


**Data sources:**

In terms of creole data, I currently have access to a partially labeled XML version of the Saint Lucian Kwéyòl dictionary dataset; it has parallel data but no sentiment tags {% cite frank2001kweyol %}. There are, however, numerical indicators to signify the differences between homonyms, and according to the dictionary's creator

*'the set of parts of speech, or word classes, used in this dictionary is as follows: N (noun), PRO (pronoun), ADJ (adjective), ART (article), V (verb), ADV (adverb), PREP (preposition), CONJ (conjunction), and INTERJ (interjection). These are only broad categories. In a more complete grammatical description of Kwéyòl, these broad categories could and should be further broken down into subcategories'* {% cite frank2001kweyol %}. 

Digital versions of a bible (new testament) {% cite SLUnewtestament_1999 bibleproject_2004 BibleSocieties_2020 %}, an audio version of the bible {% cite audiobible2020 %}, a few documents from the government such as the Saint Lucian national anthem {% cite anthem_2016 %}, governmental speeches bearing Kwéyòl dialogue  {% cite louisy_govt_2004 %},  and works for ministries focused on Kwéyòl activities  {% cite sluFRC_FB_2020 %} are also accessible. I also have access to traditional folk songs {% cite joseph_songs_2020 SLU_song_yannucci_2020 %}, discourses {% cite weekes2014bodies frank_1990 %}, and stories {% cite sil_folktale_1985 sil_readingbook_1989 %}. Public social media data are also useful, particularly the postings by verified Saint Lucian Kwéyòl writers {% cite kweyol_fb_joseph  kweyol_works_joseph  kweyol_playlists_joseph%}. There are also Kwéyòl financial document excerpts in the form of Annual Reports from the Saint Lucian National Bank. In 1993 a document entitled "Dances and Songs from a Caribbean Island" was created and in 1996 one named "Select Bibliography of the Literature of the English-speaking West Indies" was also created; if the documents above are insufficient, I will consult these two anthological works for additional data {% cite islandsongs_1993 creolelitlist1996 %}. There are few more books but they are mostly physical documents (I need to finish looking into their digital versions). 

**These 6 papers are my current basis**

1 [Cross-Lingual Bridges with Models of Lexical Borrowing](https://www.cs.cmu.edu/~ytsvetko/papers/loanwords-jair.pdf) {% cite tsvetkov2016cross %}
2 [Metaphor Detection with Cross-Lingual Model Transfer](https://www.aclweb.org/anthology/P14-1024.pdf) {% cite tsvetkov2014metaphor%}
3 [Cross-lingual Multi-Level Adversarial Transfer to Enhance Low-Resource Name Tagging](https://www.aclweb.org/anthology/N19-1383.pdf) {% cite huang2019cross
 %}
4 [Language Identification of Guadeloupean Creole](https://www.aclweb.org/anthology/N19-1383.pdf) {% cite soto2020language %}
5 [Zero-shot Neural Transfer for Cross-lingual Entity Linking](https://www.aclweb.org/anthology/N19-1383.pdf) {% cite rijhwani2019zero %}
6 [From Genesis to Creole Language: Transfer Learning for Singlish Universal Dependencies Parsing and POS Tagging](https://dl.acm.org/doi/fullHtml/10.1145/3321128) {% cite Wang2020FromGT %}

**Draft modeling:**

**Complex Supervised and Unsupervised Statistical Machine Translation for Saint Lucian Creole/ Kwéyòl:**

![dep_crossling_structure](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/dep_crossling_structure.PNG){: width="600" }


![morphogen](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/morphogen.PNG){: width="600" }


![sing_dia](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Singlish_diagram.PNG){: width="600" }


![sing_tab](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Singlish_table.PNG){: width="600" }


![sing_arc](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Singlish_arcs.PNG){: width="600" }


![tat_cre](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/tatoeba_creole.PNG){: width="600" }


### Draft of one possible model:

Using back-translation to augment or to create pseudo-parallel data from a source language to the target language, and then back from the target language to the source language. Since creole has more than one influence, it may require multiple source languages for back-translation. Our main lexifier language (French), and would, therefore, be more dominant/strong than the other lexifiers being used. The semantic similarity may also be visually explored through grouping related languages like French, Guadeloupean Creole French, Haitian Creole, and English.

![unsupervised_statistical_mt](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/unsupervised_statistical_mt.PNG){: width="600" }


![distillation](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/distillation.PNG){: width="600" }


**Dominant/stronger lexifier/source language clusters:**

- French: fr → acf    acf →fr
- Guadeloupean Creole French: gcf →  acf    acf →gcf
- Haitian, Haitian Creole: hat → acf    acf →
- English: en → acf    acf → en  en →  acf    acf → en

**Non-dominant/Weaker clusters lexifier/source language clusters:**

- Spanish: sp → acf    acf → sp
- Portuguese: pt → acf    acf → pt
- Amerindian: 
 - Arawak language (Lokono) arw → acf    acf → arw
 - Carib language (Kali'na):  car → acf    acf → car
- Indian:
 - Hindi: hi → acf    acf → hi
 - Tamil: ta → acf    acf → ta
- African:
 - Yoruba: yor → acf    acf → yor
 - Fulani: ful → acf    acf → ful
 - Bantu: bnt → acf    acf → bnt
 - Igbo: ibo → acf    acf →ibo
 - Kikongo: kon → acf    acf → kon
 - Mende: men  → acf    acf → men

Once a phrase machine translation model is trained in both directions (back and forth), do back translation to augment or to create pseudo-parallel data from those languages (using the phrase-based model that was just built) in an attempt to create iterative refinement on the validation set.

#### Execution Obstacles:

Data Science is an actively developing field; due to program lengths for P.h.D programs, it may be very difficult to create a timely yet thorough compilation of all available topics, techniques, and technologies. This endeavor is quite a complicated undertaking to publish as a single contributor. Co-authorship on works may be sought to competently manage the workload of research, and the coding of these tools. Ultimately, the intention is not to compile a comprehensive list of all possible avenues of exploring creole via data science's NLP tools. It is to encourage interest in the field and provide starting points for possible future expansion of these topics.

#### The Tools:

The tools may focus on open source and low-cost resources such as R Studio, Python, Pytorch, fastText, LIWC, Github, Tensorflow, and other available Google tools available. 

- Google Colab can be described as a Python development environment that runs in the browser using Google Cloud; it is completely free of charge, and even offers access to their GPU is free of charge for some hours of usage every day. 



### References:


{% bibliography --cited %}

{% include JB/setup %}
