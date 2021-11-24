from os.path import exists
import sys

if (exists("./datos.txt")):
    fDatos = open("./datos.txt", "a")
    fDatos.write("\n")
else:
    fDatos = open("./datos.txt", "w")

parametros = sys.argv

if (len(parametros) < 3):
    print("Se necesita un nombre y un numero")
else:
    parametros.pop(0)
    datos = [parametros[0], parametros[1]]
    for i in datos:
        fDatos.write(i + " ")