multof3 = []
multof5 = []


for i in 1..999
  if i % 3 ==0
    multof5.push(i)
  end
end

for i  in 1..999
  if i % 5 == 0
    multof3.push(i)
  end
end
#combine both 3 & 5 arrays
 both3and5 = multof3.concat multof5
#elim duplicate multi
uniq_of_3_and_5 = both3and5.uniq
#sum uniqs 
sum_of_both = uniq_of_3_and_5.inject(0) {|sum, i| sum + i}
puts sum_of_both
