---
layout: page
title: Laurel Lord's Dissertation Works
tagline: Supporting tagline
---
{% include JB/setup %}


## To-Do:

**The proposal should contain the following elements:**

- Statement of Research Questions or Hypothesis
- Literature Review
- Theoretical or Conceptual Model
- Data and Analytic Method
- Implications for the Field of Study
- Publication Plan


## Committee: 

*Currently in the pending approval phase*

**Current Committee Chair:**

Dr. Rand Ford: Professor and Program Director of Data Analytics at HU

**Dream Team Committee Members:**  


- **Internal Members:**

    - Erin Buchanan

    - Kevin Purcell 

    - Kevin Huggins

    - Roozbeh Sadeghian


- **External Members:** 

    - *Dr. Melissa Irvine: Ph.D. Linguist; dissertation on Saint Lucian Creoles.

    - *Dr. David Frank: Linguist at SIL, Creole expert and contributing author of one of Saint Lucia’s creole dictionaries.

    - *Dr. James W. Pennebaker: Linguistic Inquiry and Word Count (LIWC) co-creator and social psychologist (need to prepare formal meeting request after LIWC papers are reviewed by Dr. Ford).

    - *Graham Neubig: Carnegie Mellon University lecturer (Multilingual NLP)


#### __Quick overlook__

In the realm of cross-lingual or multilingual natural language processing (NLP), it does appear that some languages tend to get more attention. Typically well-established languages, with a plethora of linguistic resources to build from, often thrive while low-resource creole languages are left to languish. Creoles are a particular challenge of the NLP community as these languages often arise from often frantic and urgent needs to establish harmony in communication within cacophonous settings. In the Caribbean, creole languages often emerged as a means of survival, and endured as a result of resilience; often speakers struggled to work within the bounds of a dominant prestige language while retaining unique traces of their heritage languages or contact languages. The resilience of this language is currently being tested with the advent of the SARS-CoV-2 pandemic threatening the lives of older language-keepers. Therefore, the careful creation of tools and frameworks is needed to facilitate society's creole language needs. 

Yet, it is this very discordant origin and complexity of structure that presents issues to the preservation of creole languages. For example, most words in Saint Lucian Kwéyòl/creole focus on emotions, the weather, and other aspects of the natural environment, including animals and food sources  {% cite frank2007sources %}; therefore, finding domain-equivalent literature sources outside of certain contexts can be challenging. Moreover, it is said that just over 83% of vocabulary words have French origins; roughly 3% is English-based, and Amerindian, African, and East Indian sources account for about  ½ % of the total each  {% cite frank2007sources %}.  Even the author of the official creole dictionary acknowledged gaps in its vocabulary was due to the lack of official etymological details of over 11% of documented words {% cite frank2001kweyol frank2007sources %}. Despite the advantage of cross-referencing parallel language data sources, the language challenges are made more complex by many of the vocabulary words lacking details on their origins. Ultimately, the situation could be described as a "Mondrian-like" language setting. This image seems apt to explain this low-resource creole being close to parallel and monolingual data with high-resource languages (like French and English), yet the present language data may belong to different domains {% cite ranzato2021%}. Not much NLP research has been done on adapting its components to creole languages, however, the academic tide has been changing as of 2020 {% cite soto2020language %}. 

There are multiple ways to utilize NLP functions. The increasing popularity of opinion rich resources such as blogs {% cite kweyol_works_joseph %}, shopping websites, review portals, and social media platforms {% cite kweyol_fb_joseph %} are rapidly attracting business people, governments, and researchers alike. Sentiment analysis often garners high interest from businesses. However, an understanding of sentiment analysis, word-sense disambiguation, and issues with dependency parsers, highlight very difficult tasks involved in natural language processing. A major challenge of lexical semantics is creating training data and algorithms that facilitate downstream tasks. Moreover, it has also been said that while there is a lingering 'bias towards contemporary Indo-European languages', treebanks for other language families and treebanks for classical languages are on the rise {% cite nivre2016universal %}. It has been suggested that categorizing the challenges and formalizing their interpretation using Universal Dependencies may help create a Saint Lucian Kwéyòl dependency treebank, and later facilitate other needed NLP tasks (such as sentiment analysis of texts). A Saint Lucian Kwéyòl parser may be constructed by leveraging the base knowledge of French syntax. However, these may not be the only tools required to tackle the challenges of digitizing and analyzing creole languages. Therefore, it may be helpful to develop a framework to improve the models for linguistics. Perhaps an extendable framework that can demonstrate its application to low-resource creole languages.

### References:

{% bibliography --cited %}