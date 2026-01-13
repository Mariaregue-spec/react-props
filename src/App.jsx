import Navbar from './components/Navbar/Navbar.jsx';
import Testimonio from './components/Testimonio/Testimonio';
import './App.css';


function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="App">
        <h1>Las cinco ciudades más relevantes en Galicia</h1>

        <Testimonio
          nombre='Coruña'
          pais='España'
          imagen='Coruña'
          testimonio='Ciudad costera en el noroeste de Galicia con un largo paseo junto al mar. Destaca la Torre de Hércules, un faro romano todavía en funcionamiento y Patrimonio de la Humanidad. A Coruña combina espacios marítimos, museos y una animada vida urbana.'
        />

        <Testimonio
          nombre='Lugo'
          pais='España'
          imagen='Lugo'
          testimonio='Ciudad conocida por sus espectaculares Murallas Romanas, declaradas Patrimonio de la Humanidad. Este cinturón de fortificación conserva gran parte de su perímetro original y rodea el centro histórico.'
        />

        <Testimonio
          nombre='Ourense'
          pais='España'
          imagen='Ourense'
          testimonio='Ciudad interior de Galicia, situada en el interior de Galicia a orillas del río Miño, famosa por su patrimonio histórico —como la Catedral de Ourense— y sus aguas termales repartidas por la ciudad y sus alrededores. Fue un importante asentamiento romano gracias a sus fuentes termales.'
        />

        <Testimonio
          nombre='Santiago de Compostela'
          pais='España'
          imagen='Santiago-de-Compostela'
          testimonio='Ciudad histórica y capital de Galicia, famosa por su impresionante catedral y como destino final del Camino de Santiago, una ruta de peregrinación milenaria. Su centro histórico es Patrimonio de la Humanidad por la UNESCO y combina arquitectura románica, gótica y barroca.'
        />

        <Testimonio
          nombre='Vigo'
          pais='España'
          imagen='Vigo'
          testimonio='Es la ciudad más grande de Galicia y una importante zona portuaria junto a la Ría de Vigo. Ofrece playas, barrios antiguos como el Casco Vello, parques, miradores y una rica gastronomía centrada en productos del mar.'
        />
      </div>
    </>
  );
}

export default App;
