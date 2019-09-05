class Tweet
  attr_accessor :message, :username
  # @@all = []

  def initialize(username, message)
    @message = message
    @username = username

    # @@all << self
  end

  def save
    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (\"#{username}\", \"#{message}\");
    SQL

    DB[:conn].execute(sql)

    self
  end 

  def update_message
    # how would you implement this method?
  end  
  
  def delete
    # how would you implement this method?    
  end
  
  def self.all
    # @@all
    # all the tweets from my DB

    # HEREDOC 
    sql = <<-SQL
      SELECT *
      FROM tweets;
    SQL

    results = DB[:conn].execute(sql)    
    # binding.pry

    results.map do |row|
      Tweet.new(row["username"], row["message"])
    end
  end
end
