"use client"
import {usePathname} from "next/navigation"
import { useMemo } from "react";
interface SidebarProps {
    children : React.ReactNode;
}

const Sidebar:React.FC<SidebarProps> = ({
    children
}) => {
    // To get current pathname
    const pathname = usePathname();
    // creates array for possible routes
    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], []);
    return ( 
        <div>{children}</div>
     );
}
 
export default Sidebar;