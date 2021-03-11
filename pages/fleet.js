import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FleetAttack() {
    return (
        <div>
            <Head>
                <title>Apps | Blake DeGraw</title>
            </Head>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about</a></Link>{' | '}
                <Link href="/webapps"><a>web apps</a></Link>{' | '}
                <Link href="/games"><a>unreal projects</a></Link>{' | '}
                <Link href="/contact"><a>contact me</a></Link>
            </>
            <h1>Star Wars: Fleet Attack</h1>
            <Image src="/fleet_1.png" width={175} height={100}/><br></br>
            <Link href="https://round2-deployment.herokuapp.com/"><a target="_blank">Click here to launch app</a></Link><br></br>
            <Link href="https://github.com/Blake-D/Fleet-Attack"><a target="_blank">Click here to visit the Github repo</a></Link>
            <p>
                <b>Star Wars: Fleet Attack</b> is a browser game coded in Express.js. The user assembles a fleet of five ships to pit against an imperial fleet in battle.
                <br></br><br></br>
                <em>Fleet Attack</em> was a student project I coded while at General Assembly. The project's requirements were to create a full-stack app that made an API call and passed the fetched data through various routes. I wanted to do something with the API data rather than simply rendering it in lists in a watered-down social media app, so I instead used the data to populate vehicle stats in a browser game. 
            </p>
        </div>
    )
}