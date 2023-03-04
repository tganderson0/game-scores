import './App.css';
import Header from './components/header';
import Card from './components/card';
import Layout from './components/standard-layout';
import { useNavigate } from 'react-router';

function App() {

  const navigate = useNavigate();

  return (
    <Layout>
        <Card
          title='Five Crowns'
          description='Start a new game of Five Crowns'
          btnText='Play'
          imageSrc='https://ludologists.com/wp-content/uploads/2019/12/Five-Crowns-1024x1024.png'
          onClick={() => navigate('/five-crowns')}
        />
    </Layout>
  );
}

export default App;
