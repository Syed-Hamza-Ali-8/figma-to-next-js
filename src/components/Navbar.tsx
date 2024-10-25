import NavbarLi from "./NavbarLi";

const Navbar = () => {
    return (
        <nav className='text-black'>
            <ul className='flex justify-center md:justify-end lg:justify-end gap-6 p-8 font-inter my-4 mx-4'>
                <NavbarLi name='Works' href='/' />
                <NavbarLi name='Blog' href='/' />
                <NavbarLi name='Contact' href='/' />
            </ul>
        </nav>
    );
};

export default Navbar;