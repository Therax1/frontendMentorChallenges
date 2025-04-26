function Navbar (){
    return (
        <nav className="navbar">
        <div className="navbar__logo">MyApp</div>
        <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about"> </a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    );
}

export default Navbar;