import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div className="container">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
