NotesArray=[0,0,0,0,0]
def InputNotes():
    for i in range(len(NotesArray)):
        NotesArray[i]= int(input("Please input grade of student: "))
    StartScreen()

def DisplayNotes():
    for i in range(len(NotesArray)):
        print(NotesArray[i])
    StartScreen()

def CalcNoteAvg():
    sum=0
    for i in range(len(NotesArray)):
        sum+=NotesArray[i]
    sum=sum/len(NotesArray)
    print("Average total is:", sum)
    StartScreen()

def ModifyNote():
    ToMod=int(input("Please input which student's note you'd like to change (from 0 to 4): "))
    NewNote=int(input("Please input new value: "))
    NotesArray[ToMod]=NewNote
    StartScreen()

def OptionSelector(option):
    match str(option):
        case str("1"):
            DisplayNotes()
        case str("2"):
            InputNotes()
        case str("3"):
            ModifyNote()
        case str("4"):
            CalcNoteAvg()
        case _:
            print("Thank you for using this application.")
            return

def StartScreen():
    option=str(input('''
Welcome to this rudimentary student grading application.
Please input your desired action:
(1) Display Notes
(2) Wipe and input notes en masse
(3) Modify individual note
(4) Calculate total grade average
(0) Exit
>_ '''))
    OptionSelector(option)
    
StartScreen()