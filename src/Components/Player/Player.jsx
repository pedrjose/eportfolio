import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import "./Player.css";

export function PlayerProject({ props }) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <ReactPlayer
          controls
          height={widthScreen > 790 ? "300px" : "130px"}
          width={widthScreen > 790 ? "600px" : "260px"}
          url={props.urlVideo}
          onReady={() => console.log("onReady Callback")}
          onStart={() => console.log("onStart Callback")}
          onPause={() => console.log("onPause Callback")}
          onEnded={() => console.log("onEnded Callback")}
          onError={() => console.log("onError Callback")}
        />
      </div>
    </>
  );
}
