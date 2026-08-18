import { generateGrid, TILE_EMPTY } from './grid.js';
import { Player } from './player.js';
import { renderGrid, renderStats, showGameOverModal, hideGameOverModal } from './ui.js';

/** @type {number[][]} */
let currentGrid;

/** @type {Player} */
const player = new Player();

/**
 * Démarre une partie complète.
 */
function startNewGame() {
    currentGrid = generateGrid();
    player.reset();

    currentGrid[player.y][player.x] = TILE_EMPTY;

    hideGameOverModal();
    updateUI();
}

/**
 * Met à jour la vue globale du jeu.
 */
function updateUI() {
    const gridContainer = document.getElementById('gridContainer');
    renderGrid(gridContainer, currentGrid, player);
    renderStats(player);
}

/**
 * Gère une tentative de déplacement du héros.
 * @param {number} deltaX Direction X (-1, 0, 1).
 * @param {number} deltaY Direction Y (-1, 0, 1).
 */
function handleMove(deltaX, deltaY) {
    if (player.pickaxeEnergy <= 0) {
        return;
    }

    const moved = player.move(deltaX, deltaY, currentGrid);
    if (moved) {
        updateUI();
        checkGameOver();
    }
}

/**
 * Vérifie si la partie est terminée.
 */
function checkGameOver() {
    if (player.pickaxeEnergy <= 0) {
        showGameOverModal(player.score);
    }
}

/**
 * Termine la partie volontairement lorsque l'utilisateur clique sur Quitter.
 */
function handleQuit() {
    showGameOverModal(player.score);
}

/**
 * Associe les événements aux boutons HTML et aux touches du clavier.
 */
function setupEventListeners() {
    document.getElementById('btnUp').addEventListener('click', () => handleMove(0, -1));
    document.getElementById('btnDown').addEventListener('click', () => handleMove(0, 1));
    document.getElementById('btnLeft').addEventListener('click', () => handleMove(-1, 0));
    document.getElementById('btnRight').addEventListener('click', () => handleMove(1, 0));

    document.getElementById('btnQuit').addEventListener('click', handleQuit);
    document.getElementById('btnRestart').addEventListener('click', startNewGame);

    // Prise en charge optionnelle des flèches du clavier
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') handleMove(0, -1);
        if (event.key === 'ArrowDown') handleMove(0, 1);
        if (event.key === 'ArrowLeft') handleMove(-1, 0);
        if (event.key === 'ArrowRight') handleMove(1, 0);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    startNewGame();
});