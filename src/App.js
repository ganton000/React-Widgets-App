import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'A',
        content: 'A'
    },
    {
        title: 'B',
        content: 'B'
    },
    {
        title: 'C',
        content: 'C'
    }
]
const options = [
    {label:'label1', value:'content1'},
    {label:'label2', value:'content2'},
    {label:'label3', value:'content3'}
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Header />
            <Route path="/">
                <Accordion
                items={items}
                />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                label="Select a Color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}



export default App;