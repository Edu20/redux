import { connect } from "react-redux"
import Menu from '../componets/Menu'

const mapStateToProps = (state,ownProps) => {
    // en este caso el componente recibira "counter" como props
    return {idioma:state.lang}
    }

    const mapDispatchToProps = (dispatch,ownProps) => {
        // nombre de las props para ejecutar y llamar a una action
        return {
        changLang:(val) => dispatch({type:'CHANGLANG', payload:val}),
        }
        }

const generateComponent = connect(mapStateToProps,mapDispatchToProps)
const container = generateComponent(Menu)
export default container