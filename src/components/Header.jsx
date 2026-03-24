import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <a href="#home" className="font-sora font-extrabold text-2xl tracking-wider">
            Khushkamal<span className="text-accent">.</span>
          </a>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
