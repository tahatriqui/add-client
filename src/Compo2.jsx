import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Compo2() {
    const output = useSelector((state) => state.ajoute);
    return (
        <>
            <div>
                <Link className="btn1" to={"/"}>
                    Add another client
                </Link>
            </div>
            <div className="Compo2">
                {output.map((e, i) => (
                    <div key={i}>
                        <div>{e.nom}</div>
                        <div>{e.prenom}</div>
                        <img src={e.src} alt={`Picture ${i + 1}`} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Compo2;