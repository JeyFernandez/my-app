import './Form.css'

function Form() {
  return (
    <div className='flex'>
    <div className='container'>
      <form className="form">
        <p className="title">Registro de medicamentos </p>
        <p className="message">Porfavor ingrese los datos requerido</p>
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" />
            <span>Nombre</span>
          </label>
        </div>

        <label>
          <input required placeholder type="email" className="input" />
          <span>Detalle</span>
        </label>
        <label>
          <input required placeholder type="number" className="input" />
          <span>Precio</span>
        </label>
        <label>
          <input required placeholder type="number" className="input" />
          <span>Cantidad</span>
        </label>
        <button className="submit">Submit</button>
      </form>
    </div>
{/* ----------------- */}
    <div className='container2'>
      <form className="form2">
        <p className="title2">Registro</p>
        <div className='items'>
          <p className='dt'>Name</p>
          <p className='dt'>Detalle</p>
          <p className='dt'>Precio</p>
          <p className='dt'>Cantidad</p>
        </div>
       
      </form>
    </div>
    </div>
  );
}

export default Form;
