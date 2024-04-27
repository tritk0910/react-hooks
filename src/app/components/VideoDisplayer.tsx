import { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef(function VideoDisplayer(_props, ref) {
  const videoDisplayerRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        play() {
          videoDisplayerRef.current!.play();
        },
        pause() {
          videoDisplayerRef.current!.pause();
        },
      };
    },
    []
  );

  return (
    <video
      src={"./video/music-vid.mp4"}
      width={750}
      ref={videoDisplayerRef}
      disablePictureInPicture
    />
  );
});
