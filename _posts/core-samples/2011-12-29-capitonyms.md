---
layout: post
category : Papers
title: "Data Science: Musings"
description: "Data Science: Musings"
tags: [Assets]
---
{% include JB/setup %}


## __*Musings on Capitonyms__.

Ultimately, I think while most of my ideas were interesting and useful, they always seemed to be more like master's level projects and not a full Ph.D., or they could be a full Ph.D., but I was only interested in them as a single paper. I think that I was so engrossed with trying to produce a paper at the end of every semester, that I didn't allow myself to fully think about what is expected for a fully cohesive data science Ph.D dissertation work would look like. I had many concepts for papers and solving individual problems, but not enough tied them together beyond linguistics. I feel like I was creating a base for the usefulness of data science and its tools, but not actually developing data science tools.

I decided to refresh myself on the concepts by reviewing the text analytics textbooks, reading up on NLP papers, and reviewing the NLP video from Alice Zhao. I am also going over notes from a free course on Data science for linguists to better understand what is the difference between a data scientist and a linguist, and I have to say it is very interesting (but I am still working through the content). I figured if I understood what a data linguist is, I could better avoid going down that path again.

I humbled myself, and now I feel like I am on my way to a better project, since I feel more comfortable about my knowledge of the field. I now look at Grammarly and wonder about what is going on in the background; I think about Noam Chomsky's ideas on the "autonomy of syntax", where syntax and grammar depict information that is independent of the meaning and semantics of words,  and how that may impact autocorrection here. It seems to have some sort of an interactive spelling correction, with an interesting combination of background lemmatization, tokenization, and PoS tagging; Grammarly probably has some "named entity recognition", with "sentence boundary detection", and a "Word Sense Disambiguation" feature using some kind of Lesk algorithm and snowball stemmer and (like those present in Python's NLTK). Concepts like the editing of stopwords are not applied here, and it is not yet capable of properly handling corrections for various languages.

### Te quiero/ Yo te quiero:

I noticed that some phrases do no raise the alert for errors,  and in fact, it sometimes incorrectly capitalizes a word in a Spanish sentence, since probably the training data indicated that the word is typically at the beginning of a sentence. Like with the phrase, "Te quiero", "I love you"; it will suggest capitalizing the end word as Quiero. Perhaps this is due to quiero's typical use; its usual use is to indicate a want; a sentence like "I want ice-cream",  is typical and therefore translates to "Quiero helado". Here Quiero's use is viewed as correct, yet instead, heldo is marked here as non-english; so I  suppose the Spanish phrase for "want ice-cream" may not be as popular. 

It might also be because, the distinction between direct and indirect objects isn't quite the same in Spanish as it is in English, and thus the pronouns that represent them are sometimes called accusative and dative pronouns, respectively. Or it could be that the verb, Querer, that quiero is from, is considered to be a transitive verb (one that needs to have a direct object) and, therefore its usage is a bit more complex, thus difficult to program? Anyway, since the language is so temperamental does that mean that larger training datasets are needed in order to detect the nuance of the appropriate use or translation?

Interestingly, GoogleTranslate and  Python's Textblob library may be a bit faulty as it seems that it offers varied capitalizations or meanings when a word or phrase is hyphenated, separate, or concatenated. When translating I want ice cream, with ice and cream separate, there are no capitalizations. However, if I hyphenate or concatenate, it capitalizes the word "Quiero". 

Also in the last week, the singer Jennifer Lopez had a controversial Spanish line in her latest song that caused an interesting look into the NLP capitonym challenges. She called herself "Tu negrita del Bronx". Negrita as you can probably guess can imply that something is dark, and "ita" is usually added to the end of something to indicate a term of endearment, infantilizing, or insulting to a dark-skinned person. People were unsure of what she meant by its use since she is clearly not dark in skin tone, but she tried to explain that in some parts of the Spanish world, calling someone dark-skinned is universal- basically, saying anyone who is not white is dark, and they do uplift each other for this quality. So confused fans went to Google for a literal translation, only to encounter further confusion; if you capitalized Bronx, it would display the negative version (your n-word from the Bronx), and if you did not capitalize it would have translated to the milder version ( "Your black girl from the bronx").  Textblob also has the same translation result for both scenarios {% cite sarkar2019text sarkar_2019 %}.

Interestingly, that capitonym also appears to be used in Textblob to a certain extent; it appeared to be a means to address the differentiation between formal forms and informal forms of conversations.The formal form of 'yo te quiero' and the informal from 'te quiero'  result in 'I love you' and  'i love u',  respectively. Note that regardless of capitalization in the formal phrase, the result is capitalized.  Yet only when the first character is capitalized in the informal ('Te quiero'), will it be reciprocated in the result ('I love u'); yet, the other words remain in their informal forms ('you' remains as 'u'). An additional consideration is that when the word 'mucho' accompanies the phrase 'te quiero' to form 'te quiero mucho' ('I love you very much')  it seems to be regarded as formal, as all the necessary formatting is present.

It will be interesting to see if translation changes over time to directly address this concern as the scandal would have generated additional internet chatter. It does not appear that Google is addressing this matter based on a live training dataset but perhaps based on a package like Textblob. Using key words like "Capitonym" "te quiero" "textblob", I was unable to find any current literature on this occurrence via any Google or present in any scholarly archives.

Ultimately, I guess would love to do some sort of commentary paper on this phenomenon; to perhaps discuss the possible inner workings of the underlying algorithm that furthered the scandal, and discuss the possible future implications. Since world leaders are increasing their use of informal text and speech through the use of social media platforms, yet these same governments rely on this technology for translation, there could be potential future conflicts due to literal misinterpretation. Perhaps data science studies can raise the alarm for a need for improvement in the underlying flawed structure that lacks live updating to formal and informal dictionaries or demonstrates overfit models. That paper would have gone under my Maslow's needs sections on belonging or security, since miscommunication can facture one's sense of belonging, and subsequently lead to a lack of sense of security.



### References:

{% bibliography --cited %}


[Back to: Safety and security needs: Assets](https://llord1.github.io/2020/07/08/Assets)


