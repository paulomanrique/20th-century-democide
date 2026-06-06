---
title: "WF.APPENDIX.HTM"
itemId: wf-appendix
collection: articles-and-papers
originalUrl: "https://www.hawaii.edu/powerkills/WF.APPENDIX.HTM"
sourceType: original
sourceUsed: "https://www.hawaii.edu/powerkills/WF.APPENDIX.HTM"
captureDate: "2026-06-06T03:16:57.427Z"
provenance:
  sourceId: hawaii-powerkills
  rawPath: data/raw/hawaii-edu/wf-appendix.html
  hash: 26cd6e75eafa4bb21d42ba8d6d400102a1d15735304216fe67e4677ef5731ca3
originalFormat: html
assets: []
editorialNotes:
  - Automated Markdown conversion. Review formatting before treating as fully normalized.
draft: false
---
# Appendix

## Testing Whether Freedom Predicts  
Human Security and Violence[\*](#*)

  
  
  
  

Statistics display what is hidden, make visible what is invisible, uncover what is latent, and thus speak truth to power.  
\----This web site

  
  
  
  

[Introduction](#intro)

[Measures of Freedom, Human Security, and Violence](#M)

[Measures of Freedom](#MF)

[Measures of Stability/Violence](#MS)

[Measures of Human Development](#MH)

[Measures of Economic Development](#ME)

[Other Variables](#OV)

[All Human Security Variables](#AH)

[Does Freedom Predict Human Security?](#DF)

[Freedom is a Common Factor of Human Security](#FC)

[Human Security and Violence are Contingent on Freedom](#HS)

[Freedom Predicts Human Security](#FP)

[Freedom Predicts Violence](#FV)

[Conclusion](#C)

\[A note to readers: There are many hyperlinked tables and figures here that you may want to consult as you read. The easiest way to do this is to open one or more separate browser windows that contain the tables or figures. You can do this on the Mac, for example, by pressing the command key when you click the link to the table or figure. You may thus have a number of such tables or figures open at the same time as you are reading the text.\]

  
Book's [Table of Contents](NOTE15.HTM)

#### Related Statistical Analyses on this Site

Part IX of [_The Conflict Helix_](NOTE11.HTM)

Part III of [_War, Power, Peace_](NOTE13.HTM)

Part 1 of [_Power Kills_](NOTE6.HTM)

Especially, Part 3 of [_Statistics of Democide_](NOTE5.HTM)

[](#)

#### Related Methodology Documents On This Site

[_Understanding Correlation_](UC.HTM)

["Understanding factor analysis"](UFA.HTM)

* * *

### INTRODUCTION

It is easy to say that _human security_ is a general concept including the human and economic development of a people--their wealth and prosperity--and the threat to their lives by genocide and mass murder, war, and political turmoil and instability. But then how does one measure human security such that we can say the people of Argentina, for example, have greater human security than those of Peru or Malaysia? we can, of course, select national indicators like years of schooling, life expectancy, or GNP per capita, number of people killed in internal violence, and compare nations on them. But even then if nations are consistently high or low on these indicators, they may differ considerable on others, like income inequality, gender equality, or amount of violence. What we want is some overall measure of human security that takes into account the different aspects of human security, the different ways of measuring each aspect, and the differences and similarities of nations on these measures.

To resolve this problem of measurement, researchers often select a bundle of representative indicators, standardize them in some way to make them comparable, as by standard scores, and then add them together to get one overall measure. The problem of applying this technique to human security is that it assumes each indicator in the bundle is equal to every other in measuring human security--that is, if there are p number of indicators, then each of them should have a 1/p weight in the final overall measure. This is like giving equal weight to GNP per capita, gender equality in years of schooling, death rate, and income equality. To equally weight such measures without theory or empirical rationale is an arbitrary simplification that may confound an analysis of human security and lead to misinterpretation.

We could, of course, simply pick one indicator to represent human security. But what indicator? Why? Another solution is to simply do an analysis on each of say a dozen indicators of different aspects of human security. This raises the arbitrariness to the level of statistical results. They will certainly differ, which then raises the question as to which to accept. If we average them, say, then we are back to the arbitrariness of equal weighting.

There is a best solution to this problem of measuring human security, however, and that is to let the variation and covariation of nations on the measures show how these measures should be combined and with what weights. In essence, this is a question of the dimensionality of the data. Ideally, _if human security is an empirical meaningful concept, if it refers to something in reality that is a consistent factor in human life, then we should find one empirical dimension in the data that reflects it_.

Consider for example the idea of economic development, which has played a large role in the research and practice of international relations. Is there such an empirical dimension, or is economic development really an uncorrelated bunch of national attributes, such as GNP per capita, energy production per capita, schooling, roads per acre, books published per capita, number of hospitals, death rate, and so on, the selection of any of which would give a different picture of a nation's level of development? To be sure, one can look at all the correlations among such variables and if they are high conclude that there is a common dimension among them. But the fault with simply calculating correlations is that many of the correlations may be due to other variables, and when the effect of these other variables is partialled[1](#1) out of the correlations, many of the high ones may disappear. One needs a method that not only takes account of the intercorrelations among such measures, but also their partial correlations.

Such a method is factor analysis, which determines the statistically independent dimensions among many variables, such that the first dimension is the largest accounting for the intercorrrelations in the data, a second dimension accounts for the next greatest amount of intercorrelation after partialling out the effects of the first dimension; any third dimension is independent of the first two after partialling out their effects, and so on for the dimensions found.[2](#2)

Consider one simple and classic illustration of factor analysis, which is to determine how people differ in their physical attributes, such as weight, height, girth, arm length, foot size, etc. If one were to collect measurements on a reasonable sample of people and subject them to a factor analysis, one would find two major dimensions: fat versus thin, and tall versus short. These are actually the major concepts we use to describe people and show that we have already carried out a mental factor analysis of human variation. Similarly, if we were to do a factor analysis of many measurements of boxes, we would find three dimensions: height, length, and width.

Regarding economic development, when researchers apply factor analysis to cross-national economic, political, social, and cultural data, they invariably find that economic development versus underdevelopment is not only a dimension in such data, but it encompasses more variation among nations than does any other dimension.[3](#3) This is to say that across nations and years, economic development consists of many highly intercorrelated national attributes, and scholars and practitioners alike are well justified in using the concept to describe nations. Moreover, different measures of economic development are so highly intercorrelated that one can simply measure the concept by taking one of the central measures, like GNP per capita or, to do away with the exchange rate problem of GNP, energy consumption per capita.

Does the same thing hold true for human security--is there a closely intercorrelated cluster of measures of human security, a dimension? If so, then we can either take a measure most highly correlated with the dimension as its indicator, or calculate factor scores on it by weighting the different measures involved in the analysis by their independent variance contribution to the dimension and summing the result.

There are three kinds of dimensions that a factor analysis delineates. One is the _unrotated_ dimensions, which are a best fit to all the data, with each dimension being statistically independent of the others. Then there are the _orthogonally rotated_ dimensions that, while maintaining their independence, have been rotated together around the origin of the data space to best fit the distinct clusters of intercorrelation among the variables. The technique to be used here for doing this is Varimax rotation.

One also may do an alternative _oblique rotation_ by relaxing the independence between dimensions--they can be correlated--and fitting each dimension to a separate cluster of intercorrelated variables.

Here I will do a number of factor analyses to measure human security and freedom. And on each of my factor analysis that defines more than one dimension in the data I will do both orthogonal and oblique rotations, the latter using the _orthotron_ technique. However, I will only report the orthogonal rotations unless those for the oblique are different in important and relevant ways.

Relevantly, there are two kinds of factor analysis. One is called _component analysis_, which analyzes all the variance and covariance among variables, whether unique, random, or error variance. This is the desirable method for simply determining out of a set of variables representing a unitary concept, such as freedom, the factor (component, in this case) scores to measure the dimensions found in the data, and thus the concept. The second kind is common factor analysis, a method for getting at an underlying causal nexus that explains a tightly intercorrelated cluster of variables.

In the first part of my analyses, then, I will pick measures for all nations on freedom and human security, the latter divided into violence, human development, and economic development. And then each of these domains will be component analyzed to identify its separate dimensions. If such exists, I will calculate component scores on the relevant dimensions.

The second part of the analysis involves the role of freedom in human security. Since freedom--that is, liberal democracy--is discussed here and in the literature as though it is a unitary idea, a single empirical dimension, among nations, I must determine through component analysis whether this is so. Then I need to ascertain whether this dimension, if one exists, is not only part of human security, but that human security depends on it. Given the arguments in this book this requires two assessments: whether there is a combined dimension involving freedom and other aspects of human security; and whether freedom is so important to the other aspects of human security that it predicts to, or explains in a statistical sense, the other aspects of human security.

To answer this question about dependency I will first apply a simple contingency analysis to judge how well a people's human security corresponds to their amount of freedom or its lack and to uncover nonlinearities in the relationship, and then use a chi-square test to assess the statistical significance of the result. Since this is the first time I mention such a test, I should note that I am dealing with the total population of nations, and so I am not making any probabilistic assumptions about a population from a sample. But there is another way of looking at the significance test: as determining the probability of getting the existing relationship among the data given all the possible ways the data may combine. Given the null hypothesis of a random combination, what is the probability that rejecting the particular combination of data--contingency--as random would be in error.

Because of its straightforwardness and ease of interpretation, the contingency test is useful. However, more important is the subsequent test of my ability to predict human security from freedom through bivariate, multiple, polynomial, and nonlinear regression analysis. These will involve a range of assessments, including an analysis of the errors in prediction to determine whether the data should be transformed and helper variables included.

These analyses will be on all 190 nations for 1997-98. One problem is that there are 41 nations with a population below a million,such as (with population in parentheses) Nauru (11,000), Tuvalu (11,000), Palau (19,000), San Marino (26,000), Liechtenstein (32,000), Monaco (33,000), and St. Kitts and Nevis (39,000). Together, the 49 micro-nations total 17.5 million people, or a mere 0.3 percent of the world's population. Yet they make up a quarter of the 190 nations I will analyze, a heavy weight on the results, indeed. Most of these micro-nations are islands, many in the Pacific or Caribbean. It is a question, then, whether these micro-nations bias the analysis, since a good many of them are democratic.

These micro-nations are also those with the most missing data. Although I will estimate missing data through regression analysis, the best procedure for this purpose, there is an unavoidable amount of error introduced into the analysis. For this reason and the very smallness of these nations, I will do all analyses for the 190 nations and then repeat them for 149 nations, with the 41 micro-nations removed. I need not show or mention these latter results unless they differ in relevant and important ways from those for all nations.

A further note on missing data: counting all variables and their transformations, I will be analyzing near seventy variables, many with missing data.[4](#4) I could, of course, omit nations with missing data. But since many variables have data for all 190 nations, this would lose information if I excluded nations from the analysis that had missing data on even one variable (as required by the technique of pair-wise deletion of missing data in the computer program I will use). I can calculate correlations between every pair of variables with the data present on them, but the resulting correlation matrix cannot be factor analyzed by existing programs.[5](#5) The best approach, as noted above regarding micro-nations, is to estimate missing data from those variables which have data present. This has to be done carefully, however. Since I want to uncover the dependency of human security on freedom, I should not estimate any missing data on variables that will measure freedom from those that I will use to measure human security. Otherwise, I would add artifactual (tautological) variance to my dependency analysis. To avoid this, I will only estimate a nation's missing data on political variables from other political variables, or those non-political variables that I will not use to measure the nation's human security, such as its population or area. Similarly, I will not employ any political variables to estimate a nation's missing data on human security.[6](#6)

Finally, I will do all my analyses through the _StatView_ statistical application for the Macintosh computer.[7](#7)

* * *

### MEASURES OF FREEDOM,  
HUMAN SECURITY, AND VIOLENCE

_Measures of Freedom_

The theory to be tested is that civil and political human rights--a people's freedoms--are closely entwined with human security and, most important, predict to it. The more such rights a people have, the greater their human security. The dependent variable is therefore some indicator of human security, the independent some indicator of freedom.

The aim now is to find through component (factor) analysis an indicator of freedom. I have listed in [Table A.1](WF.TAB.A.1.GIF) the sixteen political variables I will analyze for this purpose. They span a variety of ways of measuring freedom, and in addition include several relevant political variables, such as whether a nation is now or was once under French law, British law, or had or is now a state socialist or communist government. There are also variables indexing the change in a nation's freedom.

[Table A.2](WF.TAB.A.2.GIF) presents the results of the component analysis for 190 nations. I have ordered from high to low the loadings for the variables on each dimension in the table, and have omitted those loadings below an absolute .40. This makes the pattern in the data much clearer. Moreover, for ease in going back to [Table A.1](WF.TAB.A.1.GIF) to assess the meaning, measurement, or source of a variable, I have attached to the variable its order number in [Table A.1](WF.TAB.A.1.GIF), e.g., Effect 13.

Since these are orthogonal dimensions, one can read each of the loadings, such as .92 on dimension 1 for the Effect variable, as the correlation of the variable with the dimension. Since the square of a correlation between two variables times 100 give the percent of variance they have in common, Effect has 85 percent (.92 squared) of its variation in common with the dimension, a high amount. Note that the absolute .40 cutoff for the loadings shown in [Table A.2](WF.TAB.A.2.GIF) omits loadings for those variables that have less than 16 percent of their variance in common with the dimension, a very small amount in this kind of cross-national analysis. Actually, I usually limit my interpretation to variables with at least 25 percent of their variance in common with a dimension, but by including the smaller loadings, I avoid missing some of the real minor but perhaps still important relationships.

The percent variance totals at the bottom of [Table A.2](WF.TAB.A.2.GIF) measure the strength or size of a dimension. The first dimension therefore accounts for 43 percent of the total variation in the sixteen variables over 190 nations, an unusually large dimension for this kind of data. Note that the next dimension is half its size, and the last two are relatively small.

I give two other kinds of useful information in [Table A.2](WF.TAB.A.2.GIF). One is h^2 (read as communality squared), which is the proportion of variance in a variable across the 190 nations that is accounted for by the dimensions. The lowest in [Table A.2](WF.TAB.A.2.GIF) is .61 for Po-Rgt (political rights), which is still a large amount and means that all these variables have very high intercorrelations among themselves.

The SMC in [Table A.2](WF.TAB.A.2.GIF) stands for the squared multiple correlation of a variable regressed on all the others, and is worth study in its own right. It is another way of measuring how well variation in a variable depends on all the others. In one case the SMC is 1.00, and in some other cases it is .99, which means these variables are perfectly, or virtually perfectly, predicted from the fifteen others.

Now, what do the dimensions in [Table A.2](WF.TAB.A.2.GIF) mean? First, there is one very strong dimension that includes government effectiveness, accountability, honesty (lack of corruption), a freer regulatory environment, economic freedom, the overall freedom ratings, and its two elements: civil rights and political liberties. This means that there is a very strong dimension of freedom vs. nonfreedom delineating a tight cluster of intercorrelated political variables.

When the intercorrelations among these variables are partialled out of the data, there is a second independent dimension that reflects a cluster of the change variables: change from 1977 to 1998 on the freedom ratings and its two elements, civil rights and political liberties. Note that the freedom and political liberties ratings themselves have a small positive correlation with this dimension, indicating that it is measuring a positive change to greater freedom.

There is a problem in these change measures, which may explain why they form a dimension unto themselves. The low to high range in these change measures is bracketed by the highest and lowest ratings of freedom, which were 1 and 7 for both political rights and civil liberties, and 2 and 14 for the combined freedom variable. Those nations measured as least free can only change for the better, and those most free can only change for the worst. Moreover, for those nations that are most stable at any level, there is no change at all. Even more problematical, the largest changes can only occur for those nations at or near one end of the freedom scale or another, and the direction of change depends on how close to the free or unfree end of the scale they are. The upshot is that unlike the economic and human development change measures, the freedom one is restricted in a way to make it unique. Nonetheless, despite their limitations I included them in case they showed an unsuspecting relationship to the other variables.

Note that the change in economic freedom (EF-Chg 8) has no significant correlation with this dimension, but instead forms an independent dimension with a nation being socialist or having a socialist background. This correlation results from the fall of communism in many countries and their introduction of a free market. Moreover, since this dimension is independent of the others, it shows that past or present socialist influences and a change in economic freedom have little correlation among 190 nations with their overall freedom, rule of law, government effectiveness, and so on, in 1997-1998.

Finally, there is a small dimension reflecting whether a nation is presently or was once under British versus French law. Since this dimension is statistically independent of the others, it shows that British or French legal and political influence have had little effect on a nation's freedom or its change in freedom over the years.

I did this analysis to determine the component scores (CS) to be used in an analysis of human security. I therefore calculated (regression technique) scores for the two largest dimensions, which together account for 64 percent of the variation in the data for the 190 nations. I labeled these:

> _Dimension 1 scores = FreedomCS  
> Dimension 2 scores = FreeChgCS_

  
_Measures of Stability/Violence_

I component analyzed three conflict and violence variables of a nation's foreign and domestic affairs. See [Table A.3](WF.TAB.A.3.GIF) for the variables, and I give the results of their component analysis in [Table A.4](WF.TAB.A.4.GIF).

These variables comprise one dimension of violence and instability, as shown by their loadings. Deaths have the least, although still important correlation with this dimension. This is understandable, given that deaths are a general statistical category that includes not only deaths from violence but also from disease, poor health services, and disasters. I calculated the component scores for this dimension and named them:

> _Dimension 1 scores = ViolenceCS._

Note that because of its low loading on the dimensions, and resulting low weight in the calculation of the component scores, deaths will have an appropriately minor effect on these scores.  
  

_Measures of Human Development_

By _human development_ I mean that people can develop their capabilities and realize their potential, achieve well-being, and live a long life; and we can measure this by such variables as the schooling available to them, their health services, the equality between the sexes, relative income equality, and their life expectancy. [Table A.5](WF.TAB.A.5.GIF) lists these and other measures of human development that I will component analyze.

It is true that many of these eighteen variables are highly correlated with each other and some are involved in the calculation of the human development and gender development indices (variables number 20 to 22, and 36 to 37). However, these indices comprise an arbitrary summing together of the separate variables by the source, and thus the variables may have some unique variance to contribute to measuring human development. If this is so, the component analysis will pick up the variance.

The component analysis of these variables uncovered three dimensions with eigenvalues over 1.0, the usual criterion in factor analysis, but since the third was close to the cut off at 1.06, and its few moderate loadings were irrelevant, I dropped it. [Table A.6](WF.TAB.A.6.GIF) lists the resulting two-dimensional, orthogonally rotated solution.

As should be clear from [Table A.6](WF.TAB.A.6.GIF), there is one very dominant dimension that accounts for 67 percent of the variation of 190 nations on the eighteen variables. The variables most highly correlated with this dimension are the gender development index (#37), human development index (#20), child mortality, education index, birth rate, literacy, and the human poverty index (#22). Noting also the plus and minus correlations, this dimension defines a tight cluster of highly intercorrelated variables having human development in common, with high human development at one end and low development at the other.

The second dimension delineates increasing versus decreasing human development. Increasing life expectancy has a moderate relationship with the dimension, and inequality in income slightly less so in a negative direction. Given the independence of this dimension from the first, it means that there is virtually no relationship between human development levels and the increase or decrease in human development that occurred. Moreover, the human development of a nation has almost no meaningful relationship to its income inequality, although the change in this development has a moderate positive correlation with income equality--the greater the positive change in human development, the less income or consumption inequality.

I calculated component scores for both dimensions and labeled them:

> _Component scores for dimension 1 = HumDevCS  
> Component scores for dimension 2 = HumDevRiseCS_

  

_Measures of Economic Development_

All cross-national factor analysis with such per capita variables as GNP, energy consumption, income, telephones, automobiles, and mail have defined a major economic development, or wealth, dimension. Factor analyses have so consistently delineated it that I include only enough variables to index this dimension, which I list in [Table A.7](WF.TAB.A.7.GIF). I also include economic growth, foreign aid, and foreign indebtedness, since they measure an aspect of a nation's economy that bears on national, and therefore, human security.

[Table A.8](WF.TAB.A.8.GIF) presents my component analysis of these variables. The strong economic development dimension is clear in the results, with such variables as income, GNP per capita, and whether a developing country or not, closely correlated with it. A second dimension exclusively loading the foreign aid and indebtedness variables is also clear, as is the third dimension correlated with the economic growth variables.

These results are interesting in themselves. They indicate that the economic growth of a country is uncorrelated with the foreign aid it receives or gives and its indebtedness, and unrelated to its economic development. More specifically, giving or receiving aid has not increased or lessened the rate of economic growth of these 190 nations.

However, a repeat of this analysis on the 149 nations remaining after I remove the micro-nations has slightly different results. An economic development dimension still emerges as most powerful in accounting for the variance, but now the amount and per capita foreign aid have a negative relationship to the economic growth rate, while foreign indebtedness has a positive correlation with economic growth. These are small dimensions, and the correlations involved are moderate to small, but nonetheless they show that for foreign aid and economic growth, including the very small nations in the analysis can alter the dimensions.

Nonetheless, consistent with the component scores from the analyses of the political, violence, and human development variables, I calculated those for economic development on the 190 nation components. I named them:

> _Component scores for dim. 1 = EconDevCS  
> Component scores for dim. 2 = AidDebtCS  
> Component scores for dim. 3 = EcoGrothCS_

  

_Other Variables_

I have now reduced all the variables that manifest freedom and human security to their independent dimensions. Before carrying out an overall analysis of them, however, there are important national attributes that I also should include because of their general importance. These are measures of total GNP, population, population growth, area, density, and migrants, among others, and I list them all in [Table A.9](WF.TAB.A.9.GIF). These variables may well affect the intercorrelations among the human security dimensions, and their relationship to freedom.

[Table A.10](WF.TAB.A.10.GIF) shows the four dimensions I found among these variables. None of them are especially strong. The first is an East-West dimension (China, Russia, and India are not to far apart in longitude), with a very small correlation with population density. The second a population growth dimension, also including migrants as a proportion of the population. The third is a sheer size dimension, including population and area, with a moderate correlation with ethnic fractionalization. The final dimension is a North-South one, with a good correlation with GNP and a small negative correlation with ethnic fractionalization. This means that nations above the equator tend to have higher GNPs and fewer ethic divisions.

I calculated four component scores and labeled them:

> _Component scores on dimension 1 = LocationCS  
> Component scores on dimension 2 = PopGrothCS  
> Component scores on dimension 3 = SizeCS  
> Component scores on dimension 4 = NorthSouthCS_

  

_All Human Security Variables_

I had applied the previous component analysis to violence, human development, and economic development separately, and they clearly showed that one very strong dimension embodying the domains conceptual meaning well represented each of these domains, such as that of human development. It may be, however, that the variables representing each domain may interact in complex ways to produce quite different dimensions than found for the separate domains. After all, my interest is in human security itself, and not the separate domains.

Accordingly, I did a component analysis of all thirty variables used to encompass the three domains, with the results shown in [Table A.11](WF.TAB.A.11.GIF). As one can see, there is one dominant dimension accounting for over half of the variation of 190 nations on these data. This is truly an impressive dimension: it defines a cluster of such variables as those measuring gender equality (GDI-Ra), overall human development (HDI), infant mortality, schooling, income, purchasing power parity per capita, deaths, and instability.

Scores on the first dimension in [Table A.11](WF.TAB.A.11.GIF) will provide one overall measure of human security, and I named it:

> _Component scores on dimension 1 = AllHumanSecVarCS_

An alternative, and in my view, more desirable way of measuring overall human security is to integrate into one indicator the component scores from the violence, human development, and economic development domains. Each of these domains is important in itself, and the three-component analyses of [Tables A.4](WF.TAB.A.4.GIF), [A.6](WF.TAB.A.6.GIF), and [A.8](WF.TAB.A.8.GIF) brought out a very strong dimension defining each domain. However, these dimensions lost their distinction in the overall component analysis of [Table A.11](WF.TAB.A.11.GIF).

Then the question is how to put these dimensions together to create one measure of human security. Now, the component scores on each of these dimensions represent an indicator of its domain. They create the _space_ of human security. I can analyze these indicators themselves to determine the dimensions of this space, and whether there is one very strong dimension spanning this space. In this I would be seeking a common factor, and not as above, a component that encompasses all the variance in the data, including that of a variable's correlation with itself. Here, I want just that variance among the three domains that is common to them. By assumption, human security should be such an empirically unitary concept. Therefore, I will apply a common factor analysis, and my estimate of the initial communality of each variable (component scores) before iteration to a common factor solution will be its squared multiple correlation with the others.

[Table A.12](WF.TAB.A.12.GIF) presents the results and [Table A.13](WF.TAB.A.13.GIF) summarizes all the component scores I have so far calculated, including those from the analysis of [Table A.12](WF.TAB.A.12.GIF).

From [Table A.12](WF.TAB.A.12.GIF) one can see that there is very close and exclusive intercorrelation among the human security component scores, as should be the case if the concept "human security" is not only theoretical, but empirical as well. The only other scores correlated with human security are those defining a geographical north-south dimension. With a correlation of .53 with the dimension it indicates that human security tends to be higher among nations in northern latitudes.

This completes the task of defining measures of freedom, human security, and violence. I can now use these measures to assess how well freedom predicts to human security.

* * *

### DOES FREEDOM PREDICT HUMAN SECURITY?

_Freedom is a Common Factor of Human Security_

I now want to test the argument of this book that the freedom of people to pursue their own desires and hold the government responsible for its actions creates a spontaneous social field within which humans are most secure--violence is minimal, and human and economic development are best achieved. That is, freedom predicts human security. There are three ways of testing this. One is to include the freedom scores with those measuring human security and do a common factor analysis on them. This will then show whether there is a common factor underlying human security that centrally includes freedom. A second way is to do a contingency analysis of different levels of freedom versus levels of human security. And finally, one can do a regression analysis of the human security scores onto those measuring freedom. I will apply all three approaches, and by theory they should show a consistent relationship of freedom to human security.

In [Table A.14](WF.TAB.A.14.GIF) I present a common factor analysis of the two freedom scores along with the forty other variables on which I did the above component analyses. I did this analysis for those who wonder if I lost some important variance by doing the component analysis of the separate domains and then intercorrelating the resulting scores with freedom. [Table A.14](WF.TAB.A.14.GIF) does show that I capture over 50 percent of the variance in freedom scores (FreedomCS) by the first factor, which also includes almost all the human development variables and the major ones defining economic development, such as GNP per capita and high income. There is also a very minor residual economic development factor 3, but it involves no freedom or violence variables. Were this all the analyses I were to do, I would have to conclude that the relationship between freedom and human security was close--involving just one major factor, _a factor of freedom_.

But a problem with the results in [Table A.14](WF.TAB.A.14.GIF) is that the larger number of variables for Human Development and the inclusion of the "Other" variables added variance that could have skewed the results. However, one reason I did the separate component analyses on each domain reported in [Tables A.4](WF.TAB.A.4.GIF), [A.6](WF.TAB.A.6.GIF), [A.8](WF.TAB.A.8.GIF), and [A.10](WF.TAB.A.10.GIF), was to avoid this problem, and to partial out of the results the major sources of variance in these data and to reduce them to their independent dimensions.

Now, [Table A.15](WF.TAB.A.15.GIF) shows the result of a common factor analysis of these factor scores, and illustrates the virtue of reducing the variance in the separate domains to component scores prior to the common factor analysis. It shows that human development, economic development, violence, and freedom, tightly cluster into a common factor. All have correlations over .83 with it, and freedom shares with economic development the highest correlation of .86. Among all the "Other" variables, only the geographic north-south dimension has a correlation with this factor, showing that the relationship of freedom to human security tends to dominate among northern nations. If only I include the freedom and human security related scores, as done in the right half of [Table A.15](WF.TAB.A.15.GIF), then as should be the case if freedom is as important as stated here, there is only one common factor among these scores and freedom is the central score on it, sharing 85 percent of its variance (see the communality h^2). Violence is next in variance shared, followed by the two development scores. This alone is enough to show _freedom is the critical factor in explaining and improving human security_.

To understand why this should be so, consider the nature of common factor analysis. If there is a common cause underlying the variation of nations on several variables, then these variables will form a common factor and that variable that best reflects the underlying cause will have the highest loading on this factor. As I have argued in this book, freedom is the underlying cause for human security, and indeed, I find those indicators of human security clustering with freedom at their center.

Over all, then, it should be clear from the common factor analyses that _the freedom or nonfreedom of a people is the common factor in their human security or insecurity_.  
  

_Human Security and Violence are Contingent on Freedom_

Are different levels in a people's human security contingent on the level--degree--of their freedom? I partly answered this in the previous section, but contingency analysis adds to the previous analysis in two ways. It shows whether there may be a nonlinear relationship in the scores, and it gives a simpler, and therefore for some, more interpretable representation of the results.

Now the component scores for freedom, and the factor scores for human security (see [Table A.13](WF.TAB.A.13.GIF)) provide us with interval scale data such that I can simply use the product moment correlation and its significance test to judge contingency. Then I would find that the correlation between the scores for FreedomCS and HumSecFS is .84, and that with violence is -.77, both significant at p<.0001.

I also can show the bivariate plot of these correlations, list the residuals of their bivariate regressions, and do nonlinear regressions as well, which I will report in the next section. More interesting and revealing here, however, would be a simple contingency table. It clearly would show how the nations at different levels in human security are dispersed for different levels of freedom.

Accordingly, I divided the component scores for FreedomCS and HumSecFS into four levels of near equal numbers of nations, and calculated the four-by-four contingency table shown in [Table A.16](WF.TAB.A.16.GIF). The scores are untransformed, so the distribution of nations in the [Table A.16](WF.TAB.A.16.GIF) is of interest for showing the basic, raw count. Even then, the distribution is as one would expect from this book: as I go from freedom to unfree, the number of nations with high human security scores decreases from the most at 39 to 0.

The best way to view the contingencies is along the diagonal going, which changes from 31 nations that are Unfree and have low HumSecFS to 39 nations that are Free and have high HumSecFS. All the counts on this diagonal are the highest, and show a stepwise decrease as I move cell by cell away from the diagonal; and the contingency table of percents in the bottom half of [Table A.16](WF.TAB.A.16.GIF) makes this contingency more evident. Clearly, human security is contingent on freedom, with a very significant chi-square p <.0001.

[Table A.17](WF.TAB.A.17.GIF) lists the contingent distribution of nations by name. As one can see, except for the African developing nation of Botswana, there is no other that is free and below high medium in human security--most by far are high in human security. At the other end, there are no nations that are both unfree and high in human security, but three socialist and one former socialist nation are high medium. The large majority of unfree nations are low in human security.

Along with human and economic development components, human security also includes violence. Therefore, the relationship between freedom and violence is imbedded in the contingency results shown. Nonetheless, the relationship of freedom to violence is of special interest, given the chapters devoted to it in this book, and is therefore given in [Tables A.18](WF.TAB.A.18.GIF) and [A.19](WF.TAB.A.19.GIF). The results are not much different from those for human security as far as the count is concerned, although the nations that make up each count are changed. Note, for example, that, while there are no unfree nations with low violence, three former Russian republics and Vietnam are low medium. The data were coded for 1997-98, and regarding the former republics, subsequently had considerable instability and violence.

[Tables A.18](WF.TAB.A.18.GIF) and [A.19](WF.TAB.A.19.GIF) show a much greater contingency for violence then I would have expected given the theoretical relationship of violence to freedom. The less freedom a people have, the greater the likelihood of government instability, internal and foreign war, and democide. If great violence is to occur, it will be among the least free nations. However, the precipitating events for such violence might not have occurred, as with the unfree, low medium violence, nations mentioned above. Therefore, the theoretical space of violence and freedom and one often found empirically, is triangular as shown in [Figure A.2](WF.FIG.A.2.JPG).[8](#8) This means that, probabilistically, freedom is a necessary but not sufficient cause for violence. But, what I have done here is to measure violence by a variety of measures, as listed in [Table A.3](WF.TAB.A.3.GIF), some of which involve ratings of each country as to its instability and likelihood of violence. Violence need not have actually happened for a nation to be high on this measure. Consequently, I no longer have the triangular space of violence, but one more like an ellipse angled upward toward less freedom and more violence, as will be evidence in the regressions below. And thus I get the concentration of nations along the freedom-violence diagonal in [Tables A.18](WF.TAB.A.18.GIF) and [A.19](WF.TAB.A.19.GIF).

Now regarding human security as a whole, [Tables A.16](WF.TAB.A.16.GIF) and [A.17](WF.TAB.A.17.GIF) well show that _the human security or violence of a nation is contingent on the freedom of its people_.  
  

_Freedom Predicts Human Security_

By prediction here I mean that one can find an equation for freedom and human security or violence such that if one plugs into the equation how a nation scores on freedom, one will be able to closely estimate level of human security.

To begin the search for such an equation, [Table A.20](WF.TAB.A.20.GIF) shows the bivariate regression of common factor scores of human security onto Freedom's component scores. The regression is very significant and accounts for 71 percent of the variance. By social science standards, this is a very good fit. But the two plots, especially the residuals versus the fitted (regression estimates), are not satisfactory. It is cone shaped, with a much tighter fit (prediction) of human security at the high end. These plots suggest that I should transform the scores on either or both freedom and human security before the regression, or that I apply some form of nonlinear equation.

Now, the contingency tables in [Table A.16](WF.TAB.A.16.GIF) and the plot of the residuals against the human security in [Table A.20](WF.TAB.A.20.GIF) do not show much nonlinearity in the data. I further confirm this by calculating a polynomial regression of degree 2, and then degree 3, and growth, logarithmic, power, and exponential regressions, and found no meaningful improvement in the prediction.

That suggests I transform the scores. Given the plots, and the theoretical power of freedom, two transformation seem best. One is to expand both freedom and human security by some multiplicative transformations of each. I did this and after some experimentation, found that regressing the cubic transformation of human security onto a polynomial of degree 2 gave a regression correlation of .89, an increase in 8 percent of the variance predicted. Still, the residuals showed that more variance could be predicted.

Accordingly, I listed the residuals and found four nations to be major outliers: Brunei, Kuwait, Qatar, and the United Arab Emirates. These are oil producing nations whose commercial oil profits provide resources for their economic and human development far exceeding that normally available to other nations. Removing these four nations from the analysis raised the multiple correlation to .92, or 84 percent of the variance.

It is tempting to stop here, for it is already clear that I can well predict human security from freedom, even including the four oil producing states in the regression. However, the analysis of residuals shows that even more improvement is possible. The highest positive versus the lowest negative residuals suggest that there is a cultural factor involved--that countries in Asia tend to have higher human security per level of freedom than expected, while those in black Africa tend to be lower. Therefore, I also included two dummy variables in the regressions. One is whether a nation is Asian (including East and South East Asian nations, and Burma and Thailand) = 1; or not = 0. The other is whether the nation is African (excluding North Africa): if so =1; if not = 0.

[Table A.21](WF.TAB.A.21.GIF) shows the result of these transformations and including the two dummy variables. With a multiple R of .94 the equation accounts for 89 percent of the variance in human security. This is as good as social science results get on such diverse variables as included here. One expects very high predictability when, for example, regressing different measures of economic development on each other, such as GNP per capita, energy consumption, and telephones per capita. However, freedom and human security are different animals, and that freedom gives us such a high prediction of human security is solid evidence for the power of freedom. Also, the four independent variables are all significant according to the t-test, with all except the Asian dummy variable having p <.0001

The [Table A.21](WF.TAB.A.21.GIF) plot of human security onto the fitted scores from the equation are very good, showing virtually no curve and almost equal dispersion. But, the number of residuals below zero is 87 versus 99 above, which shows a slight imbalance. This can be seen better by the plot of the residuals against the estimates (fitted) in [Table A.21](WF.TAB.A.21.GIF). Ideally, the dispersion of values should show a rough circle, which is a little off along the fitted axis. Also, one can see better in this plot the asymmetry in residuals. Although there is still a little room for an improvement, I am happy with an already incredible multiple R of .94

All this again proves that _freedom is basic to human security--the more freedom people have the more their human security_.  
  

_Freedom Predicts Violence_

Although violence is an aspect of human security, because of the special importance of violence per se in this book, it is of interest to determine how well freedom predicts violence alone. I followed for violence the same steps involved in the previous human security regressions.

First, [Table A.22](WF.TAB.A.22.GIF) looks at the bivariate regression and its plots. Even this simple regression gives us a very significant prediction of 59 percent of the variance in violence for 190 nations. However, as the residuals show I can improve this, since they fall within a cone even more evident than for human security in [Table A.20](WF.TAB.A.20.GIF). Clearly, I should do a transformation of some sort on one or both scores and perhaps I should add some helper variables to the regression.

First, consider the logic of this relationship. In my [_Statistics of Democide_](NOTE5.HTM) on this site, I showed that the power of government over a nation had a multiplicative effect on democide, the deadliest form of violence. The square of power accounted for more variance in democide than did power alone. Such power is the opposite of freedom and implies that by logging the violence scores I should improve the regression fit. I did this and raised the variance predicted from 59 percent to 62 percent. This hardly improved the residual plots, however.

An analysis of the high positive and negative residuals suggested two things. One is that the of degree of human development in a nation tends to inhibit violence--not as much as does freedom, but in addition to it. The partial correlation of logged violence with freedom holding human development constant is -.57; for human development holding freedom constant it is -.39, a difference between 32 and 15 percent of the variance in violence.

Second, religion seems to play a role in violence. Specifically, Christian nations seem to have much less violence than expected given the freedom of their people; and Moslem countries seem to have more. Therefore, two dummy variables were coded, where a nation with most its people being Christian = 1, not = 0; most Moslem = 1, not = 0.

[Table A.23](WF.TAB.A.23.GIF) gives the results. The addition of the three variables to freedom gives a multiple R of .86, which means that I can predict 74 percent of the variance in logged violence. This is very good, better than one should expect given that freedom is necessary but not sufficient for the actual occurrence of domestic and foreign violence, even with the measurement of violence by component scores (see [Table A.4](WF.TAB.A.4.GIF)).

The regression coefficients in [Table A.23](WF.TAB.A.23.GIF) are all very significant, freedom being the most significant by far. Moreover, my plot of the residuals against the fitted shows a near circular distribution of nations, which suggest that there is not much more I can do to improve the prediction. Nor are there any excessive outliers that I might remove, as shown in the plot of residuals versus the dependent variable.

In all, these analyses of freedom's relationship to violence well prove that _the amount of war, revolution, turmoil, and domestic unrest and instability experienced by a people depend fundamentally on the degree to which they are free. Free people have the least violence; the least free the most_.

* * *

### CONCLUSION

For all nations 1997 to 1998, the human security of their people, their human and economic development, the violence in their lives and the political instability of their institutions, is theoretically and empirically dependent on their freedom--their civil rights and political liberties, rule of law, and the accountability of their government. One can well predict a people's human security by knowing how free they are.

Moreover, just considering the violence, instability, and total deaths a people can suffer, the more freedom they have the less of this they will endure.

These results are fully consistent with work done on war, revolution, and democide in other studies for different years and samples.[9](#9) The work on democide in Part 3 of my [_Statistics of Democide_](NOTE5.HTM), for example, was for the years 1900 to 1987 and showed that the more freedom of a people, the less likely their government's genocide and mass murder.

As clear from the statistics, I am not dealing simply with the presence or absence of freedom, but with a continuum. That is why I point out that "the _more_ freedom...,"or "the _less_ freedom...." As noted in [Chapter 8](WF.CHAP8.HTM), the implication of this is profound for the foreign policies of the democracies and democratic activists. It is that _even if we just improve the human rights of a people, even if we promote some democratization of their political institutions, it will improve their human security, and reduce the violence that inflicts them_.

* * *

### NOTES

1. For a conceptual and technical introduction to the correlation, see on this site ["Understanding Correlation."](UC.HTM)

2. For a conceptual introduction and the technical terms and concepts used here, such as dimension, rotation, orthogonal, factor score, common factor analysis, etc, see on this site ["Understanding Factor Analysis"](UFA.HTM).

3. For a relevant analysis on this site, see ["The Socio-Economic And Geographic Context Of Democide"](SOD.CHAP20.HTM).

4. Interestingly, sometimes the reason for missing data is political. Out of deference to mainland China, for example, the United Nations generally refuses to give statistics for Taiwan.

5. The correlation matrix would be nongramian. One can write a factor analysis program that can handle this matrix, but it would produce negative eigenvalues, which means that many of the factor loadings would be inflated.

6. I made all estimates using the TREND function in Mac Excel 98.

7. For the program, see the [Statview](http://www.statview.com/) web site. What the program terms "iterated principal axis" is really a common factor analysis, with a choice of the initial communality of a variable being the squared multiple correlation coefficient (SMC), the highest off-diagonal correlation for a variable, or simply 1.

8. See, for example, the empirical results in [Figure 2](DP83.FIG2.GIF) and [Figure 4](DP83.FIG4.GIF) of my ["Libertarianism and International Violence"](DP83.HTM). The theoretical space is also shown in [Figure 2](DP84.FIG2.GIF) of my ["Libertarianism, Violence Within States, and the Polarity Principle"](DP84.HTM).

9. For a comparison of these studies, see on this site [Chapter 35](TCH.CHAP35.HTM) of [_The Conflict Helix_](NOTE11.HTM); Part V of [_War, Power, Peace_](NOTE13.HTM); ["Libertarian Propositions on Violence Within and Between Nations"](DP85.HTM); and Part 1 of [_Power Kills_](NOTE6.HTM).  
  

* * *

  

You are the  visitor since 11/23/02

Go to [top](#TOP) of document

Go to [Table of Contents](NOTE15.HTM).
