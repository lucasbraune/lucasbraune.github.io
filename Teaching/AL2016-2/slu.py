import numpy as np

def slu(A):
    """Retorne a fatoracao A=LU de uma matriz nao-singular *sem trocar linhas*

    Retorne (L, U), onde L e U sao matrizes satisfazendo A = LU, sendo
    L triangular inferior com diagonal unitaria e U triangular superior.
    Pare se encontrar um pivo pequeno demais.
    """
    n,n = A.shape

    U = A.copy()
    L = np.identity(n)

    tol = 0.01

    for k in range(n):

        if np.absolute(U[k][k]) < tol:
            print("Pivo pequeno encontrado na coluna ", k)
            break

        for i in range(k+1,n):
            L[i][k] = U[i][k]/U[k][k]

            U[i][k] = 0
            for j in range(k+1,n):
                U[i][j] = U[i][j] - L[i][k]*U[k][j]

    return L,U
