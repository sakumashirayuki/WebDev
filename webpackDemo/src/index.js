import "@babel/polyfill";

import React from "react";
import ReactDom from "react-dom";

function App(){
	return <div>Hello</div>;
}

ReactDom.render(<App />, document.getElementById('root'));




