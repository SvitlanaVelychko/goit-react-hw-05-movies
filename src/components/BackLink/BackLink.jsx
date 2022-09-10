import { HiArrowNarrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            <HiArrowNarrowLeft size="16px"/>
            {children}
        </StyledLink>
    );
};

export default BackLink;