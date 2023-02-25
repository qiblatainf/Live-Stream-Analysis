url = "wss://sadiq.livekit.cloud"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tIjoic3RyZWFtZXIiLCJyb29tSm9pbiI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJjYW5QdWJsaXNoIjpmYWxzZSwiY2FuUHVibGlzaERhdGEiOmZhbHNlfSwiaWF0IjoxNjc2OTkxMDE0LCJuYmYiOjE2NzY5OTEwMTQsImV4cCI6MTY3NzAxMjYxNCwiaXNzIjoiQVBJY0ZnRHBMdUEyOVRnIiwic3ViIjoidmlld2VyIiwianRpIjoidmlld2VyIn0.q9JDNxdbWpPqRgk5xcFl2D1hIGVQBwB5ID-XhLnWx9k"

const livekit = require('livekit-client');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const WebSocket = require('ws');
const JWT = require('jsonwebtoken');

// sets up web environment
const dom = new JSDOM();
global.window = dom.window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
  // mediaDevices: {
  //   getUserMedia: async function(constraints) {
      
  //   }
  // }
};
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

// connect to room
const ws = new WebSocket(url);
ws.on('open', () => {
  console.log('connected to room');
  try {
    room.connect(ws, token);
  }
  catch(error) {
    console.err(error);
  }
});

// console.log('connected to room', room.name);
  
