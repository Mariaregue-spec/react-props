import './App.css';

import Testimonio from './components/Testimonio.jsx';
<styles></styles>
function App() {
  return (
    <div className="App">
      <h1>Las cinco ciudades más relevantes en Galicia</h1>
        <Testimonio
          nombre='Coruña'
          pais='España'
          imagen='Coruña'
          testimonio='Ciudad costera conocida por la Torre de Hércules, el faro romano en funcionamiento más antiguo del mundo, y su animado paseo marítimo.'
        />
        <Testimonio
          nombre='Lugo'
          pais='España'
          imagen='Lugo'
          testimonio='Famosa por su muralla romana completamente conservada, declarada Patrimonio de la Humanidad por la UNESCO..'
        />
        <Testimonio
          nombre='Ourense'
          pais='España'
          imagen='Ourense'
          testimonio='Conocida por sus aguas termales y su casco histórico, situada en el interior de Galicia a orillas del río Miño.'
        />
        <Testimonio
          nombre='Santiago de Compostela'
          pais='España'
          imagen='Santiago-de-Compostela'
          testimonio='Capital de Galicia y destino final del Camino de Santiago. Destaca por su casco histórico y la Catedral de Santiago, Patrimonio de la Humanidad.'
        />
        <Testimonio
          nombre='Vigo'
          pais='España'
          imagen='Vigo'
          testimonio='La ciudad más poblada de Galicia, importante puerto pesquero e industrial, cercana a las Islas Cíes y con gran actividad económica.'
        />
          </div>
  );
}

export default App;
