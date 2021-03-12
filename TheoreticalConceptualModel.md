---
layout: page
title: "Theoretical or Conceptual Model"
description: "Theoretical or Conceptual Model"
---

#### __Theoretical or Conceptual Model:__

**Low-resource Cross-lingual Framework**

In summary, David Frank's paper on Sources of St. Lucian Creole Vocabulary piqued my interest, particularly the section on Vocabulary of Unknown Origin. Creole is complex as it is an amalgamation of different languages adapted for survival and solidified through generations of oral and written communication. I became intrigued by the complexity and mysteries within Saint Lucian creole "Kwéyòl" and hoped to explore it through data science tools and techniques. 

Currently, I am leaning towards using multilingual natural language processing to create a language detection and translation model capable of tracing the origin of Saint Lucian creole "Kwéyòl" by exploring supervised and unsupervised Statistical Machine Translation. However, in order to do so, I must also explore and understand the underlying language structures; such as dependency parsing, treebanks, sentiment semantic indexing on multilingual data.

I am also intrigued by topics on word sense disambiguation in creole; particularly the problems polysemy poses to sentiment analysis and how that impacts machine translation in low-resource languages. I want to explore phrase-based parsing techniques to see how they will impact the accuracy of my machine translation models.

Ultimately, outcomes of this endeavor will include, contributions of new and/ or improved Saint Lucian "Kwéyòl corpora for future analysis, and new techniques and tools for exploring sentiment, and low resource languages.  In order to properly explore this topic, I will need to search for and prepare the sample Saint Lucian "Kwéyòl corpora; locating as much parallel data as I can find.

I want to use cross-lingual machine translation to find the unknown origins of vocabulary words

##### __Assumptions:__
- Saint Lucian Kwéyòl is a low resource language
- Lexifiers can be assigning ranks based on an established assumed similarity to the target language.
- The official Saint Lucian Kwéyòl dictionary is a work in progress; not fully comprehensive.
- French (fr) is the main lexifier language of "Kwéyòl.
- The official French dictionary is adequately comprehensive.
- English (en) is the current prestige language of Saint Lucia.
- The official English dictionary is adequately comprehensive.
- Additional known contributing languages: Guadeloupean Creole French (gcf), Haitian Creole (hat), Spanish/Portuguese (sp/pt), Amerindian (Carib -car, Arawak -arw,), Indian (Hindi-hi, Tamil-ta), African (Yoruba-yor, Fulani-ful, Bantu-bnt, Igbo-ibo, Kikongo-kon, Mende-men).
- These other contributing languages are low in resources.
- Exploring and categorizing the vocabulary of unknown origin may assist with understanding semantic domains.
- An understanding and focus on cognates is essential to the cross-lingual or multilingual NLP techniques used for language translation and detection.
- The LIWC does not currently factor in all recent Unicode emojis, thus may be a flawed system in detecting the full context of modern social media discussions.

##### __Draft Hypotheses:__

- *Hypothesis:* In exploring semantic similarity corpus from related yet better-documented languages (such as Haitian Creole and Guadeloupean Creole French) may assist with unsupervised Statistical Machine Translation testing.

- *Hypothesis:* While English is the current prestige language of Saint Lucia, and French is the main lexifier language of "Kwéyòl, the origins of the unknown vocabulary are mostly composed of roots from the lesser linked languages (arw, car, sp, Indian, and African) are most likely to hold the remaining details due to their continual depletion.

- *Hypothesis:* A novel CNN-based sentiment semantic indexing method can be applied to multilingual data; this should ease/improve sentiment analysis outcomes on Kwéyòl data.

- *Hypothesis:* Alpha and beta phrase parsers can reduce issues of polysemy and word sense disambiguation, thus improving sentiment analysis.

- *Hypothesis:* the natural annotation of crowdsourced online dictionaries can be useful for building the corpus of a low-resource language, and reducing issues of polysemy and word sense disambiguation, thus improving sentiment analysis.

- *Hypothesis:* careful use of social media text can aid in building the corpus of a low-resource language, and reducing issues of polysemy and word sense disambiguation, thus improving sentiment analysis; looking at the intent of discussions/texts of social media.

- *Hypothesis:* There is an arguable existence of a connection between ethical data science pursuits, Maslow’s hierarchy, biocultural diversity, and the importance of language preservation in light of covid.

- *Hypothesis:* There may be a biocultural diversity link to most creole words as they were created for survival; words are mostly related to nature, food, and relationships.



##### __Draft modeling for Complex Unsupervised Statistical Machine Translation for Saint Lucian Creole/ Kwéyòl:__

![creoleorgins](https://drive.google.com/file/d/1W-mAHPpY6jPkV5E5tYnOBElNwyIdY7kS/uc?usp=sharing)

Using back translation to augment or to create pseudo-parallel data from Source language to target language, and then back from the target language to the source language. The source language would be our main lexifier languages, and would, therefore, be more dominant/strong than the other lexifiers being used. For now, I will list dominant first, and will also be looking for language clusters (like French, Guadeloupean Creole French, Haitian Creole, and English).


Dominant/stronger lexifier/source language clusters:
- French: fr → acf    acf →fr
- Guadeloupean Creole French: gcf →  acf    acf →gcf
- Haitian, Haitian Creole: hat → acf    acf →
- English: en → acf    acf → en  en →  acf    acf → en

Non-dominant/Weaker clusters lexifier/source language clusters:
- Spanish: sp → acf    acf → sp
- Portuguese: pt → acf    acf → pt
- Amerindian: 
 - Arawak language (Lokono) arw → acf    acf → arw
 - Carib language (Kali'na):  car → acf    acf → car
- Indian-
 - Hindi: hi → acf    acf → hi
 - Tamil: ta → acf    acf → ta
- African-
 - Yoruba: yor → acf    acf → yor
 - Fulani: ful → acf    acf → ful
 - Bantu: bnt → acf    acf → bnt
 - Igbo: ibo → acf    acf →ibo
 - Kikongo: kon → acf    acf → kon
 - Mende: men  → acf    acf → men




Once a phrase machine translation model is trained in both directions (back and forth), do back translation to augment or to create pseudo-parallel data from those languages (using the phrase-based model that
was just built) in an attempt to create iterative refinement on the validation set.


{% include JB/setup %}
