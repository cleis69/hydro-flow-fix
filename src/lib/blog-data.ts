/** Articles du blog, repris de hydro-curage.fr. */
export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  iso: string;
  excerpt: string;
  sections: { title: string; text: string }[];
};
export const ARTICLES: Article[] = [
  {
    slug: "vidange-fosse-septique-seine-et-marne-77-guide-spanc",
    title:
      "Vidange fosse septique en Seine-et-Marne (77) : le guide complet SPANC, prix et démarches",
    category: "Fosse septique 77",
    date: "15 mai 2026",
    iso: "2026-05-15",
    excerpt:
      "Vous avez une fosse septique dans le 77 ? Voici tout ce qu'il faut savoir sur la vidange, la réglementation SPANC en Seine-et-Marne, les prix réels et les pièges à éviter. Guide pratique d'un pro qui fait du 77 depuis 15 ans.",
    sections: [
      {
        title: "Pourquoi la Seine-et-Marne a autant de fosses septiques",
        text: "Le 77, c'est le plus grand département d'Île-de-France et de loin le plus rural. Quand on sort de Marne-la-Vallée ou de Meaux, on entre vite dans la Brie, le Gâtinais ou le Vexin briard — et là, le tout-à-l'égout c'est l'exception. Dans des communes comme Larchant, Soisy-Bouy, Chevry-Cossigny, Saints, Moncourt-Fromonville ou La Brosse-Montceaux, quasiment 100% des habitations sont en assainissement non collectif. C'est-à-dire : fosse toutes eaux (la version moderne), fosse septique (la version d'avant), ou micro-station. On en vidange plusieurs par semaine dans le secteur. La règle est simple : pas de raccordement public = vous êtes responsable du traitement de vos eaux usées. Et le SPANC est là pour vérifier que vous le faites correctement.",
      },
      {
        title: "Le SPANC en 77 : qui c'est et que veut-il vraiment ?",
        text: "Le SPANC (Service Public d'Assainissement Non Collectif) est un service intercommunal. En Seine-et-Marne, il y a une dizaine de SPANC selon votre communauté de communes : SPANC du Pays Fertois, SPANC Brie des Morin, SPANC Gâtinais Val de Loing, etc. Tous ont les mêmes obligations mais des rythmes de contrôle différents (tous les 4 à 10 ans). Ce qu'ils vérifient : (1) l'existence d'une installation conforme, (2) son entretien régulier (vidange à jour), (3) l'absence de pollution. Concrètement, le technicien SPANC vient avec un rapport-type, regarde votre fosse, votre épandage, vous demande les certificats des dernières vidanges, et établit un diagnostic. Trois résultats possibles : conforme, non-conforme sans risque, ou non-conforme avec risque sanitaire — et là il faut faire les travaux dans les 12 mois.",
      },
      {
        title: "À quelle fréquence vidanger en Seine-et-Marne ?",
        text: "La règle officielle : quand les boues atteignent 50% du volume utile de la fosse. En pratique, pour une famille de 4 personnes avec une fosse de 3 m³, ça correspond à une vidange tous les 3-4 ans. Pour 5-6 personnes : tous les 2-3 ans. Pour une résidence secondaire : tous les 5-6 ans. Si vous recevez beaucoup, ou si vous utilisez la fosse pour des eaux trop riches (produits chimiques, javel régulière, peinture, lingettes), le rythme se raccourcit. Notre conseil sur tout le 77 : ne pas attendre les odeurs ou les évacuations lentes — c'est qu'il est déjà bien tard.",
      },
      {
        title: "Combien coûte une vidange de fosse septique dans le 77 ?",
        text: "Pour une fosse standard de 3 m³ (la taille classique des pavillons des années 70-90 en Seine-et-Marne), comptez 220-320 € TTC. Pour une 4-5 m³ : 280-380 €. Pour une fosse de plus grand volume ou un accès difficile (chemin rural, dénivelé important, distance importante du camion) : 350-500 €. Le tarif inclut : le déplacement, le pompage complet, le nettoyage de la cuve, le traitement des matières chez un centre agréé, et la remise du bordereau de suivi (BSMV) à conserver. À éviter : les annonces 'vidange à 80 €' sur Internet — c'est soit une arnaque (suppléments cachés sur place), soit un opérateur non agréé (les matières partent on ne sait où, vous engagez votre responsabilité).",
      },
      {
        title: "Le bordereau de suivi des matières (BSMV) : votre meilleure preuve",
        text: "À chaque vidange, l'opérateur agréé doit vous remettre un bordereau de suivi des matières de vidange (BSMV). C'est un document officiel qui prouve : (1) la date de la vidange, (2) le volume pompé, (3) le centre de traitement où les boues ont été déposées. Sans BSMV, vous n'avez aucune preuve d'avoir fait votre vidange. Le SPANC vous demandera systématiquement les BSMV des dernières vidanges. À conserver précieusement — idéalement scannés en plus du papier. Et si vous vendez votre maison, l'acquéreur peut vous demander tous les BSMV des 10 dernières années.",
      },
      {
        title: "Diagnostic SPANC obligatoire avant vente immobilière en 77",
        text: "Depuis 2011, le diagnostic d'assainissement non collectif est obligatoire pour toute vente d'une maison non raccordée au tout-à-l'égout. Validité : 3 ans maximum à la signature. C'est le vendeur qui le finance (180-350 € selon le SPANC). Si la fosse est conforme : pas de problème, la vente se fait. Si non-conforme : l'acheteur peut négocier le prix à la baisse, ou exiger que les travaux soient faits avant la vente. Dans le 77, on voit beaucoup de ventes qui coincent à cause d'un diagnostic défavorable — fosse trop vieille, épandage colmaté, absence d'aération. Anticipez : faites le diagnostic dès que vous décidez de vendre, ça vous laisse le temps de réagir.",
      },
      {
        title: "Mise aux normes : combien ça coûte et qui paie ?",
        text: "Si le SPANC vous demande de mettre aux normes, plusieurs scénarios. Cas 1 — fosse à remplacer + filtre à sable neuf : 6 000 à 12 000 € TTC selon le terrain et la configuration. Cas 2 — micro-station compacte (gain de place) : 8 000 à 15 000 €. Cas 3 — simple rénovation d'épandage : 2 500 à 5 000 €. Aides possibles : éco-PTZ (jusqu'à 10 000 € sans intérêt), MaPrimeRénov' selon revenus, aides de l'Agence de l'Eau Seine-Normandie (selon votre commune). Demandez plusieurs devis (au moins 3) — les prix varient énormément selon les entreprises. Et vérifiez que l'installateur est bien certifié RGE et habilité par votre SPANC.",
      },
      {
        title: "Les erreurs à éviter absolument avec une fosse septique",
        text: "Premier piège : verser des produits agressifs (javel, déboucheur chimique, white-spirit, peinture). Ça tue les bactéries qui font le travail biologique. Résultat : la fosse se remplit deux fois plus vite et les odeurs apparaissent. Deuxième piège : jeter des lingettes (même 'biodégradables' — elles ne le sont pas dans une fosse), des serviettes, du papier autre que WC. Tout ça forme des paquets qui s'accumulent. Troisième piège : ne plus utiliser la fosse pendant une longue période sans la préparer (résidence secondaire qui ferme l'hiver) — les bactéries meurent. Solution : remettre en service progressivement, avec activateur biologique. Quatrième piège : laisser des arbres pousser au-dessus de l'épandage — les racines détruisent les drains en 5 à 10 ans.",
      },
      {
        title: "Notre intervention dans tout le 77",
        text: "On vidange et entretient des fosses dans tout le département, des plus accessibles (Meaux, Melun, Chelles) aux plus reculées (Larchant, La Brosse-Montceaux, Soignolles-en-Brie, Chevry-Cossigny). Notre camion passe partout, même sur chemin rural — on est habitués. Délais d'intervention typiques : 30-60 min sur le nord et l'est, 1h-1h30 sur le sud. Si vous voulez planifier une vidange préventive, on peut caler ça avec d'autres interventions dans le secteur pour limiter le déplacement. Et si vous avez un contrôle SPANC programmé, on peut faire vidange + diagnostic en même temps. Devis ferme par téléphone, prix annoncé avant intervention, pas de mauvaise surprise — c'est notre engagement sur tout le 77.",
      },
    ],
  },
  {
    slug: "tarifs-debouchage-canalisation-77-prix-reels",
    title:
      "Tarifs débouchage canalisation en Seine-et-Marne (77) : combien ça coûte vraiment en 2026 ?",
    category: "Prix & Tarifs",
    date: "12 mai 2026",
    iso: "2026-05-12",
    excerpt:
      "Marre des devis flous et des arnaques au déplacement ? Voici les vrais tarifs pratiqués pour le débouchage de canalisation dans le 77 — débouchage, curage, vidange fosse, inspection caméra. Transparence totale, prix d'un pro local.",
    sections: [
      {
        title: "Pourquoi les prix varient autant d'un plombier à l'autre dans le 77",
        text: "Si vous tapez 'débouchage canalisation 77' sur Google, vous tombez sur des annonces 'à partir de 49 €' à côté d'autres à 380 € pour la même intervention. C'est troublant. La vérité : il y a beaucoup de filiales nationales et de plateformes de mise en relation qui font de la pub avec des prix d'appel ridiculement bas — puis le technicien arrive, fait la facture sur place et c'est 350 € minimum, avec des suppléments invraisemblables (déplacement, urgence, matériel spécial, etc.). Côté pros locaux honnêtes, les tarifs sont stables, prévisibles et annoncés par téléphone. Voici les nôtres, sans surprise.",
      },
      {
        title: "Tarif débouchage simple (WC, évier, douche, lavabo)",
        text: "C'est l'intervention la plus courante : un bouchon intérieur sur une évacuation simple. Tarif : 120 € à 250 € TTC selon la complexité et la durée. Cas typiques : WC bouché par du papier ou un objet : 120-180 €. Évier cuisine encrassé par les graisses : 150-220 €. Douche colmatée par cheveux et savon : 130-200 €. Colonne d'immeuble bouchée à un étage : 180-280 €. Le tarif est annoncé par téléphone après description du problème — on confirme sur place. Pas de surcoût caché, pas de tarif horaire qui explose.",
      },
      {
        title: "Tarif curage hydrodynamique",
        text: "Le curage haute pression nettoie l'intérieur des canalisations en profondeur — graisses, calcaire, racines, dépôts organiques. Sur une canalisation domestique de 10-15 m : 200-350 €. Sur une colonne d'immeuble (40-80 m) : 350-600 €. Sur un réseau de copropriété complet (toutes colonnes verticales) : 800 € à 2 000 € selon taille de l'immeuble. Pour une copropriété, le curage annuel négocié au forfait dans un contrat de maintenance revient moins cher qu'à la pièce.",
      },
      {
        title: "Tarif vidange fosse septique",
        text: "C'est très demandé dans le 77 vu la quantité de pavillons en assainissement non collectif. Fosse standard 3 m³ (la plus courante en Seine-et-Marne) : 220-320 € TTC, bordereau de suivi compris. Fosse 4 m³ : 250-350 €. Fosse 5 m³ : 280-400 €. Pour les accès difficiles (chemin rural, dénivelé, distance >50m du camion) : compter +50 à +150 €. Méfiez-vous des annonces 'vidange à 80 €' — soit le prix réel n'est pas annoncé, soit l'opérateur n'est pas agréé pour traiter les matières (vous restez responsable légalement).",
      },
      {
        title: "Tarif inspection caméra canalisation",
        text: "Indispensable quand vous avez des bouchons à répétition au même endroit, ou avant des travaux de gainage. Inspection caméra d'une canalisation domestique (jusqu'à 30 m) : 150-220 €. Inspection complète d'une fosse septique + épandage : 220-300 €. Inspection caméra d'un réseau de copropriété (toutes colonnes) : 350-600 €. Rapport écrit avec captures d'images + diagnostic des problèmes identifiés inclus. Très utile pour faire jouer la garantie décennale sur un constructeur, ou pour valider l'état avant vente.",
      },
      {
        title: "Tarif diagnostic SPANC obligatoire avant vente",
        text: "Obligatoire pour vendre une maison en assainissement non collectif (très fréquent dans le 77 hors agglomération). Diagnostic complet avec rapport écrit officiel : 180-350 € selon le SPANC dont vous dépendez. Validité 3 ans. Réalisable par notre équipe sur tout le département. À anticiper dès que vous décidez de vendre — un diagnostic défavorable peut bloquer ou retarder la vente.",
      },
      {
        title: "Tarif bac à graisse (restaurants et commerces)",
        text: "Obligation légale pour les restaurants, cantines, traiteurs. Vidange d'un bac à graisse 100-200 L : 180-280 €. Bac 300-500 L : 280-450 €. Bac >500 L (gros volume) : 400-700 €. Fréquence recommandée : 4 à 12 vidanges par an selon volume et activité. Contrats annuels possibles avec planning anticipé — vous n'avez plus à y penser, et vous évitez les débordements en plein service.",
      },
      {
        title: "Tarif intervention d'urgence : nuit, week-end, jours fériés",
        text: "On intervient 24h/24, 7j/7 sur tout le 77, jours fériés compris. Pour une intervention d'urgence en pleine nuit (22h-6h) ou un dimanche : forfait majoration de 30-50 € selon la commune. C'est annoncé à l'avance, jamais découvert sur la facture. À ne pas confondre avec les opérateurs qui annoncent 'urgence 24h/24' puis facturent +200% à +400% en pleine nuit. Notre principe : la nuit ou le jour, c'est le même tarif horaire, juste un éventuel forfait déplacement nocturne raisonnable.",
      },
      {
        title: "Tarif pose de clapet anti-retour (zones inondables 77)",
        text: "Très demandé dans le 77 dans les zones proches de la Marne (Lagny, Vaires, Meaux), de la Seine (Melun, Le Mée, Montereau), de l'Yonne (Montereau) ou du Loing (Nemours). Pose d'un clapet anti-retour sur l'évacuation principale d'une maison : 280-550 € selon configuration. Pour une copropriété (clapet collectif sur le branchement public) : 600-1 500 €. Investissement qui se rentabilise vite : un seul refoulement après crue peut causer plusieurs milliers d'euros de dégâts.",
      },
      {
        title: "Comment éviter les arnaques au débouchage en 77",
        text: "Règle n°1 : exigez un devis ferme par téléphone AVANT toute intervention. Si l'opérateur refuse ('on verra sur place'), c'est suspect. Règle n°2 : un débouchage simple n'a pas à dépasser 250 €. Si on vous annonce 500+ €, c'est qu'on essaie de gonfler la facture. Règle n°3 : vérifiez les avis Google de l'entreprise — les filiales nationales ont souvent des notes catastrophiques. Règle n°4 : préférez un pro local qui a une vraie adresse en 77 — c'est mieux pour le suivi et pour les recours en cas de problème. Règle n°5 : ne payez jamais cash sans facture — exigez toujours une facture détaillée avec mention TVA pour pouvoir faire valoir une garantie ou un recours.",
      },
    ],
  },
  {
    slug: "refoulement-crue-marne-seine-77",
    title: "Refoulement de canalisation après une crue en Seine-et-Marne : que faire en urgence",
    category: "Urgence 77",
    date: "10 mai 2026",
    iso: "2026-05-10",
    excerpt:
      "Crue de la Marne, de la Seine, de l'Yonne ou du Loing : les refoulements dans les habitations sont fréquents dans le 77. Voici comment réagir en urgence, qui appeler, et surtout comment éviter que ça se reproduise (clapet anti-retour).",
    sections: [
      {
        title: "Pourquoi les refoulements sont fréquents en Seine-et-Marne",
        text: "Le 77 est traversé par quatre grandes rivières : la Marne (Meaux, Chelles, Lagny, Vaires), la Seine (Melun, Le Mée, Montereau), l'Yonne (Montereau) et le Loing (Nemours, Souppes, Bagneaux). À chaque crue importante, le niveau de l'eau des réseaux d'assainissement publics monte aussi — parce que ces réseaux sont (partiellement) connectés aux rivières via des stations de pompage et des déversoirs. Quand la rivière déborde, le réseau public ne peut plus évacuer, et l'eau remonte par les évacuations des habitations. C'est ce qu'on appelle un refoulement par les canalisations. On l'a vu en 2018, 2021, 2024 — et ça continuera tant que les ouvrages ne sont pas renforcés.",
      },
      {
        title: "Signes d'un refoulement imminent",
        text: "Plusieurs signaux doivent vous alerter quand la crue arrive. Premier : les évacuations s'écoulent au ralenti, comme s'il y avait un bouchon (sauf qu'il n'y en a pas). Deuxième : bruits de bulles et de glouglous dans la baignoire, la douche ou la cuvette des WC. Troisième : odeur d'égout qui remonte. Si vous remarquez ces signes pendant que la rivière monte, ne tardez pas : c'est l'eau du réseau public qui essaie de remonter chez vous. Coupez immédiatement l'utilisation d'eau (toilettes, douche, lave-linge, lave-vaisselle) pour ne pas aggraver la pression sur le réseau.",
      },
      {
        title: "Que faire en urgence si l'eau commence à remonter ?",
        text: "Étape 1 : coupez l'électricité de la pièce concernée (sous-sol, RDC) — les eaux usées sont conductrices et peuvent provoquer un court-circuit. Étape 2 : si vous avez un sous-sol, surélevez tout ce qui peut l'être (cartons, archives, matériel électrique). Étape 3 : appelez un professionnel du débouchage 24h/24 — pour Seine-et-Marne, on intervient en 30 min à 1h15 selon la zone. Étape 4 : ne touchez pas l'eau souillée sans gants — elle contient des bactéries dangereuses. Étape 5 : surtout, ne tentez pas de pomper vous-même avec un aspirateur classique — risque électrique et inefficacité.",
      },
      {
        title: "L'intervention d'urgence : pompage + diagnostic",
        text: "Notre intervention en cas de refoulement consiste en deux phases. Phase 1 — pompage d'urgence : on vient avec un camion de pompage industriel (jusqu'à 12 m³/h), on évacue toute l'eau remontée et on nettoie au jet désinfectant. Compter 1h-3h selon le volume. Tarif : 250-450 € selon la quantité d'eau et l'accès. Phase 2 — diagnostic et solution durable : on identifie pourquoi le refoulement s'est produit (le plus souvent : absence de clapet anti-retour) et on propose une solution pérenne. Idéalement les deux dans la même intervention pour éviter qu'un second épisode arrive avant l'installation de la protection.",
      },
      {
        title: "La solution durable : le clapet anti-retour",
        text: "Le clapet anti-retour est un dispositif mécanique installé sur l'évacuation principale de votre maison (entre votre canalisation et le réseau public). Son principe : laisser l'eau usée sortir, mais empêcher l'eau du réseau public de remonter chez vous. Quand la rivière est en crue et que le réseau refoule, le clapet se ferme automatiquement — vous êtes protégé. C'est mécanique, simple, fiable, et ça dure 20-30 ans sans entretien lourd. Tarif de pose : 280-550 € pour une maison individuelle, selon la configuration. Pour une copropriété (clapet collectif) : 600-1 500 €. Investissement amorti à la première crue évitée.",
      },
      {
        title: "Communes du 77 les plus exposées",
        text: "Sur la Marne : Lagny-sur-Marne, Thorigny-sur-Marne, Vaires-sur-Marne, Chelles, Meaux, Trilport — ces communes ont régulièrement des refoulements en hiver et au printemps. Sur la Seine : Melun centre (île Saint-Étienne), Le Mée-sur-Seine, Boissise-le-Roi, Vulaines-sur-Seine, Samois — refoulements moins fréquents mais possibles lors des grandes crues. Sur l'Yonne et la confluence : Montereau-Fault-Yonne, Cannes-Écluse, Marolles-sur-Seine. Sur le Loing : Nemours, Souppes-sur-Loing, Bagneaux-sur-Loing, Moncourt-Fromonville. Si vous habitez l'une de ces communes en zone basse (rez-de-chaussée ou sous-sol), la pose préventive d'un clapet anti-retour est très fortement recommandée — ne pas attendre la prochaine crue.",
      },
      {
        title: "Assurance et indemnisation après refoulement",
        text: "Si vous êtes victime d'un refoulement, déclarez immédiatement le sinistre à votre assurance habitation (multirisque). La plupart des contrats couvrent les dégâts des eaux par refoulement de canalisation — mais lisez bien votre contrat. Conservez : photos avant pompage, facture du pompage et du nettoyage, factures du mobilier ou matériel endommagé, devis de remise en état. Si la crue est déclarée catastrophe naturelle (arrêté préfectoral 77), votre franchise peut être annulée — vérifiez sur le site du ministère de l'Intérieur. L'expert d'assurance passera vérifier les dégâts avant remise en état définitive — gardez les preuves intactes.",
      },
      {
        title: "Préparation avant la prochaine crue",
        text: "Si vous habitez en zone à risque dans le 77, voici notre check-list de prévention. (1) Installez un clapet anti-retour — investissement le plus rentable. (2) Identifiez et surélevez tout ce qui craint l'eau dans les niveaux bas. (3) Préparez un kit d'urgence : torche, gants épais, sacs poubelle résistants, journaux pour absorber. (4) Mémorisez le numéro d'un plombier 24h/24 local — pas une plateforme nationale, un vrai pro qui répond. (5) Si vous avez le temps avant la crue annoncée, faites curer préventivement vos évacuations — un réseau encrassé refoule plus facilement. (6) Souscrivez une assurance habitation avec garantie 'refoulement et dégât des eaux' bien dimensionnée.",
      },
    ],
  },
  {
    slug: "racines-canalisations-77-diagnostic-traitement",
    title:
      "Racines dans les canalisations en Seine-et-Marne : diagnostic, traitement et prévention",
    category: "Diagnostic",
    date: "8 mai 2026",
    iso: "2026-05-08",
    excerpt:
      "Bouchons récurrents au même endroit, refoulements par temps de pluie, bruits dans les évacuations ? Les racines d'arbres dans vos canalisations enterrées sont une cause très fréquente en 77. Voici comment les détecter et les traiter durablement.",
    sections: [
      {
        title: "Pourquoi les racines envahissent les canalisations",
        text: "Les arbres cherchent en permanence de l'eau et des nutriments. Vos canalisations d'eaux usées contiennent les deux en abondance. Quand une racine passe à proximité d'une canalisation présentant le moindre défaut (joint qui prend du jeu, micro-fissure, raccord mal serré), elle s'y infiltre. Une fois entrée, elle prolifère à l'intérieur, formant un manchon de plus en plus dense. En 5 à 10 ans, une canalisation parfaitement fonctionnelle peut se retrouver à moitié obstruée. Les essences les plus problématiques en Seine-et-Marne : peuplier, saule, érable, marronnier, platane, prunier. Les pavillons des années 60-80 du 77 (avec leurs grands jardins arborés) sont les plus touchés — Pontault, Ozoir, Villeparisis, Bois-le-Roi, Avon, Champs-sur-Marne sont des secteurs où on intervient beaucoup pour ça.",
      },
      {
        title: "Signes typiques d'une infestation par les racines",
        text: "Plusieurs signes doivent vous mettre la puce à l'oreille. Premier : bouchons à répétition au même endroit (le furet règle le problème quelques semaines, puis ça revient). Deuxième : refoulement uniquement par temps de pluie (l'eau pluviale gonfle le volume, ça déborde quand les racines bloquent partiellement). Troisième : bruits étranges dans les canalisations (glouglous, sifflements). Quatrième : évacuation des WC qui se fait par à-coups au lieu d'être fluide. Cinquième : pelouse anormalement verte le long du tracé des canalisations (les racines fertilisent localement). Si plusieurs de ces signes se cumulent, c'est presque certainement des racines.",
      },
      {
        title: "Le diagnostic par caméra : indispensable",
        text: "Avant de traiter, on doit voir. L'inspection caméra consiste à introduire dans la canalisation un câble flexible terminé par une mini-caméra HD avec éclairage LED. On filme l'intérieur en temps réel, vous regardez l'écran en même temps que nous. Les racines apparaissent clairement : faisceaux brunâtres traversant le tuyau, parfois remplissant complètement le diamètre. La caméra mesure aussi la profondeur précise où se trouve le problème, ce qui permet de cibler le traitement et d'éviter de creuser inutilement. Tarif inspection caméra dans le 77 : 150-280 € selon la longueur du réseau à inspecter. Indispensable avant toute intervention lourde.",
      },
      {
        title: "Traitement immédiat : le fraisage rotatif",
        text: "Pour éliminer les racines déjà installées, on utilise un cutter rotatif (aussi appelé fraise ou tête de furet à racines) entraîné par un furet électrique puissant. La fraise tourne à plusieurs centaines de tours/min et coupe net les racines, libérant le passage. C'est efficace immédiatement — l'eau s'écoule à nouveau normalement. Tarif typique pour un fraisage de racines dans le 77 : 250-450 € selon la longueur traitée et le degré d'obstruction. Contrôle caméra après fraisage systématique pour valider que tout est propre.",
      },
      {
        title: "Le problème : ça repousse",
        text: "Le fraisage règle l'urgence, mais ne traite pas la cause. Tant que les racines ont accès à votre canalisation (par le défaut initial qui a permis l'intrusion), elles reviendront. Comptez 1 à 3 ans avant que le problème ne se reproduise si on ne fait rien d'autre. C'est pourquoi le fraisage seul est une solution temporaire — utile en urgence, mais à compléter par un traitement durable selon votre situation.",
      },
      {
        title: "Solutions durables : trois options selon l'état de la canalisation",
        text: "Option 1 — traitement chimique préventif (mousse au sulfate de cuivre) : on injecte une mousse qui se dépose sur les parois et empêche les racines de repousser pendant 3-5 ans. Adapté si la canalisation est globalement saine et que les racines viennent juste de commencer. Coût : 350-600 € par traitement. Option 2 — gainage interne (chemisage) : on insère dans la canalisation existante une chaussette en résine qui durcit et forme une nouvelle paroi étanche à l'intérieur de l'ancienne. Très efficace et durable (30-50 ans), pas besoin de creuser. Coût : 200-400 € le mètre linéaire. Option 3 — remplacement complet : ouverture de la tranchée, dépose de l'ancienne conduite, pose d'une neuve en PVC ou PEHD. Plus lourd mais radical. Coût : 200-500 € le mètre linéaire selon profondeur et accès.",
      },
      {
        title: "Prévention pour les nouvelles plantations",
        text: "Si vous plantez de nouveaux arbres sur votre terrain (très courant en Seine-et-Marne où les terrains sont généreux), respectez ces règles. Distance minimum entre l'arbre et la canalisation : au moins 2 fois la hauteur adulte de l'arbre, idéalement 3 fois pour les essences gourmandes en eau. Préférez les essences peu invasives (bouleau, charme, érable champêtre, cerisier) aux peupliers et saules. Posez une barrière anti-racines en bordure de votre fosse septique ou de votre filtre à sable — c'est une feuille géotextile imprégnée qui bloque la progression des racines. Faites une inspection caméra préventive tous les 5-7 ans si vous avez plusieurs grands arbres — on détecte les intrusions débutantes avant qu'elles ne causent un sinistre.",
      },
      {
        title: "Communes du 77 où on intervient le plus pour des racines",
        text: "Notre expérience terrain : c'est dans les communes pavillonnaires à grands jardins arborés qu'on fait le plus de fraisages. Top du 77 : Ozoir-la-Ferrière (énormément d'arbres dans tous les jardins), Pontault-Combault (mix pavillonnaire dense + verdure), Bois-le-Roi (forêt de Fontainebleau proche), Avon (sous-bois), Champs-sur-Marne (résidences avec espaces verts), Villeparisis (Bois-Fleuri, Acacia), Roissy-en-Brie (zones boisées). Si vous habitez l'un de ces secteurs dans un pavillon de plus de 25 ans, la probabilité d'avoir des racines dans vos canalisations est forte — pensez au diagnostic caméra préventif.",
      },
    ],
  },
  {
    slug: "diagnostic-spanc-77-avant-vente-immobiliere",
    title: "Diagnostic SPANC en Seine-et-Marne avant vente immobilière : tout ce qu'il faut savoir",
    category: "Vente immobilière 77",
    date: "5 mai 2026",
    iso: "2026-05-05",
    excerpt:
      "Vous vendez une maison non raccordée au tout-à-l'égout en 77 ? Le diagnostic SPANC est obligatoire. Voici ce qu'il vérifie, combien il coûte, comment l'obtenir vite, et que faire si la fosse n'est pas conforme.",
    sections: [
      {
        title: "Pourquoi le diagnostic SPANC est obligatoire en 77",
        text: "Le 77 est largement rural — une grande partie des pavillons et fermes ne sont pas raccordés au tout-à-l'égout. Pour ces propriétés, le traitement des eaux usées est individuel (fosse septique, fosse toutes eaux, micro-station). Depuis 2011, la loi impose au vendeur de fournir à l'acquéreur un diagnostic d'assainissement non collectif (souvent appelé 'diagnostic SPANC') valide de moins de 3 ans à la signature. Sans ce diagnostic, la vente peut être annulée ou bloquée. Dans le 77, on est sollicités quasiment chaque semaine par des particuliers en train de vendre qui découvrent au dernier moment qu'ils n'ont pas le diagnostic.",
      },
      {
        title: "Qui réalise le diagnostic SPANC en Seine-et-Marne ?",
        text: "C'est le SPANC (Service Public d'Assainissement Non Collectif) de votre communauté de communes qui réalise le diagnostic, OU une entreprise privée habilitée par votre SPANC. En 77, il y a plusieurs SPANC selon votre secteur — Pays Fertois, Brie des Morin, Gâtinais Val de Loing, Pays Créçois, Plaines et Monts de France, etc. Le diagnostic réalisé par le SPANC public coûte généralement 200-300 €. Par un opérateur privé habilité : 180-350 €. Les deux ont la même valeur légale. L'avantage d'un opérateur privé : disponibilité plus rapide (1-2 semaines vs 1-2 mois pour certains SPANC publics surchargés).",
      },
      {
        title: "Ce que vérifie le diagnostic en détail",
        text: "Le diagnostiqueur va contrôler plusieurs points. Premier : l'existence et la conformité de l'installation (fosse + traitement). Il vérifie le volume de la fosse par rapport à la taille du logement (1 m³ par habitant minimum). Deuxième : l'état de la fosse (étanchéité, présence d'aération, accès à la trappe de visite). Troisième : le système de traitement des effluents (épandage souterrain, filtre à sable, lit filtrant) — son fonctionnement et son état. Quatrième : l'absence de pollution visible (rejet d'eaux non traitées dans un fossé, dans le sol, etc.). Cinquième : la présence de certificats de vidange à jour (les fameux BSMV). Le rapport final classe l'installation : conforme, non-conforme sans risque, ou non-conforme avec risque sanitaire/environnemental.",
      },
      {
        title: "Les trois verdicts possibles et leurs conséquences",
        text: "Verdict 1 — installation conforme : aucune obligation, la vente se fait normalement. Le rapport est valable 3 ans, l'acquéreur en hérite. Verdict 2 — installation non-conforme sans risque : la vente peut se faire, mais l'acquéreur dispose d'1 an après l'acquisition pour mettre aux normes. Souvent l'acquéreur négocie une réduction du prix à hauteur des travaux à prévoir. Verdict 3 — installation non-conforme AVEC risque sanitaire ou environnemental : la mise aux normes doit être faite dans les 12 mois après l'achat. L'acquéreur peut exiger que les travaux soient faits avant la signature, ou négocier une grosse réduction du prix.",
      },
      {
        title: "Combien coûte la mise aux normes en cas de non-conformité",
        text: "Si votre installation est non-conforme et que vous devez la mettre aux normes (avant ou après la vente), voici les fourchettes en Seine-et-Marne. Remplacement complet (fosse + filtre à sable) : 6 000 à 12 000 € TTC selon le terrain. Mise en place d'une micro-station compacte (alternative moderne, gain de place) : 8 000 à 15 000 €. Rénovation partielle (juste l'épandage ou juste la fosse) : 2 500 à 5 000 €. Aides possibles : éco-PTZ jusqu'à 10 000 €, MaPrimeRénov' selon revenus, aides de l'Agence de l'Eau Seine-Normandie. Demandez plusieurs devis (minimum 3) — les écarts entre entreprises peuvent atteindre 30-50% pour la même prestation.",
      },
      {
        title: "Combien de temps pour obtenir le diagnostic ?",
        text: "Par le SPANC public : 1 à 3 mois selon votre secteur du 77 (certains sont très surchargés, notamment au printemps avec le pic des ventes immobilières). Par un opérateur privé habilité : 1 à 3 semaines. Si vous êtes pressé (compromis signé, date butoir), passez par le privé. Le rapport est généralement remis 1-2 semaines après la visite sur place. Notre conseil : faites le diagnostic dès que vous décidez de vendre, pas au moment de signer le compromis — vous gagnez du temps et vous avez le temps de réagir si le diagnostic est défavorable.",
      },
      {
        title: "Astuces pour préparer la visite de diagnostic",
        text: "Quelques choses à faire avant la visite. Premier : rassemblez tous vos certificats de vidange (BSMV) des 10 dernières années — c'est la première chose qu'on vous demande. Deuxième : faites vidanger votre fosse SI elle est pleine (les boues à plus de 50% du volume sont un motif de non-conformité). Troisième : dégagez l'accès à la trappe de visite de la fosse (souvent enterrée sous quelques cm de terre — la pelle est conseillée). Quatrième : repérez l'emplacement de votre épandage si vous savez où il est. Cinquième : si vous avez fait des travaux récents (changement de système), gardez les factures et certificats à portée de main.",
      },
      {
        title: "Notre intervention diagnostic SPANC sur tout le 77",
        text: "On est habilités pour réaliser des diagnostics SPANC sur la quasi-totalité du département. Tarif : 180-350 € selon le SPANC dont vous dépendez et le contenu du rapport demandé. Délai : 1-2 semaines pour la visite, rapport remis sous 1 semaine après. Si l'installation a besoin d'une vidange préalable, on peut faire les deux dans la même journée (gain de temps et de déplacement). Si le diagnostic est défavorable, on peut vous accompagner ensuite pour les devis de mise aux normes — on travaille avec des installateurs certifiés sur tout le département. Dans tous les cas, conseil 100% transparent sur ce qu'il faut faire et ne pas faire — on ne vend rien d'inutile.",
      },
    ],
  },
  {
    slug: "comment-deboucher-un-evier",
    title: "Évier bouché : ce qu'on fait nous-mêmes avant d'appeler",
    category: "Guides pratiques",
    date: "1 mars 2026",
    iso: "2026-03-01",
    excerpt:
      "Bon, soyons honnêtes : dans 8 cas sur 10, un évier bouché c'est juste de la graisse accumulée. Avant de nous appeler — et on sera toujours là si besoin — voici ce qu'on conseille à nos clients de tester d'abord chez eux.",
    sections: [
      {
        title: "Le coup de la casserole d'eau bouillante",
        text: "On commence toujours par le plus bête. Faites chauffer une bonne casserole d'eau — pas juste tiède, vraiment bouillante — et versez-la d'un coup dans l'évier. La graisse qui tapisse le tuyau fond comme du beurre (c'en est souvent, d'ailleurs). Faites-le deux ou trois fois d'affilée. Par contre, si vous avez des tuyaux en PVC — le plastique blanc — allez-y mollo. Au-delà de 60°C, ça peut se déformer et là c'est un autre problème.",
      },
      {
        title: "Bicarbonate et vinaigre : le truc de grand-mère qui marche",
        text: "On nous demande souvent si ça marche vraiment. Honnêtement, oui — pour les bouchons légers. Mettez une bonne poignée de bicarbonate dans la bonde, versez un demi-verre de vinaigre blanc par-dessus. Ça va mousser, c'est normal. Laissez faire pendant une demi-heure et rincez bien à l'eau chaude. C'est pas miraculeux sur un vrai bouchon de graisse bien compact, mais pour de l'entretien courant c'est très bien. Et au moins ça n'abîme rien.",
      },
      {
        title: "La bonne vieille ventouse",
        text: "Il faut un peu de technique quand même. Mettez 5-10 cm d'eau dans le bac, posez la ventouse bien à plat sur la bonde — pas de biais, sinon vous pompez dans le vide — et allez-y franchement, une dizaine de coups. Le truc que les gens oublient : si vous avez un évier double, bouchez l'autre bonde avec un torchon mouillé. Sinon la pression s'échappe de l'autre côté et ça sert à rien.",
      },
      {
        title: "Le furet : pour ceux qui n'ont pas peur de se salir",
        text: "Là on passe aux choses sérieuses. Le furet, c'est un câble métallique avec un crochet au bout. On le glisse dans le tuyau par la bonde ou — mieux — par le siphon qu'on a dévissé. On pousse en tournant doucement jusqu'à sentir que ça bloque. Le crochet accroche le bouchon et le casse. C'est notre outil préféré en intervention rapide, et les petits modèles manuels se trouvent dans n'importe quel magasin de bricolage pour une quinzaine d'euros.",
      },
      {
        title: "Quand c'est le moment de nous appeler",
        text: "Si après tout ça l'eau ne passe toujours pas, le bouchon est probablement plus loin dans la canalisation — parfois à plusieurs mètres. Là il faut du matériel pro, un furet électrique ou de l'hydrocurage. Et surtout — on insiste là-dessus — évitez les produits chimiques type Destop. On voit les dégâts tous les jours : ça attaque les joints, ça fragilise les tuyaux en PVC, et quand on arrive ensuite pour déboucher, on se retrouve avec de la soude caustique dans les projections. Pas top.",
      },
    ],
  },
  {
    slug: "prevenir-bouchons-canalisation",
    title: "Comment on évite 90% des bouchons (c'est pas compliqué)",
    category: "Prévention",
    date: "15 février 2026",
    iso: "2026-02-15",
    excerpt:
      "Après des années à déboucher des canalisations, on peut vous dire un truc : la quasi-totalité des bouchons qu'on traite auraient pu être évités. Quelques habitudes toutes simples et vous ne nous verrez presque plus. C'est mauvais pour notre business, mais bon.",
    sections: [
      {
        title: "La graisse dans l'évier : ennemi public n°1",
        text: "C'est LE truc qu'on voit le plus souvent. Les gens vident leur poêle dans l'évier, l'huile part avec l'eau chaude — logique. Sauf que 50 cm plus loin dans le tuyau, la température chute et la graisse se fige. Petit à petit, couche après couche, ça rétrécit le passage. Au bout de quelques mois, plus rien ne passe. La solution est simple : versez vos graisses dans un pot (un pot de confiture vide, n'importe quoi) et jetez-le à la poubelle.",
      },
      {
        title: "Les petites grilles sur les bondes — investissement à 3 euros",
        text: "On en pose chez nous, et on en recommande à chaque client. Ces petites grilles (ou crépines) retiennent tout ce qui n'a rien à faire dans un tuyau : cheveux dans la douche, bouts de nourriture dans l'évier, et tous les petits trucs qu'on laisse filer sans y penser. Ça coûte trois fois rien, ça s'installe en deux secondes, et ça vous épargne des centaines d'euros de débouchage.",
      },
      {
        title: "Nettoyer le siphon de temps en temps",
        text: "Le siphon, c'est le U sous votre évier. Il est fait pour retenir les odeurs, mais il accumule aussi toutes les saletés. Dévissez-le tous les deux-trois mois (mettez une bassine dessous, évidemment), videz le contenu — oui c'est pas glamour — et rincez-le. Cinq minutes chrono, et ça règle la majorité des petits ralentissements d'évacuation.",
      },
      {
        title: "De l'eau bouillante chaque semaine",
        text: "On en a déjà parlé plus haut, mais c'est tellement simple qu'on le redit : une casserole d'eau bouillante dans chaque évier et lavabo une fois par semaine. Trente secondes, pas de produit, et ça dissout les graisses et résidus de savon avant qu'ils s'accumulent. On fait ça chez nous le dimanche soir, c'est devenu un réflexe.",
      },
      {
        title: "Les cheveux dans la douche — ramassez-les, c'est tout",
        text: "On ne va pas tourner autour du pot : les cheveux sont la cause numéro un des douches bouchées. Et une fois qu'ils forment un bouchon mélangé au savon, c'est vraiment pénible à enlever. Ramassez-les sur la bonde après chaque douche. Oui, c'est pas agréable. Mais c'est nettement moins désagréable qu'une douche qui se transforme en pédiluve.",
      },
      {
        title: "Les WC ne sont pas une poubelle",
        text: "On retrouve de tout dans les canalisations : lingettes (même celles marquées « biodégradables », elles ne le sont pas assez vite), cotons-tiges, fil dentaire, protections hygiéniques... Tout ça finit par former un bouchon, souvent au coude du tuyau, et là c'est la galère. Règle simple : dans les toilettes, il n'y a que le papier toilette qui passe. Le reste, c'est poubelle.",
      },
      {
        title: "Le bac à graisse, pour les pros de la restauration",
        text: "Si vous avez un restaurant, vous le savez déjà — enfin, normalement. Le bac à graisse doit être vidangé tous les un à trois mois selon votre volume d'activité. On intervient régulièrement chez des restaurateurs qui « oublient » et qui se retrouvent avec le réseau complètement engorgé un samedi soir. Autant dire que l'addition est salée.",
      },
      {
        title: "Un curage préventif de temps en temps",
        text: "Tous les deux-trois ans, un bon curage hydrodynamique remet vos canalisations à neuf. C'est un peu comme un détartrage chez le dentiste — pas indispensable tous les mois, mais si vous ne le faites jamais, les problèmes s'accumulent. Et une intervention préventive, ça coûte toujours moins cher qu'un débouchage en urgence un dimanche à 23h.",
      },
    ],
  },
  {
    slug: "inspection-camera-canalisation-guide",
    title: "L'inspection caméra : on vous montre ce qu'il y a dans vos tuyaux",
    category: "Guides pratiques",
    date: "1 février 2026",
    iso: "2026-02-01",
    excerpt:
      "On nous demande souvent à quoi sert le passage caméra. En gros, c'est comme une échographie pour vos canalisations — on voit tout sans rien casser. Et parfois, ce qu'on trouve explique des années de galère.",
    sections: [
      {
        title: "Concrètement, ça se passe comment ?",
        text: "On insère une petite caméra au bout d'un câble souple dans votre canalisation. Sur notre écran, on voit l'intérieur du tuyau en temps réel — les fissures, les racines qui se sont faufilées, les dépôts, les contre-pentes, les effondrements. C'est notre meilleur outil de diagnostic parce qu'on voit exactement où est le problème et ce que c'est. Plus besoin de deviner ou de creuser au hasard. Vous achetez une maison ? Faites-le inspecter. C'est le conseil qu'on donne à tous les acheteurs. Les diagnostics immobiliers classiques ne vérifient jamais l'état des canalisations — et pourtant, des tuyaux en mauvais état, ça peut chiffrer vite. On a vu des cas où le remplacement de la canalisation principale a coûté plus de 8 000 euros. Si on avait fait un passage caméra avant la vente, l'acheteur aurait pu négocier le prix. Ça vaut vraiment le coup de le faire.",
      },
      {
        title: "Quand le même bouchon revient tout le temps",
        text: "Si vous débouchez le même endroit deux ou trois fois par an, c'est pas normal. Il y a forcément quelque chose en dessous : une contre-pente (le tuyau remonte au lieu de descendre, du coup l'eau stagne), des racines d'arbre qui se sont infiltrées dans un joint, ou un tuyau qui s'est écrasé. Le passage caméra nous montre exactement ce qui se passe, et on peut proposer une vraie réparation — pas juste un débouchage de plus qui va durer trois mois.",
      },
      {
        title: "Après des travaux à côté de chez vous",
        text: "On intervient régulièrement chez des gens qui ont eu des travaux de voirie ou une construction de maison voisine, et qui se retrouvent avec des problèmes d'évacuation juste après. Coïncidence ? Rarement. Un engin de chantier qui passe au mauvais endroit, ça suffit pour écraser un tuyau enterré. L'inspection caméra permet de constater le dégât — et de faire jouer l'assurance du voisin si c'est le cas.",
      },
      {
        title: "Combien ça coûte et combien de temps ça prend",
        text: "Comptez entre une demi-heure et une heure sur place. On introduit la caméra par un regard ou un accès existant — pas besoin de casser quoi que ce soit. À la fin, on vous remet un rapport avec les images et ce qu'on recommande comme travaux s'il y en a. Pour le tarif, on établit un devis gratuit. C'est vraiment un investissement qui peut vous faire économiser gros, surtout avant un achat immobilier.",
      },
    ],
  },
  {
    slug: "entretien-fosse-septique",
    title: "Fosse septique : ce qu'il faut savoir pour éviter les mauvaises surprises",
    category: "Entretien",
    date: "15 janvier 2026",
    iso: "2026-01-15",
    excerpt:
      "On s'occupe de fosses septiques toutes les semaines, et le problème c'est toujours le même : les gens attendent trop longtemps avant de vidanger. Résultat — mauvaises odeurs, refoulements, et une facture bien plus lourde que prévu.",
    sections: [
      {
        title: "Le fonctionnement, en version simple",
        text: "Votre fosse septique — ou fosse toutes eaux, c'est le terme officiel — c'est un gros bac enterré qui reçoit toutes les eaux usées de la maison. Les matières solides tombent au fond (les « boues »), les graisses flottent en haut, et l'eau du milieu — plus ou moins clarifiée — part vers l'épandage ou le filtre à sable. Des bactéries font le boulot de décomposition là-dedans. C'est un système qui marche bien... à condition de l'entretenir.",
      },
      {
        title: "La vidange : tous les combien ?",
        text: "La règle classique c'est tous les 3-4 ans pour une famille de quatre personnes avec une fosse de 3000 litres. Mais ça dépend vraiment de votre usage. Si vous êtes nombreux à la maison, que vous recevez souvent, ou que la fosse est un peu petite — ça peut être plus souvent. Le repère qu'on donne à nos clients : quand les boues dépassent la moitié du volume de la fosse, il faut vidanger. Et surtout, ne tentez pas de le faire vous-même — il faut un camion de pompage et un professionnel agréé qui traite les boues correctement.",
      },
      {
        title: "Les signes qui ne trompent pas",
        text: "Odeur d'oeuf pourri dans le jardin, surtout par temps chaud. Toilettes et lavabos qui s'évacuent de plus en plus lentement. Sol mou ou humide autour de la fosse alors qu'il n'a pas plu. Ou le pire : des remontées d'eaux usées dans la douche ou le lavabo. Si vous en êtes là, c'est qu'il fallait vidanger il y a déjà un moment. N'attendez pas — ces situations se dégradent très vite.",
      },
      {
        title: "Ce qu'il ne faut surtout pas faire",
        text: "Le piège classique, c'est les produits ménagers. La javel, les produits anti-bactériens, les déboucheurs chimiques — tout ça tue les bactéries de votre fosse. Sans bactéries, plus de décomposition, et la fosse se remplit à vitesse grand V. On a aussi des clients qui jettent de la peinture ou du white-spirit dans les toilettes en pensant que « ça part dans les égouts ». Avec une fosse septique, non. Ça reste chez vous et ça détruit tout le système. Idem pour les lingettes — même soi-disant biodégradables.",
      },
      {
        title: "Ce que dit la loi",
        text: "Le SPANC — c'est le service communal qui gère l'assainissement non collectif — passe chez vous tous les 4 à 10 ans selon la commune pour vérifier que tout est en ordre. Gardez bien vos certificats de vidange, ils vous les demanderont. Et si vous vendez votre maison, le diagnostic assainissement est obligatoire et doit dater de moins de 3 ans. Si la fosse n'est pas aux normes, l'acheteur peut négocier ou vous demander de faire les travaux avant la vente. Autant être en règle.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
