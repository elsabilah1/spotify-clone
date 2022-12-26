import Link from 'next/link'
import { useRouter } from 'next/router'

interface listMenuProps {
  menu: {
    id?: string
    name: string
    icon?: JSX.Element
    route: string
  }[]
}

const ListMenu = ({ menu }: listMenuProps) => {
  const router = useRouter()

  return (
    <ul className='space-y-2'>
      {menu.map((item) => (
        <li key={item.name}>
          <Link href={item.id ? `?id=${item.id}` : item.route || '/'}>
            <div className='flex items-center gap-3'>
              {item.icon}
              <p
                className={`line-clamp-1 text-sm ${
                  item.id === router.query.id
                    ? 'text-white'
                    : 'text-neutral-400'
                } hover:text-white`}
              >
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
