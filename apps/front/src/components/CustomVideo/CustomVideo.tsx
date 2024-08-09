import { forwardRef, VideoHTMLAttributes } from "react";

type CustomVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export const CustomVideo = forwardRef<HTMLVideoElement, CustomVideoProps>(
  (props, ref) => {
    return (
      <video
        ref={ref}
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Masseur performing a relaxing back massage in a calm and warm environment at Massage Studio Noord."
        {...props}
      />
    );
  },
);
