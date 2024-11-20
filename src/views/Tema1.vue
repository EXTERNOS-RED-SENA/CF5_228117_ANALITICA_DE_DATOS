<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la limpieza y transformación de datos
      
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La preparación y limpieza de datos constituye una fase decisiva y fundamental en cualquier proceso de análisis de datos. En este capítulo se introducen los conceptos esenciales relacionados con la limpieza y transformación de datos, procesos que consumen la mayor parte del tiempo en proyectos de análisis y de los cuales depende significativamente la calidad de los resultados obtenidos. Se examinan los diferentes tipos de datos que se pueden encontrar, así como los fundamentos del proceso de preparación de datos, estableciendo una base para comprender las técnicas y herramientas que se abordan posteriormente. La comprensión de estos conceptos fundamentales resulta esencial para desarrollar procesos de análisis de datos efectivos y confiables.  

    .row.bg4.align-items-center
      .px-lg-5.px-4      

        Separador 
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1	Introducción a la limpieza y transformación de datos

        .row.justify-content-center.mb-4   
          .col-lg-8.my-lg-0.my-3
            p En el contexto actual de la ciencia de datos y la analítica avanzada, la limpieza y transformación de datos constituyen procesos fundamentales que determinan la calidad y confiabilidad de cualquier análisis posterior. Estos procesos representan la base sobre la cual se construyen los modelos analíticos y se fundamentan las decisiones basadas en datos.
            p La limpieza de datos se define como el conjunto de procedimientos sistemáticos destinados a identificar, corregir o eliminar inconsistencias, errores y anomalías presentes en los conjuntos de datos. Este proceso abarca desde la detección de valores faltantes hasta la corrección de discrepancias en los formatos y la eliminación de duplicados.            
            .bg5.brad.p-3.mb-4.j1
              p.mb-0 Por su parte, la transformación de datos comprende las operaciones necesarias para convertir los datos desde su estado original a un formato que resulte más adecuado para el análisis. Este proceso puede incluir la normalización de variables, la creación de nuevas características derivadas, y la reestructuración de los datos para satisfacer los requisitos específicos de las herramientas analíticas. 
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')           

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Importancia en el análisis de datos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/8.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 La relevancia de la limpieza y transformación de datos trasciende el simple procesamiento técnico, constituyéndose en un factor muy importante para el éxito de cualquier proyecto de análisis de datos. Se estima que los científicos de datos —personas que analizan, procesan, y modelan grandes cantidades de datos— dedican entre el 60% y el 80% de su tiempo a estas tareas, lo cual refleja su importancia fundamental en el ciclo de vida del análisis de datos. 

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')          
      .col-lg-8.my-lg-0.my-3
        p La calidad de los datos impacta directamente en la validez de las conclusiones extraídas del análisis. Datos incorrectos o mal estructurados pueden conducir a interpretaciones erróneas y, consecuentemente, a decisiones equivocadas. La precisión y confiabilidad de los modelos predictivos, los análisis estadísticos y las visualizaciones dependen fundamentalmente de la calidad de los datos subyacentes.
        p Además, la limpieza y transformación adecuada de los datos contribuye a la eficiencia computacional. Datos bien estructurados y limpios requieren menos recursos de procesamiento y permiten la aplicación más efectiva de algoritmos analíticos. Este aspecto resulta particularmente relevante cuando se trabaja con grandes volúmenes de datos o cuando se requieren análisis en tiempo real.

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Tipos de datos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/10.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 En la era del Big Data, el mundo se encuentra inmerso en un océano de información que fluye constantemente desde una miríada de fuentes. Comprender los diferentes tipos de datos y sus orígenes es fundamental para cualquier persona que trabaje en el campo de la analítica de datos. A continuación, se exploran en detalle los principales tipos de datos y las diversas fuentes de las que provienen.  

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/11.png' alt='')       
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Datos estructurados")
            p Los datos estructurados son quizás los más familiares para la mayoría de las personas. Se caracterizan por su organización clara y predefinida, lo que los hace fácilmente identificables y analizables. Un ejemplo serían una hoja de cálculo perfectamente organizada o una base de datos relacional bien diseñada. Cada pieza de información tiene su lugar asignado, como fichas en un archivador meticulosamente organizado.    
            p En el mundo de los negocios, los datos estructurados abundan. Los registros de ventas, la información de clientes en un CRM, los datos de inventario o los registros de transacciones financieras son ejemplos clásicos. Estos datos suelen almacenarse en bases de datos relacionales y se pueden consultar fácilmente utilizando SQL.
            p La belleza de los datos estructurados radica en su simplicidad y eficiencia. Son ideales para análisis cuantitativos, generación de informes y tableros (dashboards). Sin embargo, su rigidez puede ser también una limitación. En un mundo que cambia rápidamente, la estructura predefinida puede volverse obsoleta o insuficiente para capturar nuevas formas de información.
          div(titulo="Datos no estructurados.")
            p En contraste con sus contrapartes estructuradas, los datos no estructurados son como el arte abstracto del mundo de los datos. No siguen un formato o modelo predefinido y vienen en una variedad casi infinita de formas. Textos de redes sociales, correos electrónicos, archivos de audio, videos, imágenes e incluso el contenido de sitios web entran en esta categoría.    
            p El auge de Internet y las redes sociales ha provocado una explosión de datos no estructurados. Cada tweet, cada publicación de blog, cada video de YouTube es una pieza de datos no estructurados. Estos datos son ricos en información y contexto, pero presentan desafíos significativos para su análisis.
            p Trabajar con datos no estructurados requiere técnicas y herramientas especializadas. El procesamiento del lenguaje natural (NLP) se utiliza para extraer significado de textos, mientras que el reconocimiento de imágenes y el procesamiento de señales se aplican a datos visuales y de audio. Aunque el análisis de datos no estructurados puede ser complejo, ofrece insights invaluables que los datos estructurados por sí solos no pueden proporcionar.
          div(titulo="Datos semiestructurados.")
            p Entre los mundos ordenados de los datos estructurados y el caos creativo de los no estructurados, se encuentran los datos semiestructurados. Estos datos tienen algún nivel de organización, pero no se ajustan perfectamente al modelo rígido de las bases de datos relacionales.  
            p Los formatos JSON y XML son ejemplos clásicos de datos semiestructurados. Estos formatos proporcionan una estructura flexible que permite representar información compleja y jerárquica. Los documentos JSON, por ejemplo, son ampliamente utilizados en aplicaciones web y móviles para intercambiar datos.
            p Los datos semiestructurados ofrecen un equilibrio entre flexibilidad y organización. Son lo suficientemente flexibles como para adaptarse a cambios en la estructura de la información, pero mantienen suficiente orden como para facilitar su procesamiento y análisis. Las bases de datos NoSQL, como MongoDB, están diseñadas específicamente para manejar este tipo de datos de manera eficiente.  
          div(titulo="Fuentes de datos.")
            p Las fuentes de datos en el ecosistema del Big Data son tan diversas como los datos mismos. Se pueden categorizar en tres grandes grupos: fuentes públicas, privadas y mixtas.
            p Las fuentes de datos públicos son un tesoro de información accesible para cualquiera. Gobiernos de todo el mundo están adoptando políticas de datos abiertos, publicando conjuntos de datos sobre una amplia gama de temas, desde estadísticas demográficas hasta datos meteorológicos y ambientales. Organizaciones internacionales como las Naciones Unidas y el Banco Mundial también proporcionan vastos repositorios de datos globales. Además, muchas instituciones académicas y de investigación comparten sus datos para fomentar la colaboración y el avance científico.
            p Las redes sociales y plataformas en línea son otra fuente rica de datos públicos. Twitter, por ejemplo, ofrece acceso a su API, permitiendo a los investigadores y analistas estudiar tendencias y opiniones públicas en tiempo real. Sitios como Wikipedia no solo proporcionan contenido enciclopédico, sino también datos sobre patrones de edición y contribución de usuarios.
            p En el otro extremo del espectro están las fuentes de datos privados. Estos son los datos generados y mantenidos por empresas y organizaciones para su uso interno. Registros de clientes, datos de transacciones, información de empleados y datos operativos son ejemplos de datos privados. Estos datos suelen ser altamente valiosos y sensibles, y su acceso está estrictamente controlado. 
            p Las empresas utilizan sus datos privados para impulsar la toma de decisiones, mejorar la eficiencia operativa y obtener ventajas competitivas. Sin embargo, el manejo de datos privados conlleva grandes responsabilidades, especialmente en lo que respecta a la privacidad y la seguridad. Regulaciones como el GDPR en Europa y el CCPA en California han establecido estrictos requisitos para el manejo de datos personales. 
            p Las fuentes mixtas representan un área interesante donde los límites entre lo público y lo privado se difuminan. Un ejemplo son los datos generados por dispositivos IoT (Internet de las Cosas). Un termostato inteligente en un hogar genera datos privados sobre el uso de energía de una familia, pero cuando estos datos se agregan a nivel de ciudad o región, pueden convertirse en una valiosa fuente de información pública sobre patrones de consumo energético. 
            p Otro ejemplo de fuente mixta son las plataformas de crowdsourcing y ciencia ciudadana. Proyectos como eBird, donde aficionados a las aves reportan sus avistamientos, crean conjuntos de datos que son a la vez personales y públicos, y que han demostrado ser invaluables para la investigación científica. 
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Proceso general de preparación de datos 
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/13.png' alt='')          
      .col-lg-8.my-lg-0.my-3
        p El proceso de preparación de datos sigue una secuencia lógica de etapas interrelacionadas. Inicialmente, se realiza una evaluación preliminar de la calidad y estructura de los datos disponibles. Esta evaluación permite identificar los principales desafíos y determinar las estrategias más apropiadas para abordarlos.
        p La fase de limpieza incluye la identificación y tratamiento de valores atípicos, la gestión de valores faltantes, la eliminación de duplicados y la corrección de inconsistencias en los datos. Cada una de estas tareas requiere un análisis cuidadoso para determinar la acción más apropiada, considerando el contexto específico del problema y los requisitos del análisis posterior.                                                                    
    .row.justify-content-center.mb-4   
      .col-lg-8.my-lg-0.my-3
        .bg8.brad.p-3.mb-4.j1
          p.mb-0 La transformación de datos puede incluir múltiples operaciones como la normalización de variables numéricas, la codificación de variables categóricas, la agregación de registros, y la creación de nuevas variables derivadas. La selección de las transformaciones específicas depende de los objetivos del análisis y de los requisitos de las técnicas analíticas que se planea utilizar.
        p La validación constituye una etapa fundamental del proceso, donde se verifica la integridad y coherencia de los datos procesados. Esta fase incluye la comprobación de restricciones lógicas, la verificación de rangos válidos para las variables, y la confirmación de que las transformaciones realizadas han producido los resultados esperados.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/12.png' alt='') 
        
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de preparación de datos no debe considerarse como una secuencia lineal, sino como un proceso iterativo donde pueden requerirse múltiples ciclos de limpieza y transformación hasta alcanzar el nivel de calidad deseado. La documentación detallada de cada paso es fundamental para garantizar la reproducibilidad del proceso y facilitar futuras actualizaciones o modificaciones. 

    .row.bg4.align-items-center
      .px-lg-5.px-4             
        p La figura que se presenta a continuación sintetiza los elementos centrales presentados en este apartado sobre la preparación de datos.
        .row.justify-content-center 
          .col-lg-10
            .titulo-sexto.color-acento-botones
              h5 Figura 1.
              span Proceso iterativo para obtener datos de calidad óptima
            
            .bgfig.p-5.brad.mb-2
              img.img-a.img-t(src='@/assets/curso/temas/16.svg' alt='La Figura 1 se denomina «Proceso iterativo para obtener datos de calidad óptima» y presenta esta orientación a partir de cinco acciones: evaluar, limpiar, transformar, validar e iterar.') 
            figcaption Fuente: OIT, 2024.                                              
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema1',
  components: { AcordionA },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
