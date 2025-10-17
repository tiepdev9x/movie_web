import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Input from '@/shared/Input'
import Logo from '@/shared/Logo'
import clsx from 'clsx'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react'
import { FC } from 'react'
import AvatarDropdown from './AvatarDropdown'
import NotifyDropdown from './NotifyDropdown'
import Link from 'next/link'

interface HeaderProps {
  hasBorderBottom?: boolean
  className?: string
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const Header: FC<HeaderProps> = async ({ hasBorderBottom = true, className }) => {
  const isMobile = false
  return (
    <div className={clsx('relative', className)}>
      <div className="row-auto">
        <div
          className={clsx(
            'flex h-20 justify-between gap-x-2.5 px-12',
            hasBorderBottom && 'border-b',
            !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
          )}
        >
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-8">
            <Logo />
            <div className="relative">
              <Input sizeClass="px-6 py-3" fontClass="text-base/6" rounded="rounded-full" placeholder="search" />
            </div>
            <NavigationMenu viewport={isMobile}>
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`bg-transparent`}>
                    <Link href="/">Phim lẻ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`bg-transparent`}>
                    <Link href="/">Phim bộ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent`}>Thể loại</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:block">
                  <NavigationMenuTrigger className={`bg-transparent`}>Quốc gia</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="#">Components</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Documentation</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Blocks</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-2.5 sm:gap-x-6">
            <NotifyDropdown />
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </div>
  )
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header
