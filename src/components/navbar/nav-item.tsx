import Link from 'next/link';
interface NavItemProps {
  text: string;
  href: string;
  active: boolean;
}
const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link href={href} className={`nav__link`}>
      {text}
    </Link>
  );
};

export default NavItem;
