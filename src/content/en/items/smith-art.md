---
title: "SMITH.ART.HTM"
itemId: smith-art
collection: articles-and-papers
originalUrl: "https://www.hawaii.edu/powerkills/SMITH.ART.HTM"
sourceType: original
sourceUsed: "https://www.hawaii.edu/powerkills/SMITH.ART.HTM"
captureDate: "2026-06-06T03:13:56.678Z"
provenance:
  sourceId: hawaii-powerkills
  rawPath: data/raw/hawaii-edu/smith-art.html
  hash: 591faf92ea8178c4996e8947f36cb64fc57542b221b43c33e2eb520cb3a8dab7
originalFormat: html
assets: []
editorialNotes:
  - Automated Markdown conversion. Review formatting before treating as fully normalized.
draft: false
---
#### Other Empirical Studies of Domestic Collective Violence On This Site

On Violence

["Libertarianism, Violence Within States, and the Polarity Principle"](DP84.HTM)

["Libertarian Propositions on Violence Within and Between Nations: A Test Against Published Research Results"](DP85.HTM)

["Power kills: genocide and mass murder,"](POWER.ART.HTM)

["Power predicts democide,"](JCR.ART.HTM)

[Is conflict manifest as theorized?](TCH.CHAP35.HTM)

On Diversity

[Social distances](TCH.CHAP16.HTM)

[Same and other; similarity and difference](CIP.CHAP6.HTM)

[_Social diversity, power, and democide_](SOD.CHAP18.HTM)

## IS COLLECTIVE VIOLENCE  
CORRELATED WITH  
SOCIAL PLURALISM?[\*](#*)

### By R.J. Rummel

  
  

> _ABSTRACT_
> 
> In order to determine the contribution of social pluralism (ethnic, religious, and racial differences) to violence, diverse multivariate cross-national analyses were done. These involved 109 variables on conflict and violence; pluralism; and social political, economic, demographic, and cultural differences for all states, 1932 to 1982. The results show that pluralism is a multidimensional empirical concept; that regardless of which dimension is focused upon, it has a lesser relationship to violence than do other national characteristics, such as political freedom. And what relationship is found between pluralism and violence, holding other variables constant, is largely accounted for by the number of ethnic and religious groups in a state. Drawing on this and other studies, the conclusion is that where political power is centralized around a trans-plural group, such as a military junta or monarch, or trans-plural ideology, such as communism or fascism, then violence is highly likely, regardless of what plural units may or may not exist. And where power is centralized, nondemocratic, and highly dependent upon one's social group membership, such as ethnicity or religion, then collective violence is also highly likely.

  
  

* * *

### 1\. M.G. SMITH ON PLURALISM

One of the few social scientists to make social pluralism a central and organizing concept of a theory of political and social behavior was the anthropologist M.G. Smith.[1](#1) Indeed, he focused his theoretical and field research on the nature and consequences of social pluralism. By pluralism he meant the division of society into socially and politically meaningful racial, ethnic, language, religious, and cultural units. These units are most socially and politically meaningful when they form corporate units, with explicitly recognized membership, offices, culture, and unit-internal and external relations. They thus organize and impact upon the behavior of their members. According to Smith, as society becomes divided into such corporate units, and the distribution of power, prestige, and wealth depends on the unit to which one belongs, the likelihood of collective violence increases.

Towards the end of his life, Smith tried to determine more precisely the relationship between pluralism and collective violence. In smith's own words (Smith, 1991c):  
  

Having spent my life trying to clarify the conception of pluralism, I now wish to test and demonstrate its relevance for the solution of many urgent problems in the modern world. To that end I have compiled information on the demographic, economic, social and political characteristics of all sovereign nation-states, together with such detailed records as I can gather of internal collective violence in them, (i.e., coups, revolts, attempted secessions, riots, pogroms, terrorism, purges, massacres, genocides), or changes of constitutional regime, from 1932 to 1982. This global compilation should allow me to determine the exact contributions of the plural conditions of these states to their histories of internal violence and disorder in that period.

  

To this end Smith collected data on 166 sovereign states for the indicated years on 187 classifications and variables. Among these, of course, were a large number measuring differences in social diversity and pluralism among states.

It was a great loss to anthropology and to our knowledge of violence that Smith died in 1993 before he was able to do his analyses. Fortunately, however, he did complete his data collection and the preparation of his data for analysis, and he was able to roughly sketch out his ideas as to the appropriate analyses to be done (Smith, 1991c).  
  

The problem now is, on the assumption that the data are clean, and as nearly complete as I can make them, to devise a statistical model to determine whether there is any causal link between the data on social composition and the levels or types of internal collective disorder that the societies experienced from 1932 to 1982. A negative answer to this question indicates that we have found no such bond, despite exhaustive and systematic attempts to do so, while positive results may be explicitly causal or may have the form of correlations. However, as correlations do not indicate causes, by stepwise regression analysis of covariation and other methods, we shall seek to demonstrate and measure the precise contributions of such specific factors as political organization, economy and demography to historical events, including the incidence of internal collective violence or disorder in these states.

  

Smith went on to make clear that he envisioned holding the political, demographic and economic variables constant while determining the correlational relationships of social composition to collective violence (on the nature of correlation, see [_Understanding Correlation_](UC.HTM)). In this he also envisioned the use of path analysis and/or recursive causal analysis.[2](#2)

After Smith's death, Mary Smith, his wife, made available to several anthropologists his data and code books on a Macintosh diskette, with the hope that others would carry through the analysis. The data were all neatly compiled on an Excel spreadsheet and the code book and relevant notes were in Word.[3](#3) I became aware of these data in early 1995 and felt it would be a huge waste if someone did not carry through Smith's analysis. Because of my background in analyzing similar data and interest in collective violence (see Rummel, 1972, 1979, 1976-1981), I decided to do so.

* * *

### 2\. DATA PREPARATION

First, I completely reconstructed Smith's nominal categories, making dichotomous variables out of them where possible.[4](#4) Second, since many of Smith's variables count the number of coups, revolts, purges, deaths, and the like from 1932 to 1982, and many states only became independent in the 1960s and 70s, I normed these and other such variables by the number of years of independence since 1932 (also one of Smith's variables). Third, where data were clearly skewed toward a few states with very high values, I did a log10 (x + 1) transformation.[5](#5)

Throughout this revision of Smith's data, whether creating new variables out his set or transforming his variables, I kept in mind that his dominant interest was in the causal or predictive relationship of social pluralism to collective violence. I thus made every effort to include Smith's relevant classifications or variables.

Once this initial revision of Smith's data was completed, which created 109 variables, I then tried to minimize the amount of missing data. I first eliminated all states with less than 80% of the data across the variables; and then similarly removed variables with less than 80% data across the remaining states. I ended up with 162 states and ninety-eight variables, with no more than 4% missing data overall.

* * *

### 3\. RESEARCH DESIGN

A regression analysis involving ninety-eight variables is out of the question. Multicollinearity among the independent variables alone would defeat this effort, not to mention that the multiple correlation coefficient would be inflated by the gross capitalization on random error among so many variables. This analysis will be done in four stages, therefore. The first will be separate component (factor analyses) of the violence, pluralism, political, and economic/demographic variables. This will enable me to select statistically independent indicators within each of these domains for the regression analyses. Second, I will do a common factor analysis of all the indicators to determine whether there is a common factor (causal nexus) underlying collective violence and social pluralism (on factor analysis, see ["Understanding Factor Analysis"](UFA.HTM)). Third, I will follow this with the regression analyses of collective violence, the major aim of this study. And finally, I will do a canonical analysis to determine how well all the independent indicators predict overall to collective violence.

I should say that the results of these analysis should be considered descriptive, where the emphasis is on percent of covariation accounted for or predicted or in common, rather than inferential. I will, however, use significance tests of the regression analysis as simple benchmarks.

* * *

### 4\. THE COMPONENT ANALYSES

For the 28 variables measuring different kinds and aspects of collective violence, I did three kinds of factor analysis. One was a component analysis of data, where any case with at least one missing datum was eliminated from the analysis (called _listwise deletion_). The second was a component analysis with the substitution of a variable's mean for its missing data (called _mean substitution_). And the third was an image (common) factor analysis with mean substitution. To each of these three factor analyses, both orthogonal and oblique (biquartimin) rotation were applied.

Space does not allow me to display the results of these stage-one analyses here, I should note, however, that all the correlations for the internal violence variables are positive, meaning that there is a tendency for states that have one kind of violence to have others. This was also reflected in the unrotated dimensions, the first of which for the component analysis (mean substitution) accounted for near 35% of the variance among the twenty-eight violence variables; the first three together raised this to 55%. To account for this much variance among this many variables by only three dimensions is impressive.

In [Table I](SMITH.TAB1.GIF) I present the consolidated dimensions and indicators from the three analyses and their orthogonal and oblique dimensions.[6](#6) I selected them by the size of their correlation with a dimension, their substantive importance, and available data. These six indicators will now define collective violence for the rest of this.

Next, I similarly reduced the twenty-three variables measuring various aspects of social pluralism to their indicators. Like violence, social diversity is highly structured along a few unrotated dimensions, four of which are sufficient to account for over half of the variance among the twenty-three measures in a component analysis (mean substitution). The first of these dimensions alone account for 23.5% of the variance, with the percent of the population of one ethnic group (ETHNIC\_) being most highly correlated with it. This means that ETHNIC\_ is overall the best indicator of social diversity. Overall, [Table II](SMITH.TAB2.GIF) shows the best indicators of the independent clusters of intercorrelation among the variables.

There are eight dimensions that can be consolidated from the separate component and image analysis. Space does not allow their full discussion, but I should note that these dimensions and their indicators define plural dominance, type of pluralism, and the actual diversity along racial, ethnic, and religious lines.[7](#7) And these are fairly statistically independent of each other. The associated indicators will comprise the central independent variables in the forthcoming regression analysis.

Smith also collected data on variables to be held constant while investigating the relationship between violence and pluralism. One set of these defined aspects of the state, government, and politics in or around 1982. From these data I was able to determine twenty political variables. As above, I did several component analysis and rotations to reduce this number to the minimum indicators of their clusters of intercorrelation

These political data are also highly structured (intercorrelated), with the first unrotated component dimension (mean substitution) accounting for 25% of the total variance and the first four dimensions for over half. Noteworthy is that the variable most highly correlated with the first dimension, and thus the best indicator of politics overall, is FREEDOM, which is the Freedom House rating of the civil liberties and political rights of all states. The degree to which the people of a state are free in their rights and liberties is the best measure of the nature, policies, and type of their political system. As to these dimensions of politics and the indicators, see [Table III](SMITH.TAB3.GIF).

Component analyses of political variables have usually found three dimensions: democracy, totalitarianism, and authoritarianism (see Rummel, 1997b, [Chapter 17](SOD.CHAP17.HTM)). Democracy and totalitarianism also are defined in these analyses (the Freedom and Centralization dimensions), but authoritarianism could not be clearly delineated, since Smith has no measures of the monarchical nature of a regime (as of Jordan, Saudi Arabia, or Kuwait), the prime indicator of authoritarianism.

Smith also collected data on the socio-economic and cultural characteristics of states, from which I included or constructed twenty-three variables. These were also component analyzed as above. The resulting major dimensions (not shown here) are those usually found for states, being wealth (or development) and size (see Rummel, 1972). The other dimensions define different cultural characteristics of states, more specifically whether they were Moslem, Animist, Asian, or in Latin America. The indicators of these are shown in [Table IV](SMITH.TAB4.GIF).

Finally, there is a set of four variables that fit between those measuring violence and pluralism. These are the number of plural units involved in collective violence since 1932 or independence (PLU\_VIO), this number divided by the years independent 1932-1982 (PLU\_VIO\_), the number of ethnic groups involved in collective violence since independence or 1932 (ETH\_VIO), and this number divided by the years independent 1932-1982 (ETHNIC\_V). Since these variables measure both the violence and the pluralism of a society (for there to be significant ethnic or plural violence, a society must be ethnically divided or have plural units to begin with), they span both domains. For this reason they cannot be used in a regression analysis (they create a logical dependence between dependent and independent variables), but can be included in the combined image analyses to be presented below. I therefore did a component analysis on the four to determine their indicators and found that they reduced to one dimension and one indicator: ETHNIC\_V.

We now have the basic set of indicators for violence, pluralism, politics, and other aspects of society and the state. For these data we now can determine whether and how pluralism is related to violence.

* * *

### 5\. VIOLENCE AND PLURALISM:  
A CAUSAL NEXUS?

I first analyzed all the pluralism and violence indicators through image factor analysis. Image analysis delineates the common factors underlying the intercorrelations among variables. If pluralism is a common dimension to violence, that is, if they form a causal nexus, then image analysis should not only uncover this for the sixteen indicators, but also define the specific aspects of violence and pluralism most and least intercorrelated.

The results of this analysis give the first indication of a relationship, although small, between violence and pluralism, and some idea as to the precise nature of this relationship. I do not wish to over interpret these results here, since there is more analyses to come, but at this point I can note three different factor patterns of collective violence correlated with pluralism. The ethnic division of a society is related to the first factor, which specifically involves ethnic violence (ETHNIC\_V) and primarily overall intense and frequent violence (INTWAR\_R). Religious divisions (RELIGION) is related to the second factor, which tends to reflect overall violence (VIOLENCE), popular violence (RIOTS\_YR), and genocide and mass murder (DEMOCIDE). Note also that there is a high positive correlation of .55 between these two factors. When one kind of violence occurs so tends the other.

The third factor of violence and pluralism involves purges (PUR\_RAT1) and coups (COUPS\_RA) among the political and military leaders and a high rate of emigration of those of a particular ethnicity), race, religion, and cultural identity (EMIG\_RAT). This factor also has a positive correlation of .54 with the intense violence one.

How do these relationships between violence and pluralism hold up when the political, economic, and cultural indicators are included? This now entailed a full image analysis of all twenty-eight indicators. The analysis supported a relationship between the number of ethnic groups (ETHNICS), ethnic violence (ETHNIC\_V), and intense violence (INTWAR\_R), independent of all the political, socio-economic, and cultural indicators.

However, while the relationship between religious groups (RELIGION), riots (RIOTS\_YR), democide, and overall violence (VIOLENCE) also remained, even in the context of all the other indicators, it also included the length of time a state has been independent (INDEP\_AG) and its size (AREA). That is, the longer a country has been independent (counting from 1932), the larger, and the more distinct religious groups it has, the more likely it will have extensive violence, riots, and democide.

There was a third factor pattern unrelated to pluralism, but largely to the political variables. This is that the violence among political leaders involving purges (PUR\_RAT1) and coups (COUPS\_RA) is mainly related to how little civil and political rights there are in a state (FREEDOM) and its degree of centralization (CENTRALI).[8](#8) Moreover, there is a tendency for this relationship to hold more for Asian cultures (ASIA) than those of other regions.

Most important, these image analyses identified two possible causal nexi involving both violence and pluralism. One is some kind of relationship between guerrilla war/revolution and the number of ethnic groups; the other is an entirely independent relationship between violence, riots, democide, the number of religious groups, and a state's age and size. The image analysis, however, does not tell us actually how much of the variation in these kinds of violence can be explained by (dependent upon) pluralism. This can be determined by regression and component analysis.

* * *

### 6\. HOW MUCH VIOLENCE  
DOES PLURALISM PREDICT?

For the first regression, I took the rate of a state's guerrilla and civil war (INTWAR\_R) as the dependent variable. This is by far the indicator best identified with the first cluster of intercorrelations uncovered by the image analysis of all the indicators. As is clear from these results, I need only one independent variable--the number of ethnic groups (ETHNICS). [Table V](SMITH.TAB5.GIF) lists the regression results.

This regression shows that 21% of the variation (R Square) in intense violence (INTWAR\_R) is accounted for by the number of ethnic groups (ETHNICS).[9](#9) To be able to explain one-fifth of the variation among all states in such intense violence as guerrilla and civil wars from 1932 to 1982 is an accomplishment, and to do this with one variable--the number of ethnic groups--is even more important. And the factor analyses show clearly that this is a direct relationship, after the effects of the correlation of other plural indicators, and political, social-economic, and cultural indicators have been removed.

What does this say then about predicting violence? In order to determine where in the world revolutionary and guerrilla violence is likely to occur in the future, an important indicator is simply the number of different and distinct ethnic groups a state has. This is not the most important indicator, however, which is the level of civil rights and political liberties, a state's freedom in short. This is clear from other studies.[10](#10) The findings here now add this: _the more nondemocratic a state and the more ethnic groups it has, then the more likely it will have frequent revolutions and guerrilla war_.

There is one more factor involving violence and pluralism to clarify through regression. Be it recalled that previous analysis found one factor that comprised VIOLENCE, RIOTS\_YR, and DEMOCIDE, RELIGION, INDEP\_AG, AND AREA. The three violence indicators were not well differentiated in their loadings, so I carried out regressions on each of them. The best of these accounted for 28% of the variation in a state's overall violence by its number of religions, area, and to a much lesser extent the years of independence since 1932. This is an even better result in variance terms, although mainly one helper variable--area--is required to have this strong a relationship. Moreover, here also we should take democracy as our primary predictor of general violence, then use the number of religions and size as a way of more reliably predicting differences in violence among nondemocracies.

At this point one might ask why I did not just regress the separate indicators of violence on all the indicators of pluralism, politics, and socio-economic attributes? The answer is that the regression does not untangle the intercorrelations between the independent variables. Thus, were the regression carried out on all the indicators, it would be unclear how much of what relationships between violence and a pluralism indicator was due to the influence of other pluralism indicators and especially, that between the other indicators and both pluralism and violence. The _common_ factor analysis separated out these interrelationships such that when we did a regression of those indicators loaded on separate factors, we know that the regression will deal with the direct effects.

Finally we can do a canonical analysis of the seven violence indicators on the twenty indicators of pluralism, politics, socio-economic characteristics, and culture. [Table VI](SMITH.TAB6.GIF) shows the results. The first column presents the best linear combination of dependent indicators (the upper half) fitting that of the independent variables (lower half). Each linear combination produces a variate, and the _canonical correlation_ of the dependent variate with the independent one is shown between the two halves of the table. This correlation is similar to the multiple correlation coefficient in regression analysis.

In the table I have bracketed the correlations of at least an absolute .30 between the indicators and variates and have ranked ordered the correlations within each substantive domain. Moreover, I have shown only the three variate pairs with significant canonical correlations.[11](#11) To the right of the table I give the communalities of each indicator (this is the sum of squared correlations across the variates).[12](#12) These show how much of the variance in an indicator is picked up by these three variates. And at the bottom of the table I have given the _trace correlation_. This is the overall correlation of the _space_ of violence with the _space_ of the independent indicators.

With this background, I will step through the interpretation of the first column in the table to make sure these results are understood. The first column shows the dependent and independent variates have a correlation of .98. VIOLENCE is very highly correlated with the first dependent variate and RIOTS\_YR to a much lesser extent; AREA and GDP\_PC are most correlated with the associated first independent variate. The extraordinary correlation of .98 between the two variates therefore means that there is a linear combination of mainly the overall violence in a state 1932-1982 and its years of riots that is almost completely accounted for (explained, predicted) by a state's characteristics, especially a state's gross domestic product per capita and area. Simply, a state's potential development in 1982 and size have much to do with its degree of overall violence 1932-1982.

Looking now at all the results in the table, how well is violence accounted for by all the indicators. The trace correlation squared for the three variates is .28, significant and nonsignificant, is .61, which means they overall explain indicators overall explain 28% of the total variation among the seven indicators of violence.

* * *

### 7\. DISCUSSION AND CONCLUSION

First, social pluralism as defined by the twenty-three variables taken or created from Smith's data is highly structured (or patterned), with the variation among states in their social pluralism being along eight separate and statistically independent clusters of intercorrelation among the pluralism variables. This shows that trying to define pluralism by just one or two scales or indices could well miss very important variation in the social diversity of states.

Second, collective violence can be well accounted for by variation among states in their various characteristics, such as potential and actual development and freedom, and their stability, age, size, and cultural region. Pluralism overall, by contrast, has the lesser relationship to collective violence.

And third, there is, however, two specific relationships between pluralism and violence that exist in the data, taking into account the direct and indirect effects of the political, socio-economic, and cultural aspects of states. The more ethnic groups in a state, the more likely it will have a high rate of guerrilla and revolutionary warfare. And the more religious groups in a society, the more intense the general violence. This is largely moderated by the size of a state. Thus, the larger and older (counting from 1932) a state in addition to the more religious groups, the more the general violence.

In general, then, _pluralism is important, but less so than other aspects of society. And the importance largely resides in the number of ethnic and religious groups a state has_. This does confirm Smith's belief that there is a relationship between social pluralism and violence, although in specifics the results depart from his theory. He believed that pluralism had a much stronger causal effect on collective violence and that certain aspects of pluralism, such as the hierarchical distribution of power among plural units, their segmentation, and corporate nature would be the main predictors. What we have actually found is that the more interesting theoretical measures, those of hierarchy and plural type, segmentation, potential separatism, and incorporation mode (some of these were not indicators, but related to the indicators--see [Table III](SMITH.TAB3.GIF)), among others, had no meaningful correlation with violence. _We end up with two rather simple and ordinary measures--numbers of ethnic and religious groups_.

More specifically, drawing other studies and this one together, where power is centralized around a trans-plural group, such as a military junta or monarch, or trans-plural ideology, such as communism or fascism, then violence is highly likely, regardless of what plural units may or may not exist. However, _when political power is centralized, nondemocratic, and highly dependent upon one's social group membership, be it race, religion, ethnicity, or some cultural division, then collective violence is also highly likely_. 

* * *

### NOTES

> \* From the pre-publisher edited manuscript of R.J. Rummel, "Is Collective Violence Correlated with Social Pluralism," _Journal of Peace Research_ 34 (May 1997): 163-175.
> 
> 1. See in particular Smith (1975, 1984, 1991a), Kuper and Smith (1969), and Kallab (1994). From 1978 to 1986 Smith was the Franklin M. Crosby Professor of the Human Environment, Department of Anthropology, Yale University; and Franklin M. Crosby Professor Emeritus from 1986 until his death in 1993. For a similar but distinct approach to social pluralism, see Kuper's chapters in Kuper and Smith (1969).
> 
> 2. There may be some doubt from his writings as to whether Smith thought social pluralism caused violence in general, or only in societies meeting particular criteria. The above quotes and the methods of analyses he suggested make clear that he thought of social pluralism as a general cause of violence, possibly modified in its effect by political and economic institutions and demographic attributes.
> 
> 3. As of this writing Mary Smith is in contact with the Human Relations Area Files about distributing all these data.
> 
> 4 The reconstructed list of variables from Smith's data set is given in [Appendix I](SMITH.APP.GIF).
> 
> 5. Units of measurement and transformations are listed in [Appendix I](SMITH.APP.GIF) for each variable.
> 
> 6. The variable codes (which are alphabetized in [Appendix I](SMITH.APP.GIF) for convenience) were dictated by the limits on variable names in SPSS for the Macintosh.
> 
> 7. I know of no comparable cross-national factor analysis of diversity per se, except for Rummel ([1997b](NOTE5.HTM)). In that analysis I collected data on eight measures of diversity for 204 political regimes, 1900-1987. A [component analysis](SOD.TAB18.2.GIF) uncovered two orthogonally rotated dimensions in these data, the major one most correlated with ethnic divisions (as here), and the second with the number of minorities at risk of genocide.
> 
> 8. One might expect that freedom and centralization would have even a higher relationship to the other violence factors. But Smith measured freedom and centralization for only 1982, whereas he counted violence for all the years from 1932 to 1982, and thus would include that part of a regime's history before or after it was free and decentralized. Therefore, what I correlated here is the violence of a nation 1932-82 with its potential to be free or decentralized in 1982.
> 
> Then why did I not include an appropriate variable that would measure the freedom with each state, 1932-1982? To do this would have required changing the whole nature of Smith's data--from states to political regimes. And since a state may have had many regimes over the period 1932-1982 this would have necessitated my recollecting from scratch all the violence and political data, an effort beyond the purpose of this study.
> 
> 9. I also tried a polynomial (cubic) fit, and got an R2 of .27.
> 
> 10. These are all summarized in Rummel ([_Understanding Conflict and War_](UCW.HTM), ["Libertarian Propositions on Violence Within and Between Nations: A Test Against Published Research Results"](DP85.HTM), [1997a](NOTE6.HTM)). As to why freedom does not come out here also as an indicator, and why I did not include an appropriate measure of freedom, see footnote 8.
> 
> 11. This is by a test of the residual roots (eigenvalues) using the chi-square.
> 
> 12. This is equivalent to the communalities in factor analysis, See ["Understanding Factor Analysis"](UFA.HTM).

* * *

### REFERENCES

Kalla b, Majda, 1994. TESTAMENT: LIFE AND WORK OF M.G. SMITH 1921-1993. New York: Research Institute for the Study of Man.

Kuper, Leo and M.G. Smith, eds., 1969. PLURALISM IN AFRICA. Berkeley, CA: University of California Press.

Rummel, R. J., 1963. "Dimensions of conflict within and between nations." GENERAL SYSTEMS: YEARBOOK OF THE SOCIETY FOR GENERAL SYSTEMS RESEARCH, Vol. 8: pp. 1-50.

Rummel, R. J. ,1972. THE DIMENSIONS OF NATIONS. Beverly Hills, CA: Sage.

Rummel, R. J., 1976-1981. [UNDERSTANDING CONFLICT AND WAR](UCW.HTM). Volumes 1-5. Beverly Hills, CA: Sage.

Rummel, R. J., 1979. NATIONAL ATTRIBUTES AND BEHAVIOR. Beverly Hills, CA: Sage.

Rummel, R. J., 1985. ["Libertarianism and International Violence."](DP83.HTM) THE JOURNAL OF CONFLICT RESOLUTION, Vol. 29 (September): pp. 419-55.

Rummel, R. J., [1997a](NOTE6.HTM). POWER KILLS. Rutgers, RI: Transaction.

Rummel, R. J., [1997b](NOTE5.HTM). STATISTICS OF DEMOCIDE: ESTIMATES, SOURCES, AND CALCULATIONS ON 20TH CENTURY GENOCIDE AND MASS MURDER. Charlottesville, VA: Center for National Security Law, University of Virginia.

Smith, M.G., 1975. CORPORATIONS AND SOCIETY: THE SOCIAL ANTHROPOLOGY OF COLLECTIVE ACTION. Chicago, Il.: Aldine Publishing.

Smith, M.G., 1984. "The nature and variety of plural unity." In David Maybury-Lewis (Ed.) THE PROSPECTS FOR PLURAL SOCIETIES: 1982 PROCEEDINGS OF THE AMERICAN ETHNOLOGICAL SOCIETY. Washington, DC: American Ethnological Society, pp. 146-186.

Smith, M.G., 1991a. PLURALISM, POLITICS, AND IDEOLOGY IN THE CREOLE CARIBBEAN. New York: Research Institute for the Study of Man.

Smith, M.G., 1991b. "World survey: notes on codes and analysis II." Paper. Np: November 18.

Smith, M.G., 1991c. "World survey: notes on data analysis I." Paper. Np: November 18.

* * *

  

You are the  visitor since 11/27/02

Go to [top](#TOP) of document
