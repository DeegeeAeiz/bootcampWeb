def listScanner():
    numstr = input('Please input a list of numbers separated by commas: ')
    array = []
    sum = 0

    for i in numstr.split(','):
        array.append(i.strip())
    intarray = list(map(int, array))

    print(f"There are {len(intarray)} numbers in your list.")

    for i in intarray:
        sum+=i
    
    print(f"The sum of your list is: {sum}")

    for a in intarray:
        if a == 30:
            print(f"Your list has the number 30 in index {intarray.index(a)}")

    intarray.pop()

    print(f"List after popping out last element {intarray}")

listScanner()