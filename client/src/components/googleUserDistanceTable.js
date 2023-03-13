import React from 'react'
import  { useQuery }  from '@apollo/client'
import { QUERY_GOOGLE_ME } from '../utils/queries'
import { useMutation } from '@apollo/client'
import { REMOVE_GOOGLE_CLUB } from '../utils/mutations'
import { Link } from "react-router-dom"
import Auth from '../utils/auth'


function GoogleUserDistanceTable() {

    const { loading, data } = useQuery(QUERY_GOOGLE_ME)
    const [ removeGoogleClub ] = useMutation(REMOVE_GOOGLE_CLUB)
    const tableData = data?.googleMe.clubs

    const handleRemoveGoogleClub = async(clubToRemove) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
            return false;
        }
        
        try {
            await removeGoogleClub({
              variables: {_id: clubToRemove},
          })
        } catch (err) {
            console.error(err)
        }
    }
    if (loading) {
        return <h2>Loading User Data...</h2>
      }

    if (tableData.length === 0) {
      return <h2 className='text-center'>You haven't entered any clubs yet</h2>;
    }



  return (
    <div>
      <p className='text-center'>Here's the most recent data for your clubs</p>
      <div className="px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
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
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubHigh ? ( `${table.clubHigh} yds` ) : ( `` )}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubLow ? ( `${table.clubLow} yds` ) : ( `` )}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubAverage ? ( `${table.clubAverage} yds` ) : ( `` )}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{table.clubHigh && table.clubLow && table.clubAverage ? ( new Date(parseInt(table.dateTested)).toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true 
            })) : (`N/A`)}</td>
            
            <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-3">
  {table.clubHigh && table.clubLow && table.clubAverage ? (
    <Link 
      to={`/Edit/${table._id}`}
      className="mx-2 rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      key={table._id}>Recalibrate</Link>
  ) : (
    <Link 
      to={`/Edit/${table._id}`}
      className="mx-2 rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      key={table._id}>Calibrate</Link>
  )}
</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-3">
                      <button 
                        onClick={() => handleRemoveGoogleClub(table._id)}
                        className="mx-2 rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        key={table._id}>Delete</button>
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

export default GoogleUserDistanceTable

