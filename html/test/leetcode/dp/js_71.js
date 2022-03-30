function stair(n) {
    if (n < 2) {
        return 1
    }
    let result = new Array(n + 1);
    result[0] = 1
    result[1] = 1
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result[n]
}
/*
对于 某一点(i,j)，距离最近的路径为min((i,j-1)+way[i][j-1],(i-1,j)+way[i-1][j])
**/
function findTheEasiestWay64(grid) {
    if (Array.isArray(grid) && grid.length > 0 && Array.isArray(grid[0]) && grid[0].length > 0) {
        let g_i = grid.length,
            g_j = grid[0].length;
        for (let i = 0; i < g_i; i++) {
            for (let j = 0; j < g_j; j++) {
                if (i === 0) {
                    if (j > 0) {
                        grid[i][j] = grid[i][j] + grid[i][j - 1];
                    }
                } else if (j === 0) {
                    if (i > 0) {
                        grid[i][j] = grid[i][j] + grid[i - 1][j];
                    }
                } else {
                    grid[i][j] = Math.min(
                        grid[i][j] + grid[i - 1][j], grid[i][j] + grid[i][j - 1]
                    );
                }

            }
        }
        return (grid[g_i - 1][g_j - 1]);
    } else {
        return 0
    }



}
//  对于 
function funiquePath(m, n) {
    if (m > 1 && n > 1) {
        let res = new Array(m).fill(new Array(n).fill(1));
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                res[i][j] = res[i - 1][j] + res[i][j - 1]
            }
        }
        return res[m - 1][n - 1]
    } else {
        return 1
    }

}
// console.log(stair(44))
// console.log(findTheEasiestWay64([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ]));
console.log(funiquePath(3, 2))