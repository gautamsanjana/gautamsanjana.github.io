// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-have-been-awarded-the-logic-s-liberatory-tech-fellowship-by-incite-institute-columbia-university",
          title: 'I have been awarded the Logic(s) Liberatory Tech Fellowship by INCITE Institute, Columbia...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-logic-s-liberatory-tech-fellowship-by-incite-institute-columbia-university",
          title: 'I have been awarded the Logic(s) Liberatory Tech Fellowship by INCITE institute, Columbia...',
          description: "",
          section: "News",},{id: "news-my-workshop-papers-got-in-at-genaichi-and-hcxai-chi-2024",
          title: 'My workshop papers got in at GenAICHI and HCXAI (CHI 2024)',
          description: "",
          section: "News",},{id: "news-our-facct-paper-was-accepted-to-be-presented-in-rio-this-year-️",
          title: 'Our FAccT paper was accepted to be presented in Rio this year 🌍✈️...',
          description: "",
          section: "News",},{id: "news-my-paper-for-the-hci-nlp-workshop-at-naacl-2024-was-accepted",
          title: 'My paper for the HCI+NLP Workshop at NAACL 2024 was accepted!',
          description: "",
          section: "News",},{id: "news-attended-chi-2024-and-presented-my-works-at-genaichi-and-hcxai",
          title: 'Attended CHI 2024 and presented my works at GenAICHI and HCXAI',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-dissertation-yay",
          title: 'I successfully defended my PhD dissertation (Yay!) 🎉',
          description: "",
          section: "News",},{id: "news-i-attended-my-commencement-ceremony",
          title: 'I attended my commencement ceremony 🎓🥂',
          description: "",
          section: "News",},{id: "news-my-paper-got-accepted-at-aies-2024",
          title: 'My paper got accepted at AIES 2024 📝🎉',
          description: "",
          section: "News",},{id: "news-my-thesis-poster-got-accepted-at-cscw-2024",
          title: 'My thesis poster got accepted at CSCW 2024 📌✨',
          description: "",
          section: "News",},{id: "news-i-started-as-the-bullard-research-fellow-at-the-university-of-texas-at-austin-excited-to-work-with-dr-matthew-lease",
          title: 'I started as the Bullard Research Fellow at the University of Texas at...',
          description: "",
          section: "News",},{id: "news-presenting-my-work-on-harms-in-ai-generated-images-at-aies-2024-️-also-served-as-a-student-mentor",
          title: 'Presenting my work on harms in AI-generated images at AIES 2024 🖼️ Also...',
          description: "",
          section: "News",},{id: "news-i-will-be-in-costa-rica-talking-about-my-dissertation-work-on-adaptive-learning-at-cscw-2024-️",
          title: 'I will be in Costa Rica, talking about my dissertation work on adaptive...',
          description: "",
          section: "News",},{id: "news-thrilled-to-share-my-recent-work-with-a-talk-at-cosmic-horizon-conference-in-austin-i-will-be-presenting-my-poster-as-well-at-the-cosmic-horizons-conference-2025",
          title: 'Thrilled to share my recent work with a talk at Cosmic Horizon Conference...',
          description: "",
          section: "News",},{id: "projects-youtube-user-data-modelling",
          title: 'YouTube User Data Modelling',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-ai-for-improving-scientific-discovery-analysis-and-interpretation",
          title: 'AI for Improving Scientific Discovery, Analysis and Interpretation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-studying-annotator-bias",
          title: 'Studying Annotator Bias',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-harms-in-text-to-image-generation-with-focus-on-global-south",
          title: 'Harms in Text-to-Image Generation with focus on Global South',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-nationality-bias-detection-in-text-generation",
          title: 'Nationality Bias Detection in Text Generation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-understanding-the-workings-of-911-centres-during-covid-19",
          title: 'Understanding the Workings of 911 Centres during Covid-19',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-using-twitter-for-crisis-response",
          title: 'Using Twitter for Crisis Response',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-what-s-political-on-tiktok",
          title: 'What’s Political on TikTok?',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-applying-social-constructivist-theories-in-adaptive-learning",
          title: 'Applying Social Constructivist Theories in Adaptive Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
