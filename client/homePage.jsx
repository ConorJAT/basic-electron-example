const React = require('react');
const {createRoot} = require('react-dom/client');

const HelloUser = (props) => {
    return (
        <>
            <h1>Hello, {props.username}</h1>
            <p>Welcome to Electron!</p>
        </>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('content'));
    root.render( <HelloUser username="Conor Race"/> );
};

window.onload = init;