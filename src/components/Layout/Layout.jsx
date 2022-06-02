import React from 'react';

const Layout = ({children}) => {
	return (
		<div className='w-full mx-auto mb-40'>
			{children}
		</div>
	);
};

export default Layout;