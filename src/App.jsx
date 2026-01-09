import './App.css';

import Testimonio from './components/testimonio';
<styles></styles>
function App() {
  return (
    <div className="App">
      <h1>Las cinco ciudades más relevantes en Galicia</h1>
        <Testimonio
          nombre='Coruña'
          pais='España'
          imagen='Coruña'
          testimonio='Ciudad costera conocida por la Torre de Hércules, el faro romano en funcionamiento más antiguo del mundo, y su animado paseo marítimo.iempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio
          nombre='Lugo'
          pais='España'
          imagen='Lugo'
          testimonio='Ciudad histórica con una rica tradición cultural y arquitectónica. Es famosa por su catedral gótica y su importante papel en la historia de Galicia. Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en SpotifyFamosa por su muralla romana completamente conservada, declarada Patrimonio de la Humanidad por la UNESCO..'
        />
        <Testimonio
          nombre='Ourense'
          pais='España'
          imagen='Ourense'
          testimonio='Ciudad Conocida por sus aguas termales y su casco histórico, situada en el interior de Galicia a orillas del río Miño. con una rica tradición cultural y arquitectónica. Es famosa por su catedral gótica y su importante papel en la historia de Galicia. Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio
          nombre='Santiago de Compostela'
          pais='España'
          imagen='Santiago-de-Compostela'
          testimonio='Ciudad Capital de Galicia y destino final del Camino de Santiago. Destaca por su casco histórico y la Catedral de Santiago, Patrimonio de la Humanidad. y capital de Galicia, famosa por el Camino de Santiago y su importante patrimonio religioso. Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio
          nombre='Vigo'
          pais='España'
          imagen='Vigo'
          testimonio='Ciudad La ciudad más poblada de Galicia, importante puerto pesquero e industrial, cercana a las Islas Cíes y con gran actividad económica. por su casco antiguo bien conservado, sus plazas encantadoras y su ambiente relajado. Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
          </div>
  );
}

export default App;
