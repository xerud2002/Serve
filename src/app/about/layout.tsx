import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.about)

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
