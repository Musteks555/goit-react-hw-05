import { Link } from "react-router-dom";

const GoBackBtn = ({ to }) => {
    return <Link to={to}>Go Back</Link>;
};

export default GoBackBtn;
