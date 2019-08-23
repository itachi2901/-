print("hello itachi")

name = "itachi"
print("Hello %s" %name)

# ユーザーからの入力
print("Your name ?", end="")
name = input()
print("Hello %s" %name)

# 数値を受け取って計算
print("Your number?", end="");
num = int(input())
print(num + 3)

# 条件に応じて表示
import random

answer = random.randint(1,10)
count = 0

while True:
    print("Your guess? ", end="")
    guess = int(input())
    # count = count + 1
    count +=1

    if answer == guess
        print("Bingo! It took %i guesses!", count)
        break
    elif answer > guess
        print("Bigger!")
    else:
        print("Smaller!")