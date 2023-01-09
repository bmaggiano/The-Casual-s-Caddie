import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

import { Swiper, SwiperSlide } from "swiper/react";

import "../App.css";

// import required modules
import { Pagination } from "swiper";

const distances = [
  {
    name: 'Driver',
    description: '275 yards',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Irons',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CogIcon,
  },
  {
    name: 'Database Backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function averageDistance() {
  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-bold text-green-700">Average Tour Pro Distances</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How far do your shots go compared to the local tour pros?
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Theodore Roosevelt once said "Comparison is the thief of joy". It's very easy to see a tour player hit a driver 350+ yards and feel incompetent,
          but the PGA tour is a very big organization and there's lots of players...
        </p>

        <Swiper
          pagination={{
            dynamicBullets: false,
          }}
          modules={[Pagination]}
          style={{
            "--swiper-pagination-color": "darkgreen"
          }}
          className="py-3 rounded-md"
        >
          {distances.map((distance) => (
          <SwiperSlide>
            <div key={distance.name} className="pt-6">
              <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-3 shadow-lg">
                <distance.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {distance.name}
              </h3>
              <p className="mt-5 text-base leading-7 text-gray-600">{distance.description}</p>
            </div>
          </SwiperSlide>
          ))
          }

        </Swiper>
          </div>
        </div>
  )
}
