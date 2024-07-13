import styled from 'styled-components';
import {About, Contact, Hero, Layout} from '../components/index.jsx';

const StyledMainContainer = styled.main`
    counter-reset: section;
`;

const IndexPage = () => (
    <Layout location={window.location}>
        <StyledMainContainer className="fillHeight">
            <Hero/>
            <About/>
            <Contact/>
        </StyledMainContainer>
    </Layout>
);

export default IndexPage;
