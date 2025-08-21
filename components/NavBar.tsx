'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NavBar = () => {
  const pathname = usePathname();

  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('Select Location');

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setLocationDropdownOpen(false);
  };

  const notifications = [
    'Your blood test results are ready!',
    'Scan2Lab has launched a new diagnostics center in Karachi!',
    'Reminder: Your appointment is tomorrow at 10:00 AM.',
    'Your invoice for the last visit is available to download.',
  ];

  return (
    <nav className="w-full bg-white border border-[#F5F5F5] flex flex-wrap items-center justify-between px-4 md:px-8 py-3 gap-4">
      {/* Logo */}
      <div className="flex-shrink-0 w-[47px] h-[38px]">
        <img src="/images/logo.png" alt="logo" className="max-w-full h-auto" />
      </div>

      {/* Links */}
      <ul className="text-[14px] text-[#677385] flex flex-wrap items-center gap-4 md:gap-8 font-regular order-2 md:order-1 w-full md:w-auto justify-center">
        <li>
          <Link
            href="/"
            className={clsx(
              'transition-colors duration-200',
              pathname === '/' ? 'font-semibold text-black' : 'text-[#677385] hover:text-black'
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/appointments"
            className={clsx(
              pathname === '/appointments' ? 'font-semibold text-black' : 'text-[#677385] hover:text-black'
            )}
          >
            My Appointments
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={clsx(
              pathname === '/about-us' ? 'font-semibold text-black' : 'text-[#677385] hover:text-black'
            )}
          >
            About Us
          </Link>
        </li>
      </ul>

      {/* Right section */}
      <div className="flex flex-wrap items-center gap-4 order-1 md:order-2 w-full md:w-auto justify-end">
        {/* Search */}
        <div className="flex bg-[#dce6e7] gap-4 items-center border border-[#EDEDED] rounded-[99px] px-[14px] py-[8px] w-full md:w-[250px] lg:min-w-[320px]">
          <img src="/icons/search.svg" alt="search-icon" className="w-[16px] h-[16px]" />
          <input
            type="text"
            className="text-[#383838] text-[14px] placeholder-[#383838] focus:outline-none flex-1"
            placeholder="Search for tests"
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative">
          <div
            onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
            className="cursor-pointer border-[#c9cccf] flex justify-center gap-1 items-center border rounded-[99px] px-[14px] py-[8px]"
          >
            <img src="/icons/location.svg" alt="location-icon" />
            <p className="text-[14px] text-[#211028]">{selectedLocation}</p>
            <img src="/icons/dropdown.svg" alt="dropdown-icon" />
          </div>

          {locationDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded shadow-md text-[14px] text-[#211028]">
              {['Hyderabad', 'Karachi', 'Islamabad', 'Sukkur', 'Lahore'].map((location) => (
                <li
                  key={location}
                  onClick={() => handleLocationSelect(location)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <div
            className="cursor-pointer"
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setHasUnreadNotifications(false);
            }}
          >
            <img src="/icons/notification-bell.svg" alt="notification-icon" />
            {hasUnreadNotifications && (
              <div className="absolute top-0 right-0 w-[8px] h-[8px] rounded-full bg-[#434343] flex items-center justify-center">
                <p className="text-[4px] text-white">4</p>
              </div>
            )}
          </div>

          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-[250px] bg-white border border-gray-200 rounded shadow-md z-20">
              <ul className="text-sm text-[#211028]">
                {notifications.map((note, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
