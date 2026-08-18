# ⛏️ Mine aux Cristaux

Un jeu d'arcade 2D dynamique en JavaScript vanilla moderne (ES Modules) exécutable directement dans le navigateur.

---

## 📋 Présentation du Projet

**Mine aux Cristaux** est un jeu dans lequel le joueur incarne un chercheur de trésors explorant une caverne générée aléatoirement. L'objectif est d'amasser un maximum de cristaux avant que la pioche ne se brise.

### 🎮 Règles du jeu
* **Énergie de la pioche :** Le joueur commence avec une pioche ayant **40 points de force**.
* **Creuser de la roche :** Coûte **1 point d'énergie**.
* **Récolter un cristal :** Coûte **1 point d'énergie** et augmente le score de **1 cristal**.
* **Traverser une case vide :** Ne consomme **aucun point d'énergie**.
* **Fin de partie :** La partie s'arrête lorsque l'énergie de la pioche atteint 0.

---

## 🛠️ Architecture du Code (ES Modules)

Le projet est structuré selon les principes de la programmation orientée objet et de la séparation des responsabilités à l'aide des **ES Modules** (`import` / `export`) :

* `js/grid.js` : Génération de la grille 2D (25 × 15) et gestion des probabilités (90 % roche, 10 % cristal).
* `js/player.js` : Classe `Player` gérant l'état du héros (position $x, y$, score, résistance de la pioche) et la logique des déplacements.
* `js/ui.js` : Rendu du DOM (grille, sprite du héros, barre d'énergie colorée et modale de fin de partie).
* `js/main.js` : Point d'entrée de l'application, initialisation des événements et boucle de jeu.

---

## ✨ Fonctionnalités & Bonnes Pratiques

* **Contrôles fluides :** Jouable au clavier (flèches directionnelles) et via les boutons tactiles de l'interface.
* **Barre d'énergie dynamique :** Changement de couleur dynamique (vert $\rightarrow$ orange $\rightarrow$ rouge) selon l'usure de la pioche.
* **Conformité des normes JS :**
  * Aucune variable déclarée avec `var` (utilisation exclusive de `let` et `const`).
  * Aucun gestionnaire d'événement inline dans le HTML (utilisation stricte de `addEventListener`).
  * Interface sans `alert()` native, remplacée par une boîte modale personnalisée.
  * Code documenté au format **JSDoc**.

---

## 🚀 Installation & Exécution

Puisque le projet utilise les **ES Modules**, le fichier `index.html` doit être servi via un serveur HTTP local (et non ouvert en simple `file://`).

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/hossamonadja/Mine-aux-cristaux.git](https://github.com/hossamonadja/Mine-aux-cristaux.git)
   cd mine-aux-cristaux