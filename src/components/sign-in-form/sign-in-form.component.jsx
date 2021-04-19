import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export class SignInForm extends Component {
  state = { email: '', password: '' }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value })
  }

  render() {
    return (
      <div>
        <h3>Ya tengo una cuenta creada</h3>
        <span>Ingresar con email y contraseña</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleOnChange}
            required
          />
          <FormInput
            label='Contraseña'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleOnChange}
            required
          />
          <CustomButton type='submit'>Ingresar</CustomButton>
          <br />
          <br />
          <CustomButton onClick={signInWithGoogle}>Ingresar con Google</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignInForm;