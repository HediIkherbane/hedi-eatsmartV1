import './style.css';
interface Plat {
  id: number;
  nom: string;
  prix: number;
  description: string;
  disponible: boolean;
}


const plats: Plat[] = [
  { 
    id: 1, 
    nom: "Anchois 23cm", 
    prix: 7.9, 
    description: "Sauce tomate premium , origan huile d'olive extra vierge , anchois , olive", 
    disponible: true 
  },
  { 
    id: 2, 
    nom: "Emmental 23cm", 
    prix: 7.9, 
    description: "sauce tomate premium origan huile d'olive extra vierge emmental basilic olive", 
    disponible: true 
  },
  { 
    id: 3, 
    nom: "Margherita 23cm", 
    prix: 7.9, 
    description: "sauce tomate premium origan huile d'olive extra vierge mozzarella basilic olive", 
    disponible: false 
  }
];

console.table(plats);



const app = document.querySelector<HTMLElement>('#app');


if (app) {
  
  const cartesHTML = plats.map((plat: Plat) => {
    return `
      <article class="card">
        <h2>${plat.nom}</h2>
        <p>${plat.description}</p>
        <p>Prix : <strong>${plat.prix.toFixed(2)} €</strong></p>
      </article>
    `;
  }).join(''); 


  app.innerHTML = `
    <header>
      <h1>EatSmart - Carte du Restaurant</h1>
    </header>
    
    <main class="menu-container">
      ${cartesHTML}
    </main>
  `;
}