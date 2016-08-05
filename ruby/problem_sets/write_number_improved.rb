def englishNumber number
  if number < 0 # No negative numbers.
    return 'Please enter a number that isn\'t nagative.'
  end
  if number == 0
    return 'zero'
  end

  #No more special casees! No more returns!

  numString = '' # This is the string we will return.

  onesPlace = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  tensPlace = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  teenagers = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  #left is how much of the number we still have left to write out.
  #"write" is the part we are writing out right now.
  # write and left... get it? :)
  left = number
  write = left/100 #How many hundreds left to write out?
  left = left - write*100 # Subtract off those hundreds.

  if write > 0 # Now here's a really sly trick:
    hundreds = englishNumber write
    numString = numString + hundreds + ' hundred'
    #That's called "recursion". So what did I just do?
    #I told this method to call itself, but with "write" instead of "number".
    # Remember that "write" is (at the moment) the number of hundreds we have to write out. After we add "hundreds" to "numString", we add the string ' hundred' after it.
    # So, for example, if we originally called englishNumber with 1999 (so "number" = 1999), then at this point "write" would be 19 and left would be 99. The laziest thing to do at this point is to have englishNumber write out the 'nineteen' for us, then we write out ' hundred', and then the rest englishNumber writes out 'ninety'
    if left > 0
      # So we don't write 'two hundredfifty-one'...
      numString = numString + ' '
    end
  end

  write = left/10
  left = left - write*10

  if write > 0
    if ((write == 1) and (left > 0))
      #since we can't write "twenty-two" instaed of "twelve", we have to make a special exception for these.
      numString = numString + teenagers[left-1]
      #the "-1" is because teenagers [3] is 'fourtenn', not 'thirteen'.
      # Since we took car of the digit in the once place already, we have nothing left to write.
      left = 0
    else
      numString = numString + tensPlace[write-1]
    end

    if left > 0
      numString = numString + '-'
    end
  end

  write = left # How many onse left to write out?
  left = 0 # Subtract off those ones.

  if write > 0
    numString = numString + onesPlace[write-1]
  end

  #now we just return "numString"...
  numString
end

puts englishNumber(17)
puts englishNumber(1599)
