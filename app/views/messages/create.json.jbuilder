json.(@message, :content, :image)
json.created_at @message.created_atstrftime('%Y年%m月%d日 %H:%M')
json.user_name @message.user.name
json.id @message.id
