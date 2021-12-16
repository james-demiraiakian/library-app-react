import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/books">CATALOG</NavLink>
        <Switch>
          <Route exact path="/">
            {' '}
          </Route>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
