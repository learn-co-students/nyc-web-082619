require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Kemba Walker",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 7,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def num_points_scored(player_name)
  # get list of all the players  
  players = get_all_players   # [{}, {}, {}...]

  # find the player whose name matches the argument passed in
  player = find_player_by_name(players, player_name)

  # get the points from that player object
  player[:points]
end


def shoe_size(player_name)
  # how could we implement this similar to num_points_scored?
  # is there shared code we could extract into separate methods?
end

# [[], []]
def get_all_players
  players = game_hash.values.map do |team|
    team[:players]
  end # 2D array
  
  players.flatten
end

def find_player_by_name(players, player_name)
  players.find do |player|
    player[:player_name] == player_name
  end
end







 # write method called `double_all` that takes an array of numbers and returns an array of numbers that are the double of the number in the original array

 # sandwich pattern
def double_all(arr)
  doubles = []

  arr.each do |num|
    doubles.push(num * 2)
  end

  doubles
end

def double_array_map(arr)
  # arr.map { |num| num * 2 }
  
  arr.map do |num|
    num * 2
  end
end



# write method `get_instructor_names` that returns an array of strings of just the instructor name
# => ['Steven', 'Dana', 'Charlie']

instructors = [
  {name: 'Steven', hometown: 'Red Deer'},
  {name: 'Dana', hometown: 'Long Island Ville'},
  {name: 'Charlie', hometown: 'Prague'}
]


def get_instructor_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end
end
