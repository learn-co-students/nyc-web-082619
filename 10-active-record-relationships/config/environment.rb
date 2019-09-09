require 'bundler/setup'
Bundler.require

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', # MySQL, Postgres, Oracle
  database: "db/development.sqlite"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

require_all 'app'


# class ActiveRecord
#   class Base
#     def self.establish_connection
#     end
#   end
# end