import React, { useEffect } from "react";
import vid from "../Assets/video2.mp4";
function Screen() {
  let videoRef = React.createRef();
  useEffect(() => {
    videoRef.current.autoplay = true;
    videoRef.current.addEventListener("ended", handleVideoEnd);
    videoRef.current.load();
    return () => {
      videoRef.current.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  function handleVideoEnd() {
    // code to load another element, for example
    console.log("video ended");
  }
  return (
    <div className="main">
      <div className="vid">
        <video
          ref={videoRef}
          autoPlay
          muted
          style={{ height: "100vh", width: "100vw-2" }}
        >
          <source src={vid} />
        </video>
      </div>
    </div>
  );
}

export default Screen;
