# 簡単なゲームを作りながら基礎を学んでいきます

answer = rand(10) + 1
count = 0

loop do
  print "Your guess? "

  # 数値への変換
  guess = gets.to_i
  count += 1

  if answer == guess
    puts "Bingo! It look #{count} guesses!"
    break
  elsif answer > guess
    puts "Bigger!"
  else
    puts "Smaller!"
  end
end
