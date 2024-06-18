import '../styles/Information.modules.css'

const Information: React.FC = () => {
  return (
    <section className="container information flex-row">
      <div className="information__card">
        <h3>Rotation Time</h3>
        <h2>58 Days</h2>
      </div>
      <div className="information__card">
        <h3>Revolution Time</h3>
        <h2>87 Days</h2>
      </div>
      <div className="information__card">
        <h3>Radius</h3>
        <h2>2,475 KM</h2>
      </div>
      <div className="information__card">
        <h3>Average Temp.</h3>
        <h2>430°C</h2>
      </div>
    </section>
  )
}

export default Information
