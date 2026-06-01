import TooltipText from './tooltip/TooltipText'
import './App.css'

function App() {
  return (
    <div className="App">
      <p>
        <TooltipText tooltip={'Texto generado'}>Lorem ipsum</TooltipText> dolor sit
        amet, consectetur adipisicing elit. Eveniet hic quia
      </p>
      <p>
        quibusdam animi dolore sequi consectetur{' '}
        <TooltipText tooltip={'Hola a todos y todas'}>corporis</TooltipText>{' '}
        asperiores, amet vero provident
      </p>
      <p>
        similique eius officiis laborum,{' '}
        <TooltipText tooltip={'Texto generado'}>veritatis</TooltipText> sunt sint
        magnam dolores!
      </p>
    </div>
  )
}

export default App
