var app=document.getElementById('reactapp');
var root=ReadableByteStreamController.DOM.createRoot(app);
root.render (<descriptionComponent name="name1"/>);
function descriptionComponent({name}){
    
    return (
        <>
            <h1>React managed Code({props.name ?? "Guest User"})</h1>
            <p>{name ? "Welcome back!" : "Hello, Guest!"}</p>
        </>
    );
}
