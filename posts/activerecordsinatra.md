---
title: 'Active Record and ORM with Sinatra'
date: '2020-08-19'
---

This post's focus is creating a Content Management System using Model View Controller, stored in a database. This separation of duties puts all of the data and logic in the Model; the forms, html, css, and rendering in the views, and the controller is the in between that controls access and flow.

---

![alt text](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

---

Enter Sinatra and Active Record, a good way to persist data in an app, combined with Sqlite3. I started my journey learning SQL commands and database relations. Starting with a solid understanding of how your database is a good way to know how to build your routes. Here is an example of my characters table. Tables are always pluralized and sometimes reserved words like "class" have to be replaced with "klass" to avoid conflicts. The last datatype in the characters table is a reference to another table showing that a character belongs to a user. This shows a belongs_to relationship. When you want to have a many-to-many relationship where two classes can own a various number of each other, you need a join table, where the table name is both classes together with id's from both sides, and belongs_to both other tables.

    create_table :teams do |t|
      t.string :name
      t.string :description

      t.belongs_to :user
    end

    create_table :characters do |t|
      t.string :name
      t.string :klass
      t.string :ability

      t.belongs_to :user
    end

    create_table :character_teams do |t|
      t.belongs_to :character
      t.belongs_to :team
    end

Then I moved on to Object Relational Mapping and how ActiveRecord works, which provide CRUD actions in the models.

Writing extendable class methods like below, help to search and sort through data, combined with search forms, and restrictions in the views for authorization to view user data.

        def search(query)
            if !!query
                self.where("name LIKE ?", "%#{query}%")
            else
                self.all
            end
        end

        def sort_by_name
            self.order(name: :asc)
        end

Finally, bringing it all together with routes in Sinatra. Routing makes a lot of sense from a navigation perspective, but I learned a lot about dynamic routing where the input (:id), is a variable that takes in whatever argument you pass in the link and sends you to the related path.

             Ex. http://google.com/:id
              => http://google.com/kevin

This way you can redirect to a dynamic list of data where you can access and change all of its properties, and not have to update the path. It can also complicate things, where you need to make sure that all named routes appear before dynamic ones, or Sinatra will think it is just another dynamic one, and it won't find the right directions.

Learning about cookies and sessions was a big step as well. A cookie is a local hash, accessible in your browser, that gets submitted with each request you make. It stays in between visits to a page, so you don't have to login and prove who you are every time you want to do something. A session is the counterpart to that cookie as an object stored locally and on a server, that is used to validate you are who you are claiming to be with the cookie. A username and password are used to create a login for your cookie. Another thing this helps with is authorization, so you can control what data each user is able to see and edit.

One big hurdle was understanding how a password should be stored, and that is, that it shouldn't. Rather a salted, hashed version of the password so that even if it gets stolen, it will be hard to recreate, rather than just read. For this project, I used the gem Bcrypt to create my hashed passwords.(https://rubygems.org/gems/bcrypt/versions/3.1.12) I have decided to change how I make my passwords, into longer unrelated strings, rather than more complex, shorter ones.

Logging in and out is an important step in user flow for any app. Below is some of my code from my sessions controller:

get "/login" do
reroute_if_logged_in
end

post "/login" do
sanitize_input(params)
user = User.find_by_name(params[:user][:name])
if user && user.authenticate(params[:user][:password])
session[:user_id] = user.id
redirect to "/users/#{current_user.id}"
else
flash[:alerts] = ["Wrong email or password. Please try again."]
redirect to "/login"
end
end

get "/logout" do
session.clear
redirect to "/"
end
It reroutes back to the main page if you are not logged in, which shows a login button. If you try to log in, it will sanitize your input to prevent an SQL injection attack, and find your user by name. If you exist and are able to authenticate, then it logs you in and redirects you to your user page. If it fails, it flashes an error and redirects back to login.

After finishing the routes, I got a chance to practice some HTML and CSS to style my design.
