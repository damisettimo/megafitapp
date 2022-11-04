import { useState, createContext } from "react";

export const FormData = createContext({
    name:"",
    surname:"",
    address:"",
    phone:"",
    email:""
})


const ClientForm = ({completoDatos}) => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");




const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            window.alert('completa tus datos')
        }
        else if (email != checkEmail && email && checkEmail) {
            window.alert('Los email no coinciden')
    }

    else {
        window.alert('datos guardados')
    completoDatos(
        name,
        surname,
        address,
        phone,
        email
    )
    }
    }



    return (
        <form>

            <div>
                <input  value={name} onChange={(e) => setName(e.target.value)} type="text" pattern="[a-zA-Z ]{1,35}"   className="form-input"   placeholder="Nombre" required />
                <input  value={surname} onChange={(e) => setSurname(e.target.value)} type="text"   className="form-input"   placeholder="Apellido" required/>
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"   className="form-input"   placeholder="Dirección"required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-input"   placeholder="Email" required/>
                <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"  className="form-input"   placeholder="Email" required/>
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number" className="form-input"   placeholder="Teléfono"required />


            <div >
            <button onClick = {submit}> Submit Data</button>
            </div>
            
            </div>
        
            </form>
)
}

            
export default ClientForm