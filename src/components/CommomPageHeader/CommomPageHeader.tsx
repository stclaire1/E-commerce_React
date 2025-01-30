import FeatherIcon from 'feather-icons-react';
import './CommomPageHeader.css';
import { useCart } from '../../services/context/ShoppingCart/CartProvider';
import { useNavigate } from 'react-router-dom';

interface CommomPageHeaderProps {
    pageTitle?: string;
    icon: string;
    onClick: () => void;
}

function CommomPageHeader({ pageTitle, icon, onClick }: CommomPageHeaderProps) {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();
    
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // go back to the last page
    };

    return (
        <div className="commomPageHeaderContainer">
            <button onClick={handleGoBack}>
                <FeatherIcon icon="chevron-left" />
            </button>
            {pageTitle && <p>{pageTitle}</p>}
            <div onClick={onClick}>
                <FeatherIcon icon={icon} />
                {totalItems > 0 && <span className="cartBadge">{totalItems}</span>}
            </div>
        </div>
    )
}

export default CommomPageHeader;