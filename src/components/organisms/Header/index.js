import { useEffect, useState } from 'react';
import { Logo } from 'components';

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
	}

	const ToggleMenu = () => {
		setShowMenu(!showMenu);
	};

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <a className="header__logo" href="index.html">
						<Logo	className="header__logo__img" name="trafalgar" />
          </a>
          <button className="burger-menu js-mobile-menu" type="button" onClick={ToggleMenu}>
            <span className="burger-menu__bar"></span>
          </button>
          <ul className="header__nav">
            <li className="header__nav__item">
              <a className="header__nav__link header__nav__link--active" href="index.html">Home</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="doctor.html">Find a doctor</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="apps.html">Apps</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="testimonials.html">Testimonials</a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="about.html">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
