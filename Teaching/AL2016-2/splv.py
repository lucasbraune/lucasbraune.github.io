import numpy as np
from splu import *

def splv(A,b):
    """Retorne o vetor x que resolve o sistema nao-singular Ax=b

    Use a fatoracao PA = LU calculada por splu para resolver Ax=b
    """
    n,n = A.shape
    P, L, U, sinal = splu(A)

    # Substituicao que resolve Lc = Pb
    Pb = P.dot(b)
    c = np.zeros(n)
    for k in range(n):
        s = 0
        for j in range(k):
            s += L[k][j]*c[j]
        c[k] = Pb[k] - s

    # Substituicao que resolve Ux = c
    x = np.zeros(n)
    for k in range(n-1,-1,-1):
        s = 0
        for j in range(k+1,n):
            s += U[k][j]*x[j]
        x[k] = (c[k] - s)/U[k][k]

    return x
