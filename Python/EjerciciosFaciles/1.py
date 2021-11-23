class Robot:
    def __init__(self, posicion, articulaciones, color):
        self.posicion = posicion
        self.articulaciones = articulaciones
        self.color = color
        self.encendido = False
    def encender(self):
        if (self.encendido):
            print("Ya encendido")
        else:
            print("Encendiendo")
            self.encendido = True
    def apagar(self):
        if not (self.encendido):
            print("Ya apagado")
        else:
            print("Apagando")
            self.encendido = False
    def ejecutar(self):
        print("Ejecutando")
        

robot = Robot(100, 4, "rojo")

robot.encender()

print(robot.encendido)

robot.apagar()

print(robot.encendido)

robot.apagar()

robot.ejecutar()
