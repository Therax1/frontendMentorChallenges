import { useState } from "react";


function Header(){
    const [isOpen, setIsOpen] = useState(null);


    return (
        <header className="header pt-10 pb-24 flex flex-col gap-60 bg-cta bg-[140%] rounded-bl-footer text-white bg-no-repeat h-screen bg-cover">
            <nav className="navbar flex items-center justify-between w-[70%] mx-auto">
                <div className="title__navlinks flex items-end gap-12">
                    <a href="#logo" className="navbar__logo">
                        <img 
                            src="/assets/logo.svg"  // Chemin depuis le dossier `public/`
                            alt="" 
                        />
                    </a>
                    <ul className="navbar__links flex gap-8">
                        <li 
                            className="relative"
                            onMouseEnter={() => setIsOpen('product')}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <li  className="flex items-center gap-2 cursor-pointer">
                                <a href="#home">Product</a>
                                <img 
                                    src="/assets/icon-arrow-light.svg" 
                                    alt="" 
                                    className= {` transition-all duration-300
                                    ${isOpen === 'product' ? 'rotate-180' : ''}`}
                                />
                            </li>
                            <div className="">
                                <ul 
                                    className={`bg-white flex flex-col gap-2 absolute text-headings p-6 rounded-md max-w-[135px] transition-all duration-300
                                    ${isOpen === 'product' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                >
                                    <li className="cursor-pointer hover:font-semibold">Overview</li>
                                    <li className="cursor-pointer hover:font-semibold">Pricing</li>
                                    <li className="cursor-pointer hover:font-semibold">Marketplace</li>
                                    <li className="cursor-pointer hover:font-semibold">Features</li>
                                    <li className="cursor-pointer hover:font-semibold">Integrations</li>
                                </ul>
                            </div>
                        </li>
                        <li 
                            className="relative"
                            onMouseEnter={() => setIsOpen('company')}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <li className="flex items-center gap-2 cursor-pointer">
                                <a href="#about">Company</a>
                                <img 
                                    src="/assets/icon-arrow-light.svg" 
                                    alt="" 
                                    className= {` transition-all duration-300
                                    ${isOpen === 'company' ? 'rotate-180' : ''}`}
                                />
                            </li>
                            <div className="">
                                <ul 
                                    className={`bg-white flex flex-col gap-2 absolute text-headings p-6 rounded-md max-w-[100px] transition-all duration-300
                                    ${isOpen === 'company' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                >
                                    <li className="cursor-pointer hover:font-semibold">About</li>
                                    <li className="cursor-pointer hover:font-semibold">Team</li>
                                    <li className="cursor-pointer hover:font-semibold">Blog</li>
                                    <li className="cursor-pointer hover:font-semibold">Careers</li>
                                </ul>
                            </div>
                        </li>
                        <li 
                            className="relative"
                            onMouseEnter={() => setIsOpen('connect')}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <li className="flex items-center gap-2 cursor-pointer">
                                <a href="#services">Connect</a>
                                <img 
                                    src="/assets/icon-arrow-light.svg" 
                                    alt="" 
                                    className= {` transition-all duration-300
                                    ${isOpen === 'connect' ? 'rotate-180' : ''}`}
                                />
                            </li>
                            <div className="">
                                <ul 
                                    className={`bg-white flex flex-col gap-2 absolute text-headings p-6 rounded-md max-w-[123px] transition-all duration-300
                                    ${isOpen === 'connect' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                >
                                    <li className="cursor-pointer hover:font-semibold">Contact</li>
                                    <li className="cursor-pointer hover:font-semibold">Newsletter</li>
                                    <li className="cursor-pointer hover:font-semibold">LinkedIn</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="login-options flex gap-12">
                    <button className="login-option__login">Login</button>
                    <button className="login-option__signup text-cta-text py-2 px-8 bg-white rounded-3xl font-semibold
                    hover:bg-cta-hoverbg hover:text-white transition-color duration-300 ">Sign Up</button>
                </div>
            </nav>

            <div className="cta mx-auto text-center flex flex-col gap-12">
                <div className="cta-title flex flex-col gap-8">
                    <h2 className="cta-title__heading text-6xl font-semibold">A modern publishing platform</h2>
                    <p className="cta-title__description text-xl text-footer">Grow your audience and build your online brand</p>
                </div>
                <div className="flex gap-8 mx-auto">
                    <button className="cta-title__button font-semibold text-cta-text py-2 px-4 bg-white rounded-3xl
                    hover:bg-cta-hoverbg hover:text-white transition-color duration-300">
                        Start for Free
                    </button>
                    <button className="cta-title__button--secondary py-2 px-5 border rounded-3xl">Learn More</button>
                </div>
            </div>
        </header>
    );
}

export default Header;