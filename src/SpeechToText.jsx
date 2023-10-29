// import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
// import { getTokenOrRefresh } from "./services/token_util.js";
//
// // eslint-disable-next-line no-undef
// import * as speechsdk from "microsoft-cognitiveservices-speech-sdk";
// export async function sttFromMic() {
//   const tokenObj = await getTokenOrRefresh();
//   const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
//     tokenObj.authToken,
//     tokenObj.region
//   );
//   speechConfig.speechRecognitionLanguage = "en-US";
//
//   const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
//   const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
//
//   this.setState({
//     displayText: "speak into your microphone...",
//   });
//
//   recognizer.recognizeOnceAsync((result) => {
//     let displayText;
//     if (result.reason === ResultReason.RecognizedSpeech) {
//       displayText = `RECOGNIZED: Text=${result.text}`;
//     } else {
//       displayText =
//         "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.";
//     }
//
//     this.setState({
//       displayText: displayText,
//     });
//   });
// }
