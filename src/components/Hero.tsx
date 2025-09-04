import { useRef, useState } from "react"

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadedVideos, setLoadedVideos] = useState<number>(0);

    const totalVideos: number = 4;
    const nextVideoRef = useRef<HTMLVideoElement | null> (null);

    const upComingVideoIndex: number = (currentIndex % totalVideos) + 1;

    const handleVideoLoad = (): void => {
        setLoadedVideos((prev => prev + 1));
    };

    const handleMiniVdClick = (): void => {
        setHasClicked(true);

        setCurrentIndex(upComingVideoIndex);
    };

    const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div  className="mask-clip-path absolute-center absolute
                z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 
                    transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video 
                            ref={nextVideoRef} 
                            src={getVideoSrc(currentIndex)}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero