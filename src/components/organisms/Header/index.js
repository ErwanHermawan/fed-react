import { useEffect, useState } from 'react';
import { Logo } from 'components';
import { Link } from 'react-router-dom';

const Header = () => {
  // react hooks
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    handleToggleClassShow();
    // eslint-disable-next-line
  }, [showMenu]);

  const handleToggleClassShow = () => {
    if (showMenu) {
      document.body.classList.add('rm-scroll', 'show-nav');
    } else {
      document.body.classList.remove('rm-scroll', 'show-nav');
    }
  };

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <Link className='header__logo' to='/'>
            <Logo className='header__logo__img' name='trafalgar' />
          </Link>
          <button
            className='burger-menu js-mobile-menu'
            type='button'
            onClick={ToggleMenu}>
            <span className='burger-menu__bar'></span>
          </button>
          <ul className='header__nav'>
            <li className='header__nav__item'>
              <Link
                className='header__nav__link header__nav__link--active'
                to='/'>
                Home
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link className='header__nav__link' to='/doctor'>
                Find a doctor
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link className='header__nav__link' to='/apps'>
                Apps
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link className='header__nav__link' to='/testimonials'>
                Testimonials
              </Link>
            </li>
            <li className='header__nav__item'>
              <Link className='header__nav__link' to='/about'>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
