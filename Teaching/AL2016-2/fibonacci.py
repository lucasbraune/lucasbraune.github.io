def fib(n):
    """Retorne o n-esimo numero de Fibonacci."""

    if(n<0):
        return 0

    anterior = 1
    atual = 1

    for i in range(n-1):
        temp = anterior
        anterior = atual
        atual += temp

    return atual
