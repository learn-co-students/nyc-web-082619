require 'spec_helper'
require_relative '../lib/palindrome'

RSpec.describe Palindrome do
  describe '#check_for_palindrome' do
    let(:palindrome) { Palindrome.new }
  
    it 'returns true when given a palidrome' do
      word = 'poop'

      result = palindrome.check_for_palindrome(word)

      expect(result).to be true
    end

    it 'returns false when not given a palindrome' do
      word = 'fox'

      result = palindrome.check_for_palindrome(word)

      expect(result).to be false
    end

    xit 'returns *something* when given a single letter'
    xit 'return *something* when given a number'
    
  end 
end