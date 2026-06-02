import type { Lang } from '../index';

export const guide: Record<string, Record<Lang, string>> = {
  'guide.back': {
    pt: '← Início', en: '← Home', es: '← Inicio', fr: '← Accueil',
    it: '← Inizio', de: '← Start', zh: '← 首页', ja: '← ホーム',
  },
  'guide.kicker': {
    pt: 'Trilha de leitura', en: 'Reading Guide', es: 'Guía de lectura',
    fr: 'Guide de lecture', it: 'Guida alla lettura', de: 'Leseleitfaden',
    zh: '阅读指南', ja: '読書ガイド',
  },
  'guide.h1': {
    pt: 'Seis capítulos pela obra de Rummel',
    en: "Six chapters through Rummel's work",
    es: 'Seis capítulos por la obra de Rummel',
    fr: "Six chapitres à travers l'œuvre de Rummel",
    it: "Sei capitoli attraverso l'opera di Rummel",
    de: 'Sechs Kapitel durch Rummels Werk',
    zh: '通览Rummel著作的六个章节',
    ja: 'ルンメルの著作を貫く六つの章',
  },
  'guide.intro': {
    pt: 'Este guia te leva da biografia de Rummel à sua tese central, em ordem. Cada seção apresenta o contexto e linka para os textos originais preservados. Leia o enquadramento aqui, depois siga os links para as fontes primárias.',
    en: "This guide takes you from Rummel's biography through his central thesis, in order. Each section links to the original preserved texts. Read the context here, then follow the links to the primary sources.",
    es: 'Esta guía te lleva de la biografía de Rummel a su tesis central, en orden. Cada sección presenta el contexto y enlaza a los textos originales preservados. Lee el marco aquí, luego sigue los enlaces a las fuentes primarias.',
    fr: "Ce guide vous conduit de la biographie de Rummel à sa thèse centrale, dans l'ordre. Chaque section présente le contexte et renvoie aux textes originaux préservés. Lisez le cadrage ici, puis suivez les liens vers les sources primaires.",
    it: 'Questa guida ti porta dalla biografia di Rummel alla sua tesi centrale, in ordine. Ogni sezione presenta il contesto e collega ai testi originali preservati. Leggi il contesto qui, poi segui i collegamenti alle fonti primarie.',
    de: 'Dieser Leitfaden führt Sie von Rummels Biografie zu seiner zentralen These, der Reihe nach. Jeder Abschnitt liefert den Kontext und verlinkt auf die erhaltenen Originaltexte. Lesen Sie hier die Einordnung und folgen Sie dann den Links zu den Primärquellen.',
    zh: '本指南将你从Rummel的生平带到他的核心论点，按顺序。每一节都提供背景说明并链接到保存的原始文本。先读这里的脉络，再跟随链接进入第一手资料。',
    ja: 'このガイドは、ルンメルの伝記から彼の中心的論旨まで、順を追って案内する。各セクションは文脈を提示し、保存された原典へのリンクを示す。ここで枠組みを読み、そのあと一次資料へのリンクをたどる。',
  },
  'guide.primarySources': {
    pt: 'Fontes primárias', en: 'Primary sources', es: 'Fuentes primarias',
    fr: 'Sources primaires', it: 'Fonti primarie', de: 'Primärquellen',
    zh: '第一手资料', ja: '一次資料',
  },
  'guide.footer.p': {
    pt: 'Todos os textos linkados acima são cópias preservadas da obra original de Rummel. Nada foi editado ou interpretado além do que aparece nesta página.',
    en: "All texts linked above are preserved copies of Rummel's original work. Nothing has been edited or interpreted beyond what appears on this page.",
    es: 'Todos los textos enlazados arriba son copias preservadas de la obra original de Rummel. Nada ha sido editado ni interpretado más allá de lo que aparece en esta página.',
    fr: "Tous les textes liés ci-dessus sont des copies préservées de l'œuvre originale de Rummel. Rien n'a été édité ni interprété au-delà de ce qui apparaît sur cette page.",
    it: "Tutti i testi collegati sopra sono copie preservate dell'opera originale di Rummel. Nulla è stato modificato o interpretato oltre a ciò che appare in questa pagina.",
    de: 'Alle oben verlinkten Texte sind erhaltene Kopien von Rummels Originalwerk. Nichts wurde über das hinaus bearbeitet oder interpretiert, was auf dieser Seite erscheint.',
    zh: '以上链接的所有文本均为Rummel原作的保存副本。除本页所示内容外，未做任何编辑或诠释。',
    ja: '上記でリンクされているテキストはすべてルンメルの原著の保存コピーである。本ページに示された範囲を超えて編集や解釈は行われていない。',
  },
  'guide.footer.link': {
    pt: 'Explorar todas as coleções →',
    en: 'Browse all collections →',
    es: 'Explorar todas las colecciones →',
    fr: 'Parcourir toutes les collections →',
    it: 'Sfoglia tutte le collezioni →',
    de: 'Alle Sammlungen durchsuchen →',
    zh: '浏览所有文集 →',
    ja: 'すべてのコレクションを閲覧 →',
  },

  // ── Section 01 ─────────────────────────────────────
  'guide.s1.title': {
    pt: 'O Autor', en: 'The Author', es: 'El Autor', fr: "L'Auteur",
    it: "L'Autore", de: 'Der Autor', zh: '作者', ja: '著者',
  },
  'guide.s1.subtitle': {
    pt: 'Quem foi R.J. Rummel?', en: 'Who was R.J. Rummel?',
    es: '¿Quién fue R.J. Rummel?', fr: 'Qui était R.J. Rummel ?',
    it: 'Chi era R.J. Rummel?', de: 'Wer war R.J. Rummel?',
    zh: 'R.J. Rummel是谁？', ja: 'R.J.ルンメルとは誰か？',
  },
  'guide.s1.body': {
    pt: 'R.J. Rummel (1932–2014) foi um cientista político da Universidade do Havaí que passou quarenta anos quantificando o assassinato patrocinado por governos. É creditado por cunhar o termo <em>democídio</em> e por produzir o registro estatístico mais abrangente de assassinatos em massa cometidos por Estados na era moderna. Suas obras principais — <em>Death by Government</em>, <em>Statistics of Democide</em>, <em>China\'s Bloody Century</em> e <em>Lethal Politics</em> — formam o corpus preservado neste arquivo.',
    en: 'R.J. Rummel (1932–2014) was a political scientist at the University of Hawaiʻi who spent four decades quantifying government-sponsored killing. He is credited with coining the term <em>democide</em> and with producing the most comprehensive statistical record of mass murder by states in the modern era. His major works — <em>Death by Government</em>, <em>Statistics of Democide</em>, <em>China\'s Bloody Century</em>, and <em>Lethal Politics</em> — form the corpus this archive preserves.',
    es: 'R.J. Rummel (1932–2014) fue un politólogo de la Universidad de Hawái que pasó cuatro décadas cuantificando los asesinatos patrocinados por gobiernos. Se le atribuye haber acuñado el término <em>democidio</em> y haber producido el registro estadístico más completo del asesinato masivo por parte de Estados en la era moderna. Sus obras principales — <em>Death by Government</em>, <em>Statistics of Democide</em>, <em>China\'s Bloody Century</em> y <em>Lethal Politics</em> — forman el corpus que este archivo preserva.',
    fr: "R.J. Rummel (1932–2014) était un politologue de l'Université de Hawaï qui a consacré quarante ans à quantifier les meurtres parrainés par les gouvernements. On lui attribue la création du terme <em>démocide</em> et la production du registre statistique le plus complet des meurtres de masse commis par des États à l'époque moderne. Ses œuvres majeures — <em>Death by Government</em>, <em>Statistics of Democide</em>, <em>China's Bloody Century</em> et <em>Lethal Politics</em> — forment le corpus que ces archives préservent.",
    it: "R.J. Rummel (1932–2014) fu un politologo dell'Università delle Hawaii che dedicò quarant'anni alla quantificazione delle uccisioni sponsorizzate dai governi. Gli viene attribuita la creazione del termine <em>democidio</em> e la produzione del più completo registro statistico degli omicidi di massa da parte degli Stati nell'era moderna. Le sue opere principali — <em>Death by Government</em>, <em>Statistics of Democide</em>, <em>China's Bloody Century</em> e <em>Lethal Politics</em> — formano il corpus che questo archivio preserva.",
    de: 'R.J. Rummel (1932–2014) war Politikwissenschaftler an der University of Hawaiʻi und verbrachte vier Jahrzehnte damit, staatlich gestützte Tötungen zu quantifizieren. Ihm wird die Prägung des Begriffs <em>Demokratizid</em> zugeschrieben sowie die Erstellung der umfassendsten statistischen Aufzeichnung über Massenmord durch Staaten in der Neuzeit. Seine Hauptwerke — <em>Death by Government</em>, <em>Statistics of Democide</em>, <em>China\'s Bloody Century</em> und <em>Lethal Politics</em> — bilden das Korpus, das dieses Archiv bewahrt.',
    zh: 'R.J. Rummel（1932–2014）是夏威夷大学的政治学家，他用四十年时间量化政府主导的杀戮。他被认为提出了<em>民主灭绝</em>一词，并制作了现代史上最完整的国家大规模屠杀统计记录。他的主要著作——《政府杀戮》《民主灭绝统计》《中国流血的世纪》《致命政治》——构成本档案保存的文集。',
    ja: 'R.J.ルンメル（1932–2014）はハワイ大学の政治学者であり、四十年にわたって政府による殺害の定量化に取り組んだ。<em>デモサイド</em>という用語を考案し、現代における国家による大量殺害の最も包括的な統計的記録を作成したことで知られる。主著『政府による死』『デモサイドの統計』『中国の血まみれの世紀』『致死の政治』が本アーカイブに保存されたコーパスを構成する。',
  },

  // ── Section 02 ─────────────────────────────────────
  'guide.s2.title': {
    pt: 'O Que É Democídio', en: 'What is Democide', es: 'Qué es el democidio',
    fr: "Qu'est-ce que le démocide", it: "Cos'è il democidio", de: 'Was ist Demokratizid',
    zh: '什么是民主灭绝', ja: 'デモサイドとは何か',
  },
  'guide.s2.subtitle': {
    pt: 'Definindo o termo', en: 'Defining the term', es: 'Definiendo el término',
    fr: 'Définir le terme', it: 'Definire il termine', de: 'Den Begriff definieren',
    zh: '界定术语', ja: '用語の定義',
  },
  'guide.s2.body': {
    pt: 'Rummel definiu democídio como <em>"o assassinato de qualquer pessoa ou povo pelo seu próprio governo, incluindo genocídio, politicídio e assassinato em massa."</em> A definição foi desenhada para capturar o ato letal estatal que fica fora do combate — execuções, fomes engendradas, mortes por trabalho forçado e bombardeio deliberado de civis. A distinção do genocídio importa: o democídio não exige intenção de destruir um grupo enquanto tal, apenas que o governo mate intencionalmente. Esse enquadramento mais amplo revelou uma categoria de violência política que vinha sendo sistematicamente subcontada.',
    en: 'Rummel defined democide as <em>"the murder of any person or people by their government, including genocide, politicide, and mass murder."</em> The definition was designed to capture state killing that falls outside combat — executions, engineered famines, forced-labour deaths, and deliberate civilian targeting. The distinction from genocide matters: democide does not require intent to destroy a group as such, only that the government intentionally kills. This broader frame revealed a category of political violence that had been systematically undercounted.',
    es: 'Rummel definió el democidio como <em>"el asesinato de cualquier persona o pueblo por su propio gobierno, incluyendo genocidio, politicidio y asesinato masivo."</em> La definición fue diseñada para capturar el acto letal estatal que queda fuera del combate — ejecuciones, hambrunas inducidas, muertes por trabajo forzado y ataques deliberados a civiles. La distinción con el genocidio importa: el democidio no exige intención de destruir a un grupo como tal, sólo que el gobierno mate intencionalmente. Este marco más amplio reveló una categoría de violencia política que había sido sistemáticamente subcontada.',
    fr: "Rummel a défini le démocide comme <em>« le meurtre de toute personne ou de tout peuple par leur propre gouvernement, y compris le génocide, le politicide et le meurtre de masse. »</em> La définition vise à saisir les actes meurtriers de l'État qui se déroulent hors combat — exécutions, famines provoquées, morts par travail forcé et bombardements délibérés de civils. La distinction avec le génocide compte : le démocide n'exige pas l'intention de détruire un groupe en tant que tel, seulement que le gouvernement tue intentionnellement. Ce cadre plus large a révélé une catégorie de violence politique qui avait été systématiquement sous-estimée.",
    it: "Rummel ha definito il democidio come <em>«l'omicidio di qualsiasi persona o popolo da parte del proprio governo, incluso il genocidio, il politicidio e l'omicidio di massa.»</em> La definizione è stata progettata per cogliere l'uccisione statale che si svolge al di fuori del combattimento — esecuzioni, carestie provocate, morti per lavoro forzato e attacchi deliberati ai civili. La distinzione dal genocidio è importante: il democidio non richiede l'intenzione di distruggere un gruppo in quanto tale, solo che il governo uccida intenzionalmente. Questo quadro più ampio ha rivelato una categoria di violenza politica che era stata sistematicamente sottostimata.",
    de: 'Rummel definierte Demokratizid als <em>„die Ermordung jeder Person oder jedes Volkes durch ihre eigene Regierung, einschließlich Genozid, Polittozid und Massenmord."</em> Die Definition wurde entworfen, um staatliche Tötung außerhalb des Kampfes zu erfassen — Hinrichtungen, herbeigeführte Hungersnöte, Tod durch Zwangsarbeit und gezielte Angriffe auf Zivilisten. Die Unterscheidung zum Genozid ist wichtig: Demokratizid erfordert nicht die Absicht, eine Gruppe als solche zu zerstören, sondern nur, dass die Regierung absichtlich tötet. Dieser breitere Rahmen offenbarte eine Kategorie politischer Gewalt, die systematisch untererfasst worden war.',
    zh: 'Rummel将民主灭绝定义为<em>"任何人或人民被其本国政府杀害，包括种族灭绝、政治灭绝和大规模屠杀。"</em>这一定义旨在涵盖战斗之外的国家杀害行为——处决、制造饥荒、强迫劳动致死及对平民的蓄意打击。与种族灭绝的区分至关重要：民主灭绝不要求摧毁某一群体本身的意图，只要政府故意杀人即可。这一更宽广的框架揭示了一类长期被系统低估的政治暴力。',
    ja: 'ルンメルはデモサイドを<em>「自国の政府による人または民族の殺害――ジェノサイド、ポリティサイド、大量殺害を含む」</em>と定義した。この定義は戦闘以外の場で行われる国家による殺害――処刑、人為的飢饉、強制労働死、市民への意図的攻撃――を捉えるよう設計された。ジェノサイドとの区別は重要である。デモサイドは集団そのものを破壊する意図を要件とせず、政府が意図的に殺すことだけを要件とする。この広い枠組みは、組織的に過小評価されてきた政治暴力のカテゴリーを浮き彫りにした。',
  },

  // ── Section 03 ─────────────────────────────────────
  'guide.s3.title': {
    pt: 'A Escala', en: 'The Scale', es: 'La Escala', fr: "L'Échelle",
    it: 'La Scala', de: 'Die Größenordnung', zh: '规模', ja: 'その規模',
  },
  'guide.s3.subtitle': {
    pt: 'A magnitude do achado', en: 'The magnitude of the finding',
    es: 'La magnitud del hallazgo', fr: 'La magnitude du constat',
    it: 'La grandezza del risultato', de: 'Die Größenordnung des Befunds',
    zh: '该发现的量级', ja: '発見の規模',
  },
  'guide.s3.body': {
    pt: 'O achado central de Rummel é que governos mataram aproximadamente <strong>262&nbsp;milhões de pessoas</strong> no século XX — quase quatro vezes o total de mortes em todas as guerras do mesmo período. Ele chamou de <em>"megamurderers"</em> os regimes que mataram mais de um milhão. A União Soviética lidera suas estimativas com cerca de 62&nbsp;milhões; a China nacionalista e a comunista vêm em seguida; Alemanha nazista, Japão Imperial e a China nacionalista compõem o segundo escalão. O restante — dezenas de regimes menores — soma dezenas de milhões a mais.',
    en: "Rummel's headline finding is that governments killed approximately <strong>262&nbsp;million people</strong> in the 20th century — nearly four times the death toll of all the century's wars combined. He termed regimes that killed over a million people <em>\"megamurderers.\"</em> The Soviet Union leads his estimates at roughly 62&nbsp;million; Nationalist and Communist China follow; Nazi Germany, Imperial Japan, and Nationalist China form the next tier. The remainder — dozens of smaller regimes — account for tens of millions more.",
    es: 'El hallazgo central de Rummel es que los gobiernos mataron aproximadamente <strong>262&nbsp;millones de personas</strong> en el siglo XX — casi cuatro veces el total de muertes en todas las guerras del mismo período. Llamó <em>"megamurderers"</em> a los regímenes que mataron a más de un millón de personas. La Unión Soviética encabeza sus estimaciones con unos 62&nbsp;millones; le siguen la China nacionalista y la comunista; la Alemania nazi, el Japón Imperial y la China nacionalista forman el segundo escalón. El resto — decenas de regímenes menores — suma decenas de millones más.',
    fr: "Le constat central de Rummel est que les gouvernements ont tué environ <strong>262&nbsp;millions de personnes</strong> au XXe siècle — près de quatre fois le bilan de toutes les guerres du même siècle combinées. Il qualifia de <em>« megamurderers »</em> les régimes qui ont tué plus d'un million de personnes. L'Union soviétique domine ses estimations avec environ 62&nbsp;millions ; la Chine nationaliste et communiste suivent ; l'Allemagne nazie, le Japon impérial et la Chine nationaliste forment le second rang. Le reste — des dizaines de régimes plus petits — totalise des dizaines de millions supplémentaires.",
    it: "Il risultato centrale di Rummel è che i governi hanno ucciso circa <strong>262&nbsp;milioni di persone</strong> nel XX secolo — quasi quattro volte il totale dei morti in tutte le guerre dello stesso periodo. Definì <em>«megamurderers»</em> i regimi che uccisero oltre un milione di persone. L'Unione Sovietica guida le sue stime con circa 62&nbsp;milioni; la Cina nazionalista e quella comunista seguono; la Germania nazista, il Giappone Imperiale e la Cina nazionalista formano il livello successivo. Il resto — decine di regimi minori — somma decine di milioni in più.",
    de: 'Rummels zentrales Ergebnis lautet, dass Regierungen im 20. Jahrhundert etwa <strong>262&nbsp;Millionen Menschen</strong> getötet haben — fast viermal so viele wie alle Kriege desselben Jahrhunderts zusammen. Regime, die mehr als eine Million Menschen töteten, bezeichnete er als <em>„megamurderers"</em>. Die Sowjetunion führt seine Schätzungen mit rund 62&nbsp;Millionen an; das nationalistische und das kommunistische China folgen; Nazi-Deutschland, das kaiserliche Japan und das nationalistische China bilden die nächste Stufe. Der Rest — Dutzende kleinerer Regime — macht weitere zig Millionen aus.',
    zh: 'Rummel的核心发现是：政府在二十世纪杀害了大约<strong>2.62亿人</strong>——几乎是同一时期所有战争死亡人数总和的四倍。他将杀害百万人以上的政权称为<em>"megamurderers"</em>。苏联以约6,200万人居其估计之首；其后是国民党与共产党中国；纳粹德国、日本帝国和国民党中国构成下一梯队。其余——数十个较小政权——再合计数千万人。',
    ja: 'ルンメルの中心的な発見は、政府が二十世紀において約<strong>2億6,200万人</strong>を殺害したというものである——同世紀のあらゆる戦争の死者数の合計の約四倍にあたる。彼は百万人以上を殺害した政権を<em>「megamurderers（巨大殺害者）」</em>と呼んだ。ソビエト連邦が約6,200万人で彼の推定の首位を占め、国民党中国と共産党中国が続き、ナチス・ドイツ、大日本帝国、国民党中国が次の層を構成する。残り——数十の小規模な政権——がさらに数千万人を加える。',
  },

  // ── Section 04 ─────────────────────────────────────
  'guide.s4.title': {
    pt: 'Os Casos', en: 'The Cases', es: 'Los Casos', fr: 'Les Cas',
    it: 'I Casi', de: 'Die Fälle', zh: '具体案例', ja: '個別の事例',
  },
  'guide.s4.subtitle': {
    pt: 'Regime a regime', en: 'Regime by regime', es: 'Régimen por régimen',
    fr: 'Régime par régime', it: 'Regime per regime', de: 'Regime für Regime',
    zh: '逐一政权', ja: '政権ごとに',
  },
  'guide.s4.body': {
    pt: 'Rummel produziu estudos estatísticos detalhados de dezenas de regimes, apresentando estimativas de fontes primárias, seus próprios cálculos e faixas consolidadas com documentação completa. Os estudos vão dos megamurderers a democídios coloniais e em tempo de guerra pouco conhecidos, raramente presentes na historiografia convencional. Cada capítulo segue o mesmo método — permitindo comparação direta entre casos que de outra forma são tratados isoladamente.',
    en: "Rummel produced detailed statistical case studies for dozens of regimes, presenting primary source estimates, his own calculations, and consolidated ranges with full documentation. The studies range from the megamurderers to lesser-known colonial and wartime democides that rarely appear in mainstream historiography. Each chapter follows the same method — allowing direct comparison across cases that are otherwise treated in isolation.",
    es: 'Rummel produjo estudios estadísticos detallados de docenas de regímenes, presentando estimaciones de fuentes primarias, sus propios cálculos y rangos consolidados con documentación completa. Los estudios van desde los megamurderers hasta democidios coloniales y de guerra menos conocidos que rara vez aparecen en la historiografía convencional. Cada capítulo sigue el mismo método — permitiendo la comparación directa entre casos que de otro modo se tratan en aislamiento.',
    fr: "Rummel a produit des études de cas statistiques détaillées pour des dizaines de régimes, présentant les estimations des sources primaires, ses propres calculs et des fourchettes consolidées avec une documentation complète. Les études vont des megamurderers aux démocides coloniaux et en temps de guerre moins connus, qui apparaissent rarement dans l'historiographie classique. Chaque chapitre suit la même méthode — permettant une comparaison directe entre des cas qui sont autrement traités isolément.",
    it: "Rummel ha prodotto studi di caso statistici dettagliati per decine di regimi, presentando stime da fonti primarie, i propri calcoli e intervalli consolidati con documentazione completa. Gli studi spaziano dai megamurderers a democidi coloniali e bellici meno noti, che raramente compaiono nell'storiografia tradizionale. Ogni capitolo segue lo stesso metodo — permettendo un confronto diretto tra casi altrimenti trattati in modo isolato.",
    de: 'Rummel erstellte detaillierte statistische Fallstudien für Dutzende von Regimen, präsentierte Primärquellen-Schätzungen, eigene Berechnungen und konsolidierte Bereiche mit vollständiger Dokumentation. Die Studien reichen von den Megamurderers bis zu weniger bekannten kolonialen und kriegszeitlichen Demokratiziden, die selten in der etablierten Geschichtsschreibung erscheinen. Jedes Kapitel folgt derselben Methode — was direkte Vergleiche über Fälle hinweg ermöglicht, die sonst isoliert behandelt werden.',
    zh: 'Rummel为数十个政权撰写了详细的统计案例研究，呈现一手资料的估算、他本人的计算，以及附有完整文献的综合区间。这些研究既涵盖megamurderers，也涵盖鲜少出现在主流史学中的殖民地与战时民主灭绝。每一章遵循同一方法——使原本被孤立讨论的案例可以直接比较。',
    ja: 'ルンメルは数十の政権について詳細な統計的事例研究を発表し、一次資料による推定、自身の計算、そして十分な文献を伴う統合範囲を提示した。研究はメガマーダラーから、主流の歴史記述にはほとんど現れない植民地・戦時のあまり知られていないデモサイドまで及ぶ。各章は同じ方法に従っており——別々に扱われがちな事例間で直接比較できるようになっている。',
  },

  // ── Section 05 ─────────────────────────────────────
  'guide.s5.title': {
    pt: 'A Análise', en: 'The Analysis', es: 'El Análisis', fr: "L'Analyse",
    it: "L'Analisi", de: 'Die Analyse', zh: '分析', ja: '分析',
  },
  'guide.s5.subtitle': {
    pt: 'O que os dados mostram', en: 'What the data shows',
    es: 'Lo que los datos muestran', fr: 'Ce que les données montrent',
    it: 'Cosa mostrano i dati', de: 'Was die Daten zeigen',
    zh: '数据揭示的内容', ja: 'データが示すもの',
  },
  'guide.s5.body': {
    pt: 'Rummel analisou o democídio estatisticamente, tratando-o como variável dependente ao lado de sistemas políticos, desenvolvimento econômico, diversidade cultural e conflito militar. O achado consistente em dezenas de análises: o poder político — especificamente sua concentração e ausência de freios — é o preditor dominante do democídio. A guerra correlaciona com o democídio mas não o causa independentemente do poder. As análises de campo social formalizam essa relação com análises fatoriais, correlações canônicas e modelos de regressão.',
    en: 'Rummel analysed democide statistically, treating it as a dependent variable alongside political systems, economic development, cultural diversity, and military conflict. The consistent finding across dozens of analyses: political power — specifically its concentration and lack of constraint — is the dominant predictor of democide. War correlates with democide but does not cause it independently of power. The social field analyses formalise this relationship with factor analyses, canonical correlations, and regression models.',
    es: 'Rummel analizó el democidio estadísticamente, tratándolo como variable dependiente junto con los sistemas políticos, el desarrollo económico, la diversidad cultural y el conflicto militar. El hallazgo consistente en docenas de análisis: el poder político — específicamente su concentración y falta de límites — es el predictor dominante del democidio. La guerra correlaciona con el democidio pero no lo causa independientemente del poder. Los análisis de campo social formalizan esta relación con análisis factoriales, correlaciones canónicas y modelos de regresión.',
    fr: "Rummel a analysé le démocide statistiquement, en le traitant comme variable dépendante aux côtés des systèmes politiques, du développement économique, de la diversité culturelle et des conflits militaires. Le résultat constant à travers des dizaines d'analyses : le pouvoir politique — en particulier sa concentration et son absence de contrainte — est le prédicteur dominant du démocide. La guerre est corrélée au démocide mais ne le cause pas indépendamment du pouvoir. Les analyses de champ social formalisent cette relation avec des analyses factorielles, des corrélations canoniques et des modèles de régression.",
    it: "Rummel ha analizzato statisticamente il democidio, trattandolo come variabile dipendente accanto ai sistemi politici, allo sviluppo economico, alla diversità culturale e al conflitto militare. Il risultato costante in decine di analisi: il potere politico — in particolare la sua concentrazione e la mancanza di vincoli — è il predittore dominante del democidio. La guerra correla con il democidio ma non lo causa indipendentemente dal potere. Le analisi di campo sociale formalizzano questa relazione con analisi fattoriali, correlazioni canoniche e modelli di regressione.",
    de: 'Rummel analysierte Demokratizid statistisch und behandelte ihn als abhängige Variable neben politischen Systemen, wirtschaftlicher Entwicklung, kultureller Vielfalt und militärischem Konflikt. Der konstante Befund in Dutzenden von Analysen: politische Macht — insbesondere ihre Konzentration und das Fehlen von Beschränkungen — ist der dominante Prädiktor des Demokratizids. Krieg korreliert mit Demokratizid, verursacht ihn aber nicht unabhängig von der Macht. Die Sozialfeldanalysen formalisieren diese Beziehung mit Faktorenanalysen, kanonischen Korrelationen und Regressionsmodellen.',
    zh: 'Rummel对民主灭绝进行了统计分析，将其作为因变量，与政治体制、经济发展、文化多样性和军事冲突并列考量。数十项分析的一致结论是：政治权力——具体而言是其集中程度与不受约束——是民主灭绝的主导预测因子。战争与民主灭绝相关，但脱离权力时并不构成致因。社会场分析以因子分析、典型相关和回归模型对此关系进行了形式化。',
    ja: 'ルンメルはデモサイドを統計的に分析し、政治制度、経済発展、文化的多様性、軍事衝突と並ぶ従属変数として扱った。数十の分析を通じての一貫した結論は次のとおりである——政治権力、とりわけその集中と制約の欠如こそが、デモサイドの支配的な予測因子である。戦争はデモサイドと相関するが、権力から独立にそれを引き起こすわけではない。社会場分析は、因子分析・正準相関・回帰モデルによってこの関係を形式化している。',
  },

  // ── Section 06 ─────────────────────────────────────
  'guide.s6.title': {
    pt: 'A Tese', en: 'The Thesis', es: 'La Tesis', fr: 'La Thèse',
    it: 'La Tesi', de: 'Die These', zh: '论点', ja: '論旨',
  },
  'guide.s6.subtitle': {
    pt: 'Poder mata — e o que decorre disso',
    en: 'Power kills — and what follows from that',
    es: 'El poder mata — y lo que de eso se sigue',
    fr: 'Le pouvoir tue — et ce qui en découle',
    it: 'Il potere uccide — e ciò che ne consegue',
    de: 'Macht tötet — und was daraus folgt',
    zh: '权力杀人——以及由此引出的结论',
    ja: '権力は殺す——そしてそこから導かれること',
  },
  'guide.s6.body': {
    pt: 'O argumento central que Rummel extraiu de seus dados está capturado na frase <em>"poder mata; poder absoluto mata absolutamente."</em> Estados governados democraticamente — onde o poder é limitado, fiscalizado e accountable — praticamente nunca cometem democídio contra seu próprio povo. Rummel sustentava que esse era o achado mais robusto de sua pesquisa e a conclusão mais acionável: difundir a democracia e limitar o poder do Estado é a prevenção mais eficaz contra o assassinato em massa. É o que ele chamou de <em>"milagre"</em> — que a solução já era conhecida.',
    en: 'The core argument Rummel derived from his data is captured in the phrase <em>"power kills; absolute power kills absolutely."</em> Democratically governed states — where power is constrained, checked, and accountable — virtually never commit democide against their own people. Rummel argued this was the most robust finding in his research and the most actionable conclusion: spreading democracy and limiting state power is the most effective prevention of mass murder. This is what he called the <em>"miracle"</em> — that the solution was already known.',
    es: 'El argumento central que Rummel extrajo de sus datos está capturado en la frase <em>"el poder mata; el poder absoluto mata absolutamente."</em> Los Estados gobernados democráticamente — donde el poder está limitado, fiscalizado y rinde cuentas — prácticamente nunca cometen democidio contra su propio pueblo. Rummel sostenía que este era el hallazgo más robusto de su investigación y la conclusión más accionable: difundir la democracia y limitar el poder estatal es la prevención más eficaz del asesinato masivo. Esto es lo que él llamó el <em>"milagro"</em> — que la solución ya era conocida.',
    fr: "L'argument central que Rummel a tiré de ses données est saisi par la phrase <em>« le pouvoir tue ; le pouvoir absolu tue absolument. »</em> Les États gouvernés démocratiquement — où le pouvoir est limité, contrôlé et redevable — ne commettent pratiquement jamais de démocide contre leur propre peuple. Rummel soutenait que c'était le résultat le plus robuste de sa recherche et la conclusion la plus opérationnelle : diffuser la démocratie et limiter le pouvoir de l'État est la prévention la plus efficace du meurtre de masse. C'est ce qu'il a appelé le <em>« miracle »</em> — que la solution était déjà connue.",
    it: "L'argomento centrale che Rummel ha tratto dai suoi dati è racchiuso nella frase <em>«il potere uccide; il potere assoluto uccide assolutamente.»</em> Gli Stati governati democraticamente — dove il potere è limitato, controllato e responsabile — non commettono praticamente mai democidio contro il proprio popolo. Rummel sosteneva che questo era il risultato più robusto della sua ricerca e la conclusione più operativa: diffondere la democrazia e limitare il potere dello Stato è la prevenzione più efficace dell'omicidio di massa. È ciò che lui chiamò il <em>«miracolo»</em> — che la soluzione era già nota.",
    de: 'Das Kernargument, das Rummel aus seinen Daten ableitete, wird im Satz <em>„Macht tötet; absolute Macht tötet absolut"</em> gefasst. Demokratisch regierte Staaten — in denen Macht begrenzt, kontrolliert und rechenschaftspflichtig ist — begehen praktisch nie Demokratizid an ihrem eigenen Volk. Rummel argumentierte, dies sei das robusteste Ergebnis seiner Forschung und die handlungsfähigste Schlussfolgerung: die Demokratie zu verbreiten und staatliche Macht zu begrenzen ist die wirksamste Prävention von Massenmord. Das nannte er das <em>„Wunder"</em> — dass die Lösung bereits bekannt war.',
    zh: 'Rummel从数据中得出的核心论点凝结于这一句：<em>"权力杀人；绝对权力绝对杀人。"</em>受民主治理的国家——权力受到限制、监督并问责——几乎从不对本国人民实施民主灭绝。Rummel认为这是他研究中最为稳健的发现，也是最具可操作性的结论：推广民主、限制国家权力是预防大规模屠杀最有效的办法。这就是他所说的<em>"奇迹"</em>——答案早已为人所知。',
    ja: 'ルンメルがデータから導いた中心的論旨はこの一句に集約される——<em>「権力は殺す。絶対的権力は絶対的に殺す。」</em>民主的に統治された国家——権力が制約され、点検され、責任を問われる国家——は、自国民に対してデモサイドをほとんど犯さない。ルンメルは、これが彼の研究で最も頑健な発見であり、最も実行可能な結論であると主張した——民主主義を広め、国家権力を制限することが大量殺害を防ぐ最も効果的な手段である。彼が<em>「奇跡」</em>と呼んだもの、すなわち答えは既に知られていたという事実である。',
  },
};
