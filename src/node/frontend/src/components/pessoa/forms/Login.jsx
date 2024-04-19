import React, { useState } from 'react'
import axios from 'axios'

function FormComponent() {
  const [formData, setFormData] = useState({
    cpf: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/api/login', formData).then(response =>{
        const token = response.data.token
        localStorage.setItem("token", token)
        console.log('Response:', token)
      })
    } catch (error) {
      console.error('Error:', error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cpf">CPF</label>
      <input type="text" name="cpf" id="cpf" value={formData.cpf} onChange={handleChange} />
      <label htmlFor="senha">Senha</label>
      <input type="text" name="senha" id="senha" value={formData.senha} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComponent;