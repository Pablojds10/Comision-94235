import { Spinner } from 'reactstrap';

// eslint-disable-next-line no-unused-vars
export const withLoading = (Component) => {
    function ComponentWithLoading(props) {
        if (props.items.length < 1) {
            return <div>
                <p>Cargando Productos...</p>
                <Spinner color="primary" />
            </div>
        } 
        return <Component {...props} />
    }
    return ComponentWithLoading
}
export default withLoading