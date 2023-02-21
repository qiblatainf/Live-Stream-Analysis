import requests


myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tIjoic3RyZWFtZXIiLCJyb29tSm9pbiI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJjYW5QdWJsaXNoIjpmYWxzZSwiY2FuUHVibGlzaERhdGEiOmZhbHNlfSwiaWF0IjoxNjc2OTgwMjczLCJuYmYiOjE2NzY5ODAyNzMsImV4cCI6MTY3NzAwMTg3MywiaXNzIjoiQVBJY0ZnRHBMdUEyOVRnIiwic3ViIjoidmlld2VyIiwianRpIjoidmlld2VyIn0.e_4iPqcRbS-ONl7XgwfQxGC6Egvye68Clco85DurPS0"
myUrl = "wss://sadiq.livekit.cloud"
head = {'Authorization': 'token {}'.format(myToken)}
response = requests.get(myUrl, headers=head)

print(response.json())