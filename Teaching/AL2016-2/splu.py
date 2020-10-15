import numpy as np

def splu(A):
    """Retorne a fatoracao PA=LU para uma matriz nao-singular A

    Retorne (P, L, U, sinal), onde P, L e U sao matrizes satisfazendo
    A = LU, sendo P uma matriz de permutacao, L triangular inferior
    com diagonal unitaria e U triangular superior; e onde sinal eh o
    determinante de P (igual a +1 ou -1). Pare se encontrar um pivo
    pequeno demais.
    """
    m,n = A.shape

    if m != n:
        print("Matriz tem que ser quadrada")
        return

    P = np.identity(n)
    L = np.identity(n)
    U = A.copy()
    sinal = 1

    tol = 0.001

    for k in range(n):

        if np.absolute(U[k][k]) < tol:
            # Busca o pivo
            for r in range (k,n):
                if np.absolute(U[r][k]) >= tol:
                    # Pivo encontrado
                    break
                if r == n-1:
                    # Caso singular: sem pivo
                    print("A eh singular dentro da tolerancia.")
                    print("Coluna", k, "sem pivo")
                    sinal = 0
                    return P,L,U,sinal
            # Troca linhas
            U[r], U[k] = U[k].copy(), U[r].copy()
            P[r], P[k] = P[k].copy(), P[r].copy()
            sinal = -sinal

        # Elimina coluna abaixo do pivo
        for i in range(k+1,n):
            L[i][k] = U[i][k]/U[k][k]
            U[i][k] = 0
            for j in range(k+1,n):
                U[i][j] -= L[i][k]*U[k][j]

    return P,L,U,sinal
