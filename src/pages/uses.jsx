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
        <title>Uses - Danferth</title>
        <meta
          name="description"
          content="Software I use, and gadgets at my desk, but nothing I would recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, and gadgets at my desk, but nothing I would recommend."
        intro="Nobody asks about the things I use to build websites or anything of the sort. But this template already had this section and I didn't feel like coming up with anything else."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro Intel Core i7 8 GB (2019)">
              Fast enough for Logic X and all my development work, no
              complaints. When I used PCs it felt like there was always a need
              to upgrade, not with this.
            </Tool>
            <Tool title="Apple Magic Mouse">
              Has its fair share of haters but charging it once every other
              month during my lunch break is not that big of a deal. Is the
              design stupid? Yes, but the gestures make up for it.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              Didn&apos;t feel the need to leave the ecosystem for the keyboard
              once I bought into the mouse.
            </Tool>
            <Tool title="LG 29” wall mounted monitor">
              You have to be kidding yourself if you think I&apos;m staring at a
              13” MacBook all day.
            </Tool>
            <Tool title="Standing Desk with ergoDriven Topo Comfort Mat">
              Love the standing desk, with the ergo mat I don&apos;t ever feel
              the need to sit.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              A tool I use, it used to be Sublime Text if that makes you feel
              better.
            </Tool>
            <Tool title="iTerm2">Everyone said to use it, so here we are.</Tool>
            <Tool title="Chrome">
              I know Firefox Developer edition is the new hot potato, but Google
              just knows me.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Pencile & Paper">Tired and true, what can I say.</Tool>
          </ToolsSection>
          <ToolsSection title="Music Production">
            <Tool title="Logic Pro">
              No brainer on this one. You may like Pro Tools or Reaper, this
              just works for me.
            </Tool>
            <Tool title="Neural DSP Tone King Imperial MKII">
              A digital version of my desert island rig.
            </Tool>
            <Tool title="MixWave Milkman Creamer Collection">
              Fender cleans and a set of JHS pedals, a rig that&apos;s inspiring
              to play.
            </Tool>
            <Tool title="Decent Sampler (Plug-In)">
              The work David Hilowitz has put into this project is inspiring, to
              say the least.
            </Tool>
            <Tool title="IK Mulitmedia iRIG Keys I/O 49">
              Great keyboard also use it as my interface for guitar and to
              trigger MIDI with the pads.
            </Tool>
            <Tool title="PreSonus Eris E3.5-3.5” Near Field Studio Monitors">
              Sound good enough to my deaf ears.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
