import './style.css'

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
    nom: "Pizza Margherita", 
    prix: 12.50, 
    description: "Tomate, mozzarella, basilic frais", 
    disponible: true 
  },
  { 
    id: 2, 
    nom: "Burger Classic", 
    prix: 15.00, 
    description: "Bœuf, cheddar, salade, frites", 
    disponible: true 
  },
  { 
    id: 3, 
    nom: "Salade César", 
    prix: 11.00, 
    description: "Poulet grillé, croûtons, parmesan", 
    disponible: false 
  }
];

console.table(plats);


const container = document.querySelector<HTMLElement>('.menu-container');

if (container) {
  // On génère le HTML pour chaque plat
  container.innerHTML = plats.map((plat: Plat) => `
    <div class="card">
      <h3>${plat.nom}</h3>
      <p>${plat.description}</p>
      <p>Prix : <strong>${plat.prix.toFixed(2)} €</strong></p>
      ${plat.disponible 
        ? `<button class="btn-order">Commander</button>` 
        : `<p class="sold-out">Épuisé</p>`}
    </div>
  `).join('');
}