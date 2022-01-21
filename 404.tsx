import { Button, Result } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';

interface Props {}

const index: React.FC<Props> = () => {
  const { t } = useTranslation('not-found');

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Result
        icon={<img src={'/assets/404.svg'} width={'100%'} height={300} />}
        title={t`title`}
        subTitle={t`description`}
        extra={
          <Link href='/'>
            <Button
              type='primary'
              size='large'
              shape='round'
            >{t`back-home`}</Button>
          </Link>
        }
      />
    </div>
  );
};
export default index;
