import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  UnsplashIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Peter Lloyd</title>
        <meta
          name="description"
          content="I’m Peter Lloyd. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Peter Lloyd. I live in upstate New York, where I design for
              the future of MongoDB.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My name is Peter and I am a designer and developer with a decade
                of experience in the industry. I have a Bachelor&apos;s degree
                in Psychology from Rutgers University and have worked on a wide
                range of projects, from website design and development to
                branding and marketing materials.
              </p>
              <p>
                In addition to my professional experience, I am also a skilled
                musician and photographer. I have been playing guitar for over
                22 years and have a deep love for music. In my photography, I
                enjoy capturing candid moments and natural beauty, often
                incorporating elements of design and composition into my images.
              </p>
              <p>
                As a designer and developer, I strive to create designs that are
                not only visually appealing but also user-friendly and
                functional. I believe that my diverse interests and skills allow
                me to approach projects with a unique perspective, combining
                elements of art, technology, and design to create innovative
                solutions.
              </p>
              <p>
                I am always looking for new challenges and opportunities to grow
                and improve as a designer and developer, and I am excited to see
                where my passion for design, music, and photography will take me
                in the future.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/replipete"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://unsplash.com/@plloyd"
                icon={UnsplashIcon}
                className="mt-4"
              >
                Follow on Unsplash
              </SocialLink>
              <SocialLink
                href="https://github.com/plloyd11/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/plloyd11/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:peter.lloyd@hey.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                peter.lloyd@hey.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
