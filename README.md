# Jenga Game

### Version: Alpha 1.0
## Description

Jenga is a web-based game built with a React frontend and a Python backend. The goal of the game is to strategically remove and stack blocks from a tower without causing it to collapse. It can be played in single-player mode or with up to 2 players. Players can be either bots or human participants, and this project was developed to practice full-stack development using modern web technologies.

## Requirements

Frontend: React, JavaScript
Backend: Python (Flask/Django)
Additional Libraries: axios (for API communication), random (Python for game logic)
How To Play

### Controls:
- Menu Navigation:
  - Navigate: up and down by finger
  - Selection: press with finger
- In-Game:
  - Pulling a block: finger press on block you want to pull
  - Placing a block: finger press on special appearing block on the top of the tower 

### Rules
The objective is to keep the Jenga tower standing as long as possible while removing and stacking blocks. Players take turns removing one block at a time and placing it on the top of the tower. If a player causes the tower to collapse, they lose the game.

Each player may only use one hand at a time.
Blocks can be removed from any level except the top two completed rows.
The game ends when the tower collapses, and the player who caused it to fall loses.
