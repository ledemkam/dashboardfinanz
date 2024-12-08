import { SummaryCardProps } from '@/types'
import React from 'react'

export default function SummaryCard({title, value, isLoading, borderColor, textColor}: Readonly<SummaryCardProps>) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${borderColor}`}>
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      {isLoading ? (
        <p className={`text-2xl font-bold ${textColor}`}>Loading</p>
      ) : (
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>

      )}
    </div>
  )
}