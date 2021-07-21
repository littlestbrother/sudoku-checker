// a
// b    NW         NORTH         NE
// c
// d
// e   WEST       NEUTRAL       EAST
// f
// .__________.____________.____________.
// g          |            |            |
// h    SW    |    SOUTH   |     SE     |
// i          |            |            |
//   0   1   2   3   4   5   6   7   8 

// _rows_

// |columns|

//solved sudoku puzzle + row
a = [9, 5, 7, 6, 1, 3, 2, 8, 4] 
b = [4, 8, 3, 2, 5, 7, 1, 9, 6] 
c = [6, 1, 2, 8, 4, 9, 5, 3, 7]
d = [1, 7, 8, 3, 6, 4, 9, 5, 2]
e = [5, 2, 4, 9, 7, 1, 3, 6, 8]
f = [3, 6, 9, 5, 2, 8, 7, 4, 1]
g = [8, 4, 5, 7, 9, 2, 6, 1, 3]
h = [2, 9, 1, 4, 3, 6, 8, 7, 5]
i = [7, 3, 6, 1, 8, 5, 4, 2, 9]

//arrays representing columns
let column0 = [a[0], b[0], c[0], d[0], e[0], f[0], g[0], h[0], i[0]]
let column1 = [a[1], b[1], c[1], d[1], e[1], f[1], g[1], h[1], i[1]]
let column2 = [a[2], b[2], c[2], d[2], e[2], f[2], g[2], h[2], i[2]]
let column3 = [a[3], b[3], c[3], d[3], e[3], f[3], g[3], h[3], i[3]]
let column4 = [a[4], b[4], c[4], d[4], e[4], f[4], g[4], h[4], i[4]]
let column5 = [a[5], b[5], c[5], d[5], e[5], f[5], g[5], h[5], i[5]]
let column6 = [a[6], b[6], c[6], d[6], e[6], f[6], g[6], h[6], i[6]]
let column7 = [a[7], b[7], c[7], d[7], e[7], f[7], g[7], h[7], i[7]]
let column8 = [a[8], b[8], c[8], d[8], e[8], f[8], g[8], h[8], i[8]]

//arrays representing cells / quadrants
let nw = [a[0], a[1], a[2],b[0], b[1], b[2], c[0], c[1], c[2]]
let north = [a[3], a[4], a[5], b[3], b[4], b[5], c[3], c[4], c[5]]
let ne = [a[6], a[7], a[8], b[6], b[7], b[8], c[6], c[7], c[8]]
//top sections

let west = [d[0], d[1], d[2], e[0], e[1], e[2], f[0], f[1], f[2]]
let neutral = [d[3], d[4], d[5], e[3], e[4], e[5], f[3], f[4], f[5]]
let east = [d[6], d[7], d[8],e[6], e[7], e[8],f[6], f[7], f[8]]
//middle sections

let sw = [g[0], g[1], g[2],h[0], h[1], h[2],i[0], i[1], i[2]]
let south = [g[3], g[4], g[5],h[3], h[4], h[5],i[3], i[4], i[5]]
let se = [g[6], g[7], g[8],h[6], h[7], h[8],i[6], i[7], i[8]]
//bottom sections

//code i found online :) -aaron
// function hasDuplicates(arr) {
//     return new Set(arr).size !== arr.length;
// }