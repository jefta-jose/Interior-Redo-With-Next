import Link from "next/link";

//Hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/services', name: 'Services' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/projects', name: 'Projects' },
    { path: '/events', name: 'Events' },
    { path: '/blogs', name: 'Blogs' },
    { path: '/contact', name: 'Contact Us' },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles , onLinkClick }) => {

    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {
                links.map((link, index) => {
                    return (
                        <Link
                        href={link.path}
                        key={index}
                        className={`uppercase ${linkStyles}`}
                        onClick={onLinkClick}
                        >
                            {link.path === path && (
                                <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`} 
                                />
                            )}
                        {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Nav