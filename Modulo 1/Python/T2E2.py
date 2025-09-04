def convertirCelsiusAFahrenheit(tempc):
    tempf=tempc*(9/5)+32
    print("Temperatura en F: ", tempf)

tempc=float(input("Temperatura en C: "))
convertirCelsiusAFahrenheit(tempc)