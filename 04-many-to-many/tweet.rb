class Tweet
  attr_reader :message, :user

  @@all = []
  
  def self.all
    @@all
  end
  
  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end

  def username
    self.user.username
  end
  
  def likers
    likes = Like.all
    liked_tweets = likes.select do |like|
      like.tweet == self
    end

    liked_tweets.map do |liked_tweet|
      liked_tweet.user
    end
  end
  
end