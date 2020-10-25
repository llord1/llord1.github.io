---
layout: post
title: "Assets: Assessing the link between law and linguistics - Analysis"
description: "Assessing the link between law and linguistics - Analysis"
tags: [Assets]
---
{% include JB/setup %}


### __*Safety and security needs*__ can be explored as topics related to __*Assets*__.

### Introduction:

In a time of crisis, such as the 2020 SARS-CoV-2 pandemic, Maslow's theory of needs aids in visualizing and prioritizing scarce resources based on an individual's needs {% cite maslow_1943_2000 mcleod_2020 matias2020human casale2020interpersonally wong2020healing %}. Often, obtaining our needs is intrinsically linked to the ease with which we are able to communicate - our ability to understand and to be understood. To effectively facilitate the communication of various societal needs, data science can be employed as a means of monitoring and maintaining the standards of numerous fields through the careful study of an environment's linguistics.

For example, our sense of safety and security can be linked to the ease with which we can understand the medical advice being relayed to us by medical professionals or their ability to understand the symptoms we describe. As recently as 2019, Sweden conducted a national study on health care professionals' communications through interpreters; an investigation occurred after noting that many parents utilizing neonatal care were foreign-born and unable to effectively communicate with the healthcare professionals in the local language, {% cite patriksson2019health %}.  In 2013, linguistic one work highlighted communications issues between physicians and Spanish-speaking Latin American women with pelvic floor disorders {% cite sevilla2013communication %}. This study highlighted that apart from patients’ lack of understanding concerning the disease, there was a lack of Spanish proficiency among the participating physicians. Even in 2009, there was a study done on competent peer support intervention for Spanish-speaking Latinas with breast cancer {% cite napoles2009developing %}. 

Notably, one of the areas most closely associated with ensuring societal safety and security would be a country's legal system. This system encompasses police officers and high courts, however, the position of utmost importance in navigating the legal system on an individual's behalf - one's voice in the court - would be their lawyer. Therefore, the effectiveness of communication between lawyers and the client can be fundamentally linked to that client's freedom. Data science can therefore be used as a means of monitoring and maintaining justice through the exploration of legal data; trends may be uncovered on the probability of innocent or guilty verdicts, given the lawyer's capacity to communicate in the client's dominant language (mother tongue).

For example, the Caribbean can serve as a rich multilingual setting in which one can explore the relationship between law and linguistics. The 2006 case for Gerald Joseph's criminal appeal, served to highlight the importance of proper linguistic consideration for clients that speak heritage languages {% cite ecsc_2015}. Joseph (Appellant) was a Saint Lucian Kwéyòl speaker that requested a criminal appeal on six substantial grounds (and also appealed against the sentence). This appeal was ultimately granted, partly due to the argument that there was a possible issue with language barriers. At the appeal, representation stated that it was "totally unrealistic to have expected Joseph, who was illiterate and conversant only in kwéyòl, to have appreciated the nuances of a criminal trial that involved issues such as identification, credibility, good character, and recent complaint" {% cite ecsc_2015}. Proper legal representation and effective communication may have provided a different initial outcome in Joseph's case.

Noting the importance of effective communication between attornies and clients, it would be socially beneficial to gather data on legal cases and with any lingual component. One could, therefore, determine if there is a higher likelihood of an innocent or guilty verdict based on the alignment of the client's dominant language (mother tongue) and the lawyer being able to understand them. However, it should be noted that most legal systems tend to offer the assistance of Court-appointed interpreters; yet, reducing communication gaps through direct attorney-client communication would be the ideal situation for legal representation.

### Current goals:

Find sufficient case examples/ court data; attempt to find any precise linguistic components if they exist.

Current mechanics may include the extraction of general features from raw text. These general features include detecting the number of words, the presence of "creole" / "Kwéyòl"/ "patois" words (for example words beginning with variations of the spelling of "Kwéyòl", such as "kwe" and "Kwé"; words such as "patois" or "patwa" ) and the language in which the text is written. Searches may also be done related keywords, such as "heritage language", "traditional language" "native language", "local language", and the french-based "Saint Lucian Kwéyòl", and "Antillean Kwéyòl".

Since Gerald Joseph is one easily identifiable case of one's linguistic literacy being used as part of a legal defense for his appeal {% cite ecsc_2015}, it may be useful to analyze the language of that legal document (that ultimately won the appeal). Perhaps it may reveal the typical legal terminology and case law, argument, and even tone and reception of arguments when dealing with such cases. Finding other cases where legal defense mention one's limited linguistic literacy may reveal other local legal patterns. For example, since Saint Lucian Kwéyòl is often believed to be spoken most by agricultural workers and rural communities  {% cite irvine2020st %}, do these cases occur most often require Family law, Land law, Property law, Environmental law, or perhaps Employment law, Human rights law, and even Criminal law. Based on the verdict of cases, it may also be possible to predict the likelihood of one winning a case where one's language limitations are part of their legal defense. Where possible, additional demographic data may be highlighted to provide additional parameters for the calculation of the likelihood of success or failure.

Considerations may need to be made as to the setting of the cases. Should the case be considered a success or a failure if the defendant is the creole speaker? What happens if the plaintiff is the speaker and wins? What happens if the plaintiff is the speaker and loses? What happens when both are creole speakers? Were court-appointed interpreters used? 

Additional complications may include the fact that there are various types of creole in the Caribbean. Some are French-based like Haitian Creole and Antillean Kwéyòl (Saint Lucian and Dominican). Others may be English-based; this may include Jamaican and Barbadian (but may also include a Saint Lucian variant {% cite irvine2020st hilaire2008postcolonialism hilaire2011kweyol %}. Additionally, Papiamento or Papiamentu, a Portuguese-based creole language, is also present in the Caribbean; however, it is mostly restricted to the Dutch Caribbean/ ABC islands, having official status in Aruba and Curaçao, and is a recognized language in the Dutch public bodies of Bonaire, Sint-Eustatius and Saba).

This analysis will begin with cases in the Caribbean region (as this is a highly multilingual setting) from the database of www.eccourts.org; if the data is insufficient parameters will be widened.

Will need to settle on a model once sufficient data has been identified.

After testing the necessary preliminary analysis is conducted, documents will be developed, finalized, and shopped around to the various related journals.

This document may be paired with the industry multilinguistic competency survey of Saint Lucian lawyers.

[Survey discussion](https://llord1.github.io/2020/08/26/AssetsSLUlawsurvey)





### References:

{% bibliography --cited %}


[Back to: Safety and security needs: Assets](https://llord1.github.io/2020/07/08/Assets)


