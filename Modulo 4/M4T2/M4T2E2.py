# Descripción: Crea un programa en Python que permita a un profesor gestionar una lista de estudiantes. 
# El programa debe ofrecer las siguientes opciones:
# Agregar un nuevo estudiante con su nombre y su calificación.
# Mostrar la lista de estudiantes junto con sus calificaciones.
# Buscar un estudiante por nombre y mostrar su calificación.
# Eliminar a un estudiante de la lista.

studentlist = [["arnoldo", 10], ["kevin", 8], ["alex", 6], ["emiliano", 9]]


def printList():
    print('''
/////////////////////////////////////////////////
///////////// Printing student list /////////////
/////////////////////////////////////////////////''')
    listlength = len(studentlist)

    for i in range(listlength):
        print(f'''/////// Student name: {studentlist[i][0]} || Student grade: {studentlist[i][1]}
/////////////////////////////////////////////////''')

def addStudent():

    print('''
/////////////////////////////////////////////////
///////////// Add a student to list /////////////
/////////////////////////////////////////////////
          ''')
    
    studentname = input("///////////// Name: ")
    studentgrade = int(input("///////////// Grade: "))

    print(studentlist)

    student = [studentname, studentgrade]

    studentlist.append(student)
    print('''
/////////////////////////////////////////////////
///////////// Student Added to list /////////////
/////////////////////////////////////////////////
          ''')

def printStudent():
        valid = 0
        print('''
/////////////////////////////////////////////////
//////////// Input student to search ////////////
/////////////////////////////////////////////////
          ''')
        studentname = input("///////////// Name: ")
        listlength = len(studentlist)
        for i in range(listlength):
            if studentname == studentlist[i][0]:
                print('''
/////////////////////////////////////////////////
/////////////// Printing  student ///////////////
/////////////////////////////////////////////////''')
                print(f'''/////// Student name: {studentlist[i][0]} || Student grade: {studentlist[i][1]}
/////////////////////////////////////////////////''')
                valid+=1
        if valid == 0:
             print('''
/////////////////////////////////////////////////
/////// No student of that name available ///////
/////////////////////////////////////////////////''')

def deleteStudent():
            global studentlist
            print('''
/////////////////////////////////////////////////
//////////// Input student to delete ////////////
/////////////////////////////////////////////////
          ''')
            studentname = input("///////////// Name: ")

            listlength = len(studentlist)

            newlist = []

            for i in range(listlength):
                if studentlist[i][0] != studentname:
                    newlist.append(studentlist[i])
            studentlist = newlist
            print('''
/////////////////////////////////////////////////
/////////// Student deleted from list ///////////
/////////////////////////////////////////////////
          ''')
                     
        

    

def userMenu():
    print(f'''
/////////////////////////////////////////////////
/////// Welcome to the student review app ///////
/////////////////////////////////////////////////
///// Select an option //////////////////////////
/////////////////////////////////////////////////
[1] - Show student list /////////////////////////
[2] - Add a student /////////////////////////////
[3] - Look for a specific student ///////////////
[4] - Remove a student //////////////////////////
[5] - Exit application //////////////////////////
/////////////////////////////////////////////////

''')
    menuvar = input()

    match(menuvar):
        case("1"):
            printList()
        case("2"):
            addStudent()
        case("3"):
            printStudent()
        case("4"):
            deleteStudent()
        case("5"):
            print('''
/////////////////////////////////////////////////
//////////////////// Goodbye ////////////////////
/////////////////////////////////////////////////
          ''')
            exit()
        
while True:
     userMenu()