import { NavbarLiProps } from "../types/componentTypes";
import Link from 'next/link';

const NavbarLi: React.FC<NavbarLiProps> = ({ name, href }) => {
    return (
        <div>
            <Link href={href} className='text-sm md:text-xl lg:text-xl sm:text-xl hover:text-customPink transition-colors duration-300 ease-in-out '><li>{name}</li></Link>
        </div>
    );
};

export default NavbarLi;