'use client'

import React, { useRef } from 'react'
import { IMaskInput } from 'react-imask'

function PhoneInput({ value, onChange, className = '' }) {
	const inputRef = useRef(null)

	return (
		<IMaskInput
			ref={inputRef}
			mask="+{38}(000)000-00-00"
			value={value}
			onAccept={(value) => onChange && onChange(value)}
			placeholder="+38(___)___-__-__"
			className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors focus:border-accent border-gray-300 ${className}`}
		/>
	)
}

export default PhoneInput
