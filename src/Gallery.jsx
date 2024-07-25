import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Gallery.module.css'; // Updated import for CSS Modules
import coffeeFlower from './assets/Group 18.png';
import impectus2 from './assets/Group 15.png';
import impectus3 from './assets/Group 25.png';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    useEffect(() => {
        const sections = gsap.utils.toArray(`.${styles.desktopContentSection}`);
        const photos = gsap.utils.toArray(`.${styles.desktopPhoto}`);

        ScrollTrigger.create({
            trigger: `.${styles.gallery}`,
            start: 'top top',
            end: 'bottom bottom',
            pin: `.${styles.right}`,
        });

        sections.forEach((section, i) => {
            const photo = photos[i];
            if (photo) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 100%',
                        end: 'top 50%',
                        scrub: true,
                    },
                })
                    .fromTo(photo, { yPercent: 100, opacity: 1 }, { yPercent: 0, opacity: 1 });
            }
        });

        // Refresh ScrollTrigger to ensure correct calculations
        ScrollTrigger.refresh();
        // Cleanup function
        return () => {
            // Kill all ScrollTrigger instances to avoid memory leaks
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.gallery}>
            <div className={styles.left}>
                <div className={styles.desktopContent}>
                    <div className={styles.desktopContentSection}>
                        <h1>One</h1>
                        <p>One with the Nature” initiated with a purpose to offer individuals a chance to reconnect with nature and escape the chaos of urban life.</p>
                        <p>One with the Nature” initiated with a purpose to offer individuals a chance to reconnect with nature and escape the chaos of urban life.</p>

                    </div>
                    <div className={styles.desktopContentSection}>
                        <h1>Two</h1>
                        <p>Find solace, relaxation, and rejuvenation, allowing you to slow down and appreciate the beauty within and outside.</p>
                        <p>Find solace, relaxation, and rejuvenation, allowing you to slow down and appreciate the beauty within and outside.</p>

                    </div>
                    <div className={styles.desktopContentSection}>
                        <h1>Three</h1>
                        <p>Break free from the monotony of urban lifestyles, reconnect with nature and celebrate life.</p>
                        <p>Break free from the monotony of urban lifestyles, reconnect with nature and celebrate life.</p>

                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.desktopPhotos}>
                    <div className={`${styles.desktopPhoto} ${styles.red}`}>
                        <img src={impectus2} alt="One" />
                    </div>
                    <div className={`${styles.desktopPhoto} ${styles.green}`}>
                        <img src={coffeeFlower} alt="Two" />
                    </div>
                    <div className={`${styles.desktopPhoto} ${styles.pink}`}>
                        <img src={impectus3} alt="Three" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
