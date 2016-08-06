fibs = [0]

#While loop to calc fibs and push them to the array fibs
i = 1
while i <= 4000000
  i += fibs[fibs.length-2]
    fibs.push(i)
end

fibs_even = fibs.delete_if &:odd? #delete all odd numbers out of fibs
fib_sum = fibs_even.inject(0) {|sum, i| sum + i} # sum all ints in fibs_even
puts 'Sum of even Fibonacci ints under 4mil: ' + fib_sum.to_s #print sum
