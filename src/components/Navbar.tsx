import { useState } from 'react'
import logo from '../assets/icons/logo.png'
import { FacebookIcon, InstagramIcon } from './Icons'
import { type NavItem } from '../types'

const navItems: NavItem[] = [
  { key: 'inicio', label: 'Inicio', link: '#inicio' },
  { key: 'nosotros', label: 'Nosotros', link: '#nosotros' },
  { key: 'galeria', label: 'Galeria', link: '#galeria' },
  { key: 'horarios', label: 'Horarios', link: '#horarios' },
  { key: 'contacto', label: 'Contacto', link: '#contacto' }
]
const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false)

  return (
    <header className='fixed bg-white z-20 w-full lg:py-4 px-4'>
      <div className='flex items-center justify-between'>
        <nav className='flex flex-grow basis-0 z-20'>
          <a href='#'>
            <img
              src={logo}
              alt='logo-jardin-las-ardillitas'
              className='h-12 w-full lg:h-12 cursor-pointer'
            />
          </a>
        </nav>
        <div className='flex items-center justify-end'>
          <input
            type='checkbox'
            name='hamburger'
            id='hamburger'
            checked={closeMenu}
            className='peer'
            onChange={e => {
              setCloseMenu(e.target.checked)
            }}
            hidden
          />
          <label
            htmlFor='hamburger'
            className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'
          >
            <div
              aria-hidden='true'
              className='m-auto h-0.5 w-6 rounded bg-teal-500 transition duration-300'
            />
            <div
              aria-hidden='true'
              className='m-auto mt-2 h-0.5 w-6 rounded bg-teal-500 transition duration-300'
            />
          </label>

          <div
            className={
              'peer-checked:translate-x-0 translate-x-[-136%] fixed inset-0 w-4/6 text-2xl bg-teal-400/95 lg:bg-transparent transition duration-500 lg:text-xl lg:w-auto lg:static lg:shadow-none lg:translate-x-0'
            }
          >
            <div className='flex flex-col h-full justify-between lg:items-center lg:flex-row'>
              <ul className='px-6 pt-32  space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0'>
                {navItems.map(({ key, label, link }) => (
                  <li key={key}>
                    <a
                      href={link}
                      onClick={() => {
                        setCloseMenu(!closeMenu)
                      }}
                      className='group relative cursor-pointer before:absolute before:inset-x-0 before:bottom-0 before:h-[5px] before:rounded-xl before:origin-right before:scale-x-0 before:bg-teal-200 lg:before:bg-teal-200 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                    >
                      <span className='relative group-hover:text-white lg:group-hover:text-teal-500 duration-300'>
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <nav className='flex gap-3 items-center px-6 border-t-2 border-teal-500 py-8 lg:hidden'>
                <a
                  href='https://www.facebook.com/profile.php?id=100088444905927'
                  target='_blank'
                  className='w-8 h-8'
                  rel='noreferrer'
                >
                  <FacebookIcon />
                </a>
                <a
                  href='https://www.instagram.com/jardin_elcastillo'
                  target='_blank'
                  className='w-8 h-8'
                  rel='noreferrer'
                >
                  <InstagramIcon />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <nav className='hidden lg:flex gap-3 items-center flex-grow basis-0 justify-end'>
          <a
            href='https://www.instagram.com/jardin_elcastillo'
            target='_blank'
            className='w-8 h-8'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100088444905927'
            target='_blank'
            className='w-8 h-8'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
