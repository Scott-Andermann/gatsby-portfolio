export const projectInfo = [
  {
    name: "IoT Chemical Sprayer",
    tools: ["TypeScript", "NextJS", "Expo"],
    description:
      "Using the Expo framework for the mobile app and a web portal built with NextJS, this innovative sprayer will be used to help professionals drive higher quality, lower costs, and a better understanding of their business.  Supabase is used to store and manage data for the app and web portal.",
    shortDescription:
      "IoT enabled sprayer and app for accurate real time flow measurement and location tracking with accompanying apps built with Expo and NextJS",
    src: "sprayer",
  },
  {
    name: "Warranty Tracker",
    tools: ["React", "Python", "mySQL"],
    description:
      "I built this web-app to track yearly and monthly warranty spending trends.  This simple dashboard and reporting findings throughout the company on a monthly basis, this tool has helped drive a 50% YoY reduction in warranty spending.  This is connected to our Shopify store and collects data daily on all transactions.  After transaction data is gathered, it is stored on AWS RDS for various querying activities.",
    shortDescription:
      "I built this web-app to track yearly and monthly spending trends.  This tool as helped drive a 50% YoY reduction in warranty spending by focusing efforts on high value projects.",
    src: "warranty",
    github: "https://github.com/Scott-Andermann/shopify-warranty-mysql",
  },
  {
    name: "Online Review Scraper",
    tools: ["Python", "NLTK", "Javascript"],
    description:
      "This web scraper was built using Beautiful Soup 4 to gather reviews from Amazon.  Scraping was performed in compliance with the published robots.txt specification for each site.  After gathering the reviews, there are tools that can be used to analyze and summarize the data including sentiment analysis using NLTK and time based analysis to understand market trends.  I have recently converted this to a web-app so that it is easier to use.",
    shortDescription:
      "This web scraper was built using Beautiful Soup 4 to gather and analyze reviews from Amazon.  Included are tools to analyze rating trends and review sentiment.",
    src: "sentiment",
    github: "https://github.com/Scott-Andermann/review-scraper",
  },
  {
    name: "Guess That Score",
    tools: ["NodeJS", "React", "CSS"],
    description:
      "This site acts as a automatic moderator for a game my friends and I play during college football season.  The goal is guess the correct score of the game only knowing who is playing and how much time is remaining in the game, lowest score wins.  Scores are updated every 5 minutes from an external source and a single game is served simultaneously to all users via a websocket connection.",
    shortDescription:
      "This site moderates a game my friends and I play during college football season.  The goal is to correctly guess the score of the game only knowing who is playing, lowest score wins.",
    src: "guess",
    github: "https://github.com/Scott-Andermann/guess-that-score",
  },

  // these three will go into minor projects cards
  // {
  //     name: '3D STL Previewer',
  //     tools: ['Javascript', 'React', 'ThreeJS'],
  //     description: '.STL files are often used for 3D printing, I wanted to build a tool that was simple to use and allowed a preview of any model without requiring any software intallation.  This project is built with React components and uses ThreeJS for the 3D render engine.  There is also a connection to the Thingiverse API, an open-source database of 3D models, for searching for new models.',
  //     shortDescription: 'This tool is used for quickly previewing files used for 3D printing.  A browser based previewer lets users preview files without installing software and on mobile devices.',
  //     src: 'stl',
  //     github: 'https://github.com/Scott-Andermann/stl-viewer',
  //     link: 'https://look-stl.netlify.app'
  // },
  // {
  //     name: 'Weather App',
  //     tools: ['Javascript', 'React', 'CSS'],
  //     description: 'I used this project as a way to explore React components and best practices for API calls.  Using the OpenWeather API, the user is able to find the current weather and 7 day forecast for any zipcode within the US.',
  //     src: 'weather',
  //     github: 'https://github.com/Scott-Andermann/weatherApp'
  // },
  // {
  //     name: 'ML Flappy Bird',
  //     tools: ['Pygame', 'Machine Learning'],
  //     description: 'Built an interactive game with machine learning integration to explore ML/AI tools.',
  //     src: 'flappy',
  //     github: 'https://github.com/Scott-Andermann/flappyBird'
  // },
  // {
  //     name: 'Cycling power meter',
  //     tools: ['CircuitPy', 'Circuit Design', '3D printing'],
  //     description: 'Designed, built, and debugged bluetooth power meter for bicycles.  Integrated gyroscope, accelerometer, and custom Wheatstone bridge for measuring force and calculating power.',
  //     src: 'powerMeter',
  //     github: '#'
  // }
];
