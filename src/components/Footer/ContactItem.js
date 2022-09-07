import React from 'react';
import styled from 'styled-components';
import GithubIcon from "../../images/GithubIcon";
import EmailIcon from "../../images/EmailIcon";
import LinkedinIcon from "../../images/LinkedinIcon";
import PhoneIcon from "../../images/PhoneIcon";
import * as colors from '../colors';

const Item = styled.li`
margin-left: 1rem;
margin-bottom: 0.5rem;
`

const LinkItem = styled.a`
color: white;
opacity: 0.8;
text-decoration: none;
display: flex;
align-items: center;
`

const ContactSpan = styled.span`
display: flex;
align-items: center;
opacity: 0.8;
`

const iconStyle = {
    width: '25px',
    height: '25px',
    fill: colors.accentColor1
}

const Icon = ({ type }) => {
    switch (type) {
        case 'Email':
            return <EmailIcon style={iconStyle} />
        case 'Phone':
            return <PhoneIcon style={iconStyle} />
        case 'GitHub':
            return <GithubIcon style={iconStyle} />
        case 'LinkedIn':
            return <LinkedinIcon style={iconStyle} />
    }

}

const ContactItem = ({ element }) => {
    return (
        <Item key={element.id}>

            {element.link ? <LinkItem href={element.link}>
                <div style={{ marginRight: '0.5rem' }}>
                    <Icon type={element.type} />
                </div>
                {element.contact}
            </LinkItem> :
                <ContactSpan>
                    <div style={{ marginRight: '0.5rem' }}>
                        <Icon type={element.type} />
                    </div>
                    {element.contact}
                </ContactSpan>
            }
        </Item>
    )
}

export default ContactItem;