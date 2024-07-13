import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import styled from 'styled-components';
import {navDelay} from '../utils/index.jsx';
import {Layout} from '../components/index.jsx';
import {usePrefersReducedMotion} from '../hooks';
import {Link} from "@reach/router";

const StyledMainContainer = styled.main`
    ${({theme}) => theme.mixins.flexCenter};
    flex-direction: column;
`;
const StyledTitle = styled.h1`
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
`;
const StyledSubtitle = styled.h2`
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
    ${({theme}) => theme.mixins.bigButton};
    margin-top: 40px;
`;

const NotFoundPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const content = (
        <StyledMainContainer className="fillHeight">
            <StyledTitle>404</StyledTitle>
            <StyledSubtitle>Page Not Found</StyledSubtitle>
            <StyledHomeButton to="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
    );

    return (
        <Layout location={window.location}>
            <Helmet title="Page Not Found"/>

            {prefersReducedMotion ? (
                <>{content}</>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition timeout={500} classNames="fadeup">
                            {content}
                        </CSSTransition>
                    )}
                </TransitionGroup>
            )}
        </Layout>
    );
};

export default NotFoundPage;
