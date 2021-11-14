function Menu ({idioma='es', usuario = null, changLang}){
    let saludo = 'Hola';
    if (idioma === 'us') 
        saludo = 'Hello'
    else if (idioma === 'fr') 
        saludo = 'Salut'
    
    return(
        <div>
            <h2>{saludo}</h2>
            <button onClick = {()=>changLang('us')}>Pasar a ingles</button>
            <button onClick = {()=>changLang('fr')}>Pasar a frances</button>
        </div>
    )
}

export default Menu