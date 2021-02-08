---
layout: page
title: "Brief Introduction: Low-resource Cross-lingual Framework"
description: "Introduction to Low-resource Cross-lingual Framework"
---
{% include JB/setup %}



#### __Quick overlook__

In the realm of cross-lingual or multilingual natural language processing (NLP), it does appear that some languages tend to get more attention. Typically well-established languages, with a plethora of linguistic resources to build from, often thrive while low-resource creole languages are left to languish. Creoles are a particular challenge of the NLP community as these languages often arise from often frantic and urgent needs to establish harmony in communication within cacophonous settings. In the Caribbean, creole languages often emerged as a means of survival, and endured as a result of resilience; often speakers struggled to work within the bounds of a dominant prestige language while retaining unique traces of their heritage languages or contact languages.

It is this the very discordant origin, and complexity of structure, that poses issues for the study and preservation of creole languages. For example, most words in Saint Lucian Kwéyòl/creole focus on emotions, the weather, and other aspects of the natural environment including food sources; therefore finding domain equivalent literature out of that context. Additionally, it is said that just over 83% of vocabulary words have French origins; roughly 3% is English-based, and Amerindian, African, and East Indian sources account for about  ½ % of the total each. Even with the advantage of cross-referencing parallel language data sources, the challenge is made more complex by the lacking details on many vocabulary word origins. Even the author of the official creole dictionary acknowledged gaps in its vocabulary due to the lack of official etymological details of over 11% of documented words. Ultimately, the situation may be described as a "Mondrian-like" learning setting due to the possibility of this creole being close to parallel and monolingual data with high resource languages (like French and English), yet the data may belong to different domains {% cite Ranzato2021%}. Not much NLP research has been done on adapting its components to creole languages, therefore, the careful creation of tools and frameworks is needed to facilitate all of society's language needs.

The increasing popularity of opinion rich resources such as blogs {% cite kweyol_works_joseph %}, shopping websites, review portals, and social media platforms {% cite kweyol_fb_joseph %} are rapidly attracting business people, governments, and researchers alike. While there are multiple ways to utilize NLP functions, sentiment analysis often garners high interest to businesses. However, word sense disambiguation and issues with dependency parsers highlight very difficult tasks in natural language processing; a major challenge of lexical semantics is creating training data and algorithms that facilitate downstream tasks. Moreover, it has also been said while there is a lingering 'bias towards contemporary Indo-European languages', treebanks for other language families and treebanks for classical languages are on the rise {% cite nivre2016universal %}. It has been suggested that categorizing the challenges and formalizing their interpretation using Universal Dependencies may aid in creating a Saint Lucian Kwéyòl dependency treebank, and later facilitate other needed NLP tasks (such as sentiment analysis of texts). A Saint Lucian Kwéyòl parser may be built by leveraging the base knowledge of French syntax. However, these may not be the only tools required to tackle the issues of digitizing and analyzing creole languages. Therefore, it may be helpful to develop a framework to improve the models for linguistics. Perhaps an extendable framework that can demonstrate its application to low-resource languages such as creole. 




### References:

{% bibliography --cited %}

{% include JB/setup %}