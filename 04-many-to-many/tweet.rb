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
    all_likes = Like.all

    my_likes = all_likes.select do |like|
      like.tweet == self
    end

    my_likes.map do |like|
      like.user
    end
  end
  
end