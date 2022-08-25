export const projectContent = [
    {
        name: '3D STL Previewer',
        tools: ['Javascript', 'React', 'ThreeJS'],
        description: '.STL files are often used for 3D printing, I wanted to build a tool that was simple to use and allowed a preview of any model without requiring any software intallation.  This project is built with React components and uses ThreeJS for the 3D render engine.  There is also a connection to the Thingiverse API, an open-source database of 3D models, for searching for new models.',
        src: 'stl',
        github: 'https://github.com/Scott-Andermann/stl-viewer'
    },
    {
        name: 'Warranty Tracker',
        tools: ['Python', 'Plotly', 'ShopifyAPI'],
        description: 'I built this web-app to track yearly and monthly warranty spending trends.  This simple dashboard and reporting findings throughout the company on a monthly basis, this tool has helped drive a 50% YoY reduction in warranty spending.  This is connected to our Shopify store and collects data daily on all transactions.',
        src: 'warranty',
        github: 'https://github.com/Scott-Andermann/shopify-warranty'
    },
    {
        name: 'Online Review Scraper',
        tools: ['Python', 'NLTK', 'Beautiful Soup'],
        description: 'This web scraper was built using Beautiful Soup 4 to gather reviews from Amazon and Home Depot.  Scraping was performed in compliance with the published robots.txt specification for each site.  After gathering the reviews, there are tools that can be used to analyze and summarize the data including sentiment analysis using NLTK and time based analysis to understand market trends.',
        src: 'sentiment',
        github: 'https://github.com/Scott-Andermann/review-scraper'
    },
// these three will go into minor projects cards
    {
        name: 'Weather App',
        tools: ['Javascript', 'React', 'CSS'],
        description: 'I used this project as a way to explore React components and best practices for API calls.  Using the OpenWeather API, the user is able to find the current weather and 7 day forecast for any zipcode within the US.',
        src: 'weather',
        github: 'https://github.com/Scott-Andermann/weatherApp'
    },
    {
        name: 'ML Flappy Bird',
        tools: ['Pygame', 'Machine Learning'],
        description: 'Built an interactive game with machine learning integration to explore ML/AI tools.',
        src: 'flappy',
        github: 'https://github.com/Scott-Andermann/flappyBird'
    },
    {
        name: 'Cycling power meter',
        tools: ['CircuitPy', 'Circuit Design', '3D printing'],
        description: 'Designed, built, and debugged bluetooth power meter for bicycles.  Integrated gyroscope, accelerometer, and custom Wheatstone bridge for measuring force and calculating power.',
        src: 'powerMeter',
        github: '#'
    }
]