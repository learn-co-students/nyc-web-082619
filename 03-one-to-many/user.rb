class User
  attr_reader :username#, :tweets

  def self.print_tweets
    # get all the user's tweets
    # print them on the screen in some fun way
  end
  
  def initialize(username)
    @username = username
    # @tweets = []
  end

  def post_tweet(message)
    # tweet = Tweet.new(message, self)
    # @tweets << tweet
    # tweet
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end
  
end