import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoSpark from '@/images/logos/spark.svg'
import logoCC from '@/images/logos/cc.svg'
import logoSSGA from '@/images/logos/ssga.svg'
import logoSolarflux from '@/images/logos/solarflux.svg'
import logoQVBT from '@/images/logos/qvbt.png'
import logoREP from '@/images/logos/rep.png'

const projects = [
  {
    name: 'Spark Strategies',
    description:
      'Design, development and headless CMS integration for a wellness consulting agency.',
    link: { href: 'https://sparkstrategies.co', label: 'sparkstrategies.co' },
    logo: logoSpark,
    technologies: ['Astro', 'Tailwind', 'Storyblok'],
  },
  {
    name: 'Craft & Commerce',
    description:
      'Web Development + Headless CMS integration for a digital integrated media agency.',
    link: { href: 'https://craftand.com/', label: 'craftand.com' },
    logo: logoCC,
    technologies: ['Astro', 'Tailwind', 'Hygraph'],
  },
  {
    name: 'SSGA',
    description:
      'Design, development and headless CMS integration for a leading gastroenterology practice.',
    link: { href: 'https://www.ssgastro.com/', label: 'ssgastro.com' },
    logo: logoSSGA,
    technologies: ['Nuxt', 'Tailwind', 'Hygraph'],
  },
  {
    name: 'Solarflux',
    description:
      'Branding, photography, design and development for a solar energy company.',
    link: { href: 'https://www.solarflux.co', label: 'solarflux.co' },
    logo: logoSolarflux,
    technologies: ['11ty', 'Tailwind'],
  },
  {
    name: 'Quantum Vita Body Therapy',
    description:
      'Branding, photography, design and development for a massage therapy practice',
    link: { href: 'https://quantumvita.com', label: 'quantumvita.com' },
    logo: logoQVBT,
    technologies: ['Astro', 'Tailwind'],
  },
  {
    name: 'Replicant',
    description:
      'Design, development, e-commerce and headless CMS integration for a death metal band.',
    link: { href: 'https://replicant.band', label: 'replicant.band' },
    logo: logoREP,
    technologies: ['Astro', 'Tailwind', 'Snipcart'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Clients - Peter Lloyd</title>
        <meta
          name="description"
          content="Some of my favorite clients I've worked with over the years."
        />
      </Head>
      <SimpleLayout
        title="Some of my favorite clients I've worked with over the years."
        intro="As a freelancer, I've had the privilege of working with some amazing clients over the years. Each project has been a unique and rewarding challenge, and I am grateful for the opportunity to contribute to my clients' success. On this page, you will find a selection of my past client projects, each one a testament to my dedication and expertise. I look forward to working with you on your next project."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-nightAccent dark:text-zinc-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
              <div className="mt-1 space-y-4">
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  Technologies
                </h2>
                <div className="flex gap-2">
                  {project.technologies.map((technology) => (
                    <span className="inline-flex items-center rounded bg-[#010B14] px-2.5 py-0.5 text-xs font-medium text-nightText">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
