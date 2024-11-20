<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mejores prácticas y casos de aplicación
    .row.bg4.align-items-center
      .px-lg-5.px-4  
        .row.justify-content-center.mb-5
          .col-lg-10
            .row.justify-content-center.align-items-center.bg2.text-white.p-4.brad
              .col-lg-auto
                img.img-a.img-t(src='@/assets/curso/temas/27.png' alt='')
              .col.pt-lg-0.pt-md-4
                p.mb-0 En el ecosistema actual de la ciencia de datos, la selección y utilización efectiva de herramientas y tecnologías apropiadas impulsan la transformación de datos. Este capítulo explora las diversas soluciones disponibles, desde software especializado hasta plataformas integradas, proporcionando una comprensión importante de sus capacidades y aplicaciones. 

        Separador 
        #t_4_1.titulo-segundo.color-acento-contenido
          h2 4.1 Herramientas especializadas  

        p.mb-5 La transformación de datos requiere herramientas robustas y confiables que puedan manejar eficientemente grandes volúmenes de información mientras mantienen la integridad y calidad de los datos. El mercado actual ofrece una amplia gama de soluciones, desde productos comerciales altamente especializados hasta alternativas de código abierto flexibles y personalizables.

    .row.bg15.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                p #[b #[i Software] comercial]. El #[i software] comercial para transformación de datos ha evolucionado significativamente en las últimas décadas, ofreciendo soluciones integrales que combinan potencia, facilidad de uso y soporte profesional. Estas herramientas suelen destacar por su interfaz gráfica intuitiva, capacidades avanzadas de procesamiento y robustas características de seguridad y cumplimiento normativo. 
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')   
            .row.justify-content-center
              .col-lg-6.my-2
                p #[b Alteryx]. Representa uno de los líderes en el espacio de preparación y análisis de datos empresariales. Esta plataforma se distingue por su enfoque en la automatización de flujos de trabajo y su capacidad para manejar datos de múltiples fuentes. Su interfaz visual para el diseño de procesos de transformación permite a los usuarios desarrollar flujos de trabajo complejos sin necesidad de programación extensiva. La herramienta sobresale en escenarios empresariales donde la velocidad de implementación y la facilidad de uso son prioritarias. 
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                p #[b Informatica #[i PowerCenter]]. Se posiciona como una solución empresarial robusta para la integración y transformación de datos. Su arquitectura escalable y sus capacidades avanzadas de procesamiento la hacen particularmente adecuada para entornos empresariales de gran escala. La plataforma ofrece funcionalidades comprensivas para el mapeo de datos, la gestión de calidad y la documentación de transformaciones, aunque su complejidad puede requerir una inversión significativa en capacitación y recursos especializados. 
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                p #[i #[b Talend Data Integration]]. Aunque ofrece una versión de código abierto, se destaca en su edición comercial por sus capacidades empresariales avanzadas. La plataforma combina una interfaz gráfica intuitiva con la posibilidad de desarrollo de código personalizado, permitiendo a las organizaciones implementar transformaciones complejas mientras mantienen la facilidad de mantenimiento. Sus capacidades de integración con diversas fuentes de datos y sistemas empresariales la hacen particularmente valiosa en entornos heterogéneos. 
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='')

    h5 Soluciones de código abierto.  
    p.mb-5 El ecosistema de código abierto ha producido herramientas poderosas y flexibles para la transformación de datos, ofreciendo alternativas viables a las soluciones comerciales. Estas herramientas se caracterizan por su transparencia, flexibilidad y capacidad de personalización, aunque pueden requerir mayor experiencia técnica para su implementación efectiva.    

    .row.justify-content-center.mb-5       
      .col-lg-4.my-lg-0.my-3
        .bgi.brad1.p-4.h-100
          img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
          h5.text-center.fst-italic Apache NiFi
          p.mb-0 Se ha establecido como una plataforma robusta para la automatización y gestión de flujos de datos. Su arquitectura distribuida y su modelo de procesamiento basado en flujos lo hacen particularmente adecuado para escenarios que requieren procesamiento en tiempo real y alta disponibilidad. La plataforma ofrece una interfaz web intuitiva para el diseño de flujos de datos, mientras mantiene capacidades avanzadas de monitoreo y control de versiones.

      .col-lg-4.my-lg-0.my-3
        .bg12.brad1.p-4.h-100
          img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
          h5.text-center.fst-italic OpenRefine
          p.mb-0 Anteriormente conocido como #[b #[i Google Refine]], proporciona una herramienta específicamente diseñada para la limpieza y transformación de datos desordenados. Su interfaz similar a una hoja de cálculo, combinada con capacidades avanzadas de clustering y normalización, lo hace especialmente útil para tareas de limpieza de datos y normalización de valores. La herramienta destaca en escenarios que requieren exploración interactiva y refinamiento iterativo de datos.

      .col-lg-4.my-lg-0.my-3
        .bgi.brad1.p-4.h-100
          img.img-t.mb-2(src='@/assets/curso/temas/10.svg' alt='')
          h5.text-center.fst-italic Pentaho Data Integration (PDI)
          p.mb-0 También conocido como #[b #[i Kettle]], ofrece una suite completa de herramientas para la integración y transformación de datos. Su interfaz gráfica para el diseño de transformaciones, combinada con un amplio conjunto de componentes predefinidos, facilita el desarrollo de procesos de transformación complejos. La plataforma se destaca por su capacidad para manejar diversos formatos de datos y su extensibilidad mediante plugins personalizados. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/47.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 La selección entre soluciones comerciales y de código abierto debe considerar múltiples factores, incluyendo los requisitos específicos del proyecto, las restricciones presupuestarias, la experiencia técnica disponible y las consideraciones de soporte y mantenimiento a largo plazo. Las organizaciones frecuentemente optan por un enfoque híbrido, combinando herramientas comerciales y de código abierto según las necesidades específicas de cada caso de uso.  

    .bg10.brad1.p-4
      p.mb-0 La evolución continua tanto de las soluciones comerciales como de código abierto refleja la creciente importancia de la transformación de datos en el panorama analítico actual. La tendencia hacia la automatización, la integración de capacidades de machine learning y la mejora en la usabilidad continúa impulsando innovaciones en ambos segmentos del mercado.  

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Bibliotecas principales en R y #[i Python]

    p.mb-5 El ecosistema de bibliotecas para transformación de datos en R y Python ha evolucionado significativamente, proporcionando herramientas poderosas y flexibles que facilitan el procesamiento eficiente de datos. Estas bibliotecas constituyen el núcleo de muchas soluciones modernas de transformación de datos, ofreciendo tanto flexibilidad como rendimiento.

    .row.justify-content-center.mb-5 
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 3.
          span Proceso general de la analítica de datos
        
        .bgfig.p-5.brad.mb-2
          img.img-a.img-t(src='@/assets/curso/temas/48.svg' alt='La Figura 2 se denomina «Ecosistema de bibliotecas para transformación de datos» y presenta un diagrama comparativo de las principales bibliotecas de transformación de datos en Python y en R.') 
        figcaption Fuente: OIT, 2024. 

    p.mb-5 En el entorno #[i Python], pandas se ha establecido como la biblioteca fundamental para la manipulación y transformación de datos. Su estructura principal, el DataFrame, proporciona una interfaz intuitiva y eficiente para operaciones complejas de transformación. La biblioteca ofrece funcionalidades avanzadas para limpieza, reestructuración y agregación de datos, mientras mantiene un rendimiento optimizado para grandes conjuntos de datos.

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j
        img.img-a.img-t(src='@/assets/curso/temas/49.png' alt='')         
      .col-lg-8.my-lg-0.my-3
        .bgi.brad1.p-4.mb-4
          p.mb-0 #[i NumPy] complementa a pandas proporcionando capacidades fundamentales para operaciones numéricas y manipulación de #[i arrays]. Su integración cercana con pandas permite operaciones vectorizadas eficientes y transformaciones matemáticas complejas.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/50.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 En el ecosistema R, el conjunto de paquetes tidyverse, particularmente dplyr y tidyr, ha revolucionado la forma en que se realizan las transformaciones de datos. dplyr proporciona una gramática consistente y expresiva para manipulación de datos, mientras que tidyr se especializa en la restructuración y limpieza de datos desordenados.           
        p La biblioteca #[i data.table ]en #[b R] se destaca por su rendimiento excepcional en operaciones con grandes conjuntos de datos. Su sintaxis concisa y eficiente la hace particularmente valiosa en escenarios que requieren procesamiento de alto rendimiento. 

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Automatización de procesos de transformación

    p.mb-5 La automatización de procesos de transformación es una tendencia evidente en la modernización de los flujos de trabajo de datos. Esta automatización no solo mejora la eficiencia operativa, sino que también reduce errores y garantiza la consistencia en el procesamiento de datos.
    .row.bg4.align-items-center
      .px-lg-5.px-4 
        .row.justify-content-center
          .col-lg-10   
            .row.justify-content-center.bg13.brad1.p-4.mb-4.pb-0
              .col-lg-4.my-lg-0.my-3
                img.img-a.img-t(src='@/assets/curso/temas/64.png' alt='')          
              .col-lg-8.my-lg-0.my-3
                .bg1.brad1.p-4
                  p.mb-0 Los #[i pipelines] de transformación automatizados constituyen la columna vertebral de muchos sistemas modernos de procesamiento de datos. Estos pipelines pueden implementarse utilizando diversas tecnologías, desde scripts simples hasta sistemas orquestados complejos. La selección de la estrategia de automatización depende de factores como la frecuencia de actualización de datos, los requisitos de rendimiento y la complejidad de las transformaciones.     

        .bgi.brad1.p-4.mb-5
          p.mb-0 #[b #[i Apache Airflow]] se ha convertido en una herramienta líder para la orquestación de flujos de trabajo de datos. Su modelo basado en DAG (Grafos Acíclicos Dirigidos) permite definir dependencias complejas entre tareas mientras mantiene la flexibilidad para manejar fallos y reintentos. La plataforma proporciona capacidades robustas de monitoreo y logging, facilitando la identificación y resolución de problemas en los procesos automatizados.  

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        .bgi.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/51.png' alt='')
          p.mb-0 La implementación de pruebas automatizadas en los procesos de transformación es una cuestión primordial para mantener la calidad de los datos. Estas pruebas pueden incluir validaciones de esquema, verificaciones de integridad y pruebas de lógica de negocio. La automatización de estas pruebas ayuda a identificar problemas tempranamente en el proceso de transformación.
      .col-lg-4.my-lg-0.my-3
        .bg12.brad1.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/52.png' alt='')
          p.mb-0 La documentación automatizada de los procesos de transformación, incluyendo el linaje de datos y los metadatos de transformación, facilita el mantenimiento y la auditoría de los sistemas de procesamiento de datos. Herramientas como Great Expectations permiten definir y validar automáticamente expectativas sobre los datos, proporcionando documentación viva que evoluciona con los datos.
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/53.png' alt='')                     

</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema4',
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
