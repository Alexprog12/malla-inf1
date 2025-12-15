import { useState } from 'react';

const comunes = [
  // Semestre 1
  { id: "INF-111", nombre: "Programación I", creditos: 6, semestre: 1, prerreq: [] },
  { id: "INF-112", nombre: "Fundamentos digitales", creditos: 6, semestre: 1, prerreq: [] },
  { id: "INF-113", nombre: "Programación web I", creditos: 6, semestre: 1, prerreq: [] },
  { id: "INF-114", nombre: "Álgebra", creditos: 6, semestre: 1, prerreq: [] },
  { id: "INF-115", nombre: "Cálculo I", creditos: 6, semestre: 1, prerreq: [] },
  { id: "INF-116", nombre: "Física", creditos: 6, semestre: 1, prerreq: [] },

  // Semestre 2
  { id: "INF-121", nombre: "Programación II", creditos: 6, semestre: 2, prerreq: ["INF-111"] },
  { id: "INF-122", nombre: "Programación web II", creditos: 6, semestre: 2, prerreq: ["INF-113"] },
  { id: "INF-123", nombre: "Electrónica general I", creditos: 6, semestre: 2, prerreq: ["INF-112", "INF-116"] },
  { id: "INF-124", nombre: "Estadística I", creditos: 6, semestre: 2, prerreq: ["INF-114"] },
  { id: "INF-125", nombre: "Álgebra lineal", creditos: 6, semestre: 2, prerreq: ["INF-114"] },
  { id: "INF-126", nombre: "Cálculo II", creditos: 6, semestre: 2, prerreq: ["INF-115"] },

  // Semestre 3
  { id: "INF-131", nombre: "Programación III", creditos: 6, semestre: 3, prerreq: ["INF-121"] },
  { id: "INF-132", nombre: "Base de datos I", creditos: 6, semestre: 3, prerreq: ["INF-121"] },
  { id: "INF-133", nombre: "Programación web III", creditos: 6, semestre: 3, prerreq: ["INF-111", "INF-122"] },
  { id: "INF-134", nombre: "Estadística II", creditos: 6, semestre: 3, prerreq: ["INF-124"] },
  { id: "INF-135", nombre: "Sistemas Operativos", creditos: 6, semestre: 3, prerreq: ["INF-121"] },
  { id: "TRA-136", nombre: "Metodología de la investigación", creditos: 4, semestre: 3, prerreq: ["INF-124", "INF-125"] },
];

const mallas = {
  seguridad: {
    nombre: "Seguridad de la Información",
    creditosTotal: 480,
    materiasEspecificas: [
      // Semestre 4
      { id: "SEG-241", nombre: "Análisis y diseño de sistemas I", creditos: 6, semestre: 4, prerreq: ["INF-131", "INF-132"] },
      { id: "SEG-242", nombre: "Redes I", creditos: 6, semestre: 4, prerreq: ["INF-135"] },
      { id: "SEG-243", nombre: "Investigación Operativa I", creditos: 6, semestre: 4, prerreq: ["INF-134"] },
      { id: "SEG-244", nombre: "Programación de Dispositivos móviles I", creditos: 6, semestre: 4, prerreq: ["INF-131", "INF-133"] },
      { id: "SEG-245", nombre: "Seguridad de la Información", creditos: 6, semestre: 4, prerreq: ["INF-135"] },
      { id: "SEG-246", nombre: "Criptografía I", creditos: 6, semestre: 4, prerreq: ["INF-125", "INF-134"] },

      // Semestre 5
      { id: "SEG-251", nombre: "Ingeniería de software I", creditos: 6, semestre: 5, prerreq: ["SEG-241"] },
      { id: "SEG-252", nombre: "Redes II", creditos: 6, semestre: 5, prerreq: ["SEG-242"] },
      { id: "SEG-253", nombre: "Seguridad en Base de datos", creditos: 6, semestre: 5, prerreq: ["INF-132", "SEG-245"] },
      { id: "SEG-254", nombre: "Criptografía II", creditos: 6, semestre: 5, prerreq: ["SEG-246"] },
      { id: "TRA-256", nombre: "Legislación informática y ética", creditos: 4, semestre: 5, prerreq: ["semestre:3"] },
      { id: "SEG-25E", nombre: "Electiva I", creditos: 4, semestre: 5, prerreq: ["semestre:4"] },

      // Semestre 6
      { id: "SEG-261", nombre: "Hacking ético (Ética y vulnerabilidad de sistemas)", creditos: 6, semestre: 6, prerreq: ["SEG-253"] },
      { id: "SEG-262", nombre: "Seguridad de Redes I", creditos: 6, semestre: 6, prerreq: ["SEG-252"] },
      { id: "SEG-263", nombre: "Software malicioso y amenazas dirigidas", creditos: 6, semestre: 6, prerreq: ["SEG-254"] },
      { id: "SEG-264", nombre: "Redes inalámbricas", creditos: 6, semestre: 6, prerreq: ["SEG-252"] },
      { id: "SEG-26E", nombre: "Electiva II", creditos: 4, semestre: 6, prerreq: ["semestre:5"] },
      { id: "SEG-26F", nombre: "Electiva III", creditos: 4, semestre: 6, prerreq: ["semestre:5"] },

      // Semestre 7
      { id: "SEG-371", nombre: "Gestión de incidentes y continuidad del negocio", creditos: 6, semestre: 7, prerreq: ["SEG-261"] },
      { id: "SEG-372", nombre: "Seguridad de Redes II", creditos: 6, semestre: 7, prerreq: ["SEG-262"] },
      { id: "SEG-373", nombre: "Informática forense", creditos: 6, semestre: 7, prerreq: ["SEG-263"] },
      { id: "TRA-374", nombre: "Práctica profesional", creditos: 4, semestre: 7, prerreq: ["semestre:5"] },
      { id: "SEG-37E", nombre: "Electiva IV", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },
      { id: "SEG-37F", nombre: "Electiva V", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },

      // Semestre 8
      { id: "SEG-381", nombre: "Gestión de Riesgos en Seguridad de la Información", creditos: 6, semestre: 8, prerreq: ["SEG-371"] },
      { id: "SEG-382", nombre: "Gestión de activos de información", creditos: 6, semestre: 8, prerreq: ["SEG-371"] },
      { id: "SEG-383", nombre: "Auditoría de sistemas", creditos: 6, semestre: 8, prerreq: ["SEG-371"] },
      { id: "SEG-384", nombre: "Taller de graduación I", creditos: 6, semestre: 8, prerreq: ["semestre:7"] },
      { id: "SEG-38E", nombre: "Electiva VI", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },
      { id: "SEG-38F", nombre: "Electiva VII", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },

      // Semestre 9
      { id: "SEG-391", nombre: "Taller de graduación II", creditos: 10, semestre: 9, prerreq: ["semestre:8"] },
    ],
    electivas: [
      { sigla: "SEG-311", nombre: "Inteligencia Artificial", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-312", nombre: "Aprendizaje automático", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-313", nombre: "Redes de comunicación I", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-314", nombre: "Redes de comunicación II", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-315", nombre: "Arquitectura orientada a servicios", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-316", nombre: "Preparación y evaluación de proyectos", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-317", nombre: "Hacking ético II", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-318", nombre: "Administración de centros de operaciones de red", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-319", nombre: "Gobierno y gestión de seguridad de la información", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-320", nombre: "Derecho informático", prerreq: "Sexto semestre vencido" },
      { sigla: "SEG-321", nombre: "Inglés técnico", prerreq: "Sexto semestre vencido" },
    ],
    tecnico: [
      { sigla: "TCP-251", nombre: "Confidencialidad de sistemas tolerantes a fallos", prerreq: "Cuarto semestre vencido" },
      { sigla: "TCP-261", nombre: "Metodologías de desarrollo seguro de software", prerreq: "TCP-251" },
      { sigla: "TCP-262", nombre: "Taller de Técnico Superior: Calidad y seguridad de la programación", prerreq: "Quinto semestre vencido" },
      { sigla: "TSS-251", nombre: "Administración de redes y servicios de infraestructura TI", prerreq: "Cuarto semestre vencido" },
      { sigla: "TSS-261", nombre: "Computación en la nube", prerreq: "TSS-251" },
      { sigla: "TSS-262", nombre: "Taller de Técnico Superior: Seguridad de administración de servidores y bases de datos", prerreq: "Quinto semestre vencido" },
    ]
  },

  ia: {
    nombre: "Inteligencia Artificial y Ciencias de Datos",
    creditosTotal: 480,
    materiasEspecificas: [
      // Semestre 4
      { id: "DAT-241", nombre: "Programación distribuida y paralela", creditos: 6, semestre: 4, prerreq: ["INF-131"] },
      { id: "DAT-242", nombre: "Base de datos II", creditos: 6, semestre: 4, prerreq: ["INF-132"] },
      { id: "DAT-243", nombre: "Métodos numéricos I", creditos: 6, semestre: 4, prerreq: ["INF-135"] },
      { id: "DAT-244", nombre: "Investigación Operativa I", creditos: 6, semestre: 4, prerreq: ["INF-134"] },
      { id: "DAT-245", nombre: "Inteligencia artificial", creditos: 6, semestre: 4, prerreq: ["INF-123", "INF-125"] },
      { id: "DAT-246", nombre: "Modelación estadística", creditos: 6, semestre: 4, prerreq: ["INF-134"] },

      // Semestre 5
      { id: "DAT-251", nombre: "Base de Datos III", creditos: 6, semestre: 5, prerreq: ["DAT-242"] },
      { id: "DAT-252", nombre: "Métodos numéricos II", creditos: 6, semestre: 5, prerreq: ["DAT-243"] },
      { id: "DAT-253", nombre: "Minería de Datos", creditos: 6, semestre: 5, prerreq: ["DAT-246"] },
      { id: "DAT-254", nombre: "Investigación Operativa II", creditos: 6, semestre: 5, prerreq: ["DAT-244"] },
      { id: "DAT-255", nombre: "Aprendizaje automático", creditos: 6, semestre: 5, prerreq: ["DAT-245"] },
      { id: "TRA-256", nombre: "Legislación informática y ética", creditos: 4, semestre: 5, prerreq: ["semestre:3"] },

      // Semestre 6
      { id: "DAT-261", nombre: "Procesamiento del lenguaje natural", creditos: 6, semestre: 6, prerreq: ["DAT-251"] },
      { id: "DAT-262", nombre: "Procesos estocásticos y análisis de series de tiempo", creditos: 6, semestre: 6, prerreq: ["DAT-254"] },
      { id: "DAT-263", nombre: "Análisis de datos", creditos: 6, semestre: 6, prerreq: ["DAT-254"] },
      { id: "DAT-264", nombre: "Aprendizaje profundo", creditos: 6, semestre: 6, prerreq: ["DAT-255"] },
      { id: "DAT-265", nombre: "Taller de Análisis de Datos (TS)", creditos: 6, semestre: 6, prerreq: ["semestre:5"] },
      { id: "DAT-26E", nombre: "Electiva I", creditos: 4, semestre: 6, prerreq: ["semestre:5"] },

      // Semestre 7
      { id: "DAT-371", nombre: "Computación en la nube", creditos: 6, semestre: 7, prerreq: ["DAT-261"] },
      { id: "DAT-372", nombre: "Inteligencia de negocios (Business Intelligence)", creditos: 6, semestre: 7, prerreq: ["DAT-254", "DAT-264"] },
      { id: "TRA-374", nombre: "Práctica profesional", creditos: 4, semestre: 7, prerreq: ["semestre:5"] },
      { id: "DAT-37E", nombre: "Electiva II", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },
      { id: "DAT-37F", nombre: "Electiva III", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },

      // Semestre 8
      { id: "DAT-381", nombre: "Macrodatos y analítica de datos (Big Data)", creditos: 6, semestre: 8, prerreq: ["DAT-372"] },
      { id: "DAT-382", nombre: "Visualización de datos", creditos: 6, semestre: 8, prerreq: ["DAT-263"] },
      { id: "DAT-383", nombre: "Taller de graduación I", creditos: 6, semestre: 8, prerreq: ["semestre:7"] },
      { id: "DAT-38E", nombre: "Electiva IV", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },
      { id: "DAT-38F", nombre: "Electiva V", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },

      // Semestre 9
      { id: "DAT-391", nombre: "Taller de graduación II", creditos: 10, semestre: 9, prerreq: ["semestre:8"] },
    ],
    electivas: [
      { sigla: "DAT-311", nombre: "Cálculo IV", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-312", nombre: "Modelos Generativos", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-313", nombre: "Comercio electrónico y Marketing Digital", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-314", nombre: "Derecho informático", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-315", nombre: "Simulación de sistemas", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-316", nombre: "Informática forense", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-317", nombre: "Internet de las Cosas", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-318", nombre: "Auditoría de sistemas", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-319", nombre: "Preparación y evaluación de proyectos", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-320", nombre: "Visión artificial y manejo de imágenes", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-321", nombre: "Programación de dispositivos móviles I", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-322", nombre: "Seguridad de la Información", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-323", nombre: "Emprendimiento e innovación tecnológica", prerreq: "Sexto semestre vencido" },
      { sigla: "DAT-324", nombre: "Inglés técnico", prerreq: "Sexto semestre vencido" },
    ],
    tecnico: [
      { sigla: "TAD-265", nombre: "Taller de Análisis de Datos (TS)", prerreq: "Quinto semestre vencido" },
    ]
  },

  sistemas: {
    nombre: "Ingeniería de Sistemas",
    creditosTotal: 480,
    materiasEspecificas: [
      // Semestre 4
      { id: "SIS-241", nombre: "Análisis y diseño de sistemas I", creditos: 6, semestre: 4, prerreq: ["INF-132"] },
      { id: "SIS-242", nombre: "Redes I", creditos: 6, semestre: 4, prerreq: ["INF-135"] },
      { id: "SIS-243", nombre: "Investigación Operativa I", creditos: 6, semestre: 4, prerreq: ["INF-134"] },
      { id: "SIS-244", nombre: "Sistemas de información", creditos: 6, semestre: 4, prerreq: ["INF-135"] },
      { id: "SIS-245", nombre: "Base de datos II", creditos: 6, semestre: 4, prerreq: ["INF-132"] },
      { id: "SIS-246", nombre: "Ingeniería de sistemas", creditos: 6, semestre: 4, prerreq: ["INF-131"] },

      // Semestre 5
      { id: "SIS-251", nombre: "Redes II", creditos: 6, semestre: 5, prerreq: ["SIS-242"] },
      { id: "SIS-252", nombre: "Ingeniería de Software I", creditos: 6, semestre: 5, prerreq: ["SIS-241"] },
      { id: "SIS-253", nombre: "Preparación y evaluación de proyectos", creditos: 6, semestre: 5, prerreq: ["INF-244", "SIS-243"] },
      { id: "SIS-254", nombre: "Métodos numéricos I", creditos: 6, semestre: 5, prerreq: ["INF-125"] },
      { id: "SIS-255", nombre: "Comercio electrónico y marketing digital", creditos: 6, semestre: 5, prerreq: ["INF-133"] },
      { id: "TRA-256", nombre: "Legislación informática y ética", creditos: 4, semestre: 5, prerreq: ["semestre:3"] },

      // Semestre 6
      { id: "SIS-261", nombre: "Seguridad de la información", creditos: 6, semestre: 6, prerreq: ["SIS-251"] },
      { id: "SIS-262", nombre: "Dinámica de sistemas", creditos: 6, semestre: 6, prerreq: ["SIS-246"] },
      { id: "SIS-263", nombre: "Sistemas de gestión empresarial", creditos: 6, semestre: 6, prerreq: ["SIS-253"] },
      { id: "SIS-264", nombre: "Ingeniería de software II", creditos: 6, semestre: 6, prerreq: ["SIS-252"] },
      { id: "SIS-265", nombre: "Emprendimiento e innovación tecnológica", creditos: 6, semestre: 6, prerreq: ["TRA-256"] },
      { id: "TSI-266", nombre: "Taller de Técnico Superior: Sistemas Informáticos", creditos: 6, semestre: 6, prerreq: ["semestre:5"] },

      // Semestre 7
      { id: "SIS-371", nombre: "Sistemas distribuidos", creditos: 6, semestre: 7, prerreq: ["SIS-254"] },
      { id: "SIS-372", nombre: "Organización y métodos", creditos: 6, semestre: 7, prerreq: ["SIS-263"] },
      { id: "SIS-373", nombre: "Computación en la nube", creditos: 6, semestre: 7, prerreq: ["SIS-261"] },
      { id: "TRA-374", nombre: "Práctica profesional", creditos: 4, semestre: 7, prerreq: ["semestre:5"] },
      { id: "SIS-37E", nombre: "Electiva I", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },
      { id: "SIS-37F", nombre: "Electiva II", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },

      // Semestre 8
      { id: "SIS-381", nombre: "Simulación de sistemas", creditos: 6, semestre: 8, prerreq: ["SIS-254"] },
      { id: "SIS-382", nombre: "Auditoría de sistemas", creditos: 6, semestre: 8, prerreq: ["SIS-372"] },
      { id: "SIS-383", nombre: "Taller de graduación I", creditos: 6, semestre: 8, prerreq: ["semestre:7"] },
      { id: "SIS-38E", nombre: "Electiva III", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },
      { id: "SIS-38F", nombre: "Electiva IV", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },
      { id: "SIS-38G", nombre: "Electiva V", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },

      // Semestre 9
      { id: "SIS-391", nombre: "Taller de graduación II", creditos: 10, semestre: 9, prerreq: ["semestre:8"] },
    ],
    electivas: [
      { sigla: "SIS-311", nombre: "Minería de datos", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-312", nombre: "Inteligencia Artificial", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-313", nombre: "Bioinformática", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-314", nombre: "Informática Forense", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-315", nombre: "Internet de las cosas", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-316", nombre: "Inglés técnico", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-317", nombre: "Programación a bajo nivel", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-318", nombre: "Cálculo III", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-319", nombre: "Macrodatos y analítica de datos (Big Data)", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-320", nombre: "Datawarehouse", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-321", nombre: "Teoría General de sistemas", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-322", nombre: "Ciberseguridad", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-323", nombre: "Sistemas de Información Geográfica", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-324", nombre: "Programación distribuida y paralela", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-325", nombre: "Aprendizaje automático", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-326", nombre: "Inteligencia de negocios (Business Intelligence)", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-327", nombre: "Visión artificial y manejo de imágenes", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-328", nombre: "Negociaciones y Toma de Decisiones", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-329", nombre: "Sistemas contables", prerreq: "Sexto semestre vencido" },
      { sigla: "SIS-330", nombre: "Sistemas económicos", prerreq: "Sexto semestre vencido" },
    ],
    tecnico: [
      { sigla: "TSI-266", nombre: "Taller de Técnico Superior: Sistemas Informáticos", prerreq: "Quinto semestre vencido" },
    ]
  },

  desarrollo: {
    nombre: "Desarrollo de Software e Innovación Tecnológica",
    creditosTotal: 480,
    materiasEspecificas: [
      // Semestre 4
      { id: "INF-241", nombre: "Análisis y diseño de sistemas I", creditos: 6, semestre: 4, prerreq: ["INF-132"] },
      { id: "INF-242", nombre: "Redes I", creditos: 6, semestre: 4, prerreq: ["INF-135"] },
      { id: "INF-243", nombre: "Investigación Operativa I", creditos: 6, semestre: 4, prerreq: ["INF-134"] },
      { id: "INF-244", nombre: "Introducción a la Robótica", creditos: 6, semestre: 4, prerreq: ["INF-123", "INF-124"] },
      { id: "INF-245", nombre: "Programación de dispositivos móviles I", creditos: 6, semestre: 4, prerreq: ["INF-131", "INF-133"] },
      { id: "INF-246", nombre: "Fundamentos de diseño y animación", creditos: 6, semestre: 4, prerreq: ["INF-125", "INF-133"] },

      // Semestre 5
      { id: "INF-251", nombre: "Programación de dispositivos móviles II", creditos: 6, semestre: 5, prerreq: ["INF-245"] },
      { id: "INF-252", nombre: "Base de datos II", creditos: 6, semestre: 5, prerreq: ["INF-132"] },
      { id: "INF-253", nombre: "Análisis y diseño de sistemas II", creditos: 6, semestre: 5, prerreq: ["INF-241"] },
      { id: "INF-254", nombre: "Ingeniería de Software I", creditos: 6, semestre: 5, prerreq: ["INF-241"] },
      { id: "TRA-256", nombre: "Legislación informática y ética", creditos: 4, semestre: 5, prerreq: ["semestre:3"] },
      { id: "INF-25E", nombre: "Electiva I", creditos: 4, semestre: 5, prerreq: ["semestre:4"] },

      // Semestre 6
      { id: "INF-261", nombre: "Base de Datos III", creditos: 6, semestre: 6, prerreq: ["INF-252"] },
      { id: "INF-262", nombre: "Ingeniería de Software II", creditos: 6, semestre: 6, prerreq: ["INF-254"] },
      { id: "INF-263", nombre: "Desarrollo de aplicaciones multimedia", creditos: 6, semestre: 6, prerreq: ["INF-246"] },
      { id: "INF-264", nombre: "Emprendimiento e innovación tecnológica", creditos: 6, semestre: 6, prerreq: ["TRA-256"] },
      { id: "INF-26E", nombre: "Electiva II", creditos: 4, semestre: 6, prerreq: ["semestre:5"] },
      { id: "INF-26F", nombre: "Electiva III", creditos: 4, semestre: 6, prerreq: ["semestre:5"] },

      // Semestre 7
      { id: "INF-371", nombre: "Seguridad de la información", creditos: 6, semestre: 7, prerreq: ["INF-242"] },
      { id: "INF-372", nombre: "Inteligencia Artificial", creditos: 6, semestre: 7, prerreq: ["INF-261"] },
      { id: "INF-373", nombre: "Métodos numéricos I", creditos: 6, semestre: 7, prerreq: ["INF-125"] },
      { id: "TRA-374", nombre: "Práctica profesional", creditos: 4, semestre: 7, prerreq: ["semestre:5"] },
      { id: "INF-37E", nombre: "Electiva IV", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },
      { id: "INF-37F", nombre: "Electiva V", creditos: 4, semestre: 7, prerreq: ["semestre:6"] },

      // Semestre 8
      { id: "INF-381", nombre: "Simulación de sistemas", creditos: 6, semestre: 8, prerreq: ["INF-243"] },
      { id: "INF-382", nombre: "Ingeniería de software III", creditos: 6, semestre: 8, prerreq: ["INF-262"] },
      { id: "INF-383", nombre: "Taller de graduación I", creditos: 6, semestre: 8, prerreq: ["semestre:7"] },
      { id: "INF-38E", nombre: "Electiva VI", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },
      { id: "INF-38F", nombre: "Electiva VII", creditos: 4, semestre: 8, prerreq: ["semestre:7"] },

      // Semestre 9
      { id: "INF-391", nombre: "Taller de graduación II", creditos: 10, semestre: 9, prerreq: ["semestre:8"] },
    ],
    electivas: [
      { sigla: "INF-311", nombre: "Realidad aumentada y virtual", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-312", nombre: "Minería de datos", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-313", nombre: "Bioinformática", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-314", nombre: "Informática Forense", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-315", nombre: "Internet de las cosas", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-316", nombre: "Auditoría de sistemas", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-317", nombre: "Preparación y evaluación de proyectos", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-318", nombre: "Aprendizaje automático (Machine learning)", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-319", nombre: "Aprendizaje Profundo (Deep learning)", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-320", nombre: "Programación a bajo nivel", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-321", nombre: "Cálculo III", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-322", nombre: "Macrodatos y analítica de datos (Big Data)", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-323", nombre: "Derecho informático", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-324", nombre: "Visión por computadora", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-325", nombre: "Procesamiento digital de imágenes", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-326", nombre: "Negociaciones y Toma de Decisiones", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-327", nombre: "Informática Médica", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-328", nombre: "Investigación Operativa II", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-329", nombre: "Hacking ético I", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-330", nombre: "Redes II", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-331", nombre: "Computación en la nube", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-332", nombre: "Dirección de proyectos informáticos", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-333", nombre: "Inteligencia de negocios (Business Intelligence)", prerreq: "Sexto semestre vencido" },
      { sigla: "INF-334", nombre: "Inglés técnico", prerreq: "Sexto semestre vencido" },
    ],
    tecnico: [
      { sigla: "TVD-251", nombre: "Electiva I. Programación gráfica", prerreq: "En función del progr. TS" },
      { sigla: "TVD-261", nombre: "Electiva II. Animación digital 2D y 3D", prerreq: "TVD-251" },
      { sigla: "TVD-262", nombre: "Taller de Técnico Superior: Desarrollo de Video Juegos", prerreq: "Quinto semestre vencido" },
      { sigla: "TAW-251", nombre: "Electiva I. Desarrollo web BackEnd", prerreq: "En función del progr. TS" },
      { sigla: "TAW-261", nombre: "Electiva II. Ingeniería web", prerreq: "TAW-251" },
      { sigla: "TAW-262", nombre: "Taller de Técnico Superior: Desarrollo de aplicaciones web", prerreq: "Quinto semestre vencido" },
      { sigla: "TAM-251", nombre: "Electiva I. Sistemas embebidos", prerreq: "INF-251" },
      { sigla: "TAM-261", nombre: "Electiva II. Desarrollo de aplicaciones móviles multiplataforma", prerreq: "TAM-251" },
      { sigla: "TAM-262", nombre: "Taller de Técnico Superior: Desarrollo de aplicaciones móviles", prerreq: "Quinto semestre vencido" },
    ]
  },
};

function App() {
  const [mencion, setMencion] = useState('seguridad');
  const malla = mallas[mencion];
  const materias = [...comunes, ...malla.materiasEspecificas];
  const [aprobadas, setAprobadas] = useState(new Set());

  const toggleMateria = (id) => {
    const newSet = new Set(aprobadas);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else if (isDisponible(id)) {
      newSet.add(id);
    }
    setAprobadas(newSet);
  };

  const isAprobada = (id) => aprobadas.has(id);

  const allSemestreAprobado = (sem) => materias.filter(m => m.semestre === sem).every(m => aprobadas.has(m.id));

  const isDisponible = (id) => {
    const mat = materias.find(m => m.id === id);
    if (!mat || !mat.prerreq || mat.prerreq.length === 0) return true;
    return mat.prerreq.every(pr => {
      if (pr.startsWith("semestre:")) {
        const s = parseInt(pr.split(":")[1]);
        return allSemestreAprobado(s);
      }
      return aprobadas.has(pr);
    });
  };

  const getPrerreqTexto = (id) => {
    const mat = materias.find(m => m.id === id);
    if (!mat || !mat.prerreq || mat.prerreq.length === 0) return "";
    const textos = mat.prerreq.map(pr => {
      if (pr.startsWith("semestre:")) {
        const s = pr.split(":")[1];
        return `Todo el semestre ${s} aprobado`;
      }
      const reqMat = materias.find(m => m.id === pr);
      return reqMat ? reqMat.nombre : pr;
    });
    return "Requiere: " + textos.join(" y ");
  };

  const creditosAprobados = materias.filter(m => aprobadas.has(m.id)).reduce((sum, m) => sum + m.creditos, 0);

  return (
    <>
      <h1>Licenciatura en Informática - UMSA</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {Object.keys(mallas).map(key => (
          <button key={key} onClick={() => { setMencion(key); setAprobadas(new Set()); }} style={{ margin: '5px', padding: '10px 15px', background: mencion === key ? '#1565c0' : '#333', borderRadius: '6px', border: 'none', color: 'white' }}>
            {mallas[key].nombre}
          </button>
        ))}
      </div>

      <div className="progreso">
        Créditos aprobados: {creditosAprobados} / {malla.creditosTotal} ({Math.round((creditosAprobados / malla.creditosTotal) * 100)}%)
      </div>
      <button onClick={() => setAprobadas(new Set())}>Limpiar progreso</button>

      <div style={{ overflowX: 'auto', padding: '20px 0' }}>
        <div style={{ display: 'flex', gap: '20px', minWidth: 'fit-content' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(sem => (
            <div key={sem} className="semestre" style={{ width: '280px', flexShrink: 0 }}>
              <h3 style={{ background: '#333', padding: '12px', margin: '0 0 15px 0', borderRadius: '8px' }}>Semestre {sem}</h3>
              {materias.filter(m => m.semestre === sem).map(mat => (
                <div
                  key={mat.id}
                  className={`materia ${isAprobada(mat.id) ? 'aprobada' : isDisponible(mat.id) ? 'disponible' : 'bloqueada'}`}
                  onClick={() => toggleMateria(mat.id)}
                  title={!isAprobada(mat.id) && !isDisponible(mat.id) ? getPrerreqTexto(mat.id) : ''}
                  style={{ position: 'relative', paddingBottom: isDisponible(mat.id) && !isAprobada(mat.id) ? '30px' : '12px' }}
                >
                  <strong>{mat.id}</strong><br />
                  {mat.nombre}<br />
                  <small>{mat.creditos} créditos</small>
                  {isDisponible(mat.id) && !isAprobada(mat.id) && (
                    <div style={{ fontSize: '11px', marginTop: '8px', opacity: 0.8 }}>
                      {getPrerreqTexto(mat.id)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <h2>Electivas - Mención {malla.nombre}</h2>
      <table>
        <thead><tr><th>Sigla</th><th>Nombre</th><th>Pre-requisito</th></tr></thead>
        <tbody>
          {malla.electivas.map(e => (
            <tr key={e.sigla}><td>{e.sigla}</td><td>{e.nombre}</td><td>{e.prerreq}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>Técnico Superior - Mención {malla.nombre}</h2>
      <table>
        <thead><tr><th>Sigla</th><th>Nombre</th><th>Pre-requisito</th></tr></thead>
        <tbody>
          {malla.tecnico.map(t => (
            <tr key={t.sigla}><td>{t.sigla}</td><td>{t.nombre}</td><td>{t.prerreq}</td></tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;