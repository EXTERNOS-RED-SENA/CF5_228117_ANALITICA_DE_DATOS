<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Importación y lectura de datos

    .row.bg4.align-items-center
      .px-lg-5.px-4  
        .row.justify-content-center
          .col-lg-4.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/17.png' alt='')
          .col-lg-5.my-lg-0.my-3
            .bg5.p-3.brad.j1.h-100
              p.mb-0 La importación y lectura de datos representa una etapa obligada en el proceso de análisis, constituyendo el punto de entrada para toda la información que será procesada posteriormente. Este capítulo explora las diferentes técnicas y consideraciones necesarias para garantizar una importación de datos eficiente y confiable, abordando tanto la lectura desde archivos externos como la conexión con bases de datos.
          .col-lg-3.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/18.png' alt='')


        Separador 
        #t_2_1.titulo-segundo.color-acento-contenido
          h2 2.1 Lectura de datos desde archivos externos
    p La capacidad de leer datos desde diferentes tipos de archivos externos representa una habilidad fundamental en la práctica del análisis de datos. Los analistas se enfrentan constantemente al desafío de trabajar con múltiples formatos de archivo, cada uno con sus propias particularidades y requerimientos específicos.
    .row.justify-content-center.mb-4   
      .col-lg-8.my-lg-0.my-3
        .bgi.brad.p-3.mb-4.j1
          p.mb-0 Los archivos CSV (valores separados por comas) constituyen uno de los formatos más utilizados en el intercambio de datos tabulares. Su popularidad radica en su simplicidad y universalidad, características que los hacen ideales para el intercambio de información entre diferentes sistemas y plataformas. Sin embargo, el trabajo con archivos CSV presenta desafíos particulares que deben abordarse cuidadosamente. La detección correcta de delimitadores, el manejo de caracteres especiales y la interpretación adecuada de tipos de datos son aspectos críticos que requieren atención detallada durante el proceso de lectura.

        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/19.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Los archivos Excel, por su parte, ofrecen capacidades más sofisticadas para el almacenamiento y organización de datos. Su estructura más compleja permite el manejo de múltiples hojas de cálculo, fórmulas y formatos específicos. La lectura de estos archivos requiere una comprensión profunda de su estructura interna y la capacidad de manejar elementos como referencias entre celdas, fórmulas calculadas y formatos condicionales. El proceso de importación debe considerar cuidadosamente estos aspectos para garantizar la integridad de los datos extraídos.               
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/20.png' alt='')   

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1. 
          span Características y consideraciones de formatos comunes

        .tabla-a.color-acento-botones.text-center
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Formato 
                th Ventajas
                th Desventajas
                th Casos de uso típicos               

            tbody
              tr
                td.fast-bold CSV 
                td Simple y universal, tamaño reducido, fácil de procesar
                td Limitado a datos tabulares, problemas con caracteres especiales
                td Intercambio de datos simples, logs, datos transaccionales
              tr
                td.fast-bold Excel (.xlsx) 
                td Soporte para múltiples hojas, fórmulas, formato rico
                td Mayor tamaño de archivo puede contener macros no deseados
                td Reportes financieros, datos con múltiples categorías 
              tr
                td.fast-bold JSON
                td Flexible, jerárquico, popular en web
                td Puede ser verbose, más complejo de procesar
                td #[i APIs web], datos semiestructurados
              tr
                td.fast-bold XML  
                td Altamente estructurado, autodescriptivo
                td Sintaxis compleja, #[i overhead] significativo
                td Intercambio de datos empresariales, configuraciones 
              tr
                td.fast-bold TXT 
                td Máxima compatibilidad, simple
                td Sin estructura inherente, formato limitado
                td Logs, datos no estructurados, texto plano                                                                                                 
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Conexión y extracción desde bases de datos
    .row.justify-content-center.mb-5
      .col-lg-10      
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/21.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La conexión con bases de datos representa uno de los aspectos primarios en la obtención de datos para análisis. Este proceso requiere un enfoque sistemático que abarca desde la configuración inicial hasta la ejecución de consultas complejas, asegurando en todo momento la eficiencia y seguridad en el acceso a los datos. 

    .row.justify-content-center.mb-4
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Configuración de conexiones")
            p El proceso de configuración de conexiones a bases de datos comienza con la especificación precisa de los parámetros de conexión. Estos incluyen la dirección del servidor, el puerto de conexión, el nombre de la base de datos y las credenciales de acceso. La construcción de cadenas de conexión debe seguir las mejores prácticas de seguridad, evitando la exposición directa de credenciales en el código y utilizando variables de entorno o sistemas de gestión de secretos para manejar información sensible. 
            p La implementación de #[i pools] de conexiones constituye una estrategia fundamental para optimizar el rendimiento y la gestión de recursos. Un #[i pool] de conexiones mantiene un conjunto de conexiones preestablecidas que pueden reutilizarse, eliminando la sobrecarga asociada con la creación y destrucción frecuente de conexiones. La configuración adecuada del tamaño del #[i pool] es determinante: un #[i pool] demasiado pequeño puede crear cuellos de botella, mientras que uno excesivamente grande puede desperdiciar recursos del sistema.
            p Los aspectos de seguridad en la configuración de conexiones requieren especial atención. La implementación de SSL/TLS para el cifrado de comunicaciones, la configuración de #[i firewalls] y la gestión de certificados digitales son elementos esenciales para garantizar una conexión segura. Además, la implementación de políticas de #[i timeout] y #[i retry] ayuda a manejar situaciones de conectividad intermitente o problemas de red.
          div(titulo="Consultas básicas y avanzadas")
            p El dominio de las consultas #[i SQL], desde las más básicas hasta las más sofisticadas, resulta fundamental para la extracción efectiva de datos. Las consultas básicas constituyen el fundamento de la interacción con bases de datos relacionales. La sentencia #[i SELECT], pilar de las consultas de recuperación, permite especificar exactamente qué datos se desean obtener. La cláusula #[i WHERE] facilita el filtrado preciso de registros, mientras que #[i ORDER BY ]permite controlar la ordenación de los resultados. Las operaciones de agregación mediante#[i  GROUP BY], combinadas con funciones como #[i COUNT, SUM, AVG, MAX y MIN], permiten obtener resúmenes estadísticos valiosos de los datos.   

            p Las consultas avanzadas expanden significativamente las capacidades de extracción y transformación de datos. Los#[i  JOINS] representan una herramienta fundamental para combinar datos de múltiples tablas. Las uniones pueden ser internas (#[i INNER JOIN]), externas (#[i LEFT, RIGHT, FULL OUTER JOIN]) o cruzadas (#[i CROSS JOIN]), cada una con sus propios casos de uso y consideraciones de rendimiento. La selección del tipo adecuado de JOIN es clave para mantener la integridad de los datos y optimizar el rendimiento de las consultas.

            p Las subconsultas o consultas anidadas permiten realizar operaciones más complejas, facilitando la implementación de lógica de negocio sofisticada. Estas pueden aparecer en la cláusula #[i SELECT, FROM, o WHERE], y pueden ser correlacionadas o no correlacionadas. El uso efectivo de subconsultas requiere una comprensión profunda de su impacto en el rendimiento y las alternativas disponibles, como las Common #[i Table Expressions] (CTEs).

            p Las funciones de ventana (#[i WINDOW FUNCTIONS]) representan una característica avanzada particularmente útil en el análisis de datos. Estas funciones permiten realizar cálculos a través de conjuntos de filas relacionadas con la fila actual, sin necesidad de agrupar los resultados. Funciones como #[i ROW_NUMBER(), RANK(), LAG(), y LEAD()] facilitan análisis sofisticados como el cálculo de diferencias entre filas consecutivas o la identificación de patrones en series temporales.

            p La optimización de consultas constituye también es altamente relevante en el trabajo con bases de datos. Esto implica la comprensión y utilización efectiva de índices, la minimización de operaciones costosas como los #[i CROSS JOINS], y el uso apropiado de hints cuando sea necesario. El análisis de planes de ejecución es fundamental para identificar y resolver problemas de rendimiento en consultas complejas.

            p Los procedimientos almacenados y las funciones definidas por el usuario pueden utilizarse para encapsular lógica de consulta compleja y mejorar la reusabilidad del código. Sin embargo, su uso debe equilibrarse con la necesidad de mantener la lógica de negocio accesible y modificable desde las aplicaciones cliente.
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/11.png' alt='')       
           
    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Mejores prácticas en la importación  

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/23.png' alt='')          
      .col-lg-7.my-lg-0.my-3
        p La implementación de mejores prácticas en la importación de datos busca garantizar la calidad y eficiencia del proceso de análisis. La validación de datos durante la importación constituye una primera línea de defensa contra errores y anomalías que podrían afectar análisis posteriores.
        p El manejo de errores durante la importación debe ser robusto y contemplar diferentes escenarios problemáticos. Esto incluye la gestión de formatos incorrectos, valores faltantes, problemas de codificación y errores de conexión. La implementación de estrategias de manejo de errores adecuadas permite identificar y resolver problemas tempranamente en el proceso de análisis.    
        
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3        
        .row.justify-content-center.align-items-center.bg8.br-d.p-4.brad.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/24.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La documentación detallada del proceso de importación resulta medular para la reproducibilidad y mantenimiento del análisis. Esta documentación debe incluir detalles sobre las fuentes de datos, los parámetros de conexión utilizados, las transformaciones aplicadas durante la importación y cualquier consideración especial que deba tenerse en cuenta. 
      .col-lg-2.my-lg-0.my-3        
        img.img-a.img-t(src='@/assets/curso/temas/25.png' alt='')
        
    .row.justify-content-center
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/26.png' alt='')          
      .col-lg-7.my-lg-0.my-3
        p La optimización del rendimiento en la importación de datos requiere considerar factores como el tamaño de los lotes de lectura, la gestión de la memoria y la paralelización de operaciones cuando sea posible. La selección de las estrategias de optimización apropiadas depende tanto de las características de los datos como de las capacidades del sistema.                                      
        p El control de versiones de los datos importados representa otra consideración importante, especialmente en entornos donde los datos se actualizan regularmente. La implementación de un sistema de control de versiones permite rastrear cambios en los datos y mantener la consistencia en los análisis a lo largo del tiempo.                                      
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema2',
  components: {
    AcordionA,
  },
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
