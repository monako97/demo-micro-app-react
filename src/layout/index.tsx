import React from 'react';
import localizable, { locales, setLang } from '@app/locales';
import { theme } from 'neko-ui';
import { useOutlet } from 'react-router-dom';
import styles from './index.less';
import Header from '@/components/header';
import NavigatorBar from '@/components/navigate-bar';

theme.setScheme('light');
const Layout = () => {
  const { language } = localizable.lang;
  const outlet = useOutlet();

  return (
    <n-provider>
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
    </n-provider>
  );
};

export default Layout;
