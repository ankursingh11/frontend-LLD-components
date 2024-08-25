import React from 'react'

const ShimmerUI = () => {
  return Array.from({length : 20}).map((_, i) => {
    return (
        <div className = "border border-black rounded-lg p-4">
            <div className = "rounded-lg w-48 h-48 bg-slate-200"></div>
            <div className = "rounded-lg w-24 h-5 bg-slate-200 mt-2"></div>
            <div className = "w-6 h-6 bg-slate-200 mt-2 rounded-full"></div>
        </div>
    )
  })
}

export default ShimmerUI
