#Messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|------|
|image|string|------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

##Association
- belongs_to :user
- belongs_to :group

#usersテーブル

|column|Type|Options|
|------|----|-------|
|user_name|string|null: false|

###Gem devise

##Association
- has_many :messages
- has_many :group, through: :member

#groupsテーブル

|column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

##Association
- has_many :messages
- has_many :user, through: :member 

#membersテーブル

|coloumn|Type|Options|
|-------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|