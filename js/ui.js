import { GRID_WIDTH, GRID_HEIGHT, TILE_ROCK, TILE_CRYSTAL, TILE_EMPTY } from './grid.js';
import { MAX_PICKAXE_ENERGY } from './player.js';

/**
 * Met à jour l'affichage de la grille dans le DOM.
 * @param {HTMLElement} container Élément HTML conteneur de la grille.
 * @param {number[][]} grid Données 2D de la grille.
 * @param {object} player Instance du joueur.
 */
export function renderGrid(container, grid, player) {
    container.innerHTML = '';

    for (let row = 0; row < GRID_HEIGHT; row++) {
        for (let col = 0; col < GRID_WIDTH; col++) {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');

            const tileType = grid[row][col];
            if (tileType === TILE_CRYSTAL) {
                tileElement.style.backgroundImage = "url('images/tile_cristal.png')";
            } else if (tileType === TILE_ROCK) {
                tileElement.style.backgroundImage = "url('images/tile_roche.png')";
            } else if (tileType === TILE_EMPTY) {
                tileElement.style.backgroundImage = "url('images/tile_vide.png')";
            }

            // Affichage du héros par-dessus la tuile actuelle
            if (col === player.x && row === player.y) {
                const heroElement = document.createElement('div');
                heroElement.classList.add('hero');
                tileElement.appendChild(heroElement);
            }

            container.appendChild(tileElement);
        }
    }
}

/**
 * Met à jour les éléments de l'interface graphique (score et barre d'énergie).
 * @param {object} player Instance du joueur.
 */
export function renderStats(player) {
    const energyBarInner = document.getElementById('energyBarInner');
    const energyText = document.getElementById('energyText');
    const scoreText = document.getElementById('scoreText');

    const ratio = Math.max(0, player.pickaxeEnergy / MAX_PICKAXE_ENERGY);
    const percentage = ratio * 100;

    energyBarInner.style.width = `${percentage}%`;
    energyText.textContent = `${player.pickaxeEnergy}/${MAX_PICKAXE_ENERGY}`;
    scoreText.textContent = player.score;

    if (percentage > 50) {
        energyBarInner.style.backgroundColor = '#00b300';
    } else if (percentage > 20) {
        energyBarInner.style.backgroundColor = '#ffa500';
    } else {
        energyBarInner.style.backgroundColor = '#cc0000';
    }
}

/**
 * Affiche la boîte de dialogue de fin de partie.
 * @param {number} finalScore Score final du joueur.
 */
export function showGameOverModal(finalScore) {
    const modal = document.getElementById('modalGameOver');
    const finalScoreElement = document.getElementById('finalScore');
    finalScoreElement.textContent = finalScore;
    modal.classList.remove('hidden');
}

/**
 * Masque la boîte de dialogue de fin de partie.
 */
export function hideGameOverModal() {
    const modal = document.getElementById('modalGameOver');
    modal.classList.add('hidden');
}