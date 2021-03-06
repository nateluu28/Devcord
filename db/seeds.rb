# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Channel.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')

user1 = User.create!(
  username: 'supernate28',
  email: 'nate@gmail.com',
  password: '123123'
  )
user2 = User.create!(
  username: 'bob',
  email: 'bob@gmail.com',
  password: 'bobobo'
  )

user3 = User.create!(
  username: 'demo',
  email: 'demo@devcord.com',
  password: '123123'
  )

server1 = Server.create!(
  name: 'aA Discord',
  owner_id: user1.id
  )

server2 = Server.create!(
  name: 'banana Discord',
  owner_id: user1.id
  )

channel1 = Channel.create!(
  name: 'textChannel1',
  server_id: server1.id
  )

channel2 = Channel.create!(
  name: 'textChannel2',
  server_id: server1.id
  )

channel3 = Channel.create!(
  name: 'textChannel3',
  server_id: server2.id
  )

channel4 = Channel.create!(
  name: 'textChannel4',
  server_id: server2.id
  )

channel5 = Channel.create!(
  name: 'general',
  server_id: server2.id
  )

channel6 = Channel.create!(
  name: 'general discussion',
  server_id: server1.id
  )

channel7 = Channel.create!(
  name: 'funny',
  server_id: server2.id
  )

message1 = Message.create!(
  body: 'Hello!',
  messageable: channel1,
  author_id: user1.id
)

# CREATE MORE MESSAGES AND CREATE MORE CONVERSATIONS

