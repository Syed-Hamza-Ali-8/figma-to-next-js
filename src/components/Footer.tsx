import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-16 lg:mt-52 md:mt-52 mb-10">
            <div className="flex  justify-center gap-9">
                <Image
                    src="/fb.png"
                    alt="Facebook Logo"
                    width={30}
                    height={30}
                />
                <Image
                    src="/insta.png"
                    alt="Instagram Logo"
                    width={30}
                    height={30}
                />
                <Image
                    src="/twitter.png"
                    alt="Twitter Logo"
                    width={30}
                    height={30}
                />
                <Image
                    src="/Linkedin.png"
                    alt="LinkedIn Logo"
                    width={30}
                    height={30}
                />
            </div>
            <p className="text-center font-heebo py-10 text-lg font-semibold">
                Copyright &copy;2020 All rights reserved
            </p>
        </footer>
    );
};

export default Footer;