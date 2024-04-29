import { forwardRef, useImperativeHandle, useRef } from "react";

export type VideoHandler = {
  play: () => void;
  pause: () => void;
  toggleLoop: (isLoop: boolean) => void;
  toggleMuted: (isMuted: boolean) => void;
  setVolume: (volume: number) => void;
};

export default forwardRef<VideoHandler>(function VideoDisplayer(_props, ref) {
  const videoDisplayerRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => {
    return {
      play() {
        videoDisplayerRef.current!.play();
      },
      pause() {
        videoDisplayerRef.current!.pause();
      },
      toggleLoop(isLoop: boolean) {
        videoDisplayerRef.current!.loop = isLoop;
      },
      toggleMuted(isMuted: boolean) {
        videoDisplayerRef.current!.muted = !isMuted;
      },
      setVolume(volume: number) {
        videoDisplayerRef.current!.volume = volume;
      }
    };
  });

  return (
    <video
      className="rounded-md"
      src={"./video/music-vid.mp4"}
      width={750}
      loop
      ref={videoDisplayerRef}
      disablePictureInPicture
    />
  );
});
