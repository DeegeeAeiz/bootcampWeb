def compareValues(x, y):
    if x > y:
        print(f" The number {x} is greater than {y}")
    else:
        print(f" The number {y} is greater than {x}")

def addValues(min, max):
    max+=1
    sum = 0
    for i in range(min, max):
        sum += i
    print(sum)

compareValues(2, 4)

compareValues(6, 3)

addValues(1, 10)

addValues(1, 20)