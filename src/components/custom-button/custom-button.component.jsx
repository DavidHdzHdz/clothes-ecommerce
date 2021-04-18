import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, otheProps }) => {
	return (
		<button className='custom-button' {...otheProps} >{children}</button>
	)
}

export default CustomButton;
