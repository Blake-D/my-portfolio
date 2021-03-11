import Link from 'next/link'
import Head from 'next/head'

export default function Contact() {
    return (
      <div>
        <Head>
          <title>Contact | Blake DeGraw</title>
        </Head>
        <>
            <Link href="/"><a>home</a></Link>{' | '}
            <Link href="/about"><a>about</a></Link>{' | '}
            <Link href="/webapps"><a>web apps</a></Link>{' | '}
            <Link href="/games"><a>unreal projects</a></Link>{' | '}
            <Link href="/contact"><a>contact me</a></Link>
        </>
        <h1>contact me</h1>
      </div>
    )
  }