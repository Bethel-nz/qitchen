import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from './anim';
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial='initial'
                animate='enter'
                exit='exit'
              >
                <Link href={href}>{title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial='initial'
              animate='enter'
              transition={{ delay: 0.5 }}
              exit='exit'
              key={`f_${i}`}
            >
              <a href={href} target='_blank'>
                {title}
              </a>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
