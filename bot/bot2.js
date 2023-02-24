const livekit = require('livekit-client');

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

// set up event listeners
room
  .on(livekit.RoomEvent.TrackSubscribed, handleTrackSubscribed)
  .on(livekit.RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed)
  .on(livekit.RoomEvent.ActiveSpeakersChanged, handleActiveSpeakerChange)
  .on(livekit.RoomEvent.Disconnected, handleDisconnect)
  .on(livekit.RoomEvent.LocalTrackUnpublished, handleLocalTrackUnpublished);

// connect to room
room.connect("wss://sadiq.livekit.cloud", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tIjoic3RyZWFtZXIiLCJyb29tSm9pbiI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJjYW5QdWJsaXNoIjpmYWxzZSwiY2FuUHVibGlzaERhdGEiOmZhbHNlfSwiaWF0IjoxNjc2OTkxMDE0LCJuYmYiOjE2NzY5OTEwMTQsImV4cCI6MTY3NzAxMjYxNCwiaXNzIjoiQVBJY0ZnRHBMdUEyOVRnIiwic3ViIjoidmlld2VyIiwianRpIjoidmlld2VyIn0.q9JDNxdbWpPqRgk5xcFl2D1hIGVQBwB5ID-XhLnWx9k");
console.log('connected to room', room.name);

// publish local camera and mic tracks
room.localParticipant.enableCameraAndMicrophone();

function handleTrackSubscribed(
  track,
  publication,
  participant,
) {
  if (track.kind === livekit.Track.Kind.Video || track.kind === livekit.Track.Kind.Audio) {
    // attach it to a new HTMLVideoElement or HTMLAudioElement
    const element = track.attach();
    parentElement.appendChild(element);
  }
}

function handleTrackUnsubscribed(
  track,
  publication,
  participant,
) {
  // remove tracks from all attached elements
  track.detach();
}

function handleLocalTrackUnpublished(track, participant) {
  // when local tracks are ended, update UI to remove them from rendering
  track.detach();
}

function handleActiveSpeakerChange(speakers) {
  // show UI indicators when participant is speaking
}

function handleDisconnect() {
  console.log('disconnected from room');
}