import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    dtNasc: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(`http://localhost:3000/api/perfil/${token}`);
          const perfilData = response.data;
          setFormData(perfilData);
        } else {
          console.log('Token não encontrado');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleDate = (isoDate) => {
    const data = isoDate.substring(0, 10);
    return data;
  };
  
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
        const token = localStorage.getItem("token")
        await axios.put(`http://localhost:3000/api/perfil/${token}`, formData)
      
      window.location.reload()
    } catch (error) {
      console.error('Error:', error)
    }
  };

  const deletePerson = async (e) =>{
    e.preventDefault();
    try {
        const token = localStorage.getItem("token")
        await axios.delete(`http://localhost:3000/api/perfil/${token}`)
        window.location.reload()
    }catch(error){
        console.error("Error ", error)
    }
  }

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
      <input type="date" name="dtNasc" id="dtNasc" value={handleDate(formData.dtNasc)} onChange={handleChange} />
      <button type="submit">Atualizar</button>
      <button onClick={(deletePerson)}>Deletar</button>
    </form>
  );
}

export default FormComponent;
