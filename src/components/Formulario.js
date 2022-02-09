import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

// Crear state de citas



const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    });

    const [error, actualizarError] = useState(false);

    // funcion que se ejcuta cada vez que se escribe en un input

    const handleChange = e => {

        actualizarCita({

            ...cita,
            [e.target.name]: e.target.value
        })
        console.log(e.target)

    }

    // extraer valores

    const {mascota, propietario, fecha, hora, sintomas} = cita

    //cuando el usuario presiona agregar cita

    const submitCita = (e) => {

        e.preventDefault();

        //validar
        if(mascota.trim() ==='' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        //eliminar mensaje previo
            actualizarError(false);

        //asignar un ID
            cita.id = uuid();

        //crear una cita
            crearCita(cita);

        //reiniciar el form
            actualizarCita({
                mascota:'',
                propietario:'',
                fecha:'',
                hora:'',
                sintomas:'',

            })

    }

    return ( 
        <Fragment>
            <h2>Crear citas</h2>

            {error ? <p className="alerta-error" >Todos los campos son obligatorios</p>   : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de mascotas</label>
                <input 
                    type ="text"
                    name ="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre de dueño</label>
                <input 
                    type ="text"
                    name ="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>fecha</label>
                <input 
                    type ="date"
                    name ="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>hora</label>
                <input 
                    type ="time"
                    name ="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                 type="submit"
                 className="u-full-width button-primary"
                
                >Agregar citas</button>
            </form>


        </Fragment>

     );
}

Formulario.propTypes = {
    crearCita:PropTypes.func.isRequired

}
 
export default Formulario ;