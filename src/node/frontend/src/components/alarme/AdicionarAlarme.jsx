import React, { useState } from 'react';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    acao: '',
    horario: '',
    diaDaSemana: '',
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
      const token = localStorage.getItem("token")
      if(token){
        const response = await axios.post(`http://localhost:3000/api/alarme/${token}`, formData);
        console.log('Response:', response.data);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Ação: </label>
      <input type="text" name="acao" id="acao" value={formData.acao} onChange={handleChange} />
      <label htmlFor="horario">Horário: </label>
      <input type="time" name="horario" id="horario" value={formData.horario} onChange={handleChange} />
      <label htmlFor="diaDaSemana">Dia da Semana: </label>
      <select name="diaDaSemana" id="diaDaSemana">
        <option value="1">Segunda-Feira</option>
        <option value="2">Terça-Feira</option>
        <option value="3">Quarta-Feira </option>
        <option value="4">Quinta-Feira</option>
        <option value="5">Sexta</option>
        <option value="6">Sábado</option>
        <option value="0">Domingo</option>
      </select>
      <input type="text" name="diaDaSemana" id="diaDaSemana" value={formData.diaDaSemana} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComponent;