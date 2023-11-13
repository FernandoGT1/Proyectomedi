import React, { useState, useEffect } from 'react';
import './TablaMedicamentos.css';



const TablaMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([]);


  useEffect(() => {
    const mockMedicamentos = [

      { id: 1, nombre: '', categoria: 'Morning', dosis: '', tiempo: '', receta: '', color: '#ffeeee' },
      { id: 1, nombre: '',  categoria: '☀️', dosis: '', tiempo: '', receta: '', color: '#ffcccc' },
      { id: 1, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ffeeee' },
      { id: 1, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ffcccc' },
      { id: 2, nombre: '',  categoria: 'Noon', dosis: '', tiempo: '', receta: '', color: '#aaffcc' },
      { id: 2, nombre: '',  categoria: '🌞', dosis: '', tiempo: '', receta: '', color: '#ccffcc' },
      { id: 2, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#aaffcc' },
      { id: 2, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ccffcc' },
      { id: 3, nombre: '',  categoria: 'Evening', dosis: '', tiempo: '', receta: '', color: '#eeeeff' },
      { id: 3, nombre: '',  categoria: '🌙', dosis: '', tiempo: '', receta: '', color: '#ccccff' },
      { id: 3, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#eeeeff' },
      { id: 3, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ccccff' },
      { id: 4, nombre: '',  categoria: 'Night', dosis: '', tiempo: '', receta: '', color: '#ffffee' },
      { id: 4, nombre: '',  categoria: '🌜',dosis: '', tiempo: '', receta: '', color: '#ffffcc' },
      { id: 4, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ffffee' },
      { id: 4, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ffffcc' },
      { id: 5, nombre: '',  categoria: 'Only When I Need It', dosis: '', tiempo: '', receta: '', color: '#ffeeff'},
      { id: 5, nombre: '',  categoria: '☁️',dosis: '', tiempo: '', receta: '', color: '#ffccff' },
      { id: 5, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ffeeff' },
      { id: 5, nombre: '',  dosis: '', tiempo: '', receta: '', color: '#ffccff' },
      
    ];
    setMedicamentos(mockMedicamentos);
  }, []);

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    const updatedMedicamentos = medicamentos.map((med) => {
      if (med.id === id) {
        return { ...med, [field]: value };
      }
      return med;
    });
    setMedicamentos(updatedMedicamentos);
  };

  const agregarMedicamento = () => {
    const nuevoId = medicamentos.length > 0 ? medicamentos[medicamentos.length - 1].id + 1 : 1;
    const nuevoMedicamento = {
      id: nuevoId,
      nombre: '',
      categoria: 'Morning',
      dosis: '',
      tiempo: '',
      receta: '',
      color: '#ffffff'
    };
    setMedicamentos([...medicamentos, nuevoMedicamento]);
  };

  return (



    
    <div style={{ width: '75%', height: '100px', margin: 'auto' }}> 
      <center>
      <button className= "m-20" onClick ={agregarMedicamento}>Agregar Medicamento</button>
      </center>    
       <table style={{ width: '100%', height: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>

        <thead>
          <tr>
            <th>Categoría</th>
            <th>Medicamento</th>
            <th>Dosis</th>
            <th>Tiempo</th>
            <th>Receta</th>
          </tr>
        </thead>

        <tbody>
          {medicamentos.map((med) => (
            <tr key={med.id} style={{ backgroundColor: med.color }}>
              <center>
              
              <td style={{ fontSize: '20px', padding: 0 }}>{med.categoria}</td>
              
              </center>
              <td><input value={med.nombre} onChange={(e) => handleInputChange(e, med.id, 'nombre')} /></td>
              <td><input value={med.dosis} onChange={(e) => handleInputChange(e, med.id, 'dosis')} /></td>
              <td><input value={med.tiempo} onChange={(e) => handleInputChange(e, med.id, 'tiempo')} /></td>
              <td><input value={med.receta} onChange={(e) => handleInputChange(e, med.id, 'receta')} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



  );
};

export default TablaMedicamentos;
