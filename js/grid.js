/**
 * Représente la roche dans la grille.
 * @type {number}
 */
export const TILE_ROCK = 0;

/**
 * Représente un cristal dans la grille.
 * @type {number}
 */
export const TILE_CRYSTAL = 1;

/**
 * Représente une tuile vide.
 * @type {number}
 */
export const TILE_EMPTY = 2;

/**
 * Largeur fixe de la caverne en nombre de tuiles.
 * @type {number}
 */
export const GRID_WIDTH = 25;

/**
 * Hauteur fixe de la caverne en nombre de tuiles.
 * @type {number}
 */
export const GRID_HEIGHT = 15;

/**
 * Génère une grille à 2 dimensions avec des cristaux.
 * @returns {number[][]} Tableau à 2 dimensions représentant le donjon.
 */
export function generateGrid() {
    const grid = [];
    for (let row = 0; row < GRID_HEIGHT; row++) {
        const rowArray = [];
        for (let col = 0; col < GRID_WIDTH; col++) {
            const randomValue = Math.random();
            if (randomValue < 0.10) {
                rowArray.push(TILE_CRYSTAL);
            } else {
                rowArray.push(TILE_ROCK);
            }
        }
        grid.push(rowArray);
    }
    return grid;
}