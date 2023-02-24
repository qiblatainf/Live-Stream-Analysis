url = "wss://sadiq.livekit.cloud"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tIjoic3RyZWFtZXIiLCJyb29tSm9pbiI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJjYW5QdWJsaXNoIjpmYWxzZSwiY2FuUHVibGlzaERhdGEiOmZhbHNlfSwiaWF0IjoxNjc2OTkxMDE0LCJuYmYiOjE2NzY5OTEwMTQsImV4cCI6MTY3NzAxMjYxNCwiaXNzIjoiQVBJY0ZnRHBMdUEyOVRnIiwic3ViIjoidmlld2VyIiwianRpIjoidmlld2VyIn0.q9JDNxdbWpPqRgk5xcFl2D1hIGVQBwB5ID-XhLnWx9k"

const livekit = require('livekit-client');
// const room = new livekit.Room(...);
// await room.connect(...);

  // creates a new room with options
const room = new livekit.Room({
    // automatically manage subscribed video quality
    adaptiveStream: true,

    // optimize publishing bandwidth and CPU for published tracks
    dynacast: true,

    // default capture settings
    videoCaptureDefaults: {
        resolution: livekit.VideoPresets.h720.resolution,
},
});

if (typeof window !== undefined) {
    console.log('You are on the browser,You are good to go')
    } else {
    console.log('You are on the server,Cannot execute')
   } // It will always go in else block
// connect to room
room.connect(url, token);

// console.log('connected to room', room.name);
  
