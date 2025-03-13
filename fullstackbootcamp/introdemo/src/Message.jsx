const Mensaje = (props) => {
    return <p style={{ color : props.color}}>
        {props.msg}
        </p>
};

export default Mensaje;