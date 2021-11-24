import sys

parametros = sys.argv

if not (len(parametros) == 3):
    print("Se necesitan dos numeros.")
    exit
else: 

    parametros.pop(0)

    def cuadrado(x,y):
        for i in range(y):
            print("")
            for i in range(x):
                print(" # ", end="")

    cuadrado(int(parametros[0]), int(parametros[1]))