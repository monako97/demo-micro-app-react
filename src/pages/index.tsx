import React, { type FC } from 'react';
import dayjs from 'dayjs';
import Card from 'demo_remote_lib/Card';

const Root: FC = () => {
  return (
    <>
      <p>Root Page</p>
      <Card title={`当前时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`} />
    </>
  );
};

export default Root;
