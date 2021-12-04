---
layout: page
title: "0.  Dissertation Outline: "
description: "0. Dissertation Outline: "
tags: [Assets]
---
{% include JB/setup %}



 
### Working title:  
 
'Novel natural language processing (NLP) dictionary building approaches for the exploration and preservation of low-resource languages'. 
 
### Brief: 
 
Natural language processing (NLP) is an area of data science capable of undertaking a plethora of language challenges; however, researchers often overlook opportunities to tackle low-resource languages, such as most of the world's creoles. NLP research is often pursued in select popular languages, and models tend to depend on supervised machine learning and demand substantial quantities of annotated data for the subsequent resources to be widely distributed and used. Creole languages can typically encompass contending with multilingual code-switching, and plentiful word-sense disambiguation issues due to high levels of polysemy and inconsistent adherence to writing systems (especially in instances where the language is mostly orally passed on and diacritic utilization is inconsistent). Analysis issues are exacerbated by the lack of text samples across varied semantic domains/topics. There are somewhat contradictory public assumptions about the language; that while most do not have definitive facts, they believe its status to be 'actively thriving' while acknowledging it as 'low-resource language'. These declarations are accepted without any comprehensive data analysis on the availability of text resources or the vitality of the language among the current population. 
 
This thesis aims to examine information extraction and natural language understanding methods for handling low-resource situations, particularly for creoles. Therefore, there will be a three-pronged approach to this dissertation; it entails data collection, data building, and data distribution. Here I conduct surveys on a low-resource language (to confirm its vitality), create tools to address needs unique to the language, and attempt to distribute the sample language text files (of various domains) to facilitate the future analysis of the creoles. I focus on the use of Saint Lucian Kwéyòl (also known as ACF) as a base language for testing. 

I am currently preoccupied with three interlinked concerns about this language. Dictionary building to address missing Kwéyòl dictionary entries, Kwéyòl dictionary entries of unknown origin, and exploring mutually intelligible languages' dictionary entries. Exploring these details can indeed lead to various possible projects or independent papers.

For example, in dictionary building, I intend to review sample texts of varied semantic domains, and also peruse other mutually intelligible languages' dictionary entries; I will hopefully encounter various entries not present in the current Kwéyòl dictionary. Additionally, questions concerning the etymology of the list of vocabulary items of 'unknown origin' could then be addressed by comparing the Kwéyòl dictionary's entries list against that of the dictionaries of mutually intelligible languages. Exact matches may provide useful information concerning possible missing Kwéyòl dictionary etymologies. Any results from the analysis concerning new possible Kwéyòl dictionary entries can also have this comparative check performed. Ultimately, I hope to prove that the investigation of low-resource such as creoles is not as arduous or fruitless as some in data science or may perceive it to be, to increase the low-resource language data available NLP researchers, and simultaneously elevating Kwéyòl's status as a low-resource language. 
 
At the end of this endeavor, I should provide a unique creole text data compilation to the field for future study. It is believed that the expansion of corpora for low-resource languages would be an overall valuable undertaking for increasing sources of language datasets for analysis. Additionally, I should create novel tools where none existed for this low-resource language. This would also include the foundations of a machine translation engine for a particular example creole language. I will also attempt to utilize word frequencies and contexts, with semantic similarity techniques to contribute an updated vocabulary list/dictionary for this previously neglected language. I would also have used cross-lingual transfer learning to explore the boundaries of modern language detection tools and address some lingering linguistic mysteries of a low-resource language (Saint Lucian Kwéyòl). Finally, I should leverage creole languages in cross-lingual models to explore the similarities and differences among Caribbean creoles and their resource-rich lexifier languages. 
 
 
### Initiative 1: Data collection 
 
Project 1: (partially completed) 
 
Foundational data collection on low resource language presence and utilization in its society. 
 
Goal:  
 
To investigate the current state of a language assumed to be low-resource and confirm its vitality using modern technology. 
 
Research Questions: 
 
-What percentage of key professionals in creole societies (teachers, lawyers, law enforcement, and medical professionals) consider themselves fluent in the local low-resource hereditary language, and how crucial is an understanding of that language to their professional interactions?

-What percentage of professionals view this heritage language as their first language (thus confirming the language's vitality)?

-Do the details revealed in past linguistic investigations endure; can creole continue to be regarded as the second most widely language utilized for communication on the island, or has another language taken this place?

-Ultimately, is the language definitively vital enough to garner further investment of resources into active monitoring and preservation technologies?
 
Data: 
 
1. Survey of Saint Lucian lawyers (IRB approved and distributed). 

2. Survey of Saint Lucian teachers (IRB approved and distributed). Attended the August 31st  Saint Lucia National Language Policy Implementation Conference, and the project's efforts were mentioned [here](https://youtu.be/L3T9MMHqq0Y?t=12097) {% cite language_survey_mention_2021 %}.

3. Survey of Saint Lucian law enforcement (IRB approved and distributed). 

4. Survey of Saint Lucian healthcare workers and emergency services (IRB approved and distributed). 

5. Survey of Saint Lucian public (vitality survey) (drafted, yet paused pending for possible [grant approval](http://www.ogmios.org/grants/index.php)); also in discussions with the local Saint Lucia Folk Research Center, Ministry of Education, The Central Statistical Office of Saint Lucia, and the Ministry of Tourism Information, Broadcasting, Culture & Creative Industries for alternative grants.
 
*Note: Not all surveys may be completed by the estimated December 2021, as one may be used for the aforementioned grant project. All approved surveys will be expected to have a preliminary report produced by December 31st 2021. 
 
 
### Initiative 2: Data building and tool creation 
 
Project 1: (partially completed) 
 
Increase the vocabulary lists (of the official dictionary) by at least 10% using various NLP tools and techniques. 
 
Goal:  
 
To create novel NLP approaches for increasing vocabulary lists of low-resource languages (expanding the Saint Lucian Kwéyòl dictionary entries).  
 
Research Questions: 
 
-How can a novel application of Zipf's law and word frequencies be used to update the vocabulary lists of low-resource languages?

-How can a lexifier language (such as French) be leveraged to create a unique NLTK package tuned to a related low-resource language creole? Exploration would include preprocessing, POS tagging, word tokenization, phrase partitioning, etc. 
 
-Can alpha and beta phrase parsers (tumbling frequency parser) reduce issues of polysemy and word sense disambiguation in ACF? 
 
-Can informal text samples (social media discussions and Wiwords.com platform contributions) be considered viable in updating the vocabulary lists of low-resource languages; particularly creoles, where polysemy and inconsistent accent usage on digital platforms increase word sense disambiguation issues? 
 
Data: 
 
All collected Kwéyòl text samples including formal text samples and informal text samples. Current progress is as follows:

The dictionary currently states that it bears 3969 entries in Saint Lucian Creole French, and 4470 in English. Therefore the goal would be about 400 new Saint Lucian Creole French entries. Currently, with only preliminary testing, I have identified about 44 vocabulary items currently excluded from the Kwéyòl dictionary's entries (this excludes other found phrases like 2018, job titles, etc.) from just two documents. This is only about a one percent increase for now. However, I was also able to identify instances of alternative spellings of current entries. These can be regarded as spelling errors, yet can serve as useful data for future spelling correction programs. I have also completed a simple demonstration of this possibility using simplistic Python coding. This may be expanded further in future works.
 
Project 2: (partially completed) 
 
Testing current language detection and cross-lingual approaches to handling low-resource creole languages 
 
Goal:  
 
To utilize creoles to demonstrate the limitations of current language detection tools for the ultimate purpose of generating novel NLP models capable of estimating etymological details from cross-lingual analyses.  
 
Research Questions:  
 
-How can advanced NLP models be used to reduce the percentage of "vocabulary of unknown origin" to below its current 11.5% of the established Kwéyòl language (via David Frank's works). 
 
-How do current language detection tools, such as Google, Yandex, and Bing (Skype), handle low-resource languages outside of their current knowledge base, and can they be reliably used to glean any etymological details? 
 
-To what extent can the use of semantic similarities (words by dimensions matrices) assist with the exploration of creole vocabulary etymology (where output vectors are then compared to main lexifier languages such as French, Spanish, and Portuguese vectors to see if there are similarities)? 
 
-How can additional vocabulary items be reaped from cross-lingual analysis of Caribbean creoles bearing richer text resources; can Haitian and Guadeloupean parallel texts be effectively used to address insufficiencies of text samples for Saint Lucian Kwéyòl? 
 
Data:  
 
1. David Frank's 2001 Kwéyòl language list of 'vocabulary of unknown origin'. 
 
2. Cross-lingual data resources from relevant main lexifier languages via publicly available parallel texts (relevant public dictionaries and public text resources such as Tatoeba, etc.) 

Current progress is as follows:

Language detection tool comparison is underway, as well as cross-lingual analysis; these should directly feed into addressing concerns about the list of 'vocabulary of unknown origin' and semantic similarity investigations.
 
 
Project 3: (partially completed) 
 
Goal:  
 
To explore the mutual intelligibility among related main lexifier languages, and Caribbean creoles via cross-lingual analysis. 
 
Research Questions:  
 
-Is the assumed '90% mutual intelligibility among the Antillean creoles' still an accurate figure in light of the increased text samples for analysis?  
 
-Is Haitian creole more mutual intelligibility to Saint Lucian Kwéyòl than Dominican? 
 
Data:  
 
1. Compilation of all Saint Kwéyòl data I have encountered in my studies. 
 
2. Relevant public dictionaries and samples of other Caribbean creoles via publicly available parallel texts (via Tatoeba, etc.). 

Current progress is as follows:

The cross-lingual analysis is underway; this should directly feed into addressing concerns about mutual intelligibility.
 
 
### Initiative 3: Data distribution 
 
Project 1: (partially completed) 
 
Publication of a collection of Kwéyòl text data for future data analysis 
 
Goal:  
 
To publish all the unique Kwéyòl data that I have encountered in my research; this would include publicly available parallel datasets. 
 
Research Questions:  
 
-How can local governmental bodies support the publication of a Kwéyòl text data collection (without copyright issues)? 
 
Data:  
 
Compilation of all Kwéyòl data I have encountered in my studies. 

Current progress is as follows:

I have spoken to representatives at the Saint Lucia Folk Research Center, and the Ministry of Education about hosting the data.

{% bibliography --cited %}

{% include JB/setup %}
 