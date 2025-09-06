import { useEffect, useRef, useState, type JSX } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import Button from './Button';
import gsap from 'gsap';

const navItems: string[] = ['Home', 'Store', 'About', 'Contact'];

const Navbar = (): JSX.Element => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const { y: currentScrollY } = useWindowScroll();
  const lastScrollY = useRef(0);

  useEffect( () => {
    if(currentScrollY  === 0) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove('floating-nav');
    } 
    else if (currentScrollY > lastScrollY.current) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add('floating-nav');
    }
    else if (currentScrollY < lastScrollY.current) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add('floating-nav');
    }
    lastScrollY.current = currentScrollY;
    
  }, [currentScrollY])

  useEffect(() => {
    const navContainer = navContainerRef.current;
    if(!navContainer) return;

    gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
    })
  }, [isNavVisible]);

  const toggleAudioIndicator = (): void => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  }

  useEffect(() => {
    const audio = audioElementRef.current;
    if(!audio) return;
    
    if(isAudioPlaying) {
       void audio.play();
    } else {
        audio.pause();
    }
  }, [isAudioPlaying])

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all
    duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav  className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img src="/img/logo.png" alt="logo" className='w-10' />
                    <Button 
                        id='product-button'
                        title='Products'
                        rightIcon={<TiLocationArrow />}
                        containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                    />
                </div>

                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                        <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 
                                    'active': "" }`}  style={{ animationDelay: `${bar * 0.1}s`}}
                                />
                            ))}
                    </button>
                </div>

            </nav>
        </header>
    </div>
  )
}

export default Navbar