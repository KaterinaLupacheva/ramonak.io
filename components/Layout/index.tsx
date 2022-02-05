import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren, ReactNode } from 'react';

import Menu from '../Menu';
import { LayoutContainer } from './styles';

type LayoutProps = {
  meta?: {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
    date?: string;
  };
  children: ReactNode;
};

export default function Layout({ meta, children }: PropsWithChildren<LayoutProps>) {
  const URL = 'https://ramonak.io';

  const defaultMeta = {
    title: 'ramonak.io',
    description:
      'Personal site and blog by Katsiaryna (Kate) Lupachova: freelancer, fullstack web and mobile developer.',
    type: 'website',
    image: `${URL}/static/images/ramonak.jpg`,
    ...meta,
  };

  const router = useRouter();

  return (
    <LayoutContainer>
      <Head>
        <title>{defaultMeta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={defaultMeta.description} name="description" />
        <meta property="og:url" content={`${URL}${router.asPath}`} />
        <link rel="canonical" href={`${URL}${router.asPath}`} />
        <meta property="og:type" content={defaultMeta.type} />
        <meta property="og:site_name" content="ramonak.io" />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:image" content={defaultMeta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ramonak_io" />
        <meta name="twitter:title" content={defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta name="twitter:image" content={defaultMeta.image} />
        {defaultMeta.date && <meta property="article:published_time" content={defaultMeta.date} />}
      </Head>
      <Menu />
      {children}
      {/*theme
      children
      footer */}
    </LayoutContainer>
  );
}
