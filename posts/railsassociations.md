---
title: 'Ruby On Rails Associations'
date: '2020-09-20'
---

This post's focus is creating associations with Ruby on Rails. We will start with a many-to-many relationship where users create meals, food, and logs to track their diet goals.

---

![alt text](https://images.unsplash.com/photo-1556905200-bd982f883637?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

---

    My project for this section centers around a many-to-many relationship where users create meals, food, and logs to track their diet goals.

    A good many-to-many relationship is centered around a join table, in this case it's the foodlogs, that keep track of how many foods each meal has using the :quantity integer.

    create_table :foodlogs do |t|
      t.integer :quantity

      t.belongs_to :food, null: false, foreign_key: true
      t.belongs_to :meal, null: false, foreign_key: true

      t.timestamps
    end

    Here the foodlog uses a belongs_to tag to set a foreign key for foods and meals on the foodlogs table. Active records uses the names from the classes defined in the table to set the foreign keys so they end up in this instance as food_id and meal_id. Declaring the relationship in the corresponding class models also creates a set of methods for the Foodlog class:

belongs_to :food
belongs_to :meal

association => Meal.find(meal_id)
--Reads the object

association=(associate) => foodlog.meal_id = meal.id
--Writes the object

build_association(attributes = {}) => foodlog.meal = Meal.new
--Builds an association between two objects

create_association(attributes = {}) => foodlog.meal = Meal.new, foodlog.save
--Builds and saves an association between two objects

    The inverse association shown in the Meal class:

    has_many :foodlogs
    has_many :foods, through: :foodlogs

    These methods allow for CRUD actions, as well as selecting specific parts of the collection, and many more.

    More information on the inherited methods here: https://www.rubydoc.info/docs/rails/4.1.7/ActiveRecord/Associations/HasManyAssociation

    The way that I have my tables set up allows two way communication between the foods and meals, through the foodlogs. This way, I can calculate and display macros on the foods, meals, and collections of either. One caveat to this set-up is that the user connection to foodlogs is one way. A user can make a foodlog through a meal, but not directly.

    By adding 'dependent: :destroy' to my Meal class, when I destroy a meal, it will also destroy any foodlogs that I created through the meal, This way my database is cleaned up and I don't have extra objects sitting around without proper associations.

has_many :foodlogs, dependent: :destroy

    Writing custom methods to calculate macros based on the food associations helps to be able to display more complex info in the views. With this one, I calculate the macros of each food item in a meal, multiplied by the quantity.

    def calculate_macros(macro = :calories)
        count = 0
        self.foodlogs.each do |foodlog|
            item = foodlog.quantity * foodlog.food.send(macro)
            count += item
        end
        count
    end

    Then, I can simply use the method on the meal being displayed in the show page:

    Carbs: <%= @meal.calculate_macros(:carbs) %>
    Fats: <%= @meal.calculate_macros(:fats) %>
    Proteins: <%= @meal.calculate_macros(:proteins) %>

    Let me know if this blog has helped in any way, thanks!
