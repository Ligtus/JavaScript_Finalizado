import sys

nombre = sys.argv

if not (len(nombre) == 2):
    print("Se necesita un nombre")
else:
    nombre = nombre[1]
    if (len(nombre) > 8):
        print("El nombre es demasiado largo.")
    else:
        for i in nombre:
            open("fichEj8/" + i, "w")