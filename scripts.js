const acadProjects = [
  {
    name: "Molluscophobia",
    description: "A terminal-based card game inspired by 'Slay the Spire', co-developed in a team of 5",
    image: "images/Molluscophobia.png",
    video: "images/Molluscophobia.mp4"
  },
  {
    name: "Gong Gong",
    description: "An interactive light installation 'Gong Gong', designed for the Chinese Opera House located in SUTD campus in a team of 5, which consists of an array of lanterns which light up when the Gong is hit",
    image: "images/Gong-Gong.png",
    video: "images/gong-gong.mp4"
  },
  {
    name: "Birb",
    description: "Utilized Stable Diffusion and ControlNet to conceptualize a product design inspired by Eames’ house bird in a team of 5",
    image: "images/Birb.png",
    video: "images/birb.MOV"
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
    document.getElementById('acad-project-name').textContent = project.name;
    document.getElementById('acad-project-description').textContent = project.description;

    // Update the video in the display div
    const displayDiv = document.querySelector('.acad-project.display');
    displayDiv.innerHTML = '';  // Clear any previous content
    const video = document.createElement('video');
    video.src = project.video;
    video.controls = true;  // Adds play/pause and other video controls
    video.style.width = '100%';  // Adjust width and height as needed
    // video.style.height = '100%';
    displayDiv.appendChild(video);
  });
});


