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
|name|string|null: false|

##Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

#groupsテーブル

|column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

##Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

#membersテーブル

|coloumn|Type|Options|
|-------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

##Association
- belongs_to :user
- belongs_to :group