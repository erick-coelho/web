import { Link } from 'react-router-dom';

function ButtonLink( {divClass, linkTo, linkClass, text}) {
    return (
        <div className={divClass}>
            <Link to={linkTo} className={linkClass}> {text}</Link>
        </div>
    )
} export default ButtonLink;