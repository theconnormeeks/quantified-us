# Goal: 
# to retrieve youtube watch time for my youtube account via google api

# References:
# https://developers.google.com/apis-explorer
# https://developers.google.com/youtube/v3/docs/

from googleapiclient.discovery import build



api_key = '' # enter api_key here
channel_id =  'UCKNB3EYMKc2jiPE_19DhlYQ' #theconnormeeks youtube channel

youtube = build('youtube', 'v3', developerKey = api_key)

request = youtube.channels().list(
    part = 'snippet',
    id = channel_id
)

# request = youtube.activities().list(
#     part = 'snippet',
#     channelId = channel_id
# )

# request = youtube.playlists().list(
#     part = 'snippet',
#     channelId = channel_id
# )

# request = youtube.subscriptions().list(
#     part = 'snippet',
#     id = channel_id
# )

response = request.execute()


print(response)

