import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Header = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Navigation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/">
                <NavigationMenuLink>Home</NavigationMenuLink>
              </Link>
              <Link href="/concerts">
                <NavigationMenuLink>Concerts</NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
