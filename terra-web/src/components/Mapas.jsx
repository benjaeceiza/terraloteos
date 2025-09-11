import { useState } from "react";
import icono from "../assets/iconos/marcador-de-posicion.png"

const Mapas = () => {
    
    const [classActiveVm,setClassActiveVm] = useState(false)
    const [classActiveVm2,setClassActiveVm2] = useState(false)
    const [classActiveMerlo,setClassActiveMerlo] = useState(false)
    const [classActiveMerlo2,setClassActiveMerlo2] = useState(false)
    const [classActiveRc,setClassActiveRc] = useState(false)
    const [classActiveBs,setClassActiveBs] = useState(false)
    const [classActiveSl,setClassActiveSl] = useState(false)
    const [mapaActive, setMapaActive] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.494102030164!2d-65.4608835!3d-33.670268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a63a6ac37f9%3A0x1d81cd2d27c11a7b!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1753974103220!5m2!1ses-419!2sar")
    const mapaVm = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.12755068707!2d-65.4636013!3d-33.67976129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a88ab099ea7%3A0xbaa9df1d0c1964bc!2sAv.%20Bartolom%C3%A9%20Mitre%20734%2C%20D5730%20Villa%20Mercedes%2C%20San%20Luis!5e0!3m2!1ses-419!2sar!4v1756246973648!5m2!1ses-419!2sar"
    const mapaVm2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.494102030164!2d-65.4608835!3d-33.670268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a63a6ac37f9%3A0x1d81cd2d27c11a7b!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1756247020567!5m2!1ses-419!2sar";
    const mapaSl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1667.3741132792925!2d-66.3342908!3d-33.2992492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d4397f54e40159%3A0xbf2440be27387425!2sEdificio%20Torre%20Boussy!5e0!3m2!1ses-419!2sar!4v1756247039128!5m2!1ses-419!2sar"
    const mapaMerlo1 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d421.3359288401751!2d-65.0008852!3d-32.3470998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e18341e31dc7%3A0x9dfe6b8a77070027!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1756246868149!5m2!1ses-419!2sar"
    const mapaMerlo2 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3370.7203069999096!2d-65.0062055!3d-32.3462174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e19789848b4d%3A0xde0d5da6f0b0f560!2sTerra%20Loteos%20-%20Av.%20del%20Sol%20351!5e0!3m2!1ses-419!2sar!4v1756247099046!5m2!1ses-419!2sar"
    const mapaRc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.421302002803!2d-64.345278!3d-33.1242947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d201a1fe4eb1d7%3A0x7c6a722bbd527a3c!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1756247070081!5m2!1ses-419!2sar"
    const mapaBs = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2181379436192!2d-58.37672559999999!3d-34.5986451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb70d60894f9%3A0x19e77c630e9cbf0e!2sTerraloteos!5e0!3m2!1ses-419!2sar!4v1756246918001!5m2!1ses-419!2sar"
  
  const activar = (mapa) => {

    setClassActiveVm(false)
    setClassActiveVm2(false)
    setClassActiveMerlo(false)
    setClassActiveMerlo2(false)
    setClassActiveRc(false)
    setClassActiveBs(false)
    setClassActiveSl(false)
 
      if(mapa == mapaVm){
         setMapaActive(mapaVm)
         setClassActiveVm(true)
      }
      if(mapa == mapaVm2){
         setMapaActive(mapaVm2)
         setClassActiveVm2(true)
      }
      if(mapa == mapaSl){
         setMapaActive(mapaSl)
         setClassActiveSl(true)
      }
      if(mapa == mapaMerlo1){
         setMapaActive(mapaMerlo1)
         setClassActiveMerlo(true)
      }
      if(mapa == mapaMerlo2){
         setMapaActive(mapaMerlo2)
         setClassActiveMerlo2(true)
      }
      if(mapa == mapaRc){
         setMapaActive(mapaRc)
         setClassActiveRc(true)
      }
      if(mapa == mapaBs){
         setMapaActive(mapaBs)
         setClassActiveBs(true)
      }
   
  }


    return (
        <section className="contenedor-mapa">
            <div className="contenedor-ubciaciones ">
               <p className="titulo-ubicaciones desk">Nuestras oficinas</p>   
                <ul className="lista-ubicaciones">
                    <li id="mapa-vm-1" className={classActiveVm ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaVm)}>
                        <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">Villa Mercedes </p>
                        </div>
                          <p className="direccion-mapa">direccion</p>

                    </li>
                    <li id="mapa-vm-2" className={classActiveVm2 ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaVm2)}>
                   <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">Villa Mercedes </p>
                        </div>
                          <p className="direccion-mapa">direccion</p>
                    </li>
                    <li id="mapa-sl" className={classActiveSl ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaSl)}>
                        <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">San Luis</p>
                        </div>
                          <p className="direccion-mapa">direccion</p>
                    </li>
                    <li id="mapa-merlo-1" className={classActiveMerlo ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaMerlo1)}>
                       <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">Merlo</p>
                        </div>
                          <p className="direccion-mapa">direccion</p>
                    </li>
                    <li id="mapa-merlo-2" className={classActiveMerlo2 ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaMerlo2)}>
                        <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">Merlo</p>
                        </div>
                          <p className="direccion-mapa">direccion</p>
                    </li>
                    <li id="mapa-rio-cuarto" className={classActiveRc ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaRc)}>
                        <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">Rio Cuarto</p>
                        </div>
                          <p className="direccion-mapa">direccion</p>
                    </li>
                    <li id="mapa-ba" className={classActiveBs ? "ubicaciones-active":"ubicaciones"} onClick={() => activar(mapaBs)}>
                        <div className="nombre-icono-contenedor">
                            <img className="IconoUbicacion" src={icono} alt="" />
                            <p className="nombre-ubicacion">Buenos Aires</p>
                        </div>
                          <p className="direccion-mapa">direccion</p>
                    </li>
                </ul>
            </div>
            <iframe id="mapa" className="mapa"
                src={mapaActive}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className="titulo-ubicaciones mob">Nuestras oficinas</p>
        </section>
    )
}

export default Mapas;