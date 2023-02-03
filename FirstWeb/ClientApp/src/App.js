import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

export default () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
            <Route exact path='/books' component={BookList} />
            <Route path='/books/add' component={AddBook} />
        </Switch>
    </Layout>
);
