import FeatherIcon from 'feather-icons-react';
import './CommomPageHeader.css';
import { useCart } from '../../services/context/ShoppingCart/CartProvider';

interface CommomPageHeaderProps {
    pageTitle?: string;
    icon: string;
    onClick: () => void;
}

function CommomPageHeader({ pageTitle, icon, onClick }: CommomPageHeaderProps) {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <div className="commomPageHeaderContainer">
            <FeatherIcon icon="chevron-left" />
            {pageTitle && <p>{pageTitle}</p>}
            <div onClick={onClick}>
                <FeatherIcon icon={icon} />
                {totalItems > 0 && <span className="cartBadge">{totalItems}</span>}
            </div>
        </div>
    )
}

export default CommomPageHeader;