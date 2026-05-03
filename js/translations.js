const translations = {
    fr: {
        'loading-text': 'Chargement...',
        /*
        ------------- Navigation ---------------------
         */

        'nav-home': 'Accueil',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        'nav-about': 'À propos',

        /*
        ------------- Page d'accueil ---------------------
         */

        'hero-subtitle': 'Étudiant en BUT Informatique',
        'projects-title': 'Mes Projets',
        'btn-java': 'Projet Java',
        'btn-vue': 'Projet Vue',
        'btn-godot': 'Projet Godot',
        'btn-symfony': 'Projet Symfony',
        'btn-stage-ecosm' : 'Stage chez ECOSM',
        'btn-docker': `Projet DockerIUT`,
        'apprentissage-title': `Mon Portfolio d'Apprentissage`,
        'btn-apprentissage2': 'Deuxième année',
        'btn-apprentissage3': 'Troisième année',

        /*
        ------------- Page contact ---------------------
         */

        'contact-title': 'Me Contacter',
        'btn-email': 'Email',
        'btn-linkedin': 'LinkedIn',
        'btn-cv': 'Télécharger CV',

        /*
        ------------- Page a propos ---------------------
         */

        'about-title': 'À propos de moi',
        'skills-title': 'Mes Compétences',
        'about-text1': `Je m'appelle Dorian BARNIER, étudiant en troisième année de BUT Informatique à 
        l’IUT Montpellier-Sète, dans la filière Réalisation d'Applications : Conception, Développement et Validation (RACDV).`,
        'about-text2': `Passionné par l’univers des jeux vidéo, je m’intéresse tout particulièrement aux jeux 
        indépendants, souvent créés avec passion et sincérité, ce qui donne naissance à de véritables chefs-d’œuvre. 
        J’ai également une grande curiosité musicale : j’aime explorer tous les styles, découvrir de nouveaux sons et 
        les partager avec mes amis. En parallèle, je pratique le volleyball depuis deux à trois ans, de manière non 
        compétitive mais avec enthousiasme, car j’apprécie l’aspect collectif et dynamique des sports d’équipe.`,
        'about-text3': `J’éprouve un réel plaisir à programmer et à développer des applications, particulièrement 
        depuis un stage marquant que j’ai réalisé chez ECOSM, une entreprise spécialisée dans la conception de logiciels 
        de sous-titrage. Cette expérience m’a permis de découvrir le lien passionnant entre informatique et audiovisuel, 
        un domaine dans lequel j’aimerais aujourd’hui m’investir davantage.`,
        'about-text4': `À l’issue de mon BUT, j’aimerais entrer directement dans le monde professionnel en tant que 
        développeur, idéalement dans le secteur de l’audiovisuel. Je garde cependant l’option de m’engager dans un 
        master sur Paris ouverte, afin de continuer à développer mes compétences et saisir de nouvelles opportunités.`,

        /*
        ------------- Timeline ---------------------
         */

        'timeline-title': 'Mes formations',
        'timeline-bac': 'BAC STI2D',
        'timeline-but1': 'BUT Informatique - 1ère année',
        'timeline-but2': 'BUT Informatique - 2ème année',
        'timeline-but3': 'BUT Informatique - 3ème année',
        'timeline-lycee': 'Lycée Jean Lurçat à Martigues',
        'timeline-iut': 'IUT Montpellier-Sète',

        /*
        ------------- Footer ---------------------
         */

        'footer-text': `Étudiant en troisième année de BUT Informatique à l'IUT Montpellier-Sète`,
        'footer-rights': '© 2025 Dorian BARNIER. Tous droits réservés.',

        /*
        ------------- Page projets ---------------------
         */

        'project-skills': `Compétences demandées`,
        'project-group': `Travail en groupe`,
        'project-agile': `Méthodes agiles`,
        'project-duo': `Travail en binôme`,
        'project-solo': `Travail seul`,
        'photo-editor': `Editeur photo (Photopea)`,

        /*
        ------------- Projet vue ---------------------
         */

        'vue-title': `Projet Vue - Site de critiques musiques`,
        'vue-text1': `Lors de ma troisième année de BUT Informatique, nous avons appris à utiliser le framework Vue.js pour le développement front-end, 
        ainsi que Symfony pour créer une API Platform. Le but de ce projet était donc de mettre en oeuvre nos connaissances acquises via un site de critiques de notre choix.`,
        'vue-text2': `Dans le cadre de ce projet, nous avons développé un site web de critiques musicales, 
        permettant aux utilisateurs de consulter et de publier des critiques sur divers albums et musiques.
        Il est aussi possible de publier un album ou une musique directement via le site.`,
        'vue-text3': `Ce projet m'a permis de renforcer mes compétences en développement web, 
        en particulier dans l'utilisation de frameworks modernes tels que Vue.js et Symfony.`,

        /*
        ------------- Projet java ---------------------
         */

        'java-title': `Projet Java - Jeu de société "Trains"`,
        'java-text1': `Le but de ce projet est de produire une implémentation en Java du jeu de plateau japonais Trains sur
                    une durée d'un mois.`,
        'java-text2': `Le principe du jeu est de construire un réseau ferroviaire en plaçant des rails sur un plateau
                    réprésentant la région autour de Tokyo ou d'Osaka. Chacun à leur tour les joueurs jouent des cartes
                    qui
                    permettent à la fois d'acheter de nouvelles cartes pour améliorer leur deck et de placer des rails
                    ou des
                    villes sur le plateau de jeu pour améliorer leur réseau ferroviaire.`,
        'java-text3': `Ce projet avait pour but de mettre en œuvre les diverses compétences (développement orienté objets,
                    qualité de développement, algorithmes de graphes et interfaces homme-machine) apprises tout au long
                    de l'année
                    dans un projet d'une plus grande envergure que tout nos autres projets de groupes faits
                    précédemment.`,

        /*
        ------------- Projet Godot ---------------------
         */

        'godot-title': `Projet Godot - Jeu vidéo`,
        'godot-text': `Projet personnel ou mon objectif était d'apprendre petit à petit comment utiliser le moteur Godot.`,
        'godot-text2': `Un des principaux projets que j'ai réalisé était de reproduire le menu et un combat de mon jeu préféré, "OMORI".`,
        'godot-text3': `Pour cela, j'ai utilisé une banque à sprites, sur laquelle se trouvait les sprites du jeu, 
        puis j'ai réalisé les scenes/scripts afin de retrouver un résultat ressemblant. Tout en essayant de 
        garder les bonnes manières de développement que j'ai appris en étude.`,
        'godot-text4': `Bien que ce projet ne soit pas fini, je suis très fier de ce que j'ai déjà réussi à réaliser et 
        je n'hésiterais pas à le continuer lorsque je pourrais.`,
        'godot-video': 'Présentation vidéo',

        /*
        ------------- Projet Docker ---------------------
         */

        'docker-title': `Projet DockerIUT - Docker à l'IUT, mais plus facile`,
        'docker-text1': `SAE du premier semestre de troisième année de BUT Informatique, de loin le projet le plus complet que j'ai pu réaliser à l'IUT.`,
        'docker-text2': `Celui-ci consiste en une application web capable d'aider les étudiants dans l'utilisation de Docker, notamment lors de son utilisation au sein
        d'une matière de l'IUT, "Virtualisation", dans laquelle nous avions des TP sur Docker, comment ça fonctionne et comment l'utiliser.
         Cette matière étant plutôt complexe, nous avons décidé, en groupe de 6, de réaliser un moyen de faciliter son accès en tant que SAE, cela était dans l'intérêt des étudiants mais aussi des professeurs.`,
        'docker-text3': `Cette application est réalisée avec les frameworks Symfony et Bootstrap, conteneurisée avec Docker et hébergée grâce au serveur de l'IUT.
        Nous avons également utilisé un serveur Proxmox, celui-ci nous permettais de faire tourner une machine virtuelle pour chaque utilisateur se connectant permettant une totale isolation des DockerEngine.
        Grâce à cela, les étudiants pouvaient réaliser leur TD directement via l'application sans problème de conflit DockerEngine.`,
        'docker-text4': `Un système de fichiers interne permet de stocker les fichiers des étudiants, ce système de fichier pouvant être directement relié à un dépôt Git, cela permettait d'introduire du versionning dans les projets des étudiants, mais aussi de pouvoir faire du suivi de projet plus facilement pour les professeurs.
        Un système de groupes et de partage de fichiers est également présent, permettant aux professeurs de regrouper les informations par groupes et de partager les éléments essentiels des TD.`,
        'docker-text5': `Ce projet a été pour moi une expérience très enrichissante, j'ai pu apprendre énormément de choses, notamment sur Proxmox et son utilisation.`,
        'docker-git': 'Dépôt GitHub',

        /*
        ------------- Apprentissage ---------------------
         */

        'skill1': 'Compétence 1',
        'skill2': 'Compétence 2',
        'skill3': 'Compétence 3',
        'skill4': 'Compétence 4',
        'skill5': 'Compétence 5',
        'skill6': 'Compétence 6',
        'niv1skill3': 'Niveau 1 : Installer et configurer un poste de travail',
        'niv2skill3': 'Niveau 2 : Déployer des services dans une architecture réseau',
        'niv1skill4': `Niveau 1 : Concevoir et mettre en place une base de données à partir d'un cahier des charges client`,
        'niv2skill4': 'Niveau 2 : Optimiser une base de données, intéragir avec une application et mettre en oeuvre la sécurité',
        'niv1skill5': 'Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs',
        'niv2skill5': 'Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
        'niv3skill1': 'Niveau 3 : Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)',
        'niv3skill2': 'Niveau 3 : Analyser et optimiser des applications',
        'niv3skill6': 'Niveau 3 : Manager une équipe informatique',
        'apprentissage-skill1': `Compétence 1 : Réaliser un développement d'application`,
        'apprentissage-skill2': `Compétence 2 : Optimisation des applications`,
        'apprentissage-skill3': `Compétence 3 : Administrer des systèmes informatiques communicants complexes`,
        'apprentissage-skill4': `Compétence 4 : Gérer des données de l’information`,
        'apprentissage-skill5': `Compétence 5 : Conduire un projet`,
        'apprentissage-skill6': `Compétence 6 : Collaborer au sein d’une équipe informatique`,

        /*
        ------------- Compétences ---------------------
         */

        'skill1-ac1lv3': `AC 31.01: Choisir et implémenter les architectures adaptées`,
        'skill1-ac2lv3': `AC 31.02: Faire évoluer une application existante`,
        'skill1-ac3lv3': `AC 31.03: Intégrer des solutions dans un environnement de production`,

        'skill2-ac1lv3': `AC 32.01: Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire, montée en charge...)`,
        'skill2-ac2lv3': `AC 32.02: Profiler, analyser et justifier le comportement d’un code existant`,
        'skill2-ac3lv3': `AC 32.03: Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)`,

        // Compétence 3 lv1
        'skill3-ac1lv1': `AC 1: Identifier les différents composants (matériels et logiciels) d’un système numérique`,
        'skill3-ac2lv1': `AC 2: Utiliser les fonctionnalités de base d’un système multitâches/multiutilisateurs`,
        'skill3-ac3lv1': `AC 3: Installer et configurer un système d’exploitation et des outils de développement`,
        'skill3-ac4lv1': `AC 4: Configurer un poste de travail dans un réseau d’entreprise`,

        // Compétence 3 lv2
        'skill3-ac1lv2': `AC 1: Concevoir et développer des applications communicantes`,
        'skill3-ac2lv2': `AC 2: Configurer un poste de travail dans un réseau d’entreprise`,
        'skill3-ac3lv2': `AC 3: Déployer des services dans une architecture réseau`,

        // Compétence 4 lv1
        'skill4-ac1lv1': `AC 1: Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)`,
        'skill4-ac2lv1': `AC 2: Visualiser des données`,
        'skill4-ac3lv1': `AC 3: Concevoir une base de données relationnelle à partir d’un cahier des charges`,

        // Compétence 4 lv2
        'skill4-ac1lv2': `AC 1: Optimiser les modèles de données de l’entreprise`,
        'skill4-ac2lv2': `AC 2: Assurer la confidentialité des données (intégrité et sécurité)`,
        'skill4-ac3lv2': `AC 3: Organiser la restitution de données à travers la programmation et la visualisation`,
        'skill4-ac4lv2': `AC 4: Manipuler des données hétérogènes`,

        // Compétence 5 lv1
        'skill5-ac1lv1': `AC 1: Appréhender les besoins du client et de l’utilisateur`,
        'skill5-ac2lv1': `AC 2: Mettre en place les outils de gestion de projet`,
        'skill5-ac3lv1': `AC 3: Identifier les acteurs et les différentes phases d’un cycle de développement`,

        // Compétence 5 lv2
        'skill5-ac1lv2': `AC 1: Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information`,
        'skill5-ac2lv2': `AC 2: Formaliser les besoins du client et de l’utilisateur`,
        'skill5-ac3lv2': `AC 3: Identifier les critères de faisabilité d’un projet informatique`,
        'skill5-ac4lv2': `AC 4: Définir et mettre en œuvre une démarche de suivi de projet`,

        'skill6-ac1lv3': `AC 36.01: Organiser et partager une veille technologique et informationnelle`,
        'skill6-ac2lv3': `AC 36.02: Identifier les enjeux de l’économie de l’innovation numérique`,
        'skill6-ac3lv3': `AC 36.03: Guider la conduite du changement informatique au sein d’une organisation`,
        'skill6-ac4lv3': `AC 36.04: Accompagner le management de projet informatique`,

        /*
        ------------- Stage ECOSM ---------------------
         */

        'ecosm-title': `Stage chez ECOSM - Développement Web/Développement Logiciel`,
        'ecosm-text1': `Lors de ma deuxième année en BUT Informatique à l'IUT Montpellier-Sète, un stage de 10 à 12 semaines m'a été imposé.
        Les contraintes de temps étant très restreintes, je n'ai pu avoir qu'un stage de 8 semaines au sein de l'entreprise ECOSM, 
        une entreprise spécialisée dans la conception de logiciels pour les médias.`,
        'ecosm-text2': `Ce stage s’inscrit donc dans un projet de développement consacré à un logiciel dédié à 
        l’édition de sous-titres ainsi qu’un site web destiné à la gestion de médias. Ces projets m’ont permis 
        d’explorer des défis techniques liés à l’optimisation, l’ergonomie, mais notamment l'expérience du point de vue 
        de l’utilisateur. Tout cela m’a permis de consolider mes compétences en développement informatique, mais aussi 
        dans ma logique et la façon dont j’organise mes chemins de pensées.`,
        'ecosm-text3': `Bien que la durée de ce stage fut courte, ce fut une expérience plus que bénéfique, 
        j'ai pu explorer de multiples compétences, accompagné de personnes très bienveillantes et très pédagogue, avec des projets vraiment intéressants.`,
        'ecosm-solo': 'Travail seul supervisé',
        'ecosm-report': 'Rapport de stage',

        /*
        ------------- Compétence 3 ---------------------
         */
        'level-still': `Niveau : En cours d'acquisition`,
        'level-yes': `Niveau : Acquis`,
        'level-superyes': `Niveau : Maitrisée`,
        'skill3-text1': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence.`,
        'skill3-text2': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence, néanmoins j'utilise GitLab et GitHub sur tout mes projets.`,
        'skill3-text3': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence, 
        j'ai appris en debut de première année à installer un poste Linux, puis en deuxième année un deux machines virtuelles Windows et Linux.`,
        'skill3-text4': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence. `,
        'skill1-text1': `Je n'ai pas encore eu l'occasion d'intégrer moi-même des solutions dans un environnement de production,
         néanmoins j'ai pu réaliser des projets qui ont pu être intégrés par la suite en production.
          Je suis actuellement en stage, et j'espère pouvoir avoir l'occasion d'acquérir cette compétence.`,
        'skill2-text1': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence, car j'ai dû le retirer afin faire de la place pour d'autres projets.
        Il nous a été donné en projet en tant que projet universitaire, une application complexe totalement décousue, que nous devions analyser et comprendre pour l'améliorer par la suite.
        J'ai également pu mettre en pratique cette compétence lors de mon stage de deuxième année ainsi qu'actuellement en troisième année.`,
        'skill2-text2': `J'ai pu mettre en pratique cette compétence dans quasiment tous mes projets de développement.
        Mon stage chez ECOSM n'est qu'un exemple de trace dans lequel j'ai pu utiliser une bibliothèque. Lors de ce stage, j'ai pu utiliser la bibliothèque FFMPEG,
        c'est une bibliothèque très connue, utilisée dans de très nombreuses applications comme par exemple, "OBS Studio". Celle-ci permet de manipuler des images, vidéos, ou encore de l'audio.
        Elle m'a permis de récupérer tous les changements de plans d'une vidéo X, afin de pouvoir les stocker dans des fichiers binaires.`,
        'skill6-text1': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence, néanmoins j'ai pu participer à une veille informationnelle
        à l'issue du cours de "PPP", nous devions réaliser des posts sur un forum concernant des sujets d'actualité liés à l'informatique.`,
        'skill6-text2': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence, néanmoins j'ai réalisé, au cours de ma troisième année de BUT Informatique, un séminaire
        de création d'entreprise, dans lequel nous devions réaliser tout le nécessaire pour créer une entreprise à partir d'un produit que nous devions inventer.
        Il était donc nécessaire d'identifier les enjeux de l'économie et de l'innovation numérique. Notre équipe a été classée cinquième parmi 19 équipes.`,
        'skill6-text3': `Je n'ai pas de projets sur ce portfolio pour illustrer cette compétence mais je suis actuellement en stage, et j'ai la chance de pouvoir pratiquer cette compétence.
        J'aide actuellement l'entreprise dans laquelle je travaille à changer et faire évoluer ses technologies.`,

        /*
        ------------- Projet Symfony ---------------------
         */

        'symfony-title': `Projet Symfony - MyAvatar`,
        'symfony-text1': `Lors du premier semestre de ma troisième année de BUT Informatique à l'IUT Montpellier-Sète, 
        il nous a été donné en guise de SAE, la reproduction d'une application web complexe déjà existante nommée "Gravatar".`,
        'symfony-text2': `L'objectif était donc de réaliser une application web, tournant autour de la photo de profil d'un utilisateur en l'associant à son adresse email,
        comme le ferait le site web "Gravatar". Cela à pour but de pouvoir réaliser une simple requête au site pour récuperer la photo de profil correspondante.`,

    },
    en: {
        'loading-text': 'Loading...',
        /*
        ------------- Navigation ---------------------
         */

        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'nav-about': 'About',

        /*
        ------------- Page d'accueil ---------------------
         */

        'hero-subtitle': 'Student in Computer Science BUT',
        'projects-title': 'My Projects',
        'btn-java': 'Java Project',
        'btn-vue': 'Vue Project',
        'btn-godot': 'Godot Project',
        'btn-symfony': 'Symfony Project',
        'btn-stage-ecosm' : 'Internship at ECOSM',
        'btn-docker': `DockerIUT Project`,
        'apprentissage-title': `My Learning Portfolio`,
        'btn-apprentissage2': 'Second year',
        'btn-apprentissage3': 'Third year',

        /*
        ------------- Page contact ---------------------
         */

        'contact-title': 'Contact Me',
        'btn-email': 'Email',
        'btn-linkedin': 'LinkedIn',
        'btn-cv': 'Download CV',

        /*
        ------------- Page a propos ---------------------
         */

        'about-title': 'About Me',
        'skills-title': 'My Skills',
        'about-text1': `My name is Dorian BARNIER, a third-year student at IUT Montpellier-Sète’s BUT Computer Science 
        department, in the Application Design, Development and Validation (RACDV) sector.`,
        'about-text2': `Passionate about the world of video games, I am particularly interested in independent games, 
        often created with passion and sincerity, which gives rise to real masterpieces. I also have a great musical 
        curiosity: I like to explore all styles, discover new sounds and share them with my friends. At the same time, 
        I have been playing volleyball for two to three years, not competitively but enthusiastically, because I appreciate 
        the collective and dynamic aspect of team sports.`,
        'about-text3': `I really enjoy programming and developing applications, particularly 
        since a remarkable internship that I did at ECOSM, a company specialized in software design 
        subtitling. This experience allowed me to discover the exciting link between computer and audiovisual, 
        an area in which I would like to invest more today.`,
        'about-text4': `At the end of my BUT, I would like to enter directly into the professional world as 
        developer, ideally in the audiovisual sector. However, I retain the option of engaging in a 
        master in Paris open, in order to continue developing my skills and seize new opportunities.`,

        /*
        ------------- Timeline ---------------------
         */

        'timeline-title': 'My Courses',
        'timeline-bac': 'STI2D High School Diploma',
        'timeline-but1': 'Computer Science BUT - 1st year',
        'timeline-but2': 'Computer Science BUT - 2nd year',
        'timeline-but3': 'Computer Science BUT - 3rd year',
        'timeline-lycee': 'Jean Lurçat High School in Martigues',
        'timeline-iut': 'IUT Montpellier-Sète',

        /*
        ------------- Footer ---------------------
         */

        'footer-text': `Third year student of Computer Science BUT at the IUT Montpellier-Sète`,
        'footer-rights': '© 2025 Dorian BARNIER. All rights reserved.',

        /*
        ------------- Page projets ---------------------
         */

        'project-skills': `Skills required`,
        'project-group': `Group work`,
        'project-agile': `Agile methods`,
        'project-duo': `Work in pairs`,
        'project-solo': `Work alone`,
        'photo-editor': `Photo editor (Photopea)`,

        /*
        ------------- Projet Vue ---------------------
         */

        'vue-title': `Vue Project - Music Review Website`,
        'vue-text1': `During my third year of BUT Computer Science, we learned to use the Vue.js framework for front-end development,
        as well as Symfony to create an API Platform. The goal of this project was therefore to implement our acquired knowledge via a review site of our choice.`,
        'vue-text2': `As part of this project, we developed a music review website,
        allowing users to consult and publish reviews on various albums and music.
        It is also possible to publish an album or music directly via the website.`,
        'vue-text3': `This project allowed me to strengthen my web development skills,
        particularly in the use of modern frameworks such as Vue.js and Symfony.`,

        /*
        ------------- Projet Java ---------------------
         */

        'java-title': `Java Project - Board game "Trains"`,
        'java-text1': `The goal of this project is to produce a Java implementation of the Japanese board game Trains on
                    a period of one month.`,
        'java-text2': `The principle of the game is to build a railway network by placing rails on a platform
                    representing the area around Tokyo or Osaka. Players play cards in turn
                    who
                    Allow both to buy new cards to improve their deck and place rails
                    or the
                    cities on the game board to improve their rail network.`,
        'java-text3': `This project aimed to implement the various skills (object-oriented development,
                    development quality, graph algorithms and human-machine interfaces) learned throughout
                    of the year
                    in a larger project than any of our other group projects made
                    previously.`,

        /*
        ------------- Projet Godot ---------------------
         */

        'godot-title': `Godot Project - Video Game`,
        'godot-text': `Personal project where my goal was to learn little by little how to use the Godot engine.`,
        'godot-text2': `One of the main projects I carried out was to reproduce the menu and a fight from my favorite game, "OMORI".`,
        'godot-text3': `To do this, I used a sprite bank, which contained the game's sprites,
        then I created the scenes/scripts to achieve a similar result. While trying to
        maintain the good development practices that I learned in my studies.`,
        'godot-text4': `Although this project is not finished, I am very proud of what I have already managed to achieve and
        I will not hesitate to continue it when I can.`,
        'godot-video': 'Video presentation',

        /*
        ------------- Projet Docker ---------------------
         */

        'docker-title': `DockerIUT Project - Docker at IUT, but easier`,
        'docker-text1': `SAE of the first semester of the third year of BUT Computer Science, by far the most complete project I have been able to carry out at IUT.`,
        'docker-text2': `It consists of a web application capable of helping students in the use of Docker, especially during its use within
        a course of the IUT, "Virtualization", in which we had TPs on Docker, how it works and how to use it.
        This course being rather complex, we decided, in a group of 6, to create a way to facilitate its access as a SAE, this was in the interest of students but also teachers.`,
        'docker-text3': `This application is made with the Symfony and Bootstrap frameworks, containerized with Docker and hosted thanks to the IUT server.
        We also used a Proxmox server, which allowed us to run a virtual machine for each connecting user allowing total isolation of the DockerEngine.
        Thanks to this, students could do their TD directly via the application without any DockerEngine conflict.`,
        'docker-text4': `An internal file system allows to store students' files, this file system can be directly linked to a Git repository, this allowed to introduce versioning in students' projects, but also to be able to do project tracking more easily for teachers.
        A system of groups and file sharing is also present, allowing teachers to group information by groups and share the essential elements of the TDs.`,
        'docker-text5': `This project was a very enriching experience for me, I was able to learn a lot of things, especially about Proxmox and its use.`,
        'docker-git': 'GitHub repository',

        /*
        ------------- Apprentissage ---------------------
         */

        'skill1': 'Skill 1',
        'skill2': 'Skill 2',
        'skill3': 'Skill 3',
        'skill4': 'Skill 4',
        'skill5': 'Skill 5',
        'skill6': 'Skill 6',
        'niv1skill3': 'Level 1 : Install and configure a workstation',
        'niv2skill3': 'Level 2 : Deploy services in a network architecture',
        'niv1skill4': `Level 1 : Design and implement a database based on a client specification`,
        'niv2skill4': 'Level 2 : Optimize a database, interact with an application and implement security',
        'niv1skill5': 'Level 1 : Identify business needs of customers and users',
        'niv2skill5': 'Level 2 : Apply a project monitoring approach based on the business needs of clients and users',
        'niv3skill1': 'Level 3 : Adapt applications on a set of supports (embedded, web, mobile, IoT...)',
        'niv3skill2': 'Level 3 : Analyze and optimize applications',
        'niv3skill6': 'Level 3 : Manage an IT team',
        'apprentissage-skill1': 'Skill 1 : Develop an application',
        'apprentissage-skill2': `Skill 2 : Optimizing Applications`,
        'apprentissage-skill3': `Skill 3 : Administer complex communicating computer systems`,
        'apprentissage-skill4': `Skill 4 : Manage information data`,
        'apprentissage-skill5': `Skill 5 : Lead a project`,
        'apprentissage-skill6': `Skill 6 : Collaborate as an IT team`,

        /*
        ------------- Compétences ---------------------
         */

        'skill1-ac1lv3': `AC 31.01: Choose and implement appropriate architectures`,
        'skill1-ac2lv3': `AC 31.02: Evolve an existing application`,
        'skill1-ac3lv3': `AC 31.03: Integrate solutions in a production environment`,

        'skill2-ac1lv3': `AC 32.01: Anticipate the results of various metrics (execution time, memory usage, load increase...)`,
        'skill2-ac2lv3': `AC 32.02: Profile, analyze and justify the behavior of existing code`,
        'skill2-ac3lv3': `AC 32.03: Choose and use libraries and methods dedicated to the application domain (imaging, immersion, artificial intelligence, video games, parallelism, formal calculation...)`,

        // Compétence 3 lv1
        'skill3-ac1lv1': `AC 1: Identify the different components (hardware and software) of a digital system`,
        'skill3-ac2lv1': `AC 2: Use the basic features of a multitasking/multi-user system`,
        'skill3-ac3lv1': `AC 3: Install and configure an operating system and development tools`,
        'skill3-ac4lv1': `AC 4: Configuring a workstation in an enterprise network`,

        // Compétence 3 lv2
        'skill3-ac1lv2': `AC 1: Design and develop communicating applications`,
        'skill3-ac2lv2': `AC 2: Set up a workstation in an enterprise network`,
        'skill3-ac3lv2': `AC 3: Deploying services in a network architecture`,

        // Compétence 4 lv1
        'skill4-ac1lv1': `AC 1: Update and query a relational database (in direct queries or through an application)`,
        'skill4-ac2lv1': `AC 2: Viewing data`,
        'skill4-ac3lv1': `AC 3: Designing a relational database from a specification`,

        // Compétence 4 lv2
        'skill4-ac1lv2': `AC 1: Optimizing business data models`,
        'skill4-ac2lv2': `AC 2: Ensure data confidentiality (integrity and security)`,
        'skill4-ac3lv2': `AC 3: Organize data retrieval through programming and visualization`,
        'skill4-ac4lv2': `AC 4: Handling heterogeneous data`,

        // Compétence 5 lv1
        'skill5-ac1lv1': `AC 1: Understanding the needs of the client and user`,
        'skill5-ac2lv1': `AC 2: Implement project management tools`,
        'skill5-ac3lv1': `AC 3: Identify the actors and different phases of a development cycle`,

        // Compétence 5 lv2
        'skill5-ac1lv2': `AC 1: Identify processes in an organization to improve information systems`,
        'skill5-ac2lv2': `AC 2: Formalizing the needs of the client and user`,
        'skill5-ac3lv2': `AC 3: Identify the criteria for feasibility of an IT project`,
        'skill5-ac4lv2': `AC 4: Define and implement a project monitoring approach`,

        'skill6-ac1lv3': `AC 36.01: Organize and share technological and informational monitoring`,
        'skill6-ac2lv3': `AC 36.02: Identify the challenges of the digital innovation economy`,
        'skill6-ac3lv3': `AC 36.03: Guide the conduct of IT change within an organization`,
        'skill6-ac4lv3': `AC 36.04: Support IT project management`,

        /*
        ------------- Stage ECOSM ---------------------
         */

        'ecosm-title': `Internship at ECOSM - Web Development/Software Development`,
        'ecosm-text1': `During my second year in BUT Informatique at the IUT Montpellier-Sète, an internship of 10 to 12 weeks was imposed on me.
        The time constraints being very limited, I was only able to have an 8-week internship at ECOSM, 
        a company specialising in the design of media software.`,
        'ecosm-text2': `This internship is therefore part of a development project dedicated to a software dedicated 
        to the editing of subtitles and a website for media management. These projects allowed me to explore technical 
        challenges related to optimization, ergonomics but especially the experience from the user’s point of view. All 
        this allowed me to consolidate my skills in computer development, but also in my logic and the way I organize my paths of thought.`,
        'ecosm-text3': `Although the duration of this internship was short, it was a more than beneficial experience, 
        I was able to explore multiple skills, accompanied by very caring people and very pedagogue, with really interesting projects.`,
        'ecosm-solo': 'Work alone supervised',
        'ecosm-report': 'Internship report',

        /*
        ------------- Compétence 3 ---------------------
         */
        'level-still': `Level : Under Acquisition`,
        'level-yes': `Level : Acquired`,
        'level-superyes': `Level : Mastered`,
        'skill3-text1': `I do not have projects on this portfolio to illustrate this skill.`,
        'skill3-text2': `I don’t have projects on this portfolio to illustrate this skill, nevertheless I use GitLab and GitHub on all my projects.`,
        'skill3-text3': `I do not have projects on this portfolio to illustrate this skill, 
        I learned in the first year to install a Linux machine, then in the second year a two virtual machines Windows and Linux.`,
        'skill1-text1': `I have not yet had the opportunity to integrate solutions myself in a production environment,
            however I have been able to carry out projects that have been able to be integrated later in production.
            I am currently in an internship, and I hope to have the opportunity to acquire this skill.`,
        'skill2-text1': `I do not have projects on this portfolio to illustrate this skill, because I had to remove it to make room for other projects.
        We were given a project as a university project, a complex application totally disjointed, which we had to analyze and understand to improve it later.
        I was also able to put this skill into practice during my second-year internship and currently in the third year.`,
        'skill2-text2': `I was able to put this skill into practice in almost all my development projects.
        My internship at ECOSM is just an example of a trace in which I was able to use a library. During this internship, I was able to use the FFMPEG library,
        it is a very well-known library, used in very many applications such as, for example, "OBS Studio". It allows you to manipulate images, videos, or even audio.
        It allowed me to retrieve all the scene changes of a video X, in order to be able to store them in binary files.`,
        'skill6-text1': `I do not have projects on this portfolio to illustrate this skill, nevertheless I was able to participate in an informational monitoring
        at the end of the "PPP" course, we had to make posts on a forum about current topics related to computer science.`,
        'skill6-text2': `I do not have projects on this portfolio to illustrate this skill, nevertheless I carried out, during my third year of BUT Computer Science, a seminar
        on business creation, in which we had to do everything necessary to create a company from a product that we had to invent.
        It was therefore necessary to identify the challenges of the economy and digital innovation. Our team was ranked fifth among 19 teams.`,
        'skill6-text3': `I do not have projects on this portfolio to illustrate this skill but I am currently in an internship, and I am lucky to be able to practice this skill.
        I am currently helping the company I work for to change and evolve its technologies.`,

        /*
        ------------- Projet Symfony ---------------------
         */

        'symfony-title': `Symfony Project - MyAvatar`,
        'symfony-text1': `During the first semester of my third year of BUT Computer Science at IUT Montpellier-Sète,
        we were given as a SAE, the reproduction of a complex web application already existing called "Gravatar".`,
        'symfony-text2': `The objective was therefore to create a web application, revolving around the profile picture of a user by associating it with his email address,
        like the website "Gravatar" would do. This is to be able to make a simple request to the site to retrieve the corresponding profile picture.`,
    }
};

// Fonctions pour gérer les cookies
function creerCookie(nom, contenu, jours = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = nom + "=" + contenu + expires + "; path=/";
}

function recupererCookie(nom) {
    const nomRecherche = nom + "=";
    const cookiesList = document.cookie.split(';');

    for (let i = 0; i < cookiesList.length; i++) {
        let cookie = cookiesList[i].trim();
        if (cookie.indexOf(nomRecherche) === 0) {
            return cookie.substring(nomRecherche.length);
        }
    }
    return null;
}

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLanguage = lang;

    // Appliquer les traductions
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            if (key === "btn-cv") {
                element.innerHTML = `<i class="fas fa-file-alt"></i> ` + translations[lang][key];
            }
        }
    });

    // Mettre à jour les boutons de langue
    updateLanguageButtons();

    // Sauvegarder la langue dans un cookie (persistant entre les pages)
    creerCookie('selectedLanguage', lang);

    // Optionnel : garder aussi localStorage pour la compatibilité
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('selectedLanguage', lang);
    }
}

// Fonction pour mettre à jour l'apparence des boutons de langue
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[onclick="changeLanguage('${currentLanguage}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Fonction pour récupérer la langue sauvegardée
function getStoredLanguage() {
    // Priorité au cookie (fonctionne entre les pages)
    let savedLang = recupererCookie('selectedLanguage');

    // Si pas de cookie, essayer localStorage
    if (!savedLang && typeof(Storage) !== "undefined") {
        savedLang = localStorage.getItem('selectedLanguage');
    }

    // Si aucune sauvegarde, utiliser la langue par défaut
    return savedLang || 'fr';
}

// Initialiser la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = getStoredLanguage();
    changeLanguage(savedLanguage);
});

// Fonction utilitaire pour initialiser les traductions sur une nouvelle page
function initTranslations() {
    const savedLanguage = getStoredLanguage();
    changeLanguage(savedLanguage);
}