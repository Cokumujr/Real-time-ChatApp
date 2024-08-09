import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Male</span> 
                <input type="radio" name="radio-10" className="radio checked:bg-purple-500" />
            </label>

        </div>
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text'>Female</span> 
                <input type="radio" name="radio-10" className="radio checked:bg-purple-500" />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox