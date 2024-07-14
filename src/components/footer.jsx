import styled from 'styled-components';
import {Icon} from '/src/components/icons';
import {socialMedia} from '/src/config';

const StyledFooter = styled.footer`
    ${({theme}) => theme.mixins.flexCenter};
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
`;

const StyledSocialLinks = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 0 auto 10px;
        color: var(--light-slate);
    }

    ul {
        ${({theme}) => theme.mixins.flexBetween};
        padding: 0;
        margin: 0;
        list-style: none;

        a {
            padding: 10px;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`;

const StyledCredit = styled.div`
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;

    a {
        padding: 10px;
    }
`;

const StyledPrivacyImprintWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const StyledPrivacyPolicy = styled.div`
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;

    a {
        padding: 10px;
    }
`;


const StyledImprint = styled.div`
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;

    a {
        padding: 10px;
    }
`;

const Footer = () => {

    return (<StyledFooter>
            <StyledSocialLinks>
                <ul>
                    {socialMedia && socialMedia.map(({name, url}, i) => (<li key={i}>
                            <a href={url} aria-label={name}>
                                <Icon name={name}/>
                            </a>
                        </li>))}
                </ul>
            </StyledSocialLinks>

            <StyledCredit tabindex="-1">
                <a href="https://github.com/llessi06">
                    <div>Designed &amp; Built by Lukas Leßlhumer</div>
                </a>
            </StyledCredit>

            <StyledPrivacyImprintWrapper>
                <StyledPrivacyPolicy>
                    <a href="/privacy-policy">Privacy Policy</a>
                </StyledPrivacyPolicy>
                <StyledImprint>
                    <a href="/imprint">Imprint</a>
                </StyledImprint>
            </StyledPrivacyImprintWrapper>

        </StyledFooter>);
};

export default Footer;
