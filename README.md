# README

This README would normally document whatever steps are necessary to get the
application up and running.

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :groups_users
- has_many :messages
- has_many :groups through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|members|string|null: false|
|group_name|string|null: false|
### Association
- has_many :messages
- has_many :users through: :groups_users
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|groups|string|null: false,foreign_key: true|
|users|string|null: false,foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

##　messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user_id|string|null: false,foreign_key: true|
|group_id|string|null: false,foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group