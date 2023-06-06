import React from 'react'

export default function Input_email() {
  return (
<div className="form-control">
  <label className="label">
    <span className="label-text">Email kamu</span>
  </label>
  <label className="input-group">
    <span className='text-neutral-700 dark:text-slate-700 dark:bg-gray-200 bg-white'>Email</span>
    <input type="text" placeholder="asep@email.com" className="input  w-[170px] bg-white" />
  </label>
</div>  )
}
