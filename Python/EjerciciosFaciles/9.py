import sqlite3
from sqlite3.dbapi2 import connect
from random import random

connex = sqlite3.connect("tarea9.db")

cursor = connex.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS Nombres (rowid INTEGER PRIMARY KEY, Nombre varchar(100))")

listaNombres = []
valoresNombres = []
nombre = ""

while not (nombre.lower() == "salir"):
    nombre = str(input("Introduzca un nombre: "))
    if not (nombre.lower() == "salir") or (nombre == ""):
        listaNombres.append(nombre)

for i in listaNombres:
    valoresNombres.append([int(random()*1000), i])

cursor.executemany("INSERT INTO Nombres VALUES (?, ?)", valoresNombres)

connex.commit()

connex.close()