document.addEventListener('DOMContentLoaded', () => {
  const chefDivs = document.querySelectorAll('.chef');
  const buttons = document.querySelectorAll('.accordion_btn');

  if (!buttons.length || !chefDivs.length) return;

  buttons.forEach((button, index) => {
    button.addEventListener('click', async () => {
      const chefDiv = chefDivs[index];
      if (!chefDiv) return;

      const contentDiv = chefDiv.querySelector('.accordion_content');
      if (!contentDiv) return;

      
      if (contentDiv.classList.contains('On')) {
        contentDiv.classList.remove('On');
        return;
      }

      try {
        const res = await fetch('chefs.json');
        if (!res.ok) throw new Error('Failed to fetch chefs.json: ' + res.status);
        const chefs = await res.json();
        const chefData = chefs[index];

        if (chefData) {
          contentDiv.innerHTML = `\n            <h3>${chefData.name}</h3>\n            <h4>${chefData.role}</h4>\n            <p>${chefData.bio}</p>\n          `;
        } else {
          contentDiv.innerHTML = '<p>No chef data available.</p>';
        }
      } catch (err) {
        console.error('Accordion load error:', err);
        contentDiv.innerHTML = '<p>Error loading content.</p>';
      }

      
      document.querySelectorAll('.accordion_content.On').forEach(openItem => {
        if (openItem !== contentDiv) openItem.classList.remove('On');
      });

      
      contentDiv.classList.add('On');
    });
  });
});
