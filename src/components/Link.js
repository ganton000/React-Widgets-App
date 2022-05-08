import React from "react";


const Link = ({className, href, children}) => {

    const onClick = (event) => {

        //metaKey = cmdKey on Mac
        if (event.metaKey || event.ctrlKey) {
            return; //allows browser to act as normal
        }

        //prevents full-page reload
        event.preventDefault();
        //updates url to href
        window.history.pushState({}, '', href);

        //tells route components that url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a
        onClick={onClick}
        className={className}
        href={href}
        >
            {children}
        </a>
    )
};


export default Link;