import dynamic from 'next/dynamic';
import SectionTitle from '../components/sectionTitle';
import ApiManager from '../utils/apiManager';
import { convertISODate } from '../utils';
import { Fragment } from 'react';
import Navigation from '../components/navigation';
import DataTable from '../components/charts/dataTable';



const CountriesPage = ({ lastUpdate, latest }) => {
  // const DataTable = dynamic(async () => {
  //   const Component = await import('../components/charts/dataTable');
  //   return Component;
  // }, { ssr: false })

  return (
    <Fragment>
      <Navigation />

      <div className="hero is-medium is-primary">
        <div className="hero-body">
          <SectionTitle
            title="Countries"
            subtitle={ lastUpdate ? `Last Update: ${convertISODate(lastUpdate)}` : '' } />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <DataTable
            latest={ latest } />
        </div>
      </div>
    </Fragment>
  );
}


CountriesPage.getInitialProps = async (ctx) => {
  try {
    let { data: latest, lastUpdate } = await ApiManager.readLatest(null, null, true);

    return { lastUpdate, latest }
  } catch (error) {
    console.error(error);
    return { error: error }
  }
}

export default CountriesPage