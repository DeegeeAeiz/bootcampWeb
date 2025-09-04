def OptionSelector(option):
    match str(option):
        case str("1"):
            print("You selected option 1")
        case str("2"):
            print("You selected option 1")
        case str("3"):
            print("You selected option 1")
        case str("4"):
            print("You selected option 1")
        case _:
            print("You selected the default option")
            return

def StartScreen():
    option=str(input("Select an option "))
    OptionSelector(option)
    
StartScreen()

