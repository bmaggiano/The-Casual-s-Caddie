const distances = [
  {
    name: 'Driver',
    description: '275 Yards',
  },
  {
    name: '3 Wood',
    description: '243 Yards',
  },
  {
    name: '5 Wood',
    description: '230 Yards',
  },
  {
    name: 'Hybrid',
    description: '225 Yards',
  },
  {
    name: '3 Iron',
    description: '212 Yards',
  },
  {
    name: '4 Iron',
    description: '203 Yards',
  },
  {
    name: '5 Iron',
    description: '194 Yards',
  },
  {
    name: '6 Iron',
    description: '183 Yards',
  },
  {
    name: '7 Iron',
    description: '172 Yards',
  },
  {
    name: '8 Iron',
    description: '160 Yards',
  },
  {
    name: '9 Iron',
    description: '148 Yards',
  },
  {
    name: 'PW',
    description: '136 Yards',
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
        <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg rounded-lg">
        <table className='min-w-full divide-y divide-gray-300'>
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-lg font-semibold text-gray-900 sm:pl-6">Club</th>
              <th scope="col"
                className="px-3 py-3.5 text-lg font-semibold text-gray-900 lg:table-cell">Carry</th>
            </tr>
          </thead>
          {distances.map((distance) => (
          <tbody>
            <tr>
              <td className='relative py-2 pl-4 sm:pl-6 pr-3 text-md'>
                {distance.name}
              </td>
              <td className='relative py-2 pl-4 sm:pl-6 pr-3 text-md'
                  >{distance.description}</td>
            </tr>
          </tbody>
          ))
        }
        </table>
        </div>
        <br/>
        <p className=' text-slate-300 text-xs'>*according to <a className="text-slate-300" target="_blank" href='https://blog.trackmangolf.com/trackman-average-tour-stats/'>https://blog.trackmangolf.com/trackman-average-tour-stats/</a></p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Theodore Roosevelt once said "Comparison is the thief of joy". It's very easy to see a tour player hit a driver 350+ yards and feel incompetent,
          but the PGA tour is a very big organization and there's lots of players...
        </p>

          </div>
        </div>
  )
}
