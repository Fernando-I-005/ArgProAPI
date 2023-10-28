import React from 'react'
import "../Estilos/AppClima.css"
import { ContenedorPrincipal } from './ContenedorPrincipal.jsx'
import { ContenedorSecundario } from "./ContenedorSecundario"
import { ContenedorTempDiaria } from "./ContenedorTempDiaria"
//import jsonClima from './jsonClima.json' // el json va sin {}!!!
//import { useEffect, useState } from "react"


//importacion de imagenes
import img0Dia from "../recursos/0-CieloDespejadoDia.svg"
import img0Noche from "../recursos/0-CieloDespejadoNoche.svg"
import img1Dia from "../recursos/1-CieloPrincipalmenteDespejadoDiaRepetido.svg"
import img1Noche from "../recursos/1-CieloPrincipalmenteDespejadoNocheRepetido.svg"
import img2Dia from "../recursos/2-ParcialmenteNubladoDia.svg"
import img2Noche from "../recursos/2-ParcialmenteNubladoNoche.svg"
import img3 from "../recursos/3-CubiertoNublado.svg"
import img45 from "../recursos/45-Niebla.svg"
import img48 from "../recursos/48-NieblaConEscarchaRepetido.svg"
import img51 from "../recursos/51-LloviznaLigera.svg"
import img53 from "../recursos/53-LloviznaModeradaRepetido.svg"
import img55 from "../recursos/55-LloviznaIntensaRepetido.svg"
import img56 from "../recursos/56-LloviznaHeladaLigera.svg"
import img57 from "../recursos/57-LloviznaHeladaIntensaRepetido.svg"
import img61 from "../recursos/61-LluviaIntensaLigeraRepetido.svg"
import img63 from "../recursos/63-LluviaIntensaModeradaRepetido.svg"
import img65 from "../recursos/65-LluviaIntensaIntensa.svg"
import img66 from "../recursos/66-LluviaHeladaLigera.svg"
import img67 from "../recursos/67-LluviaHeladaIntensaRepetido.svg"
import img71 from "../recursos/71-NevadasLigeras.svg"
import img73 from "../recursos/73-NevadasModeradasRepetido.svg"
import img75 from "../recursos/75-NevadasIntensasRepetido.svg"
import img77 from "../recursos/77-Aguanieve.svg"
import img80Dia from "../recursos/80-LluviasIntermintentesLigerasDia.svg"
import img80Noche from "../recursos/80-LluviasIntermintentesLigerasNoche.svg"
import img81Dia from "../recursos/81-LluviasIntermintentesModeradasDiaRepetido.svg"
import img81Noche from "../recursos/81-LluviasIntermintentesModeradasNocheRepetida.svg"
import img82Dia from "../recursos/82-LluviasIntermintentesIntensasDiaRepetida.svg"
import img82Noche from "../recursos/82-LluviasIntermintentesIntensasNocheRepetida.svg"
import img85 from "../recursos/85-LluviasYNevadasLigeras.svg"
import img86 from "../recursos/86-LluviasYNevadasIntensasRepetida.svg"
import img95 from "../recursos/95-Tormentas.svg"
import img96 from "../recursos/96-TormentaGranizoLeve.svg"
import img99 from "../recursos/99-tormentaGranizoFuerte.svg"



export const AppClima = ({ jsonClima }) => {

  // constantes texto codigo meteorologico
  const texto0 = "Cielo Despejado"
  const texto1 = "Cielo principalmente despejado"
  const texto2 = "Parcialmente nublado"
  const texto3 = "Nublado"
  const texto45 = "Niebla"
  const texto48 = "Niebla con escarcha"
  const texto51 = "Llovizna ligera"
  const texto53 = "Llovizna moderada"
  const texto55 = "Llovizna intensa"
  const texto56 = "Llovizna helada ligera"
  const texto57 = "Llovizna helada intensa"
  const texto61 = "Lluvia ligera"
  const texto63 = "Lluvia moderada"
  const texto65 = "Lluvia intensa"
  const texto66 = "Lluvia helada ligera"
  const texto67 = "Lluvia helada intensa"
  const texto71 = "Nevadas ligeras"
  const texto73 = "Nevadas moderadas"
  const texto75 = "Nevadas intensas"
  const texto77 = "Agua nieve"
  const texto80 = "Lluvias intermitentes ligeras"
  const texto81 = "Lluvias intermitentes moderadas"
  const texto82 = "Lluvias intermitentes intensas"
  const texto85 = "Lluvias y nevadas ligeras"
  const texto86 = "Lluvias y nevadas intensas"
  const texto95 = "Tormentas"
  const texto96 = "Tormentas con probabilidad baja de granizo"
  const texto99 = "Tormentas con probabilidad alta de granizo"

  //objeto de codigo meteorologico NO ES JSON!!
  const codigoMeteorologico = {
    0: [texto0, img0Dia, img0Noche],
    1: [texto1, img1Dia, img1Noche],
    2: [texto2, img2Dia, img2Noche],
    3: [texto3, img3],
    45: [texto45, img45],
    48: [texto48, img48],
    51: [texto51, img51],
    53: [texto53, img53],
    55: [texto55, img55],
    56: [texto56, img56],
    57: [texto57, img57],
    61: [texto61, img61],
    63: [texto63, img63],
    65: [texto65, img65],
    66: [texto66, img66],
    67: [texto67, img67],
    71: [texto71, img71],
    73: [texto73, img73],
    75: [texto75, img75],
    77: [texto77, img77],
    80: [texto80, img80Dia, img80Noche],
    81: [texto81, img81Dia, img81Noche],
    82: [texto82, img82Dia, img82Noche],
    85: [texto85, img85],
    86: [texto86, img86],
    95: [texto95, img95],
    96: [texto96, img96],
    99: [texto99, img99]
  }

  // constantes de unidades desde api
  const unidadtemperatura = jsonClima["current_weather_units"]["temperature"]
  const unidadViento = jsonClima["current_weather_units"]["windspeed"]
  const unidadHumedad = jsonClima["hourly_units"]["relativehumidity_2m"]
  const unidadVisibilidad = jsonClima["hourly_units"]["visibility"]
  const unidadPresion = jsonClima["hourly_units"]["pressure_msl"]



  //CONSTANTES AUXILIARES
  const codigoWWAPI = jsonClima["current_weather"]["weathercode"] // ok ej44
  const fechaYHora = jsonClima["current_weather"]["time"]      // desde JSON  ej."2053-10-04T12:45"
  const soloFechaActual = fechaYHora.split('T')[0]  // Divide usando 'T'  y guarda elemento 0 eJ2053-10-04
  const soloHoraActual = fechaYHora.split('T')[1]; // Divide usando 'T' y guarda elemento 1 ej 12:45
  const horaActualSinMinutos = parseInt(soloHoraActual.split(':')[0]); // Divide usando ':' y guarda elemento 0 ej 12


  //CONSTANTES DE VALORES A CARGAR
  const horaAmanecer = (jsonClima["daily"]["sunrise"][0]).split('T')[1]    // es una lista lpm!!
  const horaAtardecer = (jsonClima["daily"]["sunset"][0]).split('T')[1]
  const indiceUV = jsonClima["daily"]["uv_index_max"]
  const viento = jsonClima["current_weather"]["windspeed"]
  const direccionVientoEnGrados = jsonClima["current_weather"]["winddirection"]
  var direccionVientoCardinal = convertirGradosEnCardinal(direccionVientoEnGrados) //let no var si


  //valores de parametros (humedad, presion y visibilidad) en la hora actual 
  // horaActualSinMinutos coincide con el indice de los parametros en el momento !!!genial

  const humedadEnLaHora = jsonClima["hourly"]["relativehumidity_2m"][horaActualSinMinutos]
  const presionEnLaHora = jsonClima["hourly"]["pressure_msl"][horaActualSinMinutos]
  const visibilidadEnLaHora = jsonClima["hourly"]["visibility"][horaActualSinMinutos]


  // constante y variable de texto e imagen segun WWA
  const textoClimaActualenApp = (codigoMeteorologico[codigoWWAPI][0]) // asigna texto segun codigo WWA
  let imagenClimaActualenApp  // declaro variable que asigna imagen segun codigo WWA


  //condicional que asigna imagen segun sea de noche o de dia
  if (((((codigoMeteorologico[(codigoWWAPI)]).length) > 2) && (horaActualSinMinutos > 19)) ||
    ((((((codigoMeteorologico[(codigoWWAPI)]).length) > 2) && (horaActualSinMinutos >= 0))) &&
      (((((codigoMeteorologico[(codigoWWAPI)]).length) > 2) && (horaActualSinMinutos < 6))))

  ) {  // establece imagen
    imagenClimaActualenApp = (codigoMeteorologico[codigoWWAPI][2]);
  } else {
    imagenClimaActualenApp = (codigoMeteorologico[codigoWWAPI][1])
  }

  // funcion que convierte grados en direccion cardinal
  function convertirGradosEnCardinal() {
    if ((direccionVientoEnGrados >= 0 && direccionVientoEnGrados <= 11) || (direccionVientoEnGrados > 349 && direccionVientoEnGrados <= 360)) {
      direccionVientoCardinal = "N";
    } else if (direccionVientoEnGrados > 11 && direccionVientoEnGrados <= 34) {
      direccionVientoCardinal = "NNE";
    } else if (direccionVientoEnGrados > 34 && direccionVientoEnGrados <= 56) {
      direccionVientoCardinal = "NE";
    } else if (direccionVientoEnGrados > 56 && direccionVientoEnGrados <= 79) {
      direccionVientoCardinal = "ENE";
    } else if (direccionVientoEnGrados > 79 && direccionVientoEnGrados <= 101) {
      direccionVientoCardinal = "E";
    } else if (direccionVientoEnGrados > 101 && direccionVientoEnGrados <= 124) {
      direccionVientoCardinal = "ESE";
    } else if (direccionVientoEnGrados > 124 && direccionVientoEnGrados <= 146) {
      direccionVientoCardinal = "SE";
    } else if (direccionVientoEnGrados > 146 && direccionVientoEnGrados <= 169) {
      direccionVientoCardinal = "SSE";
    } else if (direccionVientoEnGrados > 169 && direccionVientoEnGrados <= 191) {
      direccionVientoCardinal = "S";
    } else if (direccionVientoEnGrados > 191 && direccionVientoEnGrados <= 214) {
      direccionVientoCardinal = "SSO";
    } else if (direccionVientoEnGrados > 214 && direccionVientoEnGrados <= 236) {
      direccionVientoCardinal = "SO";
    } else if (direccionVientoEnGrados > 236 && direccionVientoEnGrados <= 259) {
      direccionVientoCardinal = "OSO";
    } else if (direccionVientoEnGrados > 259 && direccionVientoEnGrados <= 281) {
      direccionVientoCardinal = "O";
    } else if (direccionVientoEnGrados > 281 && direccionVientoEnGrados <= 303) {
      direccionVientoCardinal = "ONO";
    } else if (direccionVientoEnGrados > 303 && direccionVientoEnGrados <= 326) {
      direccionVientoCardinal = "NO";
    } else if (direccionVientoEnGrados > 326 && direccionVientoEnGrados <= 349) {
      direccionVientoCardinal = "NNO";
    } else { direccionVientoCardinal = "Error"; }
    return direccionVientoCardinal;
  }

  // funcion que asigna indice UV en texto
  let textoIndiceUV
  function convertirUVaTexto(indiceUV) {
    if (indiceUV >= 0 && indiceUV <= 2) {
      textoIndiceUV = "Bajo";
    } else if (indiceUV > 2 && indiceUV <= 5) {
      textoIndiceUV = "Moderado";
    } else if (indiceUV > 5 && indiceUV <= 7) {
      textoIndiceUV = "Alto";
    } else if (indiceUV > 7 && indiceUV <= 10) {
      textoIndiceUV = "Muy alto";
    } else if (indiceUV > 10 && indiceUV <= 20) {
      textoIndiceUV = "Extremo";
    } else { textoIndiceUV = "Error"; }
    return textoIndiceUV;
  }
  textoIndiceUV = convertirUVaTexto(indiceUV)


  return (
    <div className="estiloAppClima">

      {<ContenedorPrincipal
        ciudad="Clima en Bariloche"
        hora={soloHoraActual}
        fecha={soloFechaActual}
        tempActual={jsonClima["current_weather"]["temperature"]}
        unidadTemp={unidadtemperatura}
        imagenPronostico={imagenClimaActualenApp}
        textoPronostico={textoClimaActualenApp}
        tempMax={jsonClima["daily"]["temperature_2m_max"]}
        tempMin={jsonClima["daily"]["temperature_2m_min"]}
      />}
      <ContenedorTempDiaria
        temp00={jsonClima["hourly"]["temperature_2m"][0]}
        temp03={jsonClima["hourly"]["temperature_2m"][3]}
        temp06={jsonClima["hourly"]["temperature_2m"][6]}
        temp09={jsonClima["hourly"]["temperature_2m"][9]}
        temp12={jsonClima["hourly"]["temperature_2m"][12]}
        temp15={jsonClima["hourly"]["temperature_2m"][15]}
        temp18={jsonClima["hourly"]["temperature_2m"][18]}
        temp21={jsonClima["hourly"]["temperature_2m"][21]}
        temp24={jsonClima["hourly"]["temperature_2m"][23]}
        unidadTemp={jsonClima["current_weather_units"]["temperature"]
        } />

      {<ContenedorSecundario
        valorIndiceUV={indiceUV}
        valorViento={viento}
        unidadViento={unidadViento}
        direccionViento={direccionVientoCardinal}
        valorHoraAmanecer={horaAmanecer}
        valorHoraAtardecer={horaAtardecer}
        valorHumedad={humedadEnLaHora}
        unidadHumedad={unidadHumedad}
        valorVisibilidad={visibilidadEnLaHora}
        unidadVisibilidad={unidadVisibilidad}
        valorPresion={presionEnLaHora}
        unidadPresion={unidadPresion}
        textoIndiceUV={textoIndiceUV}
      />}
    </div>
  )
}