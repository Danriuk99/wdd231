const spotlightsContainer = document.querySelector('.spotlights');
const membersUrl = 'data/members.json';

async function getSpotlights() {
  try {
    const response = await fetch(membersUrl);
    const data = await response.json();

    // Accedemos a data.members y corregimos memberShipLevel con la S mayúscula
    const qualifiedMembers = data.members.filter(member => member.memberShipLevel === 2 || member.memberShipLevel === 3);

    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    displaySpotlights(selected);
  } catch (error) {
    console.error('Error loading spotlights:', error);
  }
}

function displaySpotlights(companies) {
  if (!spotlightsContainer) return;
  spotlightsContainer.innerHTML = '';
  
  companies.forEach(company => {
    const card = document.createElement('section');
    card.classList.add('spotlight-card');

    card.innerHTML = `
      <h3>${company.name}</h3>
      <img src="images/${company.image}" alt="${company.name} Logo" width="120" height="120" loading="lazy">
      <p class="membership-level">${company.memberShipLevel === 3 ? 'Gold Member' : 'Silver Member'}</p>
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <a href="${company.website}" target="_blank" rel="noopener">Visit Website</a>
    `;

    spotlightsContainer.appendChild(card);
  });
}

getSpotlights();