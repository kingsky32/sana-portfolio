import React from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, A11y } from 'swiper';
import 'swiper/css';

import classNames from '#utils/classNames';
import styles from './About.module.scss';
import AboutMySkillsList from '#components/about/my_skills/list';

SwiperCore.use([Mousewheel, A11y]);

class About extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>sanha&apos;s portfolio | about</title>
        </Head>
        {isMobile ? (
          <img src="/assets/images/about/about_mobile.png" style={{ width: '100%' }} alt="about" />
        ) : (
          <Swiper
            direction="vertical"
            slidesPerView={1}
            className={classNames(styles['container'])}
            centeredSlides
            mousewheel
            allowTouchMove={false}
          >
            <SwiperSlide>
              <section className={classNames(styles['section-1'])}>
                <img
                  src="/assets/images/about/about_profile.png"
                  alt="profile"
                  className={classNames(styles['square'])}
                />
                <p className={classNames(styles['square'])}>
                  HELLO!
                  <br />
                  I&apos;M SANHA
                </p>
                <img
                  src="/assets/images/about/about_square_3.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_2.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_4.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_2.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_1.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />

                <p className={classNames(styles['top-right-square'])}>
                  WEB
                  <br />
                  DESIGNER
                </p>
                <img
                  src="/assets/images/about/about_square_6.png"
                  alt="square"
                  className={classNames(styles['top-right-square'])}
                />
                <img
                  src="/assets/images/about/about_square_7.png"
                  alt="square"
                  className={classNames(styles['top-right-square'])}
                />

                <p className={classNames(styles['bottom-right-square'])}>
                  LET ME
                  <br />
                  INTRODUCE MY
                  <br />
                  SELF?
                </p>
                <img
                  src="/assets/images/about/about_square_10.png"
                  alt="square"
                  className={classNames(styles['bottom-right-square'])}
                />
                <img
                  src="/assets/images/about/about_square_8.png"
                  alt="square"
                  className={classNames(styles['bottom-right-square'])}
                />
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className={classNames(styles['section-2'])}>
                <article className={classNames(styles['nice-to-meet-you'])}>
                  <div className={classNames(styles['inner'])}>
                    <h3 className={classNames(styles['title'])}>NICE TO MEET YOU!</h3>
                    <p className={classNames(styles['text'])}>
                      ???????????? ????????? ????????? ?????? ???????????????,
                      <br />
                      ????????? ????????? ????????? ???????????? ???????????? ????????? ????????????.
                      <br />
                      <br />
                      ???????????? ?????? ????????? ????????????
                      <br />
                      ???????????? ????????? ???????????? ???????????? ?????? ????????????
                      <br />
                      ?????? ?????? ?????? ???????????? ???????????????.
                      <br />
                      <br />
                      ???????????? ??? ???????????? ?????? ???????????? ???????????????
                      <br />
                      ???????????? ????????? ?????? ???????????? ?????? ?????????
                      <br />
                      ???????????? ????????? ????????? ????????????.
                      <br />
                      <br />
                      ???????????????! ????????? ????????? ?????? ????????????
                      <br />
                      ??????????????? ??????????????????.
                    </p>
                  </div>
                </article>
                <article className={classNames(styles['my-skills'])}>
                  <div className={classNames(styles['inner'])}>
                    <h3 className={classNames(styles['title'])}>MY SKILLS</h3>
                    <AboutMySkillsList
                      items={[
                        { key: 'skill-AI', name: 'AI', percent: '98%' },
                        { key: 'skill-PR', name: 'PR', percent: '82%' },
                        { key: 'skill-PS', name: 'PS', percent: '80%' },
                        { key: 'skill-HTML CSS', name: 'HTML CSS', percent: '80%' },
                        { key: 'skill-JS', name: 'JS', percent: '20%' },
                        { key: 'skill-XD', name: 'XD', percent: '65%' },
                      ]}
                    />
                  </div>
                </article>
              </section>
            </SwiperSlide>
          </Swiper>
        )}
      </>
    );
  }
}

export default About;
