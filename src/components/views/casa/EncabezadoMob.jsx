
import { useLoading } from "../../context/LoadingContext";
import habitacion from "../../../assets/iconos/habitacion.png";
import salaEstar from "../../../assets/iconos/sala-de-estar.png";
import comedor from "../../../assets/iconos/comedor.png";
import cocina from "../../../assets/iconos/cocina.png";
import cochera from "../../../assets/iconos/cochera.png";
import galeria from "../../../assets/iconos/hall.png";
import entrepiso from "../../../assets/iconos/entrepiso.png";
import desayunador from "../../../assets/iconos/desayunador.png";
import terraza from "../../../assets/iconos/terraza.png";
import lavadero from "../../../assets/iconos/lavadero.png";
import deposito from "../../../assets/iconos/deposito.png";
import hallIngreso from "../../../assets/iconos/hall.png";
import despensa from "../../../assets/iconos/despensa.png";
import banos from "../../../assets/iconos/bano.png";
import expansion from "../../../assets/iconos/metros.png";


const EncabezadoMob = ({ casa }) => {

    const { hideLoader } = useLoading();

    return (
        <>
            <section className="sectionm-encabezado-casa-mob">
                <img className="img-encabezado-casa-mob" src={casa.imgPrincipal} alt={casa.tipo} onLoad={hideLoader} />
                <div className="contenedor-logo-modelos">
                    <h1 className="title-casa-encabezado" >{casa.tipo}</h1>
                </div>
                <div className="contenedor-data-casa-mob">
                    <div className="contenedor-textos-casa-mob">
                        <h2 className="titulo-encabezado-casa-mob">TU CASA IDEAL</h2>
                        <div className="contenedor-caracteristicas-data-mob">
                            <div className="contenedor-descripcion-casa-mob">
                                <p>{casa.descripcion}</p>
                            </div>
                            <div className="contenedor-caracteristicas-casa">
                                <p className="titulo-lista-mob">CARACTERISTICAS</p>
                                <ul className="lista-caracteristicas-modelo-mob">
                                    {casa.habitaciones
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={habitacion} alt="" />
                                            {casa.habitaciones == 1
                                                ?
                                                <p>1 Habitacion</p>
                                                :
                                                <p>{casa.habitaciones} Habitaciones</p>
                                            }
                                        </li>
                                        :
                                        ""}
                                    {casa.salaEstar
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={salaEstar} alt="" />
                                            <p>Sala estar</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.comedor
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={comedor} alt="" />
                                            <p>Comedor</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.cocina
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={cocina} alt="" />
                                            <p>Cocina</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.cochera
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={cochera} alt="" />
                                            <p>Cochera</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.galeria
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={galeria} alt="" />
                                            <p>Galeria</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.expansion
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={expansion} alt="" />
                                            <p>Expansión</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.entrepiso
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={entrepiso} alt="" />
                                            <p>Entrepiso</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.desayunador
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={desayunador} alt="" />
                                            <p>Desayunador</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.terraza
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={terraza} alt="" />
                                            <p>Terraza</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.lavadero
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={lavadero} alt="" />
                                            <p>Lavadero</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.deposito
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={deposito} alt="" />
                                            <p>Depósito</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.hallIngreso
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={hallIngreso} alt="" />
                                            <p>Hall ingreso</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.despensa
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={despensa} alt="" />
                                            <p>Despensa</p>
                                        </li>
                                        :
                                        ""}
                                    {casa.banos
                                        ?
                                        <li className="item-caracteristicas-modelo">
                                            <img src={banos} alt="" />
                                            <p>Baño</p>
                                        </li>
                                        :
                                        ""}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default EncabezadoMob;