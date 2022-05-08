import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {

    const [term, setTerm] = useState('Anton');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    //sets up timer on debouncedTerm
    //every time term is updated
    useEffect( () => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect( () => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search)
        };
        search();
    }, [debouncedTerm]);

    const renderedResults = results.map(
        ({ pageid, title, snippet }) => {
        return (
        <div key={pageid} className="item">
            <div className="right floated content">
                <a
                href={`https://en.wikipedia.org?curid=${pageid}`}
                className="ui button"
                >Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {title}
                </div>
                <span
                dangerouslySetInnerHTML={
                    {__html: snippet}
                }></span>
            </div>
        </div>
    )})

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                    className="input"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}


export default Search;