export default {
  global: {
    componenteFormativo:
      'Limpieza y transformación de datos: técnicas y herramientas informáticas',
    descripcionCurso:
      'Este componente presenta una exploración de los procesos de limpieza y transformación de datos, abarcando desde sus fundamentos hasta las técnicas y herramientas más recientes. Examina los diferentes tipos de datos, métodos de importación, técnicas de transformación y las principales herramientas disponibles, incluyendo soluciones comerciales y de código abierto. Orientado tanto a analistas como a personas de nivel técnico, proporciona una guía práctica y sistemática para introducirse a la preparación efectiva de datos en proyectos de análisis.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la limpieza y transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a la limpieza y transformación de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el análisis de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Proceso general de preparación de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Importación y lectura de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lectura de datos desde archivos externos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conexión y extracción desde bases de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mejores prácticas en la importación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conversión de tipos de datos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación y ordenamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Eliminación de datos innecesarios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Creación de nuevas variables',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Funciones de transformación esenciales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas y tecnologías para la transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Herramientas especializadas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Bibliotecas principales en R y Python',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Automatización de procesos de transformación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejores prácticas y casos de aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Documentación y control de calidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Casos de estudio prácticos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tendencias y recomendaciones',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Conclusiones',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.  Fundamentos de la limpieza y transformación de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 5). <i>Datos sucios</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qf6MR4o58cs ',
    },
    {
      tema: '1.  Fundamentos de la limpieza y transformación de datos',
      referencia:
        '<i>Limpiar datos de Excel, CSV, PDF y Hojas de cálculo de Google con el intérprete de datos</i>. (s. f.). Tableau.',
      tipo: 'Portal web',
      link:
        'https://help.tableau.com/current/pro/desktop/es-es/data_interpreter.htm ',
    },
    {
      tema: '2. Importación y lectura de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023d, septiembre 5).<i> Importación de librerías.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lSvA7RCXkhM ',
    },
    {
      tema: '3. Técnicas de transformación de datos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023f, septiembre 5). <i>Limpieza y transformación de datos con Python.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jL4cm_0X68Y ',
    },
    {
      tema: '4. Herramientas y tecnologías para la transformación de datos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, septiembre 5). <i>Instalación de Anaconda.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wSdQpgVSPvY ',
    },
    {
      tema: '5. Mejores prácticas y casos de aplicación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, septiembre 5). <i>jemplo problemas en la recolección de la información.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LOlsg6ZkdcA ',
    },
    {
      tema: '5. Mejores prácticas y casos de aplicación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023g, septiembre 5). <i>Puesta en Marcha.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OanYK6mqBIo',
    },
  ],
  glosario: [
    {
      termino: 'Análisis exploratorio',
      significado:
        'Proceso inicial de investigación de datos para descubrir patrones, detectar anomalías y verificar suposiciones mediante estadísticas resumidas y representaciones gráficas.',
    },
    {
      termino: '<i>Data Frame</i>',
      significado:
        'Estructura de datos bidimensional que organiza los datos en filas y columnas, similar a una hoja de cálculo o tabla de base de datos. Es fundamental en lenguajes como R y Python para el análisis de datos.',
    },
    {
      termino: 'ETL  (<i>Extract, Transform, Load</i>)',
      significado:
        'Proceso que involucra la extracción de datos de diversas fuentes, su transformación para satisfacer necesidades operativas y la carga en un destino final.',
    },
    {
      termino: '<i>Firewall</i>',
      significado:
        'Sistema de seguridad que monitorea y controla el tráfico de red entrante y saliente basado en reglas de seguridad predeterminadas. Es crucial en la protección de conexiones a bases de datos.',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'Marco de trabajo que proporciona una estructura estandarizada y mejores prácticas para el desarrollo de soluciones. Incluye herramientas, bibliotecas y convenciones predefinidas.',
    },
    {
      termino: '<i>Logging</i>',
      significado:
        'Proceso de registro y almacenamiento de eventos, errores y actividades del sistema, crucial para el monitoreo, depuración y auditoría de procesos de transformación de datos.',
    },
    {
      termino: '<i>Parsing</i>',
      significado:
        'Proceso de analizar una secuencia de símbolos o texto para determinar su estructura gramatical con respecto a una gramática formal. Fundamental en la lectura y procesamiento de archivos.',
    },
    {
      termino: '<i>Pipeline</i>',
      significado:
        'Secuencia de procesos conectados donde la salida de uno es la entrada del siguiente. En transformación de datos, representa un flujo de trabajo automatizado de procesamiento.',
    },
    {
      termino: '<i>Pool de conexiones</i>',
      significado:
        'Caché de conexiones a bases de datos que se mantienen disponibles para reutilización, mejorando el rendimiento y la gestión de recursos en aplicaciones.',
    },
    {
      termino: '<i>Scripts</i>',
      significado:
        'Programas generalmente simples que automatizan la ejecución de tareas que podrían realizarse paso a paso manualmente.',
    },
    {
      termino: '<i>Timestamp</i>',
      significado:
        'Marca temporal que indica la fecha y hora en que ocurrió un evento particular, fundamental en el seguimiento y ordenamiento de datos temporales.',
    },
    {
      termino: 'Validación cruzada',
      significado:
        'Técnica para evaluar la calidad y robustez de un modelo estadístico, dividiendo los datos en subconjuntos para prueba y entrenamiento.',
    },
    {
      termino: '<i>Winsorización</i>',
      significado:
        'Técnica estadística para tratar valores atípicos, donde los valores extremos se reemplazan por valores menos extremos en un determinado percentil.',
    },
    {
      termino: '<i>Workflow</i>',
      significado:
        'Flujo de trabajo que representa la secuencia de procesos o pasos necesarios para completar una tarea específica en el procesamiento de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bansal, S. K. & Kagemann, S. (2015). Integrating Big Data: A Semantic Extract-Transform-Load Framework. Computer, 48(3), 42-50. ',
      link: 'https://doi.org/10.1109/mc.2015.76',
    },
    {
      referencia:
        'De Vries, A. & Meys, J. (2012). R For Dummies. John Wiley & Sons.',
    },
    {
      referencia:
        'Díaz, C. O., Soler, P., Pérez, M. & Mier, A. (2024). OMASHU: La ciencia detrás del éxito; Big Data e IA en los eSports. Revista SISTEMAS, 170, 61-79. ',
      link: 'https://doi.org/10.29236/sistemas.n170a7',
    },
    {
      referencia:
        'Guardelli, E. (2024). Minería de Procesos: Convertir Datos en Valor. MedTechBiz.',
    },
    {
      referencia:
        'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de Big Data para negocios y conceptos de inteligencia empresarial. Independently Published.',
    },
    {
      referencia:
        'Leyva, D. S. (2024). Domina Machine Learning: Guía completa para principiantes. Independently Published.',
    },
    {
      referencia:
        'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
    },
    {
      referencia:
        'Orlandi, M. A. M. (2024). Tecnologías Big Data, Minería de Datos y Analítica aplicada a la gestión de Recursos Humanos: contiene: un caso de estudio. Editora Dialética.',
    },
    {
      referencia:
        'Shovic, J. C. & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
    },
    {
      referencia:
        'Subirats Maté, L., Pérez Trenard, D. O., Calvo González, M. & Isabel Guitart Hormigo. (2019). Introducción a la limpieza y análisis de los datos. ',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/148647/1/IntroduccionALaLimpiezaYAnalisisDeLosDatos.pdf',
    },
  ],
}
