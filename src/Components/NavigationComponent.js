import stackImage from '../Assets/Image/stack.png';
import profileImage from '../Assets/Image/profile.png';
import { Disclosure} from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGear, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'Users', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Tasks', href: '#', current: false },
  { name: 'Reporting', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationComponent() {
  return (
    <Disclosure as="nav" className="bg-[#6941C6]">
      {({ open }) => (
        <>
          <div className="mx-5 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button 
                        className="relative inline-flex 
                            items-center justify-center 
                            rounded-md p-2 text-gray-400 
                            hover:bg-gray-700 hover:text-white 
                            focus:outline-none focus:ring-2 
                            focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                      <FontAwesomeIcon className='block w-[15px] h-[15px]' icon={faXmark} aria-hidden="true" />
                      ) : (
                      <FontAwesomeIcon className='block w-[15px] h-[15px]' icon={faBars} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center mx-[50px] sm:mx-0">
                    <img className='w-[39.08px] h-[24.62px] object-cover' src={stackImage}/>
                    <h2 className='text-[20px] font-bold text-[#FFFFFF]'>Stack</h2>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-[#7F56D9] text-white' : 'text-[#F4EBFF] hover:bg-[#7F56D9] hover:text-white',
                          'rounded-[6px] px-3 py-2 text-[16px] font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute hidden 
                    inset-y-0 right-0 
                    flex items-center pr-2 
                    sm:static sm:block 
                    sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full p-1 mx-2 text-[#D6BBFB] hover:text-white"
                >
                  <FontAwesomeIcon className='w-[15px] h-[15px]' icon={faMagnifyingGlass} />
                </button>

                <button
                  type="button"
                  className="relative rounded-full p-1 mx-2 text-[#D6BBFB] hover:text-white"
                >
                  <FontAwesomeIcon className='w-[15px] h-[15px]' icon={faGear} />
                </button>

                <button
                  type="button"
                  className="relative rounded-full p-1 mx-2 text-[#D6BBFB] hover:text-white"
                >
                  <FontAwesomeIcon className='w-[15px] h-[15px]' icon={faBell} />
                </button>
              </div>
                <div className="relative ml-3">
                    <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={profileImage}
                        alt=""
                      />
                    </div>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#7F56D9] text-white' : 'text-gray-300 hover:bg-[#7F56D9] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            <div className="space-y-1 px-2 pb-3 pt-2">
                    <button type="button"
                        className="relative rounded-full 
                            p-1 mx-4
                            text-[#D6BBFB]
                            hover:text-white 
                            focus:outline-none focus:ring-2 
                            focus:ring-white 
                            focus:ring-offset-2 focus:ring-offset-gray-800">
                        <FontAwesomeIcon className='w-[15px] h-[15px]' icon={faMagnifyingGlass} />
                    </button>
                    <button type="button"
                        className="relative rounded-full 
                            p-1 mx-4
                            text-[#D6BBFB] 
                            hover:text-white 
                            focus:outline-none focus:ring-2 
                            focus:ring-white 
                            focus:ring-offset-2 focus:ring-offset-gray-800">
                        <FontAwesomeIcon className='w-[15px] h-[15px]' icon={faGear} />
                    </button>
                    <button type="button"
                        className="relative rounded-full 
                            p-1 mx-4
                            text-[#D6BBFB] 
                            hover:text-white 
                            focus:outline-none focus:ring-2 
                            focus:ring-white 
                            focus:ring-offset-2 focus:ring-offset-gray-800">
                        <FontAwesomeIcon className='w-[15px] h-[15px]' icon={faBell} />
                    </button>
                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}