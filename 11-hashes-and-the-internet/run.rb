require 'pry'
require 'json'
require 'rest-client'

# take in input
puts "Welcom to our fancy book searcher thing. What term would you like to search:"
user_input = gets.chomp

formatted_input = user_input.tr(' ', '+')

url = "https://www.googleapis.com/books/v1/volumes?q=#{formatted_input}"

response = RestClient.get(url)
response_hash = JSON.parse(response)

books = response_hash["items"].map do |item|
  item["volumeInfo"]
end

# iterate over each book item
# print title, authors, and page count for each book

books.each do |book|
  puts book["title"]
  puts book["authors"]
  puts book["pageCount"]
  puts "*" * 15
end

binding.pry

# class RestClient
#   class Response
#     def initialize
#     end
#   end
# end