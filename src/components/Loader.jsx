import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch} from "@fortawesome/free-solid-svg-icons";

export default function Loader ({ show }) {
    if(!show) return <></>;

    return (
        <div className="loader">
            <FontAwesomeIcon icon={faCircleNotch} size="4x" />
        </div>
    )
}