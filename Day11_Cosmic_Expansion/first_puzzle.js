
const input = `....................#........#...............................#............................................................#................#
............#...................................#........................................#........#..................#...........#..........
.#.......................#..................................................................................................................
..........................................................#.................................................#...............................
...................................#..........................................#.............................................................
...........................................#......................#.........................................................................
......................#.....................................................................................................................
..................................................#.........#.........#.......................#............................#.......#......#.
......#.........#............#.............................................#................................................................
.#................................#.....................#.......................#........................#..................................
..........................................#.................................................................................................
.......................................................................................#......................#.............................
.....................................................................#..............................................#.....#.................
........#.................#.................................................................................................................
....................................#.................#........................................................................#............
.............#...........................#.......................#................#..................#.................................#....
#...........................................................................#...............................................................
......................#......#..............................................................................................................
.................................................#........................................................#.................................
.....................................#...................................................#........................#.........................
........#................#................................#.................................................................................
...................#................................................................#........#...............#..............#...............
.......................................................................................................#..........................#.........
..................................#.......#.........................................................................#...................#...
.............#.................................#........................#...................................................................
.....................#..................................#......................................#................#...........................
...............................................................#.....................#..................................#...................
#.........#...................#................................................#........................#...................................
...................................#..................................#............................................................#........
............................................#.........#...........................................#.........................................
...#.............................................#........................................................................#.................
........#..........#........#.................................................................................#.................#......#....
..............................................................#..................#..........................................................
.....................................................................#......................................................................
.................................................................................................................#..........................
...............#...............................#....................................................#.......................................
...........................#................................................................#........................................#......
...........#.....................#..................#............#...........#.......#.....................#................................
............................................................................................................................................
...............................................................................................................................#.........#..
.......................................................................................................................#....................
........#................#.....#.....#.................#.........................................#..........................................
..................................................#...................................#.....................................................
....#...........#.............................................................#..............#...............#...................#..........
............................................#...............#.........................................................................#.....
....................#.......................................................................................................................
#......#..........................#..................#...............#.....#................................................................
...........................................................................................#......................#........................#
...........#................................................................................................................................
...............................................................................#...................#........................................
.......................#..............#......#..............#...........................#..................................#................
............................................................................................................................................
...................#...........#.................................................................................................#..........
.......................................................................................................#.....#..............................
........................................................#...........................#................................#......................
...............#...................................................#..........#...........#.................................................
...........................................#......................................................#.........................................
.........#.......................................#..........................................................................................
..........................#...............................................................................#........#......................#.
...........................................................#...............#...........#......#..........................#..................
.................#......................#.............................#........................................................#............
.............................................................................................................#..............................
...............................#...............................................#............................................................
............................................#.........#.....................................................................#...............
...#......................#........#.............................................................#..................#.....................#.
................................................#..............#.......................#..............#.....................................
............................................................................................................................................
#...........................................................................................................................................
......#..............#....................................#........#................................................................#.......
..............#.............#.........#..........................................#..........................................................
..................................................................................................#............................#..........#.
...........................................#...................#.......................................#.....#..............................
.................................#....................#................................#....................................................
............................................................................................................................................
........................................................................#...................................................#...............
..#..............................................#...........................................#...................#.....#.............#......
......................#.....................................................................................................................
...............................#......#..........................................................#.......#.....................#............
..........#.....#.................................................#.............#...........................................................
............................................................................................................................................
............................#.................................#.........#...................................................................
.......................................................#................................#...........................#.......................
...........................................................................................................................#.........#......
...................#..............................#..............................#...............#.........#................................
..........#..............#.....................................................................................................#............
............................................................................................................................................
................#.........................................................#...............................................................#.
.................................#.....................................................................#....................................
.....#................................................#.....................................#...............................................
.............................#...............................#................#..............................#..............................
......................................................................................#...............................#........#............
............................................................................................................................................
...........#..........#..............................................#..............................................................#.......
................................................#..............#...................................................#........................
......#...........#.........................................................#...............#...............................................
...............................#.....................................................#...............#...................................#..
..............#.......................#.....................#...............................................................................
.........................#........................#...........................................................................#......#......
.........................................................................................................#..................................
............................................................................................................................................
...#......................................................#.................................................................................
........................................#.................................................#........#..............#.....#...................
....................#................................#..........................#...........................................................
#.................................#..................................................#.........#.......#.............................#......
...........#.........................................................#.......................................................#..............
......#......................#.................#.............................#..............................................................
........................................................#.........................................#............#.................#..........
..................#....................#.....................................................#..............................................
..........................#......................................................#......#................................#..................
................................#............#.........................................................#.................................#..
............................................................................................................................................
...#........................................................#...............................................................................
..............#.....................................#................................................................................#......
....................................................................................................................#...........#...........
...................#.........................................................................#..............................................
.............................#........#.....................................................................................................
................................................................#................................................#..........................
..#..........#...................................#..............................#........#................#.................................
..................................#........................................................................................#................
.....................#....................................#....................................#.....#......................................
........#.......#..............................................................................................#...................#........
...........................#..............#..........#............#......................................................................#..
.#..........................................................................................................................................
............#....................................#.....................................................................#....................
.............................................................#.............#.........#.....#........#.......................................
......#...........................#.......................................................................#.................................
........................................................#..................................................................#................
#..........................#.............#.........................#..........#...................................#.........................
....................#....................................................................#.............#..........................#.....#...
............................................................................................................................................
.....................................................#..................#................................................#..................
...#....................#......#............................#.....................#.................#.......................................
............#...................................#...........................................................................................
............................................................................................#...............................................
...................#...................................................................#..................#.................#.........#.....
#.................................#........#..........#..........................................#..........................................
.....#......................................................................................................................................
.......................#................................................#........................................#..........................
.................................................................#...........#............#..........#...................................#..
..............#......................#.......#.........................................................................#....................`;

const universe = input.split('\n');
const galaxies = [];
const rowsWithoutGalaxy = Array(universe.length).fill(true);
const colsWithoutGalaxy = Array(universe[0].length).fill(true);

for (let row = 0; row < universe.length; row++) {
  for (let col = 0; col < universe[row].length; col++) {
    if (universe[row][col] === '#') {
      galaxies.push({ row, col });
      rowsWithoutGalaxy[row] = false;
      colsWithoutGalaxy[col] = false;
    }
  }
}

let sumOfDistances = 0;

for (let i = 0; i < galaxies.length - 1; i++) {
  for (let j = i + 1; j < galaxies.length; j++) {
    const galaxy1 = galaxies[i];
    const galaxy2 = galaxies[j];
    let distance = 0;
    for (
      let c = Math.min(galaxy1.col, galaxy2.col);
      c < Math.max(galaxy1.col, galaxy2.col);
      c++
    ) {
      distance += colsWithoutGalaxy[c] ? 2 : 1;
    }
    for (
      let row = Math.min(galaxy1.row, galaxy2.row);
      row < Math.max(galaxy1.row, galaxy2.row);
      row++
    ) {
      distance += rowsWithoutGalaxy[row] ? 2 : 1;
    }
    sumOfDistances += distance;
  }
}

console.log(sumOfDistances);
