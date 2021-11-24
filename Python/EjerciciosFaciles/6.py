from os.path import exists

if not (exists("Python\EjerciciosFaciles\datos.txt")):
    print("No hay fichero de datos.")
else:
    datos = []
    fDatos = open("Python\EjerciciosFaciles\datos.txt", "r")
    for i in fDatos:
        datos.append(i[:i.index(" ")])
        datos.append(i[i.index(" "):])
    for i in datos:
        print(i, end="")