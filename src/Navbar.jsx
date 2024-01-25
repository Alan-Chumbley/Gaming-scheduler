import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import Logo from './assets/logo.png';
import './Navbar.css'

const navigation = [
  { name: 'Saved Players', to: '/savedplayers', current: false },
  { name: 'Saved Sessions', to: '/sessions', current: false },
  { name: 'Wishlist', to: '/wishlist', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="pt-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-3">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/">
                    <img
                      className="h-8 w-auto"
                      src={Logo}
                      alt="GameSync logo"
                      id="logo"
                    />
                  </NavLink>
                </div>
                <div className="hidden md:ml-6 sm:hidden md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white font-main' : 'text-gray-300 hover:text-cyan',
                          'rounded-md px-3 py-2 text-sm font-medium font-main text-white whitespace-nowrap'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col justify-start">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white font-main' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium font-main'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
