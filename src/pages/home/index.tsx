import React, { type FC } from 'react';
import locales from '@app/locales';
import { useOutlet } from '@moneko/react';

const Home: FC = () => {
  const { t } = locales;
  const outlet = useOutlet();

  return (
    <>
      <div>
        <details open>
          <summary>Location</summary>
          <pre>
            <code>{JSON.stringify(window.location, null, 4)}</code>
          </pre>
        </details>
      </div>

      {outlet && (
        <div>
          {t['sub-page-view']}
          {outlet}
        </div>
      )}
    </>
  );
};

export default Home;
