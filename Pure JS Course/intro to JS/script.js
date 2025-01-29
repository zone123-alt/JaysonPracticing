<div id="root"></div>


<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script>
    const hello = React.createElement("h1", {}, "Hello");
    ReactDOM.render(<hello/>, document.getElementById("root"));
</script>