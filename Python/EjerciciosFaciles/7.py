import sys
from random import random

parametros = sys.argv

if not (len(parametros) == 3):
    print("Se necesitan 2 numeros")
else:
    parametros.pop(0)
    nX = parametros[0]
    nY = parametros[1]
    x = []
    for i in range(int(nX)):
        y = []
        for j in range(int(nY)):
            y.append(int(random()*100))
        x.append(y)

    print("Valor 1,3: " + str(x[0][2]))
    sumFila2 = int()
    for i in x[1]:
        sumFila2 = sumFila2 + i
    print("Total fila 2: " + str(sumFila2))
    print("Matriz en uso: ")
    for i in x:
        print(i)