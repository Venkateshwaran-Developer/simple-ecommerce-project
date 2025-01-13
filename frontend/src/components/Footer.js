import React from "react";
import './Footer.css';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API", "Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];
const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "Twitch",
    icon: FaTwitch,
    link: "https://twitch.com/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/",
  },
];

export default function Footer({theme,setLogout}) {

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <div className={`footer ${theme} relative w-full text-white py-5 px-12`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
                <h6 className="font-bold uppercase pt-2">{section.title}</h6>
                <ul>
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="py-1 text-white hover:text-black cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                </ul>
          </div>
        ))}
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest updates, articles and resources, sent to your inbox
            weekly.
          </p>
          <form className="!flex !flex-col !sm:flex-row xs:w-full">
            <input
              type="email"
              placeholder="Enter email address"
              className="!w-full border-none outline-none text-black p-2 sm:mr-40 md:mr-40 rounded-md mb-4"
            />
            <button className="p-2 mb-4 md:mr-40">Subscribe</button>
            <button onClick={logoutHandler} className="p-2 bg-black rounded-lg hover:bg-red-800 md:mr-40 ">Logout</button>
            
          </form>
        </div>
      </div>
     
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
            <p className="py-4">
            Shop_cart - @2024, LLC. All rights reserved.
            </ p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                {
                    items.map((x,index)=>{
                    return <x.icon key={index} className="hover:text-black cursor-pointer"/>
                    })
                }
            </div>
        </div>
      </div>
  );
}
