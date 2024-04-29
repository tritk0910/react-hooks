import { Button, Slider, Space } from "antd";
import VideoDisplayer from "../../components/VideoDisplayer";
import { useRef, useState, ComponentRef } from "react";

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

  function onChangeComplete(value: number | number[]) {
    videoRef.current!.setVolume(value as number);
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <span className="dark:text-white font-main font-semibold text-2xl color-transition">
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
          <div className="h-20 absolute flex bottom-3 right-2">
            <Slider
              vertical
              defaultValue={1}
              min={0}
              step={0.01}
              max={1}
              tooltip={{ open: false }}
              onChange={onChangeComplete}
            />
          </div>
        </Space>
      </div>
    </div>
  );
}
