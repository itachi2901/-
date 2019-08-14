#!/bin/bash

name = "itachi"

echo "Morning $name"
echo "Hello ${name}san"


# $1 $2 (変数追加)
echo "hello $1"

# hello.sh a aa aaa

echo $0 # hello.sh
echo $# # 3
echo $@ # a aa aaa

#  ユーザーに入力してもらおう

read name
echo hello $name

read -p "Name: " name
echo hello $name

read -p "Pick 3 colors: " c1 c2 c3
echo $c1
echo $c2
echo $c3

# 配列を使ってみよう
colors = (red blue pink)
echo ${colors[0]} # red
echo ${colors[@]} # red blue pink
echo ${#colors[@]} # 3

# 配列変更
colors[1] = silver

# 配列追加
colors+=(green orange)
echo ${colors[@]}

# 数値計算をしてみよう
n = 5
((n=n+5))
echo $n # 10

# + - * / % ** ++ --

# ifで条件分岐
read -p "Name ? " name
if [ "$name" = "itachi" ]
then
    echo "welcome"
fi

if [ "$name" = "a" ]; then
    echo "welcome a"
elif [ "$name" = "b" ]; then
    echo "welcome b"
else
    echo "you are not allowed"
fi

# 文字列の比較をしてみよう
# [[]]
# = == != -z =~
read -p "Name ? " name
if [[ -z $name ]]; then
    echo "empty ..."
fi

# ファイルや数値の比較
# -e -f -d
if [[ -f $0 ]]; then
    echo "File exists ..."
fi

# forでループ処理
# for
for i in {1..5}; do
    echo $i
done

colors=(red blue pink)
for color in ${colors[@]}; do
    echo $color
done

# while
# continue, break

i=0
while ((i < 10)); do
    ((i++))

    if ((i == 3)); then
        continue
    fi

    if ((i == 7)); then
        break
    fi
    echo $i
done


while :
do
    read -p "Command? " cmd
    if [[ $cmd == "quit" ]]; then
        break
    else
        echo "$cmd"
    fi
done

# ファイルの内容を処理
# while

i=1
while read line; do
    echo $i "$line"
    ((i++))
done < colors.txt
# done

# caseで条件分岐
# case
read -p "Signal color? " color
case "$color" in
     red)
        echo "stop"
        ;;
     blue)
         echo "go"
         ;;
     yellow|green)
         echo "caution"
         ;;
     *)
         echo "wrong"
         ;;
esac

# selectでメニューを作る
# select

select color in red blue yellow green; do
    case "$color" in
         red)
            echo "stop"
            ;;
         blue)
             echo "go"
             ;;
         yellow|green)
             echo "caution"
             ;;
         *)
             echo "wrong"
             break
    esac
done

# 関数を使ってみます
# function hello()
hello() {
    # echo "Hello ... $1"

    if [[ $1 == "itachi" ]]; then
        return 0
    else
        return 1
    fi
}

# hello
# hello itachi
hello itachi; echo $? # 0
hello ita; echo $? # 1


# 変数のスコープを理解

hello() {
    # name="itachi"
    local name="itachi"
    echo "Hello ..."
}

hello
echo $name # itachi
