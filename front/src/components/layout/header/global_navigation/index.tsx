import React from 'react';
import { isMobile } from 'react-device-detect';
import gsap, { Expo } from 'gsap';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import classNames from '#utils/classNames';
import styles from './GlobalNavigation.module.scss';
import MenuStore from '#stores/MenuStore';

export interface GlobalNavigationProps {
  menuStore?: MenuStore;
}

const Routes = [
  { key: 'route-main', route: '/', name: 'MAIN', title: 'Go to Main Page' },
  { key: 'route-about', route: '/about', name: 'ABOUT', title: 'Go to About Page' },
  { key: 'route-portfolio', route: '/portfolio', name: 'PORTFOLIO', title: 'Go to Portfolio Page' },
  { key: 'route-contact', route: '/contact', name: 'CONTACT', title: 'Go to Contact Page' },
];

@inject('menuStore')
@observer
class GlobalNavigation extends React.Component<GlobalNavigationProps> {
  timeline1 = gsap.timeline();

  timeline2 = gsap.timeline();

  gnbRef = React.createRef<HTMLElement>();

  gnbWithoutOverlay = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const { menuStore } = this.props;
    const { isMenuOpen } = menuStore ?? {};

    this.handleGNBAnimation(Boolean(isMenuOpen));
  }

  componentDidUpdate() {
    const { menuStore } = this.props;
    const { isMenuOpen } = menuStore ?? {};

    this.handleGNBAnimation(Boolean(isMenuOpen));
  }

  handleGNBAnimation(isMenuOpen: boolean) {
    if (isMenuOpen) {
      this.timeline1.clear().to(this.gnbRef.current, {
        duration: 0.75,
        translateX: 0,
        translateY: 0,
        ease: Expo.easeOut,
      });

      this.timeline2.clear().to(this.gnbWithoutOverlay.current, {
        display: 'block',
        duration: 0.75,
        opacity: 1,
        ease: Expo.easeOut,
      });
    } else {
      this.timeline1.clear().to(this.gnbRef.current, {
        duration: 1,
        translateX: isMobile ? 0 : '-100%',
        translateY: isMobile ? '-100%' : 0,
        ease: Expo.easeOut,
      });
      this.timeline2
        .clear()
        .to(this.gnbWithoutOverlay.current, {
          duration: 1,
          opacity: 0,
          ease: Expo.easeOut,
        })
        .to(this.gnbWithoutOverlay.current, {
          display: 'none',
        });
    }
  }

  render() {
    const { menuStore } = this.props;
    const { isMenuOpen, handleCloseMenu } = menuStore ?? {};

    return (
      <>
        <nav ref={this.gnbRef} className={classNames(styles['gnb'], isMenuOpen && styles['active'])}>
          <ul className={classNames(styles['gnb-lists'])}>
            {Routes.map(({ key, route, name, title }) => {
              return (
                <li key={key} className={classNames(styles['gnb-list'])}>
                  <Link href={route}>
                    <a title={title} role="link">
                      {name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          role="button"
          aria-label="gnb without overlay"
          ref={this.gnbWithoutOverlay}
          className={classNames(styles['gnb-without-overlay'])}
          onClick={handleCloseMenu}
          onKeyDown={handleCloseMenu}
          tabIndex={-1}
        />
      </>
    );
  }
}

export default GlobalNavigation;
