function Footer() {
  return (
    <footer className="bg-footerBg text-white flex items-center justify-center py-10 px-12 gap-44 font-ubuntu rounded-tr-footer flex-wrap"> 
      <div className="self-start">
        <h1 className="text-3xl font-bold">Blogr</h1>
      </div>
      <div className="product-footer flex flex-col gap-7 self-start">
        <h2 className="text-base grow">Product</h2>
        <ul  className="flex flex-col gap-2 text-footer text-sm">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#marketplace">Marketplace</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#integrations">Integrations</a></li>
        </ul>
      </div>
      <div className="Company flex flex-col gap-7 self-start">
        <h2 className="text-base">Company</h2>
        <ul className="flex flex-col gap-2 text-footer text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>
      <div className="Connect flex flex-col gap-7 self-start">
        <h2 className="text-base">Connect</h2>
        <ul className="flex flex-col gap-2 text-sm text-footer">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
