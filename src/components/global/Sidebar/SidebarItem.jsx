import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




// This component is used to render the sub-menu items when hovered
function HoveredSubMenuItem({ icon, text, active, url }) {
  return (
    <div
      className={`my-2 rounded-md p-2 ${
        active ? 'bg-gray-300' : ' hover:bg-indigo-50'
      }`}
    >
      <div className="flex items-center justify-center ">
        <span className="text-primary-500 h-6 w-6 ">{icon}</span>
        <span className="text-primary-500 ml-3 w-28 text-start">{text}</span>
        <div className="bg-primary-200 h-1" />
      </div>
    </div>
  );
}

export default function SidebarItem({
  icon,
  active = false,
  text,
  expanded = false,
  subMenu = null,
  url = null,
}) {
  const [expandSubMenu, setExpandSubMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!expanded) {
      setExpandSubMenu(false);
    }
  }, [expanded]);

  // Calculate the height of the sub-menu assuming each item is 40px tall
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 40 + (subMenu ? 15 : 0)).toString()}px`
    : 0;

    const handleClick = (link) => {
      setExpandSubMenu((curr) => expanded && !curr)
      if(link){
        navigate(link)
      }
    }
  return (
    <>
      <li className='hover:bg-graydark'>
        <button
          className={`
         group relative my-1 flex w-full cursor-pointer
         items-center rounded-md px-3
         py-2 font-medium transition-colors
         ${
           active && !subMenu
             ? 'text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100'
             : 'text-gray-600 hover:bg-indigo-50'
         }
         ${!expanded && 'hidden sm:flex'}
     `}
          onClick={() => handleClick(!subMenu ? url : '')}
        >
          <span className="h-6 w-6 text-white">{icon}</span>

          <span
            className={`overflow-hidden text-start transition-all text-white ${
              expanded ? 'ml-3 w-44' : 'w-0'
            }`}
          >
            {text}
          </span>
          {subMenu && (
            <div
              className={`absolute right-2 h-4 w-4${expanded ? '' : 'top-2'} transition-all ${expandSubMenu ? 'rotate-90' : 'rotate-0'}`}
            >
              <ChevronRightIcon className='text-white' />
            </div>
          )}

          {/* 
            display item text or sub-menu items when hovered
          */}
          {!expanded && (
            <div
              className={`
            text-primary-500 invisible absolute left-full ml-6 -translate-x-3
            rounded-md bg-indigo-100 px-2
            py-1 text-sm opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
            >
              {/* 
                if hovered item has no sub-menu, display the text
                else display the sub-menu items
              */}
              {!subMenu
                ? text
                : subMenu.map((item, index) => (
                    <HoveredSubMenuItem
                      key={index}
                      text={item.text}
                      icon={item.icon}
                    />
                  ))}
            </div>
          )}
        </button>
      </li>
      <ul
        className="sub-menu pl-6"
        style={{ height: subMenuHeight }}
      >
        {/* 
          Render the sub-menu items if the item has a sub-menu
          The sub-menu items are rendered as SidebarItem components
        */}
        {expanded &&
          subMenu?.map((item, index) => (
            <SidebarItem key={index} {...item} expanded={expanded} />
          ))}
      </ul>
    </>
  );
}