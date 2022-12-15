import Link from 'next/link'

interface listMenuProps {
  menu: {
    name: string
    icon?: JSX.Element
    route: string
  }[]
}

const ListMenu = ({ menu }: listMenuProps) => {
  return (
    <ul className='space-y-2'>
      {menu.map((item) => (
        <li key={item.name}>
          <Link href={item.route}>
            <div className='flex items-center gap-3'>
              {item.icon}
              <p className='text-sm text-neutral-400 hover:text-white'>
                {item.name}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ListMenu
