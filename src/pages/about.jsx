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
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-nightAccent dark:text-zinc-200 dark:hover:text-nightAccent"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-nightAccent" />
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
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Peter Lloyd. I live in Ithaca, New York, where I design and
              code beautiful websites.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-nightText">
              <p>
                As a web developer with nine years of professional experience, I
                have a strong foundation in front-end development and am skilled
                in a range of programming languages and technologies. I am
                proficient in HTML, CSS, and JavaScript, and have a deep
                understanding of user experience and user interface design. I am
                committed to creating websites and applications that are not
                only visually appealing, but also intuitive and easy to use.
              </p>
              <p>
                Throughout my career, I have had the opportunity to work on a
                variety of web development projects for both small businesses
                and large corporations. I have experience building responsive
                websites and applications, as well as integrating with various
                back-end systems. I am comfortable working with a range of tools
                and frameworks, including popular content management systems
                such as Shopify and Stripe.
              </p>
              <p>
                As a UI designer, I have a strong understanding of user
                experience and user interface design principles. I understand
                the importance of creating websites and applications that are
                not only visually appealing, but also intuitive and easy to use.
                In my work, I focus on creating clean and modern designs that
                are tailored to my clients&apos; needs and goals. I pay close
                attention to layout, typography, color, and other design
                elements to create cohesive and visually appealing user
                interfaces. I also consider user flow and navigation to ensure
                that my designs are intuitive and easy to use. To create my
                designs, I use a variety of tools and techniques, including
                wireframing, prototyping, and user testing. I am proficient in
                design software such as Figma &amp; the Adobe Creative Suite.
              </p>
              <p>
                I am always looking for new challenges and opportunities to grow
                and improve as a designer and developer, and I am excited to see
                where my passion for the web will take me in the future.
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
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
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
