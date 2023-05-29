import React from 'react'

export default function Input_email() {
  return (
<div className="form-control">
  <label className="label">
    <span className="label-text">Email kamu</span>
  </label>
  <label className="input-group">
    <span>Email</span>
    <input type="text" placeholder="asep@email.com" className="input input-bordered w-[170px]" />
  </label>
</div>  )
}
