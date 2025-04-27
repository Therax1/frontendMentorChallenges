function Header(){
    return (
        <header className="header pt-10 pb-24 flex flex-col gap-28 bg-cta rounded-bl-footer text-white bg-right-top bg-cover bg-no-repeat">
            <nav className="navbar flex items-center justify-between w-[70%] mx-auto">
                <div className="title__navlinks flex items-end gap-12">
                    <h1 className="navbar__logo text-3xl font-bold">Blogr</h1>
                    <ul className="navbar__links flex gap-8">
                        <li><a href="#home">Product</a></li>
                        <li><a href="#about">Company</a></li>
                        <li><a href="#services">Connect</a></li>
                    </ul>
                </div>
                <div className="login-options flex gap-12">
                    <button className="login-option__login">Login</button>
                    <button className="login-option__signup text-cta-text py-2 px-8 bg-white rounded-3xl font-semibold">Sign Up</button>
                </div>
            </nav>

            <div className="cta mx-auto text-center flex flex-col gap-12">
                <div className="cta-title flex flex-col gap-4">
                    <h2 className="cta-title__heading text-6xl">A modern publishing platform</h2>
                    <p className="cta-title__description">Grow your audience and build your online brand</p>
                </div>
                <div className="flex gap-8 mx-auto">
                    <button className="cta-title__button text-cta-text py-2 px-6 bg-white rounded-3xl">Start for Free</button>
                    <button className="cta-title__button--secondary py-2 px-5 border rounded-3xl">Learn More</button>
                </div>
            </div>
        </header>
    );
}

export default Header;