import {
  RiInstagramLine,
  RiDribbbleLine,
  RiGithubLine,
} from 'react-icons/ri';

export const socialData = [
  { name: 'Instagram', link: 'https://instagram.com',  Icon: RiInstagramLine },
  { name: 'Dribbble',  link: 'https://dribbble.com',   Icon: RiDribbbleLine },
  { name: 'Github',    link: 'https://github.com/khushkamal',     Icon: RiGithubLine },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <a
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === 'Github'
              ? 'bg-accent rounded-full p-[5px] hover:bg-white hover:text-accent'
              : 'hover:text-accent'
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
