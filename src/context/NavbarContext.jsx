'use client'

import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
	const [isActiveNav, setIsActiveNav] = useState(false);

	return (
		<NavbarContext.Provider value={{ isActiveNav, setIsActiveNav }}>
			{children}
		</NavbarContext.Provider>
	);
}

export function useNavbar() {
	const context = useContext(NavbarContext);
	if (!context) {
		throw new Error('useNavbar must be used within a NavbarProvider');
	}
	return context;
}
