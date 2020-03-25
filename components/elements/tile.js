

const types = {
  confirmed: <i className="fas fa-hospital-alt is-size-3 is-pulled-right has-text-info"></i>,
  deaths: <i className="fas fa-biohazard is-size-3 is-pulled-right has-text-danger"></i>,
  recovered: <i className="fas fa-first-aid is-size-3 is-pulled-right has-text-success"></i>,
  percentage: <i className="fas fa-percent is-size-3 is-pulled-right has-text-primary"></i>
}

const TileElement = ({ title, value }) => {
  return (
    <div className="box">
      <div className="columns is-mobile is-vcentered">
        <div className="column">
          <div className="heading">{ title }</div>
          <div className="title">{ value }</div>
        </div>
        <div className="column">
          <span>
            {
              types[title.toLowerCase()] ? types[title.toLowerCase()] : types.percentage
            }
          </span>
        </div>
      </div>

      <div className="level is-mobile">
        <div className="level-item">
          <div className="">
            <div className="heading">Last</div>
            <div className="title is-5">250</div>
          </div>
        </div>
        <div className="level-item">
          <div className="">
            <div className="heading">Overall</div>
            <div className="title is-5">750</div>
          </div>
        </div>
        <div className="level-item">
          <div className="">
            <div className="heading">Fatality Rate %</div>
            <div className="title is-5">25%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileElement;