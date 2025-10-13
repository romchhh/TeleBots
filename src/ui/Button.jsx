'use client';

function Button({ children, className, onClick, ...props }) {
	return (
		<button
			className={`bg-accent font-medium px-8 py-3 text-base rounded-2xl transition-all duration-300 ${className}`}
			style={{ 
				background: 'linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d)',
				boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)'
			}}
			onClick={onClick}
			onMouseEnter={(e) => {
				e.target.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #3d3d3d)';
				e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.5), 0 2px 5px rgba(0, 0, 0, 0.4)';
				e.target.style.transform = 'translateY(-2px)';
			}}
			onMouseLeave={(e) => {
				e.target.style.background = 'linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d)';
				e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)';
				e.target.style.transform = 'translateY(0)';
			}}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
