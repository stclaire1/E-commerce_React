import React from 'react';
import { Link } from 'react-router-dom';
import './HaveAccount.css';

interface HaveAccountProps {
    question: string;
    link: string;
    linkPath: string;
}

function HaveAccount(props: HaveAccountProps) {
    return (
        <p className="haveAccount">{props.question} <Link to={props.linkPath} className="accountLink">{props.link}</Link></p>
    )
}

export default HaveAccount;