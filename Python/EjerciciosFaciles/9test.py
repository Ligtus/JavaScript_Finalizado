import sqlite3
from sqlite3.dbapi2 import connect

connex = sqlite3.connect("tarea9.db")

cursor = connex.cursor()

for row in cursor.execute("SELECT * FROM Nombres"):
    print(row)

connex.close()