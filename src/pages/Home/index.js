import DefaultLayout from '../../components/DefaultLayout';
import Summary from '../../components/Summary';
import Servers from '../../components/Servers';

function Home() {
  return (
    <DefaultLayout>
      <Summary />
      <Servers />
    </DefaultLayout>
  );
}

export default Home;