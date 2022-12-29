import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Peter Lloyd</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="iMac Pro, 3.2 GHz 8-Core Intel Xeon W (2017)">
              I absolutely love my iMac Pro! It is an incredibly powerful and
              reliable machine, with a 3.2 GHz 8-Core Intel Xeon W processor
              that can handle even the most demanding tasks with ease. It is
              also beautifully designed and has a large, high-resolution
              display, which is perfect for design work and other
              visually-intensive tasks. it is a fantastic tool that has helped
              me to be more productive and efficient in my work as a web
              developer and UI designer.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode">
              It is a powerful and feature-rich code editor that offers a wide
              range of tools and features for writing, debugging, and testing
              code. It is also highly customizable, with a wide range of
              extensions and themes available to help me tailor it to my
              specific needs and preferences. VSCode is an invaluable tool that
              has helped me to be more productive and efficient in my work as a
              web developer.
            </Tool>
            <Tool title="Warp Terminal">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              As a web developer and UI designer, I absolutely love using Figma
              for my design work. It is an incredibly powerful and flexible
              design tool that offers a wide range of features and is easy to
              use. It is also cloud-based and cross-platform, which is
              especially helpful when working on remote projects or when I'm on
              the go.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It is an incredibly efficient and reliable tool that helps me to
              quickly find and access the files, applications, and information I
              need. It is also highly customizable, with a wide range of
              features and options available to help me tailor it to my specific
              needs and preferences. Alfred is an invaluable tool that has saved
              me countless hours of searching and helped me to be more
              productive and efficient in my work.
            </Tool>
            <Tool title="Obsidian">
              A powerful and feature-rich application that helps me to organize
              my thoughts and ideas in a clear and structured way. It also
              offers a wide range of tools and features for linking and
              connecting notes, which helps me to build and organize my
              knowledge in a more meaningful and coherent way. Obsidian is an
              invaluable tool that has helped me to be more productive and
              efficient in my work and personal projects.
            </Tool>
            <Tool title="Walling">
              Walling is a powerful and feature-rich application that helps me
              to organize and track my projects in a clear and structured way.
              It also offers a wide range of tools and features for
              collaboration and communication, which helps me to work
              effectively with my team and clients. Walling is an invaluable
              tool that has helped me to be more productive and efficient in my
              work and has made it easier for me to deliver high-quality results
              on time and within budget.
            </Tool>
            <Tool title="Arc Browser">
              The Arc browser is a powerful and feature-rich web browser that
              offers a wide range of benefits. One of the key benefits of Arc is
              its focus on privacy and security. It offers a range of features
              to help protect users' online privacy, including a private
              browsing mode and the ability to block tracking cookies and other
              online tracking technologies. Another benefit of Arc is its speed
              and efficiency, as it is designed to be lightweight and
              fast-loading.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
