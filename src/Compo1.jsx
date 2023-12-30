import { useDispatch } from "react-redux";
import {  useRef, useState } from "react";
import { Link } from "react-router-dom";


function Compo1() {
    const nom = useRef();
    const prenom = useRef();
    const src = useRef();
    const [input, setValue] = useState({});
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setValue({ ...input, [e.target.name]: e.target.value });
    };

 
    return (
        <div className="Compo1">
            <h1>Ajouter un client</h1>
            <input ref={nom} onChange={handleChange} name="nom" placeholder="Saisir nom" />
            <input ref={prenom} onChange={handleChange} name="prenom" placeholder="Saisir prenom" />
            <input ref={src} onChange={handleChange} name="src" placeholder="Saisir imgSrc" />
            <select>
                <option value="">Select an option</option>
                {/* Add more options as needed */}
            </select>
            <Link
                className="btn"
                to={"/Articles"}
                onClick={() => {
                    dispatch({
                        type: "ajouter",
                        payload: input,
                    });
                    nom.current.value = "";
                    prenom.current.value = "";
                    src.current.value = "";
                    setValue({});
                }}
            >
                ajouter
            </Link>
        </div>
    );
}

export default Compo1;