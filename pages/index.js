import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import Date from '../components/date';
import Card from '../components/card';

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className='px-10 pt-10 font-extrabold items-center text-9xl'>
          Creation
        </h1>
        <h1 className='pb-12 px-10 font-extrabold items-center'>
          Dream.Design.Do.
        </h1>
        {/* <h1 style={{ color: 'gray' }}>Artist.Designer.Engineer.</h1> */}
      </section>
      <section className={utilStyles.headingMd}>
        <a name='about' id='about' />
        <p>
          Hello, my name is [<b>Kevin Murphy</b>]
        </p>
        <br></br>
        <p>
          A full stack engineer, team lead, designer, and artist. With 10 years
          of tech art experience in video games. Specializing in agile
          development, UX and system design, creating pipelines, project
          scoping, and optimization.
        </p>
      </section>
      <section
        name='projects'
        id='projects'
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map((data) => (
            <li key={data.id} className='shadow-md'>
              <Card data={data} />
            </li>
          ))}
        </ul>
      </section>
      <section
        name='blog'
        id='blog'
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <a name='contact' id='contact' />
        #contact
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}
