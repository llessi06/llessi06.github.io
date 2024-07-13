import PropTypes from 'prop-types';
import {
    IconBookmark,
    IconExternal,
    IconFolder,
    IconGitHub,
    IconInstagram,
    IconLinkedin,
    IconLoader,
    IconLogo,
    IconTwitter,
} from '/src/components/icons';

const Icon = ({name}) => {
    switch (name) {
        case 'Bookmark':
            return <IconBookmark/>;
        case 'External':
            return <IconExternal/>;
        case 'Folder':
            return <IconFolder/>;
        case 'GitHub':
            return <IconGitHub/>;
        case 'Instagram':
            return <IconInstagram/>;
        case 'Linkedin':
            return <IconLinkedin/>;
        case 'Loader':
            return <IconLoader/>;
        case 'Logo':
            return <IconLogo/>;
        case 'Twitter':
            return <IconTwitter/>;
        default:
            return <IconExternal/>;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
