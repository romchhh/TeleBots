'use client'

import React, { useState } from 'react';

function Input({
	name,
	children,
	type = 'text',
	required = false,
	initialValue = '',
	placeholder,
	onChange,
	className = '',
}) {
	const [value, setValue] = useState(initialValue);
	const [isFocused, setIsFocused] = useState(false);

	const handleChange = (newValue) => {
		setValue(newValue);
		if (onChange) {
			onChange(newValue);
		}
	};

	return (
		<div className={`custom-input w-full ${className}`}>
			<input
				type={type}
				name={name}
				id={name}
				required={required}
				className={`w-full h-[60px] px-4 py-2 border rounded-lg outline-none transition-colors ${
					isFocused ? 'border-accent' : 'border-gray-300'
				}`}
				value={value}
				onChange={(e) => handleChange(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				autoComplete='off'
				placeholder={placeholder}
			/>
			<label htmlFor={name}>{children}</label>
		</div>
	);
}

export default Input;
