import React from 'react'
import  { useQuery }  from '@apollo/client'
import { QUERY_ME } from '../utils/queries'


function UserDistanceTable() {

    const { loading, data } = useQuery(QUERY_ME)

    if (loading) {
        return <h2>Loading User Data...</h2>
      }

    const tableData = data?.me.clubs

  return (
    <div>
      <div className="px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Club
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    High
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Low
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Average
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date Tested
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-6 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableData.map((table, personIdx) => (
                  <tr key={table._id} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {table.clubName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubHigh}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubLow}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubAverage}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(parseInt(table.dateTested)).toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-3">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {table.clubName}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserDistanceTable
