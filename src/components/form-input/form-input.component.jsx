import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ onChange, label, value, ...otheProps }) => {
	return (
		<div className='group'>
			<input className='form-input' {...{ onChange, value }} {...otheProps} />
			{
				label && (
					<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
						{label}
					</label>
				)
			}
		</div>
	)
}

export default FormInput;
