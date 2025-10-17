import { TCategory } from '@/data/categories'
import { TNavigationItem } from '@/data/navigation'
import { Link } from '@/shared/link'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import CardCategory7 from '../CardCategory7'

export default function MegaMenuPopover({
  megamenu,
  featuredCategory,
}: {
  megamenu: TNavigationItem
  featuredCategory: TCategory
}) {
  if (megamenu.type !== 'mega-menu') {
    return null
  }

  const renderNavlink = (item: TNavigationItem) => {
    return (
      <li key={item.id} className={`${item.isNew ? 'menuIsNew' : ''}`}>
        <Link
          className="font-normal text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          href={item.href || '#'}
        >
          {item.name}
        </Link>
      </li>
    )
  }

  return (
    <div className="hidden lg:block">
      <Popover className="group">
        <PopoverButton className="-m-2.5 flex items-center p-2.5 text-sm font-medium text-neutral-700 group-hover:text-neutral-950 focus:outline-hidden dark:text-neutral-300 dark:group-hover:text-neutral-100">
          {megamenu.name}
          <ChevronDownIcon className="ms-1 size-4 group-data-open:rotate-180" aria-hidden="true" />
        </PopoverButton>

        <PopoverPanel
          transition
          className="header-popover-full-panel absolute inset-x-0 top-full z-40 w-full transition duration-200 data-closed:translate-y-1 data-closed:opacity-0"
        >
          <div className="bg-white shadow-lg dark:bg-neutral-900">
            <div className="container">
              <div className="flex py-12 text-sm">
                <div className="grid flex-1 grid-cols-4 gap-6 pr-6 xl:gap-8 xl:pr-20">
                  {megamenu.children?.map((menuChild, index) => (
                    <div key={index}>
                      <p className="font-medium text-neutral-900 dark:text-neutral-200">{menuChild.name}</p>
                      <ul className="mt-4 grid space-y-4">{menuChild.children?.map(renderNavlink)}</ul>
                    </div>
                  ))}
                </div>
                <div className="w-2/5 xl:w-5/14">
                  <CardCategory7 category={featuredCategory} />
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}
