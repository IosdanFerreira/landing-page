import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

import {BsChevronDoubleRight} from 'react-icons/bs';

interface LinkButtonPrimaryProps {
    url: string;
    text: string
}

export default function LinkButtonPrimary({url , text}: LinkButtonPrimaryProps) {
  return (
    <Link href={url} className={styles.link__button__primary} >
      {text}
      <BsChevronDoubleRight />
    </Link>
  );
}
