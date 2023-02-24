from livekit import RoomServiceClient

#joiner token
url = "wss://sadiq.livekit.cloud"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tIjoic3RyZWFtZXIiLCJyb29tSm9pbiI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJjYW5QdWJsaXNoIjpmYWxzZSwiY2FuUHVibGlzaERhdGEiOmZhbHNlfSwiaWF0IjoxNjc2OTkxMDE0LCJuYmYiOjE2NzY5OTEwMTQsImV4cCI6MTY3NzAxMjYxNCwiaXNzIjoiQVBJY0ZnRHBMdUEyOVRnIiwic3ViIjoidmlld2VyIiwianRpIjoidmlld2VyIn0.q9JDNxdbWpPqRgk5xcFl2D1hIGVQBwB5ID-XhLnWx9k"


client = RoomServiceClient("joiner", url, token)
#client.mute_published_track(room="<room name>", track="<track sid>")