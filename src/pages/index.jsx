import styled from 'styled-components';
import {About, Contact, Hero, Layout} from '../components/index.jsx';
import Jobs from "../components/sections/jobs.jsx";

const StyledMainContainer = styled.main`
    counter-reset: section;
`;

const IndexPage = () => (
    <Layout location={window.location}>
        <StyledMainContainer className="fillHeight">
            <Hero/>
            <About/>
            <Jobs/>
            <Contact/>
        </StyledMainContainer>
    </Layout>
);

export default IndexPage;
