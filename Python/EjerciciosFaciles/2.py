import sys

if not (len(sys.argv) == 5 ):
    print("Se necesitan 4 numeros")

def getMayor():
    parametros = sys.argv
    parametros.pop(0)
    print(max(parametros))

getMayor()