import React from 'react';
import styles from './styles.module.scss';

interface BenefitsCardProps {
    icon: React.ReactNode;
    title: string;
    text: string
}

export default function BenefitsCard({icon, title, text}: BenefitsCardProps) {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__content}>
        <div className={styles.card__title__container}>
          <h5>{title}</h5>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
