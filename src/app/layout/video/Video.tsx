import { Button, Space } from "antd";
import VideoDisplayer from "../../components/VideoDisplayer";
import { useContext, useRef, useState, ComponentRef } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Video() {
  const [playToggle, setPlayToggle] = useState<boolean>(false);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<ComponentRef<typeof VideoDisplayer>>(null);

  function handlePlayVideo() {
    setPlayToggle(!playToggle);
    videoRef.current!.play();
  }

  function handlePauseVideo() {
    setPlayToggle(!playToggle);
    videoRef.current!.pause();
  }

  function handleLoop() {
    setIsLoop(!isLoop);
    videoRef.current!.toggleLoop(isLoop);
  }

  function handleMute() {
    setIsMuted(!isMuted);
    videoRef.current!.toggleMuted(isMuted);
  }

  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <span
        className={`${
          theme?.theme === "light" ? "" : "text-white"
        } font-main font-semibold text-2xl color-transition`}
      >
        [MIXTAPE01N] 019VOVONG - CZS KEJO x CZS SOLSILVA [OFFICIAL VIDEO]
      </span>
      <div className="relative">
        <VideoDisplayer ref={videoRef} />
        <Space className="absolute opacity-0 hover:opacity-100 color-transition h-full w-full flex justify-center items-end bottom-2">
          {playToggle ? (
            <Button onClick={handlePauseVideo} type="primary">
              Pause
            </Button>
          ) : (
            <Button onClick={handlePlayVideo}>Play</Button>
          )}
          <Button onClick={handleLoop} type={isLoop ? "primary" : "default"}>
            Loop
          </Button>
          <Button onClick={handleMute} type={isMuted ? "primary" : "default"}>
            Mute
          </Button>
        </Space>
      </div>
    </div>
  );
}
