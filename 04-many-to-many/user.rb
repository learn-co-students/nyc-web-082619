class User
  attr_reader :username#, :tweets
  
  @@all = []
  
  def initialize(username)
    @username = username

    @@all << self
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
    #<User:0x0afafaf>
  end

  def like_tweet(tweet)
    Like.new(tweet, self)
  end

  # binding.pry

  def self.by_name(name)
    self.all.find do |user|
      user.username == name
    end
  end
  
  def self.all
    @@all
  end
  
end