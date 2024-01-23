import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const squadNames = localStorage.getItem('Teams');
    const squadNamesJSON = JSON.parse(squadNames);
    const [selectedTeam, setSelectedTeam] = useState(null);

    // retrieve squad names if available
    if (squadNames !== null) {
    console.log(squadNamesJSON);

    // selected team will always be the first team in the local storage array. e.g. team[0]
    setSelectedTeam(squadNamesJSON[0])
    } else {
    console.log('No data found in local storage for key "Teams".');
    }

    const handleTeamSelection = (team) => {
        setSelectedTeam(team);
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {/* if no team is available "Choose your squad" will appear */}
            {selectedTeam || 'Choose your squad'}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
        </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {squadNamesJSON !== null &&
                        squadNamesJSON.map((team) => (
                            <Menu.Item key={team}>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                onClick={() => handleTeamSelection(team)}
                                >
                                {team}
                                </a>
                            )}
                            </Menu.Item>
                        ))
                    }
                </div>
            </Menu.Items>
        </Transition>
        </Menu>
    )
}

export default Dropdown
