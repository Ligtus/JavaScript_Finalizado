import sys

if not (len(sys.argv) > 1 ):
    print("Este programa necesita parametros")

parametros = sys.argv
parametros.pop(0)

def checkEmpty(string):
    if not (string == "") or (string == None):
        return True

def filterEmpty(array):
    array = filter(checkEmpty, array)
    array = list(array)
    return array

def arrayToUpperCase(array):
    for i in range(len(array)):
        array[i] = array[i].upper()
    return array

parametrosFiltrados = filterEmpty(parametros)

parametrosOrdenados = sorted(parametrosFiltrados)

parametrosMayus = arrayToUpperCase(parametrosOrdenados)

print(parametrosMayus)