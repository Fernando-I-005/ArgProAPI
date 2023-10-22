import React from 'react'
import "./AppClima.css"
import { ContenedorPrincipal } from './ContenedorPrincipal.jsx'
import { ContenedorSecundario } from "./ContenedorSecundario"
import { ContenedorTempDiaria } from "./ContenedorTempDiaria"
//import { InfoData } from './InfoData'
import horaDiaria12AM from "../recursos/100 - 00 - 03.svg"
import imagen01Soleado from "../recursos/99-tormentaGranizoFuerte.svg"





const texto00_cieloDespejado = "Cielo Despejado"
const img00_cieloDespejadoDia = "../recursos/99-tormentaGranizoFuerte.svg"
const img00_cieloDespejadoNoche = "../recursos/99-tormentaGranizoFuerte.svg"

const texto01_principalmenteDespejado = "Cielo principalmente despejado"
const img01_principalmenteDespejadoDia = "../recursos/99-tormentaGranizoFuerte.svg"
const img01_principalmenteDespejadoNoche = "../recursos/99-tormentaGranizoFuerte.svg"

const texto02_parcialmenteNublado = "Parcialmente nublado"
const img02_parcialmenteNubladoDia = "../recursos/99-tormentaGranizoFuerte.svg"
const img02_parcialmenteNubladoNoche = "../recursos/99-tormentaGranizoFuerte.svg"

const texto03_nublado = "Nublado"
const img03_nublado = "../recursos/99-tormentaGranizoFuerte.svg"

const texto45_niebla = "Niebla"
const img45_niebla = "../recursos/99-tormentaGranizoFuerte.svg"

const texto48_nieblaEscarcha = "Niebla con escarcha"
const img48_nieblaEscarcha  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto51_lloviznaLigera = "Llovizna ligera"
const img51_lloviznaLigera  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto53_lloviznaModerada = "Llovizna moderada"
const img53_lloviznaModerada  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto55_lloviznaIntensa= "Llovizna intensa"
const img55_lloviznaIntensa  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto56_lloviznaHeladaLigera= "Llovizna helada ligera"
const img56_lloviznaHeladaLigera  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto57_lloviznaHeladaIntensa= "Llovizna helada intensa"
const img57_lloviznaHeladaIntensa  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto61_lluviaLigera= "Lluvia ligera"
const img61_lluviaLigera  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto63_lluviaModerada= "Lluvia moderada"
const img63_lluviaModerada  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto65_lluviaIntensa= "Lluvia intensa"
const img65_lluviaIntensa  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto66_lluviaHeLigera= "Lluvia helada ligera"
const img66_lluviaHeladaLigera  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto67_lluviaHeladaIntensa = "Lluvia helada intensa"
const img67_lluviaHeladaIntensa   = "../recursos/99-tormentaGranizoFuerte.svg"

const texto71_nevadasLigeras = "Nevadas ligeras"
const img71_nevadasLigeras   = "../recursos/99-tormentaGranizoFuerte.svg"

const texto73_nevadasModeradas = "Nevadas moderadas"
const img73_nevadasModeradas   = "../recursos/99-tormentaGranizoFuerte.svg"

const texto75_nevadasIntensas = "Nevadas intensas"
const img75_nevadasIntensas   = "../recursos/99-tormentaGranizoFuerte.svg"

const texto77_aguaNieve = "Agua nieve"
const img77_aguaNieve   = "../recursos/99-tormentaGranizoFuerte.svg"

const texto80_lluviasIntermitentesLigeras = "Lluvias intermitentes ligeras"
const img80_lluviasIntermitentesLigerasDia  = "../recursos/99-tormentaGranizoFuerte.svg"
const img80_lluviasIntermitentesLigerasNoche  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto81_lluviasIntermitentesModeradas  = "Lluvias intermitentes moderadas"
const img8l_luviasIntermitentesModeradasDia = "../recursos/99-tormentaGranizoFuerte.svg"
const img81_lluviasIntermitentesModeradasNoche = "../recursos/99-tormentaGranizoFuerte.svg"

const texto82_lluviasIntermitentesIntensas = "Lluvias intermitentes intensas"
const img82_lluviasIntermitentesIntensasDia = "../recursos/99-tormentaGranizoFuerte.svg"
const img82_lluviasIntermitentesIntensasNoche = "../recursos/99-tormentaGranizoFuerte.svg"

const texto85_lluviasNevadasLigeras = "Lluvias y nevadas ligeras"
const img85_lluviasNevadasLigeras  = "../recursos/99-tormentaGranizoFuerte.svg"

const texto86_lluviasNevadasIntensas = "Lluvias y nevadas intensas"
const img86_lluviasNevadasIntensas   = "../recursos/99-tormentaGranizoFuerte.svg"

const texto95_tormentas = "Tormentas"
const img95_tormentas = "../recursos/99-tormentaGranizoFuerte.svg"

const texto96_tormentasGranizoLeve = "Tormentas con probabilidad baja de granizo"
const img96_tormentasGranizoLeve = "../recursos/99-tormentaGranizoFuerte.svg"

const texto99_tormentasGranizoIntenso = "Tormentas con probabilidad alta de granizo"
const img99_tormentasGranizoIntenso = "../recursos/99-tormentaGranizoFuerte.svg"








const unidadtemperatura = "ºC de Json"
const unidadViento = "Km/h de Json"
const unidadHumedad = "% de Json"
const unidadVisibilidad = "Km de Json"
const unidadPresion = "hPa de Json"

const imagenPronostico = { imagen01Soleado }
const unidadTemp = { unidadtemperatura } verrrrrrrrrrr
//const unidadPresion = { unidadPresion }
//const unidadViento = { unidadViento }
//const unidadHumedad = { unidadHumedad }
//const unidadVisibilidad = { unidadVisibilidad }






const ciudad = "Bariloche de Json?"
const fecha = "05/02/23 de Json"
const hora = "12:12 AM de Json"
const tempActual = "29 de Json"
const textoPronostico = "Lluvia moderada de Json"
const tempMax = "52 de Json"
const tempMin = "-88 de Json"
//const imagenPronostico={imagen01Soleado}


const temp00 = "-9 de Json"
const temp03 = "-5 de Json"
const temp06 = "9 de Json"
const temp09 = "19 de Json"
const temp12 = "29 de Json"
const temp15 = "19 de Json"
const temp18 = "8 de Json"
const temp21 = "2 de Json"
const temp24 = "-2 de Json"
//const unidadTemp={unidadtemperatura} verrrrrrrrrrr




const valorIndiceUV = "16 de Json"
const valorViento = "25.36 de Json"
const valorHoraAmanecer = "6:35 de Json"
const valorHoraAtardecer = "18:00 de Json"
const valorHumedad = "50 de Json"
const valorVisibilidad = "6.9 de Json"
const valorPresion = "1.050 de Json"
//const unidadPresion = { unidadPresion }
//const unidadViento={unidadViento}
//const unidadHumedad={unidadHumedad}
//const unidadVisibilidad={unidadVisibilidad}











