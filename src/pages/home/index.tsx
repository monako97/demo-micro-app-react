import React, { type FC } from 'react';
import locales from '@app/locales';
import { useOutlet } from '@moneko/react';
// 从 moduleFederation 加载的 Card
import Card from 'demo_module_federation/Card';

const Home: FC = () => {
  const { t } = locales;
  const outlet = useOutlet();

  return (
    <>
      <div>
        <details open>
          <summary>Location</summary>
          <Card title="从 moduleFederation 加载的 Card">
            <div>csaca</div>
          </Card>
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
