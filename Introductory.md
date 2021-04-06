---
layout: page
title: "Brief Introduction: Low-resource Cross-lingual Framework"
description: "Introduction to Low-resource Cross-lingual Framework"
---
{% include JB/setup %}


#### __Introduction:__


When exploring the matter of Multilingual NLP, Dr. Benjamin Elson's 1987 *Linguistic Creed* comes to mind.

*“As the most uniquely human characteristic a person has, a person's language is associated with his self-image. Interest in and appreciation of a person's language is tantamount to interest in and appreciation of the person himself. All languages are worthy of preservation in written form by means of grammars, dictionaries, and written texts. This should be done as part of the heritage of the human race."*

In the realm of cross-lingual or multilingual natural language processing (NLP), it does appear that some languages tend to garner more attention. Typically well-established languages, with a plethora of linguistic resources to build from, often thrive while low-resource creole languages are left to languish. Creoles are a particular challenge to the NLP community as these languages tend to arise from oftentimes frantic and urgent needs to establish harmony in communication within cacophonous settings. 

A creole language is different from a pidgin as it has established language rules that have been learned as a first language for one or more generations. In the Caribbean, creole languages emerged as a means of survival, and endured as a result of resilience; often speakers struggled to work within the bounds of a dominant prestige language while retaining unique traces of heritage languages or contact languages. The resilience of this language is currently being tested with the advent of the SARS-CoV-2 pandemic;  it created a situation where effective and timely communication is needed, while also threatening the lives of the older, more fluent, language-keepers. Therefore, the careful creation of tools and frameworks is needed to facilitate society's creole language needs. 

It is this very discordant origin and complexity of structure that presents issues to the preservation of creole languages. For example, most words in Saint Lucian Kwéyòl/creole focus on emotions, the weather, and other aspects of the immediate natural environment, including endemic animals and food sources {% cite frank2007sources %}. Therefore, finding domain-equivalent literature sources outside of certain contexts can be challenging.

Additionally, it is said that just over 83% of vocabulary words have French origins; roughly 3% is English-based, and Amerindian, African, and East Indian sources account for about  ½ % of the total each  {% cite frank2007sources %}. Even the author of the official creole dictionary acknowledged gaps in its vocabulary being due to the lack of official etymological details of over 11% of documented words {% cite frank2001kweyol frank2007sources %}. Despite the advantage of cross-referencing parallel language data sources, the language challenges are made more complex by many of the vocabulary words lacking details on their origins. Ultimately, the situation could be described as bearing a "Mondrian-like" language setting. This image seems apt to explain this low-resource creole being close to parallel and monolingual data with high-resource languages (like French and English), yet the present language data may belong to different domains {% cite ranzato2021 %}. 

![vocab](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/vocabo.PNG){: width="600" }

![Vocabop](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Vocabop.PNG){: width="600" }

Moreover, there are challenges present in natural language processing, particularly when dealing with sentiment analysis, word-sense disambiguation, and issues with dependency parsers in cross-lingual settings. A major challenge of lexical semantics is creating training data and algorithms that facilitate downstream tasks. Furthermore, it has also been said that while there is a lingering 'bias towards contemporary Indo-European languages', treebanks for other language families and treebanks for classical languages are on the rise {% cite nivre2016universal %}. 

There are multiple reasons to explore NLP topics on creole data. The increasing popularity of opinion-rich resources such as blogs {% cite kweyol_works_joseph %}, shopping websites, review portals, and social media platforms {% cite kweyol_fb_joseph %} are rapidly attracting business people, governments, and researchers alike. Sentiment analysis often garners high interest from businesses. Not much NLP research has tackled adapting its components to creole languages; however, the academic tide has been changing as of 2020 {% cite soto2020language %}. As of late 2020, even Carnegie Mellon University has taken steps forward with the curate courses in Multilingual NLP, and Low-resource NLP. It has been suggested that categorizing the challenges and formalizing their interpretation using Universal Dependencies may help create a Saint Lucian Kwéyòl dependency treebank, and later facilitate other needed NLP tasks (such as sentiment analysis of texts). A Saint Lucian Kwéyòl parser may be constructed by leveraging the base knowledge of French syntax. However, these may not be the only tools required to tackle the challenges of digitizing and analyzing creole languages. Therefore, it may be helpful to develop a framework to improve the models for linguistics. Perhaps an extendable framework that can demonstrate its application to low-resource creole languages.


#### __Draft methodology:__

In summary, Creole is complex as it is an amalgamation of different languages adapted for survival and solidified through generations of oral and written communication. David Frank's paper on *Sources of St. Lucian Creole Vocabulary* piqued my interest, particularly the section on *Vocabulary of Unknown Origin*. I became intrigued by the complexity and mysteries within Saint Lucian creole / "Kwéyòl" and hoped to explore it through data science tools and techniques. 

Currently, I am leaning towards using multilingual NLP to combat the challenges of creole conservation; to create a language detection and translation model capable of tracing the origin of Saint Lucian creole "Kwéyòl", via supervised and unsupervised statistical machine translation. However, to do so, I must explore and understand the underlying language structures, such as dependency parsing, treebanks, and sentiment semantic indexing on multilingual data. For example, of the two types of linguistic structures, dependency parsing can be viewed as more applicable to multilinguality, as it demonstrates the relationships between words in a straightforward way. Phrase structure can be viewed as difficult to define in languages with free word order.

Additionally, effective language detection and translation models for creole may address topics on word sense disambiguation; particularly the problems polysemy poses to sentiment analysis and how that impacts machine translation in low-resource languages. Phrase-based parsing techniques may also impact the model's accuracy(adequacy and fluency of translation).

Ultimately, outcomes of this endeavor will include, contributions of new and/ or improved Saint Lucian "Kwéyòl corpora for future analysis, and new techniques and tools for exploring NLP in low resource languages.  To properly explore this topic, I will need to search for and prepare the sample Saint Lucian "Kwéyòl corpora; locating as much parallel data as I can find. I want to use cross-lingual machine translation to find the unknown origins of vocabulary words. 

![nlp_overview](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/nlp_overview.PNG){: width="600" }

![types_of_ling_structure_dep_n_phrase.PNG](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/types_of_ling_structure_dep_n_phrase.PNG){: width="600" }

![model_ex_unsup_n_sup](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/model_ex_unsup_n_sup.PNG){: width="600" }


**Data sources:**

In terms of creole data, I currently have access to a partially labeled XML version of the Saint Lucian Kwéyòl dictionary dataset; it has parallel data but no sentiment tags {% cite frank2001kweyol %}. There are, however, numerical indicators to signify the differences between homonyms, and according to the dictionary's creator

*'the set of parts of speech, or word classes, used in this dictionary is as follows: N (noun), PRO (pronoun), ADJ (adjective), ART (article), V (verb), ADV (adverb), PREP (preposition), CONJ (conjunction), and INTERJ (interjection). These are only broad categories. In a more complete a grammatical description of Kwéyòl, these broad categories could and should be further broken down into subcategories'* {% cite frank2001kweyol %}. It should, however, be noted that attempts to translate sample sentences from the creole dictionary into lexifier languages may be challenging due to the words endemic to the creole's setting; a tropical Caribbean island.

Digital versions of a bible (new testament) {% cite SLUnewtestament_1999 bibleproject_2004 BibleSocieties_2020 %}, an audio version of the bible {% cite audiobible2020 %}, a few documents from the government such as the Saint Lucian national anthem {% cite anthem_2016 %} and Kwéyòl public service announcements {% cite louisy_govt_2004 sluFRC_FB_2020 %} are also accessible. I also have access to traditional folk songs {% cite joseph_songs_2020 SLU_song_yannucci_2020 %}, discourses {% cite weekes2014bodies frank_1990 %}, and stories {% cite sil_readingbook_1989 %}. Public social media data are also useful, particularly the postings by verified Saint Lucian Kwéyòl writers {% cite kweyol_fb_joseph  kweyol_works_joseph  kweyol_playlists_joseph%}. In 1993 a document entitled "Dances and Songs from a Caribbean Island" was created and in 1996 one named "Select Bibliography of the Literature of the English-speaking West Indies" was also created; if the documents above are insufficient, I will consult these two anthological works for additional data {% cite islandsongs_1993 creolelitlist1996 %} There are few books but they are mostly physical documents (I need to finish looking into their digital versions). 


**Draft modeling:**

**Complex Supervised and Unsupervised Statistical Machine Translation for Saint Lucian Creole/ Kwéyòl:**

![dep_crossling_structure](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/dep_crossling_structure.PNG){: width="600" }


![morphogen](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/morphogen.PNG){: width="600" }


![sing_dia](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Singlish_diagram.PNG){: width="600" }


![sing_tab](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Singlish_table.PNG){: width="600" }


![sing_arc](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/Singlish_arcs.PNG){: width="600" }


![tat_cre](https://raw.githubusercontent.com/llord1/llord1.github.io/master/resources/pictures/tatoeba_creole.PNG){: width="600" }




**Assumptions:**
- Linguistic universals can exist; all languages typically have vowels and consonants, and typically languages distinguish between nouns and verbs.
- An understanding and focus on cognates can be important to the cross-lingual or multilingual NLP techniques associated with language translation and detection.
- Identification of deictic pronouns is important to determining context.
- Saint Lucian Kwéyòl is a low resource language
- The official Saint Lucian Kwéyòl dictionary is a work in progress; not fully comprehensive.
- Lexifiers can be assigned ranks based on an established assumed similarity to the target language.
- French (fr) is the main lexifier language of "Kwéyòl; it is a former prestige language of Saint Lucia.
- The official French dictionary is adequately comprehensive.
- English (en) is the current prestige language of Saint Lucia; it is currently the only official language of Saint Lucia.
- The official English dictionary is adequately comprehensive.
- Additional confirmed contributor languages: Guadeloupean Creole French (gcf), Haitian Creole (hat), Spanish/Portuguese (sp/pt), Amerindian (Carib -car, Arawak -arw,), Indian (Hindi-hi, Tamil-ta), African (Yoruba-yor, Fulani-ful, Bantu-bnt, Igbo-ibo, Kikongo-kon, Mende-men).
- These other contributing languages have varying degrees of available resources; yet most are low in resources.
- The largest possible parallel dataset among most of the languages being examined would be the bible; therefore, semantic domain challenges may arise.
- Exploring and categorizing the semantic domains of the vocabulary of unknown origin, may assist with word-sense disambiguation issues with other languages. 
- As the number of N-grams increase, more data is required.
- The LIWC does not currently factor in all recent Unicode emojis, thus may be a flawed system in detecting the full context of modern social media discussions.


**Draft Hypotheses:**

- *Hypothesis:* While English is the current prestige/official language of Saint Lucia, and French is the main lexifier language of "Kwéyòl, the origins of the unknown vocabulary are mostly composed of roots from the lesser linked languages (arw, car, sp, Indian, and African) are most likely to hold the remaining details due to their continual depletion.

- *Hypothesis:* Since the language is mostly orally passed on and spelled phonetically (though inconsistently), it may be possible to find the origin of the words, not only through text analysis but through cross-lingual acoustic models. The mystery words will not only be compared to words of similar text cognates etc. but also compared with vocal sound files from nearby languages.

- *Hypothesis:* Alpha and beta phrase parsers can reduce issues of polysemy and word sense disambiguation, thus improving sentiment analysis.

- *Hypothesis:* A novel CNN-based sentiment semantic indexing method can be applied to multilingual data; this should ease/improve sentiment analysis outcomes on Kwéyòl data.

- *Hypothesis:* The natural annotation of crowdsourced online dictionaries can be useful for building the corpus of a low-resource language, and reducing issues of polysemy and word sense disambiguation, thus improving sentiment analysis.

- *Hypothesis:* Exploring the semantic similarity of corpus related to yet better documented than creole (such as Haitian Creole and Guadeloupean Creole French), may assist with unsupervised statistical machine translation testing.

- *Hypothesis:* Careful use of social media text can aid in building the corpus of a low-resource language, and reducing issues of polysemy and word sense disambiguation, thus improving sentiment analysis; looking at the intent of discussions/texts of social media.

- *Hypothesis:* There is an arguable existence of a connection between ethical data science pursuits, Maslow’s hierarchy, biocultural diversity, and the importance of language preservation in light of covid.

- *Hypothesis:* There may be a biocultural diversity link to most creole words as they were created for survival; words are mostly related to nature, food, and relationships.



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





#### The Obstacles:

Data Science is an actively developing field; due to program lengths for P.h.D programs, it may be very difficult to create a timely yet thorough compilation of all available topics, techniques, and technologies. This endeavor is quite a complicated undertaking to publish as a single contributor. Co-authorship on works may be sought to competently manage the workload of research, and the coding of these tools. Ultimately, the intention is not to compile a comprehensive list of all possible avenues of exploring creole via data science's NLP tools. It is to encourage interest in the field and provide starting points for possible future expansion of these topics.




#### The Tools:

The tools may focus on open source and low-cost resources such as R Studio, Python, Pytorch, fastText, LIWC, Github, Microsoft Office 365 tools (like Forms and Power BI), Tensorflow, and other available Google tools available. 

- Google Colab can be described as a Python development environment that runs in the browser using Google Cloud; it is completely free of charge, and even offers access to their GPU is free of charge for some hours of usage every day. 


### References:


{% bibliography --cited %}

{% include JB/setup %}






