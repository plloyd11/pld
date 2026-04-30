import Head from 'next/head'

import defaultOgImage from '@/images/work-together.jpg'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? ''
const SITE_NAME = 'Peter Lloyd'
const DEFAULT_DESCRIPTION =
  'Front-end developer, UI/UX designer, and photographer based in Ithaca, NY.'

function toAbsolute(path) {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function SocialMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  image = defaultOgImage,
  path = '/',
  type = 'website',
}) {
  const url = toAbsolute(path)
  const imageSrc = typeof image === 'string' ? image : image?.src
  const imageUrl = toAbsolute(imageSrc)
  const width = typeof image === 'object' ? image?.width : undefined
  const height = typeof image === 'object' ? image?.height : undefined

  return (
    <Head>
      {title && <title>{title}</title>}
      <meta name="description" content={description} />

      <meta property="og:title" content={title ?? SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      {url && <meta property="og:url" content={url} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && width && (
        <meta property="og:image:width" content={String(width)} />
      )}
      {imageUrl && height && (
        <meta property="og:image:height" content={String(height)} />
      )}

      <meta
        name="twitter:card"
        content={imageUrl ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={title ?? SITE_NAME} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Head>
  )
}
