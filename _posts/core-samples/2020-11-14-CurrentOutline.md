---
layout: post
category : Papers
title: "Current Outline" 
description: "Current tasks and paper outline:"
tags: [Affiliation]
---
{% include JB/setup %}


Current tasks and paper outline: 


Maslow's need for belonging: Addressing the "lost in translation" issues with sentiment analysis.


### Chapter 1: 

#### Establishing concepts/themes:

Includes a critique of data science pedagogy (revamped creative and ethical data science research topic-generation); differentiating between linguistics and computational linguistics, digital humanities, and biocultural diversity, and NLP discussion. 


### Chapter 2: 

#### Goal: Improved Cross-Lingual Sentiment Analysis Models

* Describe the basics of sentiment analysis along with a brief summary of related work.

* Introduce possible scenarios for cross-lingual sentiment analysis, argues the use of machine translation, and introduces an example target language - Saint Lucian creole

#### Model design and application:

Cross-Lingual Sentiment Analysis (using not bi-grams, but phrase-grams with LIWC in Machine Translation); NLP model proposal for Creole to English, English to Creole Rule-Based Machine Translation System.


#### Assessing accuracy via datasets:

* Provide details of data sets and tools used in experiments.

* Using established datasets (sources of Creole literature, and sentences from Creole dictionary (labeled)).

* Consider an experiment using corpus-based cross-lingual projections.

* Study cross-lingual polarity detection where (labeled or unlabeled) data in the target language is available.

* Compare the methods for translation of sentiment lexicons.

- Use POS tags from the Creole dictionary

- Attempt Cross-Lingual Sentiment labeling with LIWC

- Evaluate special rules of creole for a Rule-Based Machine Translation; is there anything unique to creole

* Provide a summary of all experiment results, remarks, contributions and directions for further research.



### Chapter 3: 

#### Related prediction models: 

Language and law (predict the likelihood of success in creole cases, the typical legal language/phrases in creole cases).


#### Additional models:

* Kmeans clustering for Creole language origins; French, African, Spanish, Portuguese, English, and Tamil. Many-to-one relationship?

* Consideration of Cross-Lingual Sentiment Analysis Models using graph theory.

* Test text generation: Machine Learning using transformers (not LSTM); GPT2 (using Google Collab)

* Attempting to use the phrase-grams to aid with creating additional Creole literature on various topics; attempting to translate an English legal document into Creole (check if accuracy is present; if the text remains neutral (as the law is believed to be so, or if there are additional emotions detected)and see how successful additional legal document generation could be. 

* Additional paper on standard creative literature (stories and fables).  Thinking and creating in English first, then translating to Creole; or thinking and creating directly in Creole, then translating to English.

* Some calypso songs have parts that are purely creole, however, these are designed to have hidden meaning using plain phrases. It will be interesting to see if the AI can detect the subtlety.


* Current questions: Is this Ph.D. level work yet? How can I improve what I have/ check what is missing? Are these the only areas I need to be aware of when addressing a lost in translation issue?

{% include JB/setup %}