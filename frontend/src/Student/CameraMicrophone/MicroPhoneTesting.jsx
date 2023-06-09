import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const MicroPhoneTesting = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="p-10 border-t-2 border-black mt-10 ">
      <h2 className="font-bold text-lg mb-5">
        Microphone and Speech-Converter Section
      </h2>
      <p className="font-bold mb-2">
        Microphone:{" "}
        <span className="bg-red-400 text-lg font-semibold p-1 border-2 border-black">
          {listening ? "on" : "off"}
        </span>
      </p>
      <div className="mb-3">Click on start before giving the answer.</div>
      <div className="flex items-center mb-4">
        <button
          onClick={SpeechRecognition.startListening}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 ml-0  pr-3 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
        >
          Stop
        </button>
        <button
          onClick={resetTranscript}
          className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
        >
          Reset
        </button>
      </div>
      <p className="border-2 border-black p-5 font-semibold text-xl text-blue-500">
        {transcript}
      </p>
    </div>
  );
};

export default MicroPhoneTesting;
