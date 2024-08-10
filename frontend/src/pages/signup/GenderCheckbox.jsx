import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'Male' ? 'checked' : ''}`}>
                <span className='label-text'>Male</span> 
                <input type="radio" name="radio-10" className="radio checked:bg-purple-500 " 
                 checked={selectedGender === "male"}
                onChange={() => onCheckboxChange("male")}  
                
                />
            </label>

        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'Female' ? 'checked' : ''}`}>
                <span className='label-text'>Female</span> 
                <input type="radio" name="radio-10" className="radio checked:bg-purple-500" 
                checked={selectedGender === "female"}
                onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox