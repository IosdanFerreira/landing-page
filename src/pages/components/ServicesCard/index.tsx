'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

interface ServicesCardProps {
    imgUrl: string;
    title: string;
    text: string;
    linkUrl: string
}

export default function ServicesCard({imgUrl,linkUrl,text,title}:ServicesCardProps ) {
  return (
    <Link href={linkUrl}>
      <div className={styles.card__container}>
        <figure>
          <Image src={imgUrl} fill alt={title} />
        </figure>

        <div className={styles.card__content}>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
        <button>Fazer Orçamento</button> 
      </div>
    </Link>
  );
}
