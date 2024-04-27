import { Button, Space } from "antd";
import VideoDisplayer from "../../components/VideoDisplayer";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Video() {
  const [playToggle, setPlayToggle] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlayVideo() {
    setPlayToggle(!playToggle);
    videoRef.current!.play();
  }

  function handlePauseVideo() {
    setPlayToggle(!playToggle);
    videoRef.current!.pause();
  }

  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <span
        className={`${
          theme?.theme === "light" ? "" : "text-white"
        } font-main font-semibold text-2xl`}
      >
        [MIXTAPE01N] 019VOVONG - CZS KEJO x CZS SOLSILVA [OFFICIAL VIDEO]
      </span>
      <VideoDisplayer ref={videoRef} />
      <Space>
        {playToggle ? (
          <Button onClick={handlePauseVideo}>Pause</Button>
        ) : (
          <Button onClick={handlePlayVideo} type="primary">
            Play
          </Button>
        )}
      </Space>
    </div>
  );
}
