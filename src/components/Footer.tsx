import { type JSX } from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

type SocialLink = {
    href: string,
    icon: JSX.Element,
}

const links: ReadonlyArray<SocialLink> = [ 
    { href: 'https://discord.com', icon: <FaDiscord /> },
    { href: 'https://x.com', icon: <FaXTwitter /> }, 
    { href: 'https://github.com', icon: <FaGithub />},
]

const Footer = (): JSX.Element => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-center gap-4 px-4
         md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; Nova 2025. All rights
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                { links.map((link) => (
                        <a 
                         key={link.href}
                         href='link.href'
                         target='_blank'
                         rel="noopener noreferrer"
                         className='text-black transition-colors duration-500 ease-in-out hover:text-white'
                        >
                          {link.icon}
                        </a>
                    )) 
                }
            </div>

            <a href="#privacy-policy" className='text-center text-sm hover:underline
             md:text-right'>Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer