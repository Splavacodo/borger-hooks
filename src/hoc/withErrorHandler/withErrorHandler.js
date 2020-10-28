import React from 'react'; 

import Modal from '../../components/UI/Modal/Modal'; 
import Auxilary from '../Auxilary'; 
import useHttpErrorHandler from '../../hooks/http-error-handler'; 

const withErrorHandler = (WrappedComponent, axios) => { 
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios); 
        return (
            <Auxilary>
                <Modal 
                    show={error}
                    modalClosed={clearError}>
                    {error && error.message}
                </Modal>
                <WrappedComponent {...props} />
            </Auxilary>
        ); //{error && error.message} is the same as {error ? error.message : null}
    }
}

export default withErrorHandler;