import { 
  HeartIcon, 
  HomeIcon, 
  TruckIcon, 
  UserGroupIcon, 
  SunIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export interface RelatedServiceItem {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

// All available services for related services sections
export const allServices: RelatedServiceItem[] = [
  {
    title: 'Personal Care at Home',
    description: 'Professional, compassionate care in the comfort of your own home. CQC registered support for daily living.',
    href: '/services/personal-care/',
    icon: <HeartIcon className="w-full h-full" />,
  },
  {
    title: 'Home Help Service',
    description: 'Practical, flexible help around the home - housework, meals, prescriptions, errands and companionship.',
    href: '/services/home-help/',
    icon: <SparklesIcon className="w-full h-full" />,
  },
  {
    title: 'Countywide Befriending',
    description: 'Combat loneliness with our friendly visiting service. Weekly companionship and social connection.',
    href: '/services/befriending/',
    icon: <UserGroupIcon className="w-full h-full" />,
  },
  {
    title: 'Day Care Centre',
    description: 'Stimulating activities, nutritious meals, and social interaction in a safe, welcoming environment.',
    href: '/services/day-care/',
    icon: <SunIcon className="w-full h-full" />,
  },
  {
    title: 'Community Transport',
    description: 'Safe and reliable door-to-door transport service for medical appointments, shopping trips, and essential journeys.',
    href: '/services/transport/',
    icon: <TruckIcon className="w-full h-full" />,
  },
  {
    title: 'Community Services',
    description: 'DBS checks, hearing aid service, and community events. Supporting independence and wellbeing.',
    href: '/services/community-services/',
    icon: <HomeIcon className="w-full h-full" />,
  },
]

// Predefined related services for each service page
export const relatedServicesMap: Record<string, RelatedServiceItem[]> = {
  '/services/personal-care/': [
    allServices.find(s => s.href === '/services/home-help/')!,
    allServices.find(s => s.href === '/services/day-care/')!,
    allServices.find(s => s.href === '/services/befriending/')!,
  ],
  '/services/home-help/': [
    allServices.find(s => s.href === '/services/personal-care/')!,
    allServices.find(s => s.href === '/services/befriending/')!,
    allServices.find(s => s.href === '/services/transport/')!,
  ],
  '/services/befriending/': [
    allServices.find(s => s.href === '/services/home-help/')!,
    allServices.find(s => s.href === '/services/day-care/')!,
    allServices.find(s => s.href === '/services/community-services/')!,
  ],
  '/services/day-care/': [
    allServices.find(s => s.href === '/services/personal-care/')!,
    allServices.find(s => s.href === '/services/transport/')!,
    allServices.find(s => s.href === '/services/befriending/')!,
  ],
  '/services/transport/': [
    allServices.find(s => s.href === '/services/personal-care/')!,
    allServices.find(s => s.href === '/services/day-care/')!,
    allServices.find(s => s.href === '/services/home-help/')!,
  ],
  '/services/community-services/': [
    allServices.find(s => s.href === '/services/home-help/')!,
    allServices.find(s => s.href === '/services/befriending/')!,
    allServices.find(s => s.href === '/services/day-care/')!,
  ],
}
