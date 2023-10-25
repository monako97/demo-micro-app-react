import React, { type FC } from 'react';
import dayjs from 'dayjs';
import Card from 'demo_remote_lib/Card';
import { Carousel, Cron, Provider } from 'neko-ui';

console.log(Carousel, Cron, Provider);
const Root: FC = () => {
  return (
    <>
      <p>Root Page</p>
      <Card title={`当前时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`} />
      <n-cron />
      <n-carousel>
        <p>sacsa</p>
        <p>scaca</p>
      </n-carousel>
    </>
  );
};

export default Root;
