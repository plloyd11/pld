import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import heroImage from '@/images/work-together.jpg'
import nicoleImage from '@/images/nicole.jpg'
import promoImage from '@/images/promo.jpg'

function ServicesSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-4 text-base text-zinc-200">
        {children}
      </ul>
    </Section>
  )
}

function Service({ children }) {
  return <li>{children}</li>
}

function CTA() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-[#011627] shadow-2xl ring-1 ring-white/10 lg:grid lg:grid-cols-2 lg:items-stretch">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-nightAccent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-[24rem] w-[24rem] rounded-full bg-dayAccent/20 blur-3xl"
      />
      <div className="px-6 pt-16 pb-12 text-center sm:px-16 lg:px-12 lg:py-16 lg:text-left">
        <div className="mx-auto max-w-md lg:mx-0 lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 text-lg leading-8 text-nightText">
            Whether it’s headshots for your team, a product shoot, or a
            personal milestone — I’d love to hear what you have in mind.
          </p>
          <div className="flex gap-x-6 justify-center items-center mt-10 lg:justify-start">
            <a
              href="mailto:pete@observatory.team"
              className="rounded-md bg-nightAccent px-3.5 py-2.5 text-sm font-semibold text-dayText shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nightAccent"
            >
              Get in touch
            </a>
            <a
              href="https://peterlloyd.photography/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-white hover:text-nightAccent"
            >
              See more work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-72 lg:h-full">
        <Image
          src={promoImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}

function Testimonial({ quote, name, role, image }) {
  return (
    <figure className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <blockquote className="text-base italic text-zinc-200">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="flex gap-4 items-center mt-6">
        {image && (
          <Image
            src={image}
            alt={name}
            sizes="3rem"
            className="object-cover w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800"
          />
        )}
        <div className="text-sm">
          <div className="font-semibold text-zinc-200">{name}</div>
          {role && <div className="text-zinc-300">{role}</div>}
        </div>
      </figcaption>
    </figure>
  )
}

export default function Photography() {
  return (
    <>
      <Head>
        <title>Photography - Peter Lloyd</title>
        <meta
          name="description"
          content="Working together on photography — headshots, portraits, products and on-location work for friends and small businesses."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={heroImage}
            alt="Peter behind the camera, shooting in a studio"
            sizes="(min-width: 1024px) 42rem, 100vw"
            className="aspect-[3/2] w-full object-cover"
            priority
          />
        </div>
      </Container>
      <SimpleLayout
        title="Let’s create something memorable."
        intro="Nothing makes me happier than working with friends or small businesses to help bring a vision or special moment to life. Below is a list of services I currently offer."
      >
        <div className="space-y-20">
          <ServicesSection title="Personal">
            <Service>Entertainment Headshots</Service>
            <Service>Engagement</Service>
            <Service>Special Announcements</Service>
            <Service>Portraits</Service>
          </ServicesSection>
          <ServicesSection title="Business">
            <Service>Business Headshots</Service>
            <Service>Interior / Office</Service>
            <Service>Products</Service>
            <Service>On Location</Service>
          </ServicesSection>
          <Testimonial
            quote="I could not have asked for a better experience than I had with Pete. From conception to completion, he hit every mark. He is versatile as a photographer, and captured the most flattering images of both my studio and my staff. He made the experience of taking headshots (something no one wanted to do) comfortable and fun, which is evident in the finished product. My website is clean, user-friendly, and creative. He was open to my suggestions and significantly improved upon them. Even once the project was finished, he made himself available for questions, tweaks, and updates. I would recommend Pete to anyone."
            name="Nicole D’Andrea"
            role="Owner, Blackbird Yoga Studio"
            image={nicoleImage}
          />
          <CTA />
        </div>
      </SimpleLayout>
    </>
  )
}
