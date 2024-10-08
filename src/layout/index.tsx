import React from 'react';
import localizable, { locales, setLang } from '@app/locales';
import { useOutlet } from '@moneko/react';

import Header from '@/components/header';
import NavigatorBar from '@/components/navigate-bar';

import * as styles from './index.less';

const Layout = () => {
  const { language } = localizable.lang;
  const outlet = useOutlet();

  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.view}>
        {locales.map((item) => (
          <label key={item.language} form="lang">
            <input
              type="radio"
              name="lang"
              value={item.language}
              onClick={() => setLang(item.language)}
              defaultChecked={item.language === language}
            />
            {item.title}:<span>{item.language}</span>
          </label>
        ))}
        {outlet}
      </main>
      <NavigatorBar />
    </div>
  );
};

export default Layout;
