
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Home, Settings, User, Menu, X } from 'lucide-react';
// import { useRouter } from "next/navigation"

// const SidebarContainer = styled.div<{ $isOpen: boolean }>`
//   width: 250px;
//   height: 100vh;
//   background-color: #2c3e50;
//   color: white;
//   padding: 20px;
//   transition: transform 0.3s ease-in-out;
//   position:fixed;
//   top:0;
//   left:0;

//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 1000;
//     transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
//   }
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   margin-bottom: 30px;
//   text-align: center;
// `;

// const NavItem = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #34495e;
//   }

//   svg {
//     margin-right: 10px;
//   }
// `;

// const MobileMenuButton = styled.button`
//   display: none;
//   position: fixed;
//   top: 10px;
//   left: 10px;
//   z-index: 1001;
//   background: none;
//   border: none;
//   color: #2c3e50;
//   font-size: 24px;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const navItems = [
//     { icon: <Home />, label: 'Dashboard', path: '/' },
//     { icon: <User />, label: 'Members', path: '/members' },
//     { icon: <Settings />, label: 'Data sources', path: '/data-sources' },
//   ];


// const Sidebar: React.FC = () => {
//     const router = useRouter()
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <MobileMenuButton onClick={toggleSidebar}>
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </MobileMenuButton>
//       <SidebarContainer $isOpen={isOpen}>
//         <Logo>Communicate.so
//         </Logo>
//         {navItems.map((item, index) => (
//     <NavItem key={index} onClick={() => router.push(item.path)}  >
//       {item.icon}
//       {item.label}
//     </NavItem>
//   ))}
//       </SidebarContainer>
//     </>
//   );
// };

// export default Sidebar;


//import React, { useState } from 'react';
//import { Home, Settings, User, Menu } from 'lucide-react';
//import { useRouter } from "next/navigation";

// const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
//   return (
//     <div className={`fixed top-0 left-0 h-screen w-64 bg-[#2c3e50] text-white p-5 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>  
//       <h1 className="text-2xl mb-8 text-center">Logo</h1>
//       <div className="flex flex-col">
//         <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700 transition-colors duration-300">
//           <Home className="mr-2" /> Home
//         </div>
//         <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700 transition-colors duration-300">
//           <Settings className="mr-2" /> Settings
//         </div>
//         <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700 transition-colors duration-300">
//           <User className="mr-2" /> Profile
//         </div>
//       </div>
//       <button className="fixed bottom-5 left-5 md:hidden">
//         <Menu />
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, BetweenHorizontalStart, BetweenHorizontalEnd, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const navItems = [
    { icon: <LayoutDashboard />, label: "Dashboard", path: "/" },
    { icon: <BetweenHorizontalEnd />, label: "Data Sources", path: "/data-sources" },
    { icon: <BetweenHorizontalStart />, label: "Content", path: "/content" },
    { icon: <User />, label: "Members", path: "/members" },
  ];

  const pathName = usePathname();
  return pathName.startsWith("/auth/") ? null : (
    <div
      className={` inset-y-0 h-screen w-64 bg-[#22273F] text-white p-5 transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:block hidden`}
    >
      {/* Logo */}
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl mb-8 text-center">Shivam</h1>
      </div>

      {/* Navigation */}
      <div className="flex flex-col space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center p-2 cursor-pointer transition-colors duration-300 rounded-lg ${
              pathName === item.path ? "text-primaryColor" : "hover:bg-gray-700"
            }`}
          >
            <span className={`${pathName === item.path ? "text-primaryColor" : ""}`}>{item.icon}</span>
            <span className={`ml-6 text-[14px] leading-[20px] tracking-normal ${pathName === item.path ? "text-primaryColor" : ""}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white mt-4"></div>
    </div>
  );
};

export default Sidebar;
