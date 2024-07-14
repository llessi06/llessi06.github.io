import Layout from "../components/layout.jsx";
import styled from "styled-components";

const StyledMainContainer = styled.main`
    counter-reset: section;
`;

const StyledImprintSection = styled.section`
    ${({theme}) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    height: 100vh;
    padding: 0;

    @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
        height: auto;
        padding-top: var(--nav-height);
    }

    h1 {
        margin: 0 0 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h3 {
        margin-top: 5px;
        color: var(--slate);
        line-height: 0.9;
    }

    p {
        margin: 20px 0 0;
        max-width: 540px;
    }

    .email-link {
        ${({theme}) => theme.mixins.bigButton};
        margin-top: 50px;
    }
`;

const Imprint = () => {
    return (<Layout location={window.location}>
        <StyledMainContainer>
            <StyledImprintSection>
                <h1>Imprint</h1>
                <p>Lukas Leßlhumer<br/> Schöffling 6<br/> 4730 Prambachkirchen</p>
                <a href="mailto:lukaslesslhumer6@gmail.com">lukaslesslhumer6@gmail.com</a>
                <p>Behörde gem. ECG: Bezirkshauptmannschaft Eferding</p>
            </StyledImprintSection>
        </StyledMainContainer>
    </Layout>)
}

export default Imprint;