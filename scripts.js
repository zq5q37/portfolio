const acadProjects = [
  {
    name: "Molluscophobia",
    description: "A terminal-based card game inspired by 'Slay the Spire', co-developed in a team of 5",
    image: "images/Molluscophobia.png",
    videoLink: "https://www.youtube.com/embed/OSK6ESzOQY4"
  },
  {
    name: "Gong Gong",
    description: "An interactive light installation 'Gong Gong', designed for the Chinese Opera House located in SUTD campus in a team of 5, which consists of an array of lanterns which light up when the Gong is hit",
    image: "images/Gong-Gong.png",
    videoLink: "https://www.youtube.com/embed/_otcKPfWadQ"
  },
  {
    name: "Birb",
    description: "Utilized Stable Diffusion and ControlNet to conceptualize a product design inspired by Eames’ house bird in a team of 5",
    image: "images/Birb.png",
    videoLink: "https://www.youtube.com/embed/s-SX8iJp_KU"
  },
  {
    name: "Memory Maze: Grid Escape",
    description: "Using Alchitry Lucid, developed a PvP arcade game where two players compete on a 4x4 grid to reach the goal first, in a team of 7",
    image: "images/grid-escape.png",
    videoLink: "https://www.youtube.com/embed/dUVtjzOOFW4"
  },
  {
    name: "VoluntNear",
    description: "Using Android Studio in Java, developed a mobile App that matches volunteers and beneficiaries, in a team of 7",
    image: "images/voluntnear.png",
    videoLink: "https://www.youtube.com/embed/VhXsMOvBLP4"
  },
  {
    name: "DBS DigiBank: AutoPrompt System",
    description: "Developed a Ruby on Rails Web App with DBS, featuring an AI-powered help bar and Auto-Prompt System for predictive suggestions.",
    image: "images/dbs.png",
    videoLink: "https://www.youtube.com/embed/IBfowicd0us"
  }
];

document.querySelectorAll('.acad-project').forEach((projectDiv, index) => {
  const project = acadProjects[index];

  // Create an image element
  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.name;
  img.style.width = '100%'; // Adjust width as needed
  img.style.height = '100%'; // Adjust height as needed

  // Append the image to the project div
  projectDiv.appendChild(img);

  // Add click event listener
  projectDiv.addEventListener('click', () => {
    // Remove "active" class from all project divs
    document.querySelectorAll('.acad-project').forEach(div => {
      div.classList.remove('active');
      // div.classList.add('autoBlur');
    });

    // Add "active" class to the clicked project div
    projectDiv.classList.add('active');
    // projectDiv.classList.remove('autoBlur');

    document.getElementById('acad-project-name').textContent = project.name;
    document.getElementById('acad-project-description').textContent = project.description;

    // Update the video in the display div
    const displayDiv = document.querySelector('.acad-project.display');
    displayDiv.innerHTML = '';  // Clear any previous content
    
    // Create an iframe element for the YouTube video
    const iframe = document.createElement('iframe');
    iframe.src = project.videoLink;
    iframe.width = '100%'; // Adjust width and height as needed
    iframe.height = '315px'; // Standard YouTube embed height
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true; // Allow full-screen mode

    displayDiv.appendChild(iframe);
  });
});


