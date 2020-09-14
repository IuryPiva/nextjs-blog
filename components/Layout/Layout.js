import Head from "next/head";

const name = "Iury Piva";
export const siteTitle = "Next.js Sample Website";

export const Layout = ({ children, home }) => {
  return (
    <div className="container px-4 mx-auto mt-12 mb-24 rounded shadow max-w-xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex-col items-center">
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className="w-24 h-24 rounded-full"
              alt="name"
            />
          </>
        ) : (
          <></>
        )}
        {children}
      </header>
    </div>
  );
};

export default Layout;
