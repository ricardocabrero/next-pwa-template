import Head from 'next/head'

const CommonHead = ({description, keywords, title}) => {
    return(
      <Head>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#000000' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='apple-touch-icon' href='/images/icon-maskable-512.png' />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel='manifest' href='/manifest.json' />
        <title>{title}</title>
      </Head>
    )
}

export default CommonHead;