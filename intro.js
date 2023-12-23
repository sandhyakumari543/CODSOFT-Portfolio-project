const projects = [
    {
      id: 1,
      title: 'JavaScript Calculator',
      description: 'The Calculator project is a web-based application built with HTML, CSS, and JavaScript. It provides a user-friendly interface for performing basic arithmetic operations, including +, -, *, /, AC.',
      technologies: ['Html', 'Css', 'JavaScript'],
      demoLink: 'https://sandhyakumari543.github.io/Javascript_Calculator/',
      codeLink: 'https://github.com/sandhyakumari543/Javascript_Calculator',
    },
    {
        id: 2,
        title: 'Random Quote Machine',
        description: 'The Random Quote Machine is a dynamic web application designed to provide users with an interactive and engaging experience by generating random quotes and changing the background with each click of a button. ',
        technologies: ['React', 'JavaScript', 'Html', 'CSS'],
        demoLink: ' https://sandhyakumari543.github.io/fcc-quote/',
        codeLink: 'https://github.com/sandhyakumari543/fcc-quote',
      },
      {
        id: 3,
        title: 'TextUtiles',
        description: 'TextUtils is a word counter and a charcter counting utility which can be used to manipulate your text in the way you want  You can remove extra spaces, copy the manipulated text as well as convert your text form Uppercase to Lowercase and Lowercase to Uppercase',
        technologies: ['React', 'JavaScript', 'Responsive Design'],
        demoLink: 'https://sandhyakumari543.github.io/textproject/',
        codeLink: 'https://github.com/sandhyakumari543/textproject',
      },
      {
        id: 4,
        title: 'Drum Machine',
        description: 'A simple drum machine web application built using HTML, CSS, and JavaScript. This project allows users to play drum sounds by clicking on interactive buttons.In this project there are Interactive Buttons, Responsive Design,Sound Feedback',
        technologies: ['Html', 'Css', 'JavaScript', 'Responsive Design'],
        demoLink: 'https://sandhyakumari543.github.io/Drum-Machine_js/',
        codeLink: 'https://github.com/sandhyakumari543/Drum-Machine_js',
      },
      {
        id: 5,
        title: '25+5 Clock',
        description: 'The 25+5 Clock is a web-based Pomodoro timer, allowing users to focus on tasks with timed intervals. There are some features like Countdown Timer , Pause and Reset , Visual and Audio Alerts and User-Friendly Interface',
        technologies: ['React', 'JavaScript', 'Responsive Design'],
        demoLink: ' https://sandhyakumari543.github.io/25-5-Clock/',
        codeLink: 'https://github.com/sandhyakumari543/25-5-Clock',
      },
      {
        id: 6,
        title: 'Toll Calculator',
        description: 'The TollCalculator React component allows users to calculate toll fees based on selected vehicle type and entered distance. It features a user-friendly interface, handles input validation, and displays the calculated toll fee.',
        technologies: ['React', 'useState Hook','JSX(JavaScript XML'],
        demoLink: ' https://sandhyakumari543.github.io/my-app/',
        codeLink: 'https://github.com/sandhyakumari543/my-app',
      },

  ];
  

  const container=document.getElementById('projects-container')
  function createProjectCard(project){
  const card=document.createElement('div')
  card.className='project-card';
  card.innerHTML=
  `<h3>${project.title}</h3>
  <p>${project.description}</p>
  <p><strong>Technologies used:</strong>${project.technologies.join(' , ')}</p>
<p>
  <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer">Demo</a>
  <a href="${project.codeLink}" target="_blank" rel="noopener noreferrer">Code</a>
  </p>
  </hr>
  `;
  return card;
  }

  function renderProjects() {
        projects.forEach(project => {
             const card = createProjectCard(project);
             container.appendChild(card);
         });
     }
    
    renderProjects();