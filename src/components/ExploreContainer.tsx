import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps { }
interface Scenario {
  titre: string
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [scenarioList, setScenarioList] = useState<Scenario[]>([])
  fetch('http://localhost:8080/scenarioList', { method: "GET", headers: { accept: "application/json" } })
    .then(response => response.json())
    .then(json => setScenarioList(json))
    .catch(() => { })
  
  return (
    <ul className="container">
      {scenarioList.length > 0
        ? scenarioList.map(scenario => (
          <li>{ scenario.titre }</li>
        ))
        : <li>Aucun scenario</li>
      }
    </ul>
  );
};

export default ExploreContainer;
