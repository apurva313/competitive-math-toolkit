function multiplyMatrix(A, B, mod) {
    let C = [[0, 0], [0, 0]];
    for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++)
            for (let k = 0; k < 2; k++)
                C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % mod;
    return C;
}

function matrixExpo(matrix, exp, mod) {
    let res = [[1, 0], [0, 1]]; // Identity matrix
    while (exp > 0) {
        if (exp % 2 === 1) res = multiplyMatrix(res, matrix, mod);
        matrix = multiplyMatrix(matrix, matrix, mod);
        exp = Math.floor(exp / 2);
    }
    return res;
}

module.exports = { multiplyMatrix, matrixExpo };
