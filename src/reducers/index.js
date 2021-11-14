import '../actions/index';

const stateInicial = {
    lang: "es",
    usuario: null
}

const reducerMain = (state=stateInicial, action) => {
    if (action.type === 'CHANGLANG')
    return {
        lang: action.payload,
        usuario: Object.assign({},state.usuario)
    }
    return state
}

export default reducerMain