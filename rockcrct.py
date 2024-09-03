import random
Rock="""
       ------)
----'  (-----)
        (----)
        (----)
---,  --(---)
ROCK
        """
Paper="""
     ---------)
---' ---)------)
     ---)--------)
     ----)------)
     ----)-----)
     PAPER
     """
Scissor="""
    ---)
---' ---)
    -------)
    -------)
    ----)
---, --)
SCISSOR
"""

game_img=[Rock,Paper,Scissor]


user=int(input("enter a number 0.rock 1.Paper 2.Scissor"))
if user>=3 or user<0:
    print("not possible")
else:
    print(game_img[user])
    computer=random.randint(0,2)
    print("computer chose:")
    print(game_img[computer])
    if user==computer:
        print("it's draw")
    elif user==0 and computer==2:
        print("you won")
    elif computer==0 and user==2:
        print("you lost")
    elif user>computer:
        print("you won")
    elif computer>user:
        print("computer won")

