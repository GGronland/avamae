import './Button.css';

function Button(props) {
    const classes = 'basic-button ' + props.className;

    return <button type="button" className={classes}>{props.children}</button>
}

export default Button;