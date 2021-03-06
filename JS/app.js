/* eslint-disable no-debugger */
let grid;
let cols = 5;
let rows = 5;

function makeGrid(cols, rows) {
    let grid = new Array(cols);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(rows);
    }
    return grid;
}

function setUp() {
    grid = makeGrid(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = Math.round(Math.random());
        }
    }
    return grid;
}

export function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

export function checkValues(grid, cols, rows) {
    let nextGrid = makeGrid(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            let neighbors = countNeighbors(grid, i, j);
            if (state === 0 && neighbors === 3) {
                nextGrid[i][j] = 1;
            } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                nextGrid[i][j] = 0;
            } else {
                nextGrid[i][j] = state;
            }
        }
    }
    grid = nextGrid;
    return grid;
}

console.log(setUp());
console.log(checkValues());
