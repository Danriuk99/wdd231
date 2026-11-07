const url = "data/members.json";
const cardsContainer = document.querySelector("#cards");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

const displayMembers = (members) => {
  cardsContainer.innerHTML = ""; 
  
  members.forEach((member) => {
    let card = document.createElement("section");
    
    card.innerHTML = `
      <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p class="address">${member.address}</p>
      <p class="phone">${member.phone}</p>
      <p class="website"><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p class="membership">Membership Level: ${member.memberShipLevel}</p>
      <p class="description">${member.description}</p>
    `;
    
    cardsContainer.appendChild(card);
  });
};

gridButton.addEventListener("click", () => {
  cardsContainer.classList.add("grid");
  cardsContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  cardsContainer.classList.add("list");
  cardsContainer.classList.remove("grid");
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

getMembers();