---
layout: page
title: "7.c Law Enforcement and Language Diversity"
description: "7.c Law Enforcement and Language Diversity Survey"
tags: [Assets]
---
{% include JB/setup %}

### Introduction:

The justice system relies on how effectively the police force can gather crucial details related to statements and evidence; officers also need to be able to keep civilians safe by effectively communicating with them during emergencies. Concerns also persist about the force's ability to communicate in the local heritage language of Saint Lucian Creole (Kwéyòl, Patois, Patwa). However, the current status of the multilingual capacities of the Royal Saint Lucia Police Force (RSLPF) is unknown. 

Introducing the analysis of such data would not only provide valuable linguistic information to the RSLPF and the public but would also reinforce the importance of data science tools and the need for further investigation of natural language processing (including computational linguistics) in such an environment. This survey will focus on the crucial providers of law enforcement in Saint Lucia. 


### Literature Review (brief):

According to Saint Lucia Citizenship by Investment Programme (CIP) data {% cite pm_slu_citizenship_2015 imi_team_2021 slu_cip_2020 %} and tourism statistics {% cite de1999tourism gaillard_Finland_2021 cso_2021 %}, the Saint Lucian public is increasingly being exposed to persons of different nationalities and backgrounds. In order to protect civilians, both foreign and domestic in origin, police need to be able to effectively communicate in emergencies. As of October 2021, the Royal Saint Lucia Police Force (RSLPF) is estimated to have about 1200 members who navigate law enforcement tasks in an ever-increasing multilingual jurisdiction {% cite lord_camille_2021 %}. However, questions are being raised as to the Royal Saint Lucia Police Force's capacity to effectively navigate the multilingual environment as reports on their linguistic capabilities are not readily available. 

Tensions with the civilians and the RSLPF were worsened during the SARS-CoV-2 pandemic. This presented a uniquely tense situation where some law enforcement individuals are required to effectively communicate with and protect civilians, while also exposing themselves to the dangerous virus. In an attempt to limit the spread of Covid-19, RSLPF members were encouraged to wear masks; however, introducing masks into situations where effective communication is key, created additional hurdles that the force needed to navigate. Law enforcement individuals were tasked with ensuring public safety by interacting with those not adhering to masking protocols {% cite slu_ccc_city_2020 slu_ccc_city_2020-1 slu_govt_adherence_2020 pm_slu_covid-19_2021 slu_govt_covid-19_2021-1 slu_govt_covid-19_2021 %}. COVID-19 protocols required interactions with persons that may not be locals and nor from English-speaking nations {% cite gaillard_Finland_2021 %}. Therefore, law enforcement was charged with encouraging civilians to wear the very masks that bear the potential to lead to instances of additional miscommunication among the public. More than ever, the ability to quickly convey essential information would be crucial to law enforcement as it would be a solution to reduced interaction/exposure times and reduce instances of miscommunication.

To better cope with staff shortages, particularly when encouraging mask-wearing, several individuals were recently hired {% cite gis_police_2020  hts_st_lucia_covid19_2020 hts_news4orce_st_lucia_covid_2020 RSLPF_app2021 %}. During this time Special Reserve Police and Peace Officers were sworn in as Special Police Constables (SPCs); many were promoted from SPCs to Police Constables, and Wardens were sworn in as SPCs (with powers to arrest) {% cite dbstelevision_new_2021 hts_news4orce-arrest_st_lucia_covid_2020 hts_news4orce_st_lucia_special_2021 mbc_prime_news_-_saint_lucia_special-Constables_2021 %}. Officers' lives were threatened by invisible yet serious dangers {% cite gaillard_rslpf_2021 %}, yet there were also increasing concerns and allegations of physical abuse of citizens from the very ones charged with protecting them {% cite hts_news4orce_st_lucia_another_2021 hts_news4orce_st_lucia_covid-19_2021 noauthor_aaron_2021 noauthor_rslpf_2021 editorma_st_2020 admin_rslpf_2021 %}. 

The local police force has had a history of controversy when interacting with civilians within their jurisdictions, and so a move to improve communications among these parties may be welcomed {% cite telesur_english_st_2015 stanislas2021changing %}. In 2013, the level of distrust in communication was so high that Saint Lucia was restricted under the “Leahy Law” from receiving security-related assistance from the United States due to 'credible evidence' that members of the RSPF conducted extrajudicial killings {% cite telesur_english_st_2015  gaillard_breaking_2021 stanislas2021changing %}. While discussions are being held to restore this assistance as of June 2021, members of the Saint Lucian public have expressed difficulties with reporting crime and communicating with members of the local police force over many years {% cite stanislas2021changing gaillard_breaking_2021 the_editor_crime_2016 %}. Concerns about police brutality lingered {% cite hts_news4orce_st_lucia_allegations_2019 %}, and even during the recent pandemic, many continued to question the force's ability to safely interact with and protect civilians {% cite hts_news4orce_st_lucia_mayor_2019 %}

Despite its difficulties, it does appear that efforts have been made to observe and improve the linguistic diversity and capabilities of the RSLPF. Dr. Didacus Jules and Dame Pearlette Louisy appear to have been continuously working towards improving Kwéyòl literacy and the language's status in Saint Lucia; Dr. Didacus Jules was noted as having taught Kwéyòl in several locations, most notably in prisons; prisoners and law enforcement therein were able to voluntarily improve their creole literacy {% cite louisy_2019 %}. Even back then there appears to have been an understanding that there was a connection between the criminal justice system and linguistics; that improving the literacy of not just the prestige language of English, could have a potential impact on ameliorating conditions on the island. 

The 2021 publication of Dr. Sandra Evans in Journal of Pidgin and Creole Languages, Ou ni right-la pou remain silans’ The case for a standard Kwéyòl translation of the pre-trial right to silence', supports the academic merit of conducting surveys on language and law enforcement in Saint Lucia. That work focused on linguistics and the justice system in Saint Lucia, and the potential for miscarriages of justice due to inconsistent communication of civilian rights in Kwéyòl. While it is important that officers communicate key phrases in the heritage language of Saint Lucia, it appears that there is room for further linguistic research for these professionals; they may benefit from information gathered from a base assessment of the overall multilingual capabilities of the force, and the extent of their Kwéyòl's vitality in officer-civilian interactions. 

Therefore, I am currently attempting to utilise surveys and data science tools to investigate and establish foundational truths about the linguistic environment in Saint Lucia, with particular attention to the vitality status of the local heritage language of Saint Lucian Creole (Kwéyòl, Patois, Patwa). These surveys will be executed with close consideration of the articles present in the 'Charter on Language Policy and Language Rights in the Creole-Speaking Caribbean' {% cite icclr_2011 harris_2011 pousada2011linguists %}. Conducting a series of surveys will not only aid my educational pursuits but will also serve to bolster the execution of the upcoming Saint Lucian national language policy {% cite camdu_st_lucia_national_2021 camdu_2018 edu_ministry_2017 satney_2021 harris_2011 mini_edu_2021 joseph_2021 %}. This survey will focus on the crucial providers of education in Saint Lucia. 

The importance of language diversity and heritage language vitality in Saint Lucian society was the recent focus of 2021's International Mother Language Day. The theme for this annual UNESCO celebration (typically held on February 21st) was “Fostering Multilingualism for Inclusion in Education And Society” {% cite joseph_2021 %}. It focused on the significance of an 'individual’s first language, indigenous language, native language emphasising that instruction of such languages should begin in the early years". This theme was said to be the impetus for further development of the Saint Lucian Nation Language Policy, and can also support efforts to monitor, preserve, and examine this language {% cite joseph_2021 %}. 

Integrating multilingual assessment and education as parts of basic training for the police force could improve police-civilian interactions. Special attention could be devoted to the heritage language of the country; the native language could best be preserved if taught to and understood by key institutions in society, such as the police force. A language's status could be elevated if practised by essential pillars of the community.

An investigation into the linguistic capabilities of the RSLPF may provide needed data on creating standard monitoring practises of unit linguistics to ensure continuous improvement in civilian communications. Public distribution of these reports may also reassure individuals of various nationalities and backgrounds that instances miscommunication of with the RSLPF are actively being addressed. Demonstration of positive interactions with law enforcement would not only improve local community relations but may also have a positive impact on tourism {% cite de1999tourism %}.

This survey will focus on law enforcement as they (like lawyers) are all employed in critical services that require effective communication in an increasingly multilingual setting. Dr. Sandra Evans paper appears to have focused on the potential for miscarriages of justice due to miscommunication of key phrases (individual rights) in the local heritage language {% cite evans2021ni %}; this work differs by focusing on the assessment of the language environment and questioning the skills of officers that operate within this space. The survey would not focus on keywords (like Dr. Sandra Evans) rather on data collection and the establishment of metrics on this workforce's linguistics skills. This would encompass investigating what percentage of officers currently consider themselves fluent in Kwéyòl (or other languages) and note their frequency of utilisation of their multilingual skills when interacting with civilians.

Ultimately, this work aims to question if one can truly deem a language as being low-resource if its teaching and comprehension are integrated into the culture of key community services. This survey will simultaneously bolster the vitality (and recognition) of Kwéyòl, by encouraging mandatory education and monitoring of the local heritage language in critical institutions. The intertwining of language education with crucial institutions would elevate Kwéyòl's status (among the "elite") and improve the justice system. Such efforts could help Kwéyòl be recognised as a true asset of communication in Saint Lucia. 

### Methodology:

*Participation Consent Agreement Design:*

The details present on the form are as follows:

By clicking the submit button, I agree to the terms & conditions:

Participation Consent Agreement:

This demographic and linguistic research study has been approved by the Institutional Review Board (IRB) of Harrisburg University of Science and Technology (HU). This research study is led by Laurel Lord, a Ph. D. candidate in Data Science Department at HU. The faculty advisors for this study are Dr. Kayla Jordan, Assistant Professor of Social Analytics, and Mark Newman, Corporate Faculty of Analytics. Special thanks to the Inspector of Police Brenner Camille - Staff Officer to the Office of the Commissioner of Police.

This study is being conducted in compliance with the standards and guidelines given by the HU IRB. The Collaborative Institution Training Initiative (CITI) Programme has certified the researcher, Laurel Lord, for human-subject research.

Purpose of the Study:

The purpose of this research is to gather general demographic data of police and identify their patterns of linguistic interactions with the public on the multilingual island of Saint Lucia. There will be a specific focus on the second most prevalent language - Saint Lucian Creole (Kwéyòl, Patois, Patwa). The responses of participants will be run through textual analytical tools to provide insight into the law enforcement environment that Saint Lucians, particularly Kwéyòl speakers, experience.

Participant Tasks:

Each participant is asked to fill out an anonymous online survey to provide their basic demographic details, statements on their multilingual capacities, and statements on the language diversity of civilian interactions. The form contains ten (10) questions that each participant should be able to complete in less than twenty minutes.

Participant Risks and Discomforts:

There is no anticipated risk for the participant in this research. All information will be protected, and the confidentiality of the data will be maintained throughout this research.

Survey Benefits:

The collection of profession-specific labour statistical data is uncommon in Saint Lucia. Additionally, there appears to be low societal consideration of the increasing multilingual environment; therefore, data collection and analysis of this specific profession could serve as a template for job-specific data collection and improve the law enforcement interactions with the inhabitants of Saint Lucia.

Participation is Voluntary:

Survey participation is voluntary, and individuals may choose not to participate if uncomfortable with answering any of the questions after signing the consent form; this can be done by withdrawing from the survey at any time without penalty. To withdraw, close the form window without hitting the "Submit" button.

Participant Compensation:

There is no compensation for participation as this research will be distributed internally by the Royal Saint Lucia Police Force.

Privacy/Confidentiality/Data Security:

Based on the survey's design, there is no overt identifying material being collected; there is no data on one's exact location, email addresses, phone numbers, or government-issued personal identification numbers. All submitted data will be gathered into a password-protected main document. This data will be saved on a standard thumb drive for three years after the publication of the report.

Non-identifiable data, and a report, will be submitted to the Royal Saint Lucia Police Force, the Central Statistical Office of Saint Lucia, and the Saint Lucia Folk Research Centre (FRC).

Enquires/Questions:

Any questions may be directed to Laurel Lord at lalord@my.harrisburgu.edu. Questions or concerns regarding your rights as a subject in this study may be directed to HU IRB via 717-901-5100 or their website at harrisburgu.edu/irb.

*Question Design:*

Demographic questions included questions on Age, Gender (with the option to self-describe), Ethnicity/Race (with the option to self-describe), and Highest Level of Education as those may add additional context to one's linguistic background; the list of Ethnicity/Race options was inspired by historical settlement data specific to the region, as well as recent immigration data {% cite pm_slu_citizenship_2015 imi_team_2021 slu_cip_2020 %}. An enquiry is also made about one's Citizenship, as this may give additional details as to whether locals or foreign nationals are more likely to be exposed to diverse linguistic backgrounds that benefit the force. 

Questions into the number of years as a member of the RSLPF and one's rank may reflect one's experiences and one's likelihood of exposure to multilingual situations; salary questions may speak to possible future incentives for utilising or acquiring additional language skills. Location details on the current base station/ department/ unit of participants may also reveal details about language hotspots on the island; which locations might have high numbers of certain languages, as well as reflect the number of RSLPF capable of addressing those needs. According to reports, 'the majority of tourists visit Saint Lucia as part of a cruise. Most of their time is likely to be spent in Castries, although Soufriere, Marigot Bay, and Gros Islet are popular locations to visit' {% cite min_health_2016 %}.

Linguistic questions enquired into participant awareness of non-English language assistance programmes in their work environment, if multilinguals' skills were ever a useful asset, and if they perceived language barriers while executing their required tasks; it is hoped that such data could lead to improved training on currently available resources, or inspire improved resource allocation towards language needs.

Like the list of Ethnicity/Race options, language list options were inspired by historical settlement data specific to the region, and recent immigration and tourism data {% cite pm_slu_citizenship_2015 imi_team_2021 slu_cip_2020 %}. Options were included for survey participants that may have encountered various forms of sign language, languages that were not represented within the scope of the survey, and languages that they could not readily identify ('unrecognised languages').

Additionally, linguistic questions focused on gathering details on one's first language, and if they spoke additional languages. There was also a focus on the frequency with which one encountered various languages; this was an attempt to see if the current language environment truly reflected historical settlement, immigration, and tourism data. It is hoped that the information gathered from these questions may better enable the resource allocation to the language needs of works and the people they serve.

#### Future Works:

Ultimately, the survey may not be perfect and may have room for improvement in the future. It is hoped that these works will serve as a template for annual assessments moving forward. With the current iteration, the window for describing linguistic experiences was deliberately not rigid; it allowed participants to consider and comment on relevant linguistic experiences encountered throughout the entirety of their professional life. To avoid overlapping data points in the future, the next survey interval will need to be about a year from the last launch; this would allow better annual trend tracking of these professionals' experiences. Future studies may include the surveying of employees of other critical safety institutions and businesses; workers of the Saint Lucia Fire Service, the local prison, and local security firms may be considered.


### Preliminary Written Report: 26 responses

Demographics:

The youngest participants' ages range between 25-29 and the oldest was 50-54; the most common age range was 30-34. Thus far, mostly male-identified persons have responded; only eight female-identified responses were recorded. Additionally, all participants indicated that 'By birth (birthplace of Saint Lucia)' they were citizens. All but one person identified as Black (African, Afro-Caribbean, etc.); they identified as having 'Mixed Parentage (two or more races)'. Most persons had Secondary School/ Middle & High School educations. This was followed by those with Masters Degrees and Community College/ Associate's Degree (tied). Persons with Bachelors and Some College Courses also tied; Vocational/ Tertiary Education and Post-secondary non-university education were rare but present; the latter being most rare.

Most had 11-15 years at their institution. The Specialized Unit provided the most responses; Drug Unit (South), Force Academy (North), and Information Technology & Communications Unit (North) tied in the task that noted the highest number of respondents. Most participants were constables, and the most common income was range was between 32,001 XCD - 36, 000 XCD.

Linguistics:

So far, the results appear to confirm the assumption that Saint Lucian Creole (Kwéyòl) is the second most spoken language among police officers and civilians; however, there is room for improvement in literacy levels as most are unable to read and write the language.

Most indicated that their workplace did not directly offer civilians any formal non-English language assistance programmes; that external interpreter services would be recommended.

Most (more than half) of the force have encountered language barriers, and Spanish, French, German, Haitian Creole, Mandarin, and sign languages are the most common instances.

English is the only first language reported. The majority of all languages (including Second and Third) were mainly acquired through formal education. Most do speak a second language; Saint Lucian Creole (Kwéyòl) has been the only second language indicated. Spanish and French were the most common third languages. Most indicate that they are able to speak Kwéyòl 'well' or 'very well' and understand it at those same levels. However, very few noted the ability to read and write the language 'very well'; yet most are better able to read it than write it.

It should also be noted that there was indeed a significant number that does not speak it at all; however, there is at least an ability to either read, write or listen, with skills ranging from 'not well' to 'well'. 

Civilian interactions in English occur 'Frequently', but mostly 'Very Frequently'. Saint Lucian Creole (Kwéyòl) is the next highest frequency; this ranges from 'Occasionally' to 'Very Frequently', but mostly 'Very Frequently'. French is most often encountered as 'Occasionally"; Guadeloupean and Haitian Creole seem to mirror responses; the frequency ranged from 'Never' to 'Rarely', however, Haitian encounters are more frequent than Guadeloupean.

Portuguese (or any Romance language not mentioned) had a significant number of 'Occasionally' occurring encounters but was most noted as 'Rarely'. 'Any form of sign language' also had a significant number of 'Occasionally' occurring encounters but was most noted as 'Never'. Japanese had a notable number of 'Very Rarely' occurring encounters but was most noted as 'Never'; Mandarin Chinese mirrors this pattern.

Most other languages have encounters that are less frequent than indicated above. For example, Greek and Amerindian languages only noted one instance where their highest rating occurred "Rarely"; Arabic was noted once 'Occasionally'. Most 'Never' encounter 'Unrecognised language(s)'; only two responses noted that this would occur either 'Rarely' and 'Occasionally'.


### References:

{% bibliography --cited %}

### Appendix:

[Online Survey of Royal Saint Lucia Police Force](https://form.jotform.com/212612630219143)

*Questions:*

*1. Please indicate which of the following best describe (s) you.*

*Age:*

Less than 18

18-24

25-29

30-34

35-39

40-44

45-49

50-54

55-59

60-64

65-69

70-74

75 or older

Prefer not to respond


*Gender:*

Man

Woman

Prefer not to respond

Prefer to self-describe


*Citizenship:*

By birth (birthplace of Saint Lucia)

By birth (parents)

By birth (other)

By naturalisation (ordinary)

By registration (citizenship by investment)

By registration (adoption, marriage, parental legacy, residency status, 
administrative discretion)

Non-citizen (OECS national)

Non-citizen (other)

Prefer not to respond


*Ethnicity/Race*

Black (African, Afro-Caribbean, etc.)

White/ North European (English, French, German, Irish, Polish, etc.)

Amerindian (Arawak/ Taino, Carib, etc.)

American Indian/ Alaska Native (Aztec, Mayan, Navajo Nation, etc.)

East Asian (Chinese, Japanese, Korean, Taiwanese, Tibetan, etc.)

Hispanic/ Latino/ Spanish Origin (Cuban, Puerto Rican, Mexican, Central/ 
South American, etc.)

Indian Subcontinent/ South Asia (Afghan, Bangladeshi, Indian, Jordanian, 
Pakistani, Sri Lankan, etc.)

Middle Eastern/ North African (Algerian, Bahraini, Lebanese, Arab, 
Moroccan, Syrian, Yemeni, etc.)

Native Hawaiian/ Other Pacific Islander (Native Hawaiian, Samoan, 
Chamorro, Fijian, Tongan, Marshallese, etc.)

Southeast Asian (Burmese, Filipino, Indonesian, Laotian, Malaysian, 
Singaporean, Thai, Vietnamese, etc.)

Mixed Parentage (two or more races)

Not known

Some other race, ethnicity, or origin (self-describe)

Prefer not to respond


*Highest Level of Education:*

Primary School/ Elementary School

Secondary School/ Middle & High School

Vocational/ Tertiary Education

Post-secondary non-university education

Some College Courses

Community College/ Associate's Degree

Bachelor's Degree

Master's Degree

Doctoral or professional degree (e.g., PhD, M.D., J.D.)

Prefer not to respond


*2. Please indicate the number of years you have been a member of the Royal Saint Lucia Police Force.*

Less than 1

1-5

6-10

11-15

16-20

21-25

26-30

31 or more

*3a. Please indicate the option that best describes the location of your current base station/ department/ unit.*

Gros Islet Police Station

Rodney Bay Police Station 

Castries Central Police Station 

Marchand Police Station

Babonneau Police Station

Marigot Police Station 	 

Anse La Raye Police Station

Canaries Police Station	  

Dennery Police Station	 

Richfond Police Station	  

Micoud Police Station	 

Soufriere Police Station

Choiseul Police Station

Laborie Police Station	 

Vieux Fort Police Station 

Specialised Unit

*3b. Please indicate the option(s) that best describes your tasks at your current base station/ department/ unit; please check all that apply.*

Administration/ Headquarters 

Auxiliary Unit/ Special Reserve Police (Island-wide)

Band (North)

CCTV Unit (North)

Central Intelligence Unit (North)

Central Intelligence Unit (South)

Beat and Patrol (North)

Community Relations Branch (North)

Complaints Unit (North)

Control Room (North)

Criminal Investigation Department (C.I.D) Castries (North)

Criminal Investigation Department (C.I.D) Vieux Fort (South)

Criminal Records Office (North)

Discipline (North)

Drug Unit (North)

Drug Unit (South)

Force Academy (North)

Garage (North)

Immigration (North)

Immigration (South)

Information Technology & Communications Unit (North)

Major Crimes (North)

Marine Unit (North)

Marine Unit (South)

Prosecution Unit (North)

Prosecution Unit (South)

Public Relations (North)

Public Relations (South)

Research and Development (North)

Special Branch (North)

Special Branch (South)

Special Services Unit (S. S. U.) (North)

Special Services Unit (S. S. U.) (South)

Tailor Shop (North)

Traffic (North)

Traffic (South)

Vulnerable Persons Team (North)

Vulnerable Persons Team (South)

WRIT Unit (North)

WRIT Unit (South)


*4. Please indicate the option(s) that best describes your current rank.*

[Below Constable (Special Police Constable, Apprentice, etc.); Constable; Above Constable (Corporal, Sergeant, etc.)]

*5. Please indicate your average annual income.*

.01 XCD - 4,000 XCD

4,001 XCD - 8,000 XCD

8,0001 XCD - 12,000 XCD

12,001 XCD - 16,000 XCD

16,001 XCD - 20,000 XCD

20,001 XCD - 24,000 XCD

24,001 XCD - 28,000 XCD

28,001 XCD - 32,000 XCD

32,001 XCD - 36, 000 XCD

36,001 XCD - 40,000 XCD

40,001 XCD - 44,000 XCD

44,001 XCD - 48,000 XCD

Above 48,000 XCD

*6. Please indicate if your workplace directly offers civilians any formal non-English language assistance programmes.*

[Yes, internal interpreter services are available to civilians.]

[No, external interpreter services would be recommended.]


*7. Please indicate if a perceived language barrier has ever limited any of your law enforcement interactions.*

Yes

No

*7b. If 'yes', please indicate the language(s) you encountered; please select all that apply.*

English

Saint Lucian Creole (Kwéyòl, Patois, Patwa)

French

Guadeloupean Creole

Haitian Creole

Spanish 

Portuguese (or any Romance language not mentioned)

Papiamento

Amerindian (including Arawakan, Cariban, etc.) 

Arabic (or any Afro-Asiatic language not mentioned) 

Dutch (including Afrikaans)

Hindi (or any Indo-Iranian/ Dravidian language not mentioned)

German (or any West Germanic language not mentioned)

Greek (or any Hellenic/ Armenian/ Albanian language not mentioned)

Indonesian (or any Austronesian/ Austroasiatic/ Kra-Dai language not 
mentioned)

Irish (or any Celtic language not mentioned)

Japanese

Korean

Mandarin Chinese (or any Sino-Tibetan language not mentioned)

Russian (Armenian or any Balto-Slavic language not mentioned)

Swahili (or any Niger-Congo/ African language not mentioned)

Swedish (or any North Germanic/ Uralic language not mentioned)

Turkish (or any Turkic/ Altaic language not mentioned)

Any form of sign language

Another language not represented 

Unrecognised language(s)


*8a. Please indicate the language you use most often to communicate and your proficiency. Note: "Listen/ Understand" can include scenarios where you can comprehend but not converse in a language. (Very well, Well, Not well, Not at all, Not applicable)*

English

Saint Lucian Creole (Kwéyòl, Patois, Patwa)

French

Guadeloupean Creole

Haitian Creole

Spanish 

Portuguese (or any Romance language not mentioned)

Papiamento

Amerindian (including Arawakan, Cariban, etc.) 

Arabic (or any Afro-Asiatic language not mentioned) 

Dutch (including Afrikaans)

Hindi (or any Indo-Iranian/ Dravidian language not mentioned)

German (or any West Germanic language not mentioned)

Greek (or any Hellenic/ Armenian/ Albanian language not mentioned)

Indonesian (or any Austronesian/ Austroasiatic/ Kra-Dai language not 
mentioned)

Irish (or any Celtic language not mentioned)

Japanese

Korean

Mandarin Chinese (or any Sino-Tibetan language not mentioned)

Russian (Armenian or any Balto-Slavic language not mentioned)

Swahili (or any Niger-Congo/ African language not mentioned)

Swedish (or any North Germanic/ Uralic language not mentioned)

Turkish (or any Turkic/ Altaic language not mentioned)

Any form of sign language

Another language not represented (Please manually list language(s):)
 
*8b. Please indicate which technique best describes how you came to learn the aforementioned language; please select all that apply.*

First Language [Formal education (requirement/elective);  Informal education (hobby); Informal education (family & friends)]

*9. Please indicate any secondary languages you use to communicate and your proficiency. Note: "Listen/ Understand" can include scenarios where you can comprehend but not converse in a language. (Very well, Well, Not well, Not at all, Not applicable)*

[Second Language (2nd most often used at home & elsewhere)]

[Third Language (3rd most often used at home & elsewhere)]

I do not speak additional languages

I do not speak a third language
	 
English

Saint Lucian Creole (Kwéyòl, Patois, Patwa)

French

Guadeloupean Creole
 
Haitian Creole
	 
Spanish 
	 
Portuguese (or any Romance language not mentioned)
	 
Papiamento
	 
Amerindian (including Arawakan, Cariban, etc.) 
	 
Arabic (or any Afro-Asiatic language not mentioned) 
	 
Dutch (including Afrikaans)
	 
Hindi (or any Indo-Iranian/ Dravidian language not mentioned)
	 
German (or any West Germanic language not mentioned)

Greek (or any Hellenic/ Armenian/ Albanian language not mentioned)

Indonesian (or any Austronesian/ Austroasiatic/ Kra-Dai language not mentioned)

Irish (or any Celtic language not mentioned)
	 
Japanese
	 
Korean
	 
Mandarin Chinese (or any Sino-Tibetan language not mentioned)
	 
Russian (Armenian or any Balto-Slavic language not mentioned)
	 
Swahili (or any Niger-Congo/ African language not mentioned)
	 
Swedish (or any North Germanic/ Uralic language not mentioned)
	 
Turkish (or any Turkic/ Altaic language not mentioned)
	 
Any form of sign language

Another language not represented 
	 
 
*9b. Please indicate which technique best describes how you came to learn each of the aforementioned languages; please select all that apply.*


Second Language 

[Formal education (requirement/elective);  Informal education (hobby); Informal education (family & friends)]

Third Language 

[Formal education (requirement/elective);  Informal education (hobby); Informal education (family & friends)]


*9c. If you do speak more than one language, please indicate if your multilingual skill was ever a useful asset to interacting with civilians.*

Yes

No

*10. Please indicate how often you encounter each of the following languages during typical civilian interactions. This question requires one response per row.*

English

Saint Lucian Creole (Kwéyòl, Patois, Patwa)

French

Guadeloupean Creole
 
Haitian Creole
	 
Spanish 
	 
Portuguese (or any Romance language not mentioned)
	 
Papiamento
	 
Amerindian (including Arawakan, Cariban, etc.) 
	 
Arabic (or any Afro-Asiatic language not mentioned) 
	 
Dutch (including Afrikaans)
	 
Hindi (or any Indo-Iranian/ Dravidian language not mentioned)
	 
*(Continued)10. Please indicate how often you encounter each of the following languages during typical civilian interactions. This question requires one response per row.*


German (or any West Germanic language not mentioned)

Greek (or any Hellenic/ Armenian/ Albanian language not mentioned)

Indonesian (or any Austronesian/ Austroasiatic/ Kra-Dai language not mentioned)

Irish (or any Celtic language not mentioned)
	 
Japanese
	 
Korean
	 
Mandarin Chinese (or any Sino-Tibetan language not mentioned)
	 
Russian (Armenian or any Balto-Slavic language not mentioned)
	 
Swahili (or any Niger-Congo/ African language not mentioned)
	 
Swedish (or any North Germanic/ Uralic language not mentioned)
	 
Turkish (or any Turkic/ Altaic language not mentioned)
	 
Any form of sign language
	 
Unrecognised language(s)
	 

{% include JB/setup %}