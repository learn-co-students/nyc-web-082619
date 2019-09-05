## Intro to ORM

## SWBATs

* [x] Follow code that is organized into different files
* [x] Define Object Relational Mapper (ORM)
* [x] Explain how the `sqlite` gem works as a driver or wrapper around SQL
* [x] Implement HEREDOCs to be saved in variables to be executed by SQL driver
* [x] Perform persistent CRUD actions on a model
* [x] Distinguish between ORM and SQL
* [x] Demonstrate that ORMs are the pattern connecting scripting languages and databases
* [ ] Explain to a peer all the things that happen when we call `Tweet.all` (your answer should include when SQL is fired & when Ruby objects are created)

## Object Relational Mapper (ORM)

* Pattern:
- pattern that maps database stuff to ruby stuff
- database table <--> class
- table column <--> attribute
- providing a interface to our databse in Ruby 

* Benefits
- only have to work with a single language
- extensibility and maintainability
- swap out ORMs, keep your Ruby code


## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

Authors

| id  | name |
|------|-------|
| 1   | Suzanne Collins |
| 2   | Karl Marx |
| 3   | Franz Kafka |
| 4   | Bram Stoker |
| 5   | Vladimir Nabokov |
| 6   | Nicholas Sparx |


Books

| id | title | page_count | author_id |
|-----|-------|------------|--------|
| 9  | Hunger Games | 300      | 1 |
| 10 | Communist Manifesto | 200 | 2 |
| 11 | Catching Fire | 300 | 1 |
| 12 | Dracula | 400 | 4 |
| 13 | Lolita | 300 | 5 |



Q: Write the SQL to find all books written by a certain author given the author's id.

`SELECT * FROM books WHERE author_id = 1;`

Q: Write the SQL to find all books written by a certain author given the author's name.

```sql
SELECT * 
FROM books 
JOIN authors 
ON books.author_id = authors.id
WHERE authors.name = "Suzanne Collins";
```

2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name.

Authors

| id  | name |
|------|-------|
| 1   | Suzanne Collins |
| 2   | Karl Marx |
| 3   | Franz Kafka |
| 4   | Bram Stoker |
| 5   | Vladimir Nabokov |
| 6   | Nicholas Sparx |
| 7   | Neil Gaiman |
| 8   | Terry Pratchet |


Books

| id | title                | page_count |
-----|----------------------|------------|
| 9  | Hunger Games         | 300        | 
| 10 | Communist Manifesto  | 200        | 
| 11 | Catching Fire        | 300        |
| 12 | Dracula              | 400        |
| 13 | Lolita               | 300        |
| 14 | Good Omens           | 400        |


Book_Authors

| id | book_id | author_id |
-----|---------|------------
| 1 | 9        | 1        |
| 2 | 10       | 2        |
| 3 | 14       | 7        |
| 4 | 14       | 8        |
| 5 | 11       | 1        |

Q: Write the SQL to find all books written by a certain author given their name
author = Suzanne Collins

```sql
SELECT *
FROM books
JOIN book_authors
ON books.id = book_authors.book_id
JOIN authors
ON authors.id = book_authors.author_id
WHERE authors.name = "Suzanne Collins";
```


3. Twitter where Tweets can have Tags (i.e. '#fun', '#learnlovecode', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?


# CRUD REVIEW
What are the four ways we can interact with data?

* Create  
SQL: `INSERT INTO books (title, page_count) VALUES ("Harry Potter", 399);`
Ruby: `Book.new('Harry Potter', 399)`


* Read  
SQL: `SELECT title FROM books WHERE title = "Harry Potter";`
Ruby: `Book.find_by_name("Harry Potter")`


* Update  
SQL: `UPDATE books SET title = "Harry Potter and the Philosopher's Stone" WHERE title = "Harry Potter";`
Ruby: `harry_potter.title = "Harry Potter and the Philosopher's Stone"`


* Destroy  
SQL: `DELETE FROM books WHERE title = "Harry Potter and the Philosopher's Stone";`
Ruby: `harry_potter.delete`



## Lecture Notes

### What does an ORM do?


### How does it help us?
