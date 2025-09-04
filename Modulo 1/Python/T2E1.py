sum=0
num=1
def sumaPares(lim):
    global sum
    global num
    if lim==0:
        return
    elif num%2==0:
        sum+=num
    elif num>=lim:
        print(f"Suma total de los pares del 1 al {lim} es: {sum}")
        return
    num=num+1
    sumaPares(lim)

lim=int(input("Ingrese limite mayor: "))
sumaPares(lim)