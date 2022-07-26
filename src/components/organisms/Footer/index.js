import { Logo } from 'components';

const Header = () => {
  const dataFooter = {
    description:
      'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
    copyright: '©Trafalgar PTY LTD 2020. All rights reserved',
    menu: [
      {
        title: 'Company',
        nav: [
          {
            title: 'About',
            to: 'about.html'
          },
          {
            title: 'Testimonials',
            to: 'testimonials.html'
          },
          {
            title: 'Find a doctor',
            to: 'doctor.html'
          },
          {
            title: 'Apps',
            to: 'apps.html'
          }
        ]
      },
      {
        title: 'Region',
        nav: [
          {
            title: 'Indonesia',
            to: '/'
          },
          {
            title: 'Singapore',
            to: '/'
          },
          {
            title: 'Hongkong',
            to: '/'
          },
          {
            title: 'Canada',
            to: '/'
          }
        ]
      },
      {
        title: 'Help',
        nav: [
          {
            title: 'Help center',
            to: '/'
          },
          {
            title: 'Contact support',
            to: '/'
          },
          {
            title: 'Intructions',
            to: '/'
          },
          {
            title: 'How it wors',
            to: '/'
          }
        ]
      }
    ]
  };

  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__menu'>
            <div className='footer__list js-accordion-footer'>
              {dataFooter.menu.map((vm, im) => {
                return (
                  <div className='footer__list__item' key={'li-' + im}>
                    <h4 className='footer__title'>{vm.title}</h4>
                    <ul className='footer__nav'>
                      {vm.nav.map((v, i) => {
                        return (
                          <li className='footer__nav__item' key={'fi-' + i}>
                            <a className='footer__nav__link' href={v.to}>
                              {v.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='footer__about'>
            <a className='footer__logo' href='/'>
              <Logo className='footer__logo__el' name='trafalgar-white' />
            </a>
            <div className='footer__text'>
              <p className='footer__desc'>{dataFooter.description}</p>
              <p className='footer__copyright'>{dataFooter.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
