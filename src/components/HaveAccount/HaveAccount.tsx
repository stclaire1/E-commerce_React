import React from 'react';
import { Link } from 'react-router-dom';
import './HaveAccount.css';

interface HaveAccountProps {
    question: string;
    link: string;
    linkPath: string;
}

function HaveAccount({ question, link, linkPath }: HaveAccountProps) {
    return (
        <p className="haveAccount">{question} <Link to={linkPath} className="accountLink">{link}</Link></p>
    )
}

export default HaveAccount;