import { MenuIcon, Settings2Icon, User2Icon } from 'lucide-react'
import React from 'react'
import SaveButton from '../general/SaveButton'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { dashboardMenu } from '@/lib/constants'
import Link from 'next/link'

const DashboardMobileNav = () => {
    return (
        <main className='flex items-center justify-between w-full px-4'>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-white ml-6 text-violet-800 md: mt-2'>
                    <DropdownMenuLabel className='pb-2'>Dashboard</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div>
                        {dashboardMenu.map((item) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                className="items-center md:pl-6 py-3 pl-3 "
                            >
                                <DropdownMenuItem className="flex pl-3 gap-3 w-72 hover:bg-violet-600 hover:text-white mx-2 py-2 rounded-[5px] transition-all duration-500">
                                    <item.icon className={`shrink-0  text-${item.color}`} />
                                    <span>{item.label}</span>
                                </DropdownMenuItem>

                            </Link>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </main>
    )
}

export default DashboardMobileNav