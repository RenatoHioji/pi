import React, { useState } from 'react';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    dtNasc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} />
      <label htmlFor="cpf">CPF</label>
      <input type="text" name="cpf" id="cpf" value={formData.cpf} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
      <label htmlFor="senha">Senha</label>
      <input type="text" name="senha" id="senha" value={formData.senha} onChange={handleChange} />
      <label htmlFor="dtNasc">Data de Nascimento</label>
      <input type="date" name="dtNasc" id="dtNasc" value={formData.dtNasc} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComponent;