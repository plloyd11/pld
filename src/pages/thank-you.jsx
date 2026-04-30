import { SimpleLayout } from '@/components/SimpleLayout'
import { SocialMeta } from '@/components/SocialMeta'

export default function ThankYou() {
  return (
    <>
      <SocialMeta
        title="You’re subscribed - Peter Lloyd"
        description="Thanks for subscribing to my newsletter."
        path="/thank-you"
      />
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
