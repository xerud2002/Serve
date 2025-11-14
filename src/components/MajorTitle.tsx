import clsx from 'clsx'

interface MajorTitleProps {
  primary: string
  secondary?: string
  accentClass?: string
  size?: 'default' | 'large'
  dark?: boolean
  className?: string
}

// Unified major title component for consistent heading styling
export default function MajorTitle({
  primary,
  secondary,
  accentClass,
  size = 'default',
  dark = false,
  className
}: MajorTitleProps) {
  const baseSize = size === 'large'
    ? 'text-5xl md:text-6xl lg:text-7xl'
    : 'text-4xl md:text-5xl'

  const colorBase = dark ? 'text-white' : 'text-serve-blue-800'
  const accent = accentClass || (dark ? 'text-serve-blue-200' : 'text-serve-blue-600')

  return (
    <h1
      className={clsx(
        baseSize,
        'font-bold mb-6 leading-tight text-balance',
        colorBase,
        className
      )}
    >
      {primary}
      {secondary && (
        <span className={clsx('block', accent, size === 'large' ? 'mt-2' : 'mt-1')}>{secondary}</span>
      )}
    </h1>
  )
}
