class Palindrome
  def check_for_palindrome(word)
    reversed = word.reverse
    word == reversed
  end
end