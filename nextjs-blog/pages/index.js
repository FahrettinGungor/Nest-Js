import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Fahrettin. I am a Software Engineer!</p>
        <p>I describe myself as an inquisitive person who takes great pride in his work. My ambition is to become a Senior Full-Stack Engineer. </p>
        <p>
          For more personal information and content see:{' '}
          <a href="https://www.linkedin.com/in/fahrettin-güngör-513657105/">LinkedIn</a>
        </p>
      </section>
    </Layout>
  )
}