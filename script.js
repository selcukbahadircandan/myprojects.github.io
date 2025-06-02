const projects = {
  bank: `
    <h2>ATM Project Details</h2>
    <p>I developed a user interface for an ATM system using Java. The application allows users to perform essential banking operations such as depositing money, withdrawing cash, transferring funds between accounts, and currency exchange. The interface is designed to be user-friendly, enabling smooth navigation through these features. It handles input validation and updates account balances accordingly, providing a basic but functional simulation of ATM services.

</p>
  `,
  house: `
    <h2>Real Estate Project Details</h2>
    <p>I developed a real estate management system using Java Swing for the user interface and MySQL as the database. The application supports multiple user roles with different permissions. Users can be added and managed according to their roles. Through the interface, users can view properties in the portfolio and perform various operations related to real estate management. The system ensures data is stored securely in the MySQL database and allows smooth interaction between the UI and database for real-time updates.

</p>
  `
};

const projectElements = document.querySelectorAll('.project');
const detailsSection = document.getElementById('project-details');
const detailsContent = document.getElementById('details-content');
const closeBtn = document.getElementById('close-details');

projectElements.forEach(proj => {
  proj.addEventListener('click', () => {
    const projectKey = proj.getAttribute('data-project');
    detailsContent.innerHTML = projects[projectKey] || '<p>No details available.</p>';
    detailsSection.classList.remove('hidden');
    window.scrollTo({ top: detailsSection.offsetTop, behavior: 'smooth' });
  });
});

closeBtn.addEventListener('click', () => {
  detailsSection.classList.add('hidden');
  detailsContent.innerHTML = '';
});
