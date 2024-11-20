<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejores prácticas y casos de aplicación
    .row.bg4.align-items-center
      .px-lg-5.px-4  
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/54.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La implementación exitosa de procesos de limpieza y transformación de datos requiere el dominio técnico de herramientas y metodologías, al igual que la adhesión a mejores prácticas y la comprensión de su aplicación en contextos reales. Este capítulo explora las prácticas fundamentales y presenta casos de estudio que ilustran su implementación efectiva en situaciones del mundo real.

        Separador 
        #t_5_1.titulo-segundo.color-acento-contenido
          h2 5.1 Documentación y control de calidad 

        .row.justify-content-center.mb-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/55.png' alt='')     
          .col-lg-8.my-lg-0.my-3
            p La documentación exhaustiva y el control de calidad riguroso constituyen pilares fundamentales en cualquier proceso de transformación de datos. Una documentación efectiva no solo facilita el mantenimiento y la reproducibilidad de los procesos, sino que también proporciona transparencia y trazabilidad en las transformaciones realizadas.

            p La documentación de procesos de transformación debe abordar múltiples niveles de detalle. A nivel estratégico, debe incluir los objetivos y justificación de las transformaciones realizadas, estableciendo claramente el contexto empresarial y los requisitos del negocio. A nivel técnico, debe detallar las especificaciones de las transformaciones, incluyendo:
            ul.lista-ul.fa-ul
              li
                i.fas.fa-check.v1
                span Descripción detallada de las fuentes de datos.
              hr
              li
                i.fas.fa-check.v1
                span Mapeo de transformaciones y reglas de negocio aplicadas.
              hr
              li
                i.fas.fa-check.v1
                span Tratamiento de casos especiales y excepciones.
              hr
              li
                i.fas.fa-check.v1
                span Dependencias y requisitos técnicos.
              hr
              li
                i.fas.fa-check.v1
                span Procedimientos de validación implementados.
              hr

    p El control de calidad en la transformación de datos debe implementarse como un proceso continuo y sistemático. Los elementos clave de un sistema robusto de control de calidad incluyen:      

    .row.justify-content-center.mb-5 
      .col-lg-5.my-lg-0.my-3
        .bgi.brad1.p-4.h-100
          h5 Validaciones técnicas
          ul.mb-0.lista-ul.fa-ul
            li
              i.fas.fa-check.v1
              span Verificación de integridad de datos.
            li
              i.fas.fa-check.v1
              span Comprobación de consistencia en tipos de datos.
            li
              i.fas.fa-check.v1
              span Validación de rangos y restricciones.
            li
              i.fas.fa-check.v1
              span Detección de anomalías y valores atípicos.
      .col-lg-5.my-lg-0.my-3
        .bg10.brad1.p-4.h-100
          h5 Validaciones de negocio
          ul.mb-0.lista-ul.fa-ul 
            li
              i.fas.fa-check.v1
              span Conformidad con reglas de negocio.
            li
              i.fas.fa-check.v1
              span Verificación de relaciones entre entidades.
            li
              i.fas.fa-check.v1
              span Comprobación de agregaciones y cálculos.
            li
              i.fas.fa-check.v1
              span Validación de tendencias y patrones esperados.     

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.bg2.text-white.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 La implementación de pruebas automatizadas constituye una práctica esencial para mantener la calidad de las transformaciones a lo largo del tiempo. Estas pruebas deben ejecutarse de manera regular y documentar sus resultados de forma sistemática, permitiendo la detección temprana de problemas y la verificación continua de la calidad de los datos. 

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Casos de estudio prácticos 

    p La aplicación práctica de técnicas de transformación de datos se ilustra mejor a través de casos de estudio reales que demuestran tanto los desafíos enfrentados como las soluciones implementadas.      

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/58.png' alt='')       
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Caso 1: Integración de datos de ventas minoristas")
            p Una cadena minorista nacional enfrentaba el desafío de integrar datos de ventas provenientes de múltiples sistemas punto de venta, cada uno con sus propias particularidades en formato y estructura. El proceso de transformación implementado incluía: 
            p Desafíos principales:            
            ul.lista-ul.fa-ul.mb-0.ps-3
              li 
                i.fas.fa-check-circle.color1
                span Inconsistencia en formatos de fecha y hora entre sistemas.
              li 
                i.fas.fa-check-circle.color1
                span Variaciones en la codificación de productos.
              li 
                i.fas.fa-check-circle.color1
                span Discrepancias en las convenciones de nombres.  

            p Solución implementada:
            ul.lista-ul.fa-ul.mb-0.ps-3
              li 
                i.fas.fa-check-circle.color1
                span Desarrollo de un pipeline automatizado de transformación.
              li 
                i.fas.fa-check-circle.color1
                span Implementación de mapeos estandarizados para códigos de productos.
              li 
                i.fas.fa-check-circle.color1
                span Creación de un sistema de validación multinivel.
              li 
                i.fas.fa-check-circle.color1
                span Establecimiento de procesos de reconciliación diaria.

            p Resultados:
            ul.lista-ul.fa-ul.mb-0.ps-3
              li 
                i.fas.fa-check-circle.color1
                span Reducción del 75% en el tiempo de procesamiento.
              li 
                i.fas.fa-check-circle.color1
                span Mejora significativa en la precisión de los reportes.
              li 
                i.fas.fa-check-circle.color1
                span Mayor confiabilidad en el análisis de tendencias. 
          div(titulo="Caso 2: Limpieza de datos de investigación médica")
            p Un instituto de investigación médica requería la consolidación y limpieza de datos de ensayos clínicos provenientes de múltiples centros de investigación.
            p Desafíos principales:             
            ul.lista-ul.fa-ul.mb-0.ps-3
              li 
                i.fas.fa-check-circle.color1
                span Datos incompletos y valores faltantes.
              li 
                i.fas.fa-check-circle.color1
                span Inconsistencias en la codificación de diagnósticos.
              li 
                i.fas.fa-check-circle.color1
                span Necesidad de mantener la trazabilidad de todas las transformaciones.

            p Solución implementada:
            ul.lista-ul.fa-ul.mb-0.ps-3
              li 
                i.fas.fa-check-circle.color1
                span Desarrollo de protocolos estandarizados de limpieza.
              li 
                i.fas.fa-check-circle.color1
                span Implementación de sistemas de validación específicos del dominio.
              li 
                i.fas.fa-check-circle.color1
                span Creación de registros detallados de transformaciones.
              li 
                i.fas.fa-check-circle.color1
                span Establecimiento de procesos de revisión por pares.

            p Resultados:
            ul.lista-ul.fa-ul.mb-0.ps-3
              li 
                i.fas.fa-check-circle.color1
                span Mejora en la calidad y confiabilidad de los datos.
              li 
                i.fas.fa-check-circle.color1
                span Reducción significativa en el tiempo de preparación de datos.
              li 
                i.fas.fa-check-circle.color1
                span Mayor facilidad en la reproducción de análisis. 

        
    .row.justify-content-center.mb-4
      .col-lg-7.my-lg-0.my-3 
        .bg16.br-d.p-4.brad       
          p La documentación detallada de estos casos de estudio, incluyendo las lecciones aprendidas y las mejores prácticas identificadas, proporciona insights valiosos para la implementación de soluciones similares en otros contextos. La experiencia acumulada en estos casos demuestra la importancia de:
          ul.mb-0.lista-ul.fa-ul 
            li
              i.fas.fa-check.v1
              span Establecer procesos claros y documentados.
            li
              i.fas.fa-check.v1
              span Implementar controles de calidad robustos.
            li
              i.fas.fa-check.v1
              span Mantener la trazabilidad de las transformaciones.
            li
              i.fas.fa-check.v1
              span Adaptar las soluciones al contexto específico.
            li.mb-0
              i.fas.fa-check.v1
              span.mb-0 Fomentar la colaboración entre equipos técnicos y de negocio.           
      .col-lg-3.my-lg-0.my-3.j1        
        img.img-a.img-t(src='@/assets/curso/temas/57.png' alt='')

    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Tendencias y recomendaciones 

    .row.justify-content-center.mb-5       
      .col-lg-7.my-lg-0.my-3
        p El campo de la transformación y limpieza de datos continúa evolucionando rápidamente, impulsado por avances tecnológicos y nuevas necesidades empresariales. Una de las tendencias más significativas es la creciente adopción de técnicas de automatización basadas en inteligencia artificial para la detección y corrección de anomalías en los datos. Los sistemas de aprendizaje automático están siendo incorporados cada vez más en los procesos de limpieza, permitiendo identificar patrones sutiles y realizar correcciones de manera más eficiente.   
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/59.png' alt='')  

    .row.justify-content-center.mb-5 
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 3.
          span Tendencias en transformación de datos
        
        .bgfig.p-5.brad.mb-2
          img.img-a.img-t(src='@/assets/curso/temas/60.svg' alt='La Figura 3 se denomina «Tendencias en transformación de datos» y presenta un diagrama circular concéntrico que muestra las principales tendencias en transformación de datos, donde en el núcleo se ubica la «Automatización Inteligente» como tendencia central.') 
        figcaption Fuente: OIT, 2024.

    p.mb-5 La democratización de las herramientas de transformación de datos representa otra tendencia significativa. Las plataformas modernas están evolucionando hacia interfaces más intuitivas que permiten a usuarios con diversos niveles de experiencia técnica participar en los procesos de transformación de datos. Esta tendencia está acompañada por un énfasis creciente en la transparencia y explicabilidad de las transformaciones realizadas.

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j
        img.img-a.img-t(src='@/assets/curso/temas/61.png' alt='')         
      .col-lg-8.my-lg-0.my-3
        .bgi.brad1.p-4.mb-4
          p.mb-0 El procesamiento en tiempo real de datos se está convirtiendo en un requisito cada vez más común. Las organizaciones están migrando hacia arquitecturas que permiten la transformación y limpieza de datos en tiempo real, facilitando la toma de decisiones más ágil y la respuesta inmediata a cambios en los datos. 
        p La gobernanza de datos y el cumplimiento normativo continúan ganando importancia, especialmente en un contexto de regulaciones cada vez más estrictas sobre privacidad y protección de datos. Las organizaciones están implementando frameworks más robustos para asegurar que los procesos de transformación de datos cumplan con requisitos regulatorios mientras mantienen la eficiencia operativa. 

    Separador 
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Conclusiones 

    .row.justify-content-center.mb-5
      .col-lg-8.my-lg-0.my-3
        p La limpieza y transformación de datos constituye un elemento fundamental en la cadena de valor de los datos modernos. A medida que las organizaciones continúan su transformación digital, la capacidad para procesar y preparar datos de manera eficiente se vuelve cada vez más crítica para el éxito empresarial.
        p La adopción de mejores prácticas en documentación y control de calidad, combinada con la implementación de soluciones tecnológicas avanzadas, permite a las organizaciones maximizar el valor de sus datos mientras mantienen altos estándares de calidad y confiabilidad. Los casos de estudio presentados demuestran que el éxito en la transformación de datos requiere un equilibrio entre la excelencia técnica y la comprensión profunda del contexto empresarial.      
        .bg5.brad1.p-4
          p.mb-0 Las tendencias emergentes sugieren un futuro donde la transformación de datos será cada vez más automatizada e integrada en los procesos empresariales, pero también más accesible y transparente. La continua evolución de herramientas y metodologías promete facilitar estos procesos, mientras que el énfasis en la gobernanza y la calidad de datos asegura que los resultados sean confiables y utilizables. 
      .col-lg-4.my-lg-0.my-3.j
        img.img-a.img-t(src='@/assets/curso/temas/62.png' alt='') 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.bg17
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/63.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En última instancia, el éxito en la transformación de datos no depende solo de la tecnología utilizada, sino también de la capacidad de las organizaciones para establecer procesos sólidos, mantener altos estándares de calidad y adaptarse a un panorama tecnológico en constante evolución. La inversión en capacitación, herramientas adecuadas y procesos bien diseñados continuará siendo esencial para aprovechar al máximo el potencial de los datos en el entorno empresarial moderno.                                              
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema5',
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
