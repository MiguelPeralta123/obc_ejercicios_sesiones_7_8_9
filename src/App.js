import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { ContactListComponent } from './components/containers/contact_list';

function App() {
  return (
    <div className="App pt-4">
      <ContactListComponent></ContactListComponent>
    </div>
  );
}

export default App;
