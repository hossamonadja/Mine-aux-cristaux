import { GRID_WIDTH, GRID_HEIGHT, TILE_ROCK, TILE_CRYSTAL, TILE_EMPTY } from './grid.js';

/**
 * Force initiale maximale de la pioche.
 * @type {number}
 */
export const MAX_PICKAXE_ENERGY = 40;

/**
 * Classe représentant le héros et son état dans le jeu.
 */
export class Player {
    /**
     * Initialise un nouveau joueur avec sa position, son score et son énergie.
     */
    constructor() {
        this.reset();
    }

    /**
     * Réinitialise les attributs du joueur pour une nouvelle partie.
     */
    reset() {
        /** @type {number} */
        this.x = Math.floor(GRID_WIDTH / 2);

        /** @type {number} */
        this.y = Math.floor(GRID_HEIGHT / 2);

        /** @type {number} */
        this.score = 0;

        /** @type {number} */
        this.pickaxeEnergy = MAX_PICKAXE_ENERGY;
    }

    /**
     * Tente de déplacer le joueur dans la direction spécifiée.
     * @param {number} deltaX Déplacement horizontal (-1, 0, 1).
     * @param {number} deltaY Déplacement vertical (-1, 0, 1).
     * @param {number[][]} grid Grille du jeu.
     * @returns {boolean} Vrai si le déplacement s'est effectué, faux sinon.
     */
    move(deltaX, deltaY, grid) {
        if (this.pickaxeEnergy <= 0) {
            return false;
        }

        const newX = this.x + deltaX;
        const newY = this.y + deltaY;

        // Validation des limites de la grille
        if (newX < 0 || newX >= GRID_WIDTH || newY < 0 || newY >= GRID_HEIGHT) {
            return false;
        }

        this.x = newX;
        this.y = newY;

        const currentTile = grid[this.y][this.x];

        if (currentTile === TILE_CRYSTAL) {
            this.score++;
            this.pickaxeEnergy--;
            grid[this.y][this.x] = TILE_EMPTY;
        } else if (currentTile === TILE_ROCK) {
            this.pickaxeEnergy--;
            grid[this.y][this.x] = TILE_EMPTY;
        }

        return true;
    }
}