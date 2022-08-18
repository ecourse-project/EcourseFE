import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { ReactNode, useState } from 'react';
import { formatCurrency } from 'src/utils/currency';
import AppButton from '../button';
import CourseService from 'src/services/course';
import { Modal } from 'antd';
interface ChildProps {
	data: number;
	pricingOnly: string;
	children: ReactNode;
	visible: (value: boolean) => void;
}
const PricingCard: React.FC<ChildProps> = ({
	data,
	pricingOnly,
	children,
	visible,
}) => {
	const [btnText, setBtnText] = useState<string>('CHECKOUT');
	const checkout = async () => {
		CourseService.createOrder();
	};
	const handleOnClick = () => {
		// visible(true);
		try {
			CourseService.createOrder();
			setBtnText('CREATED');
		} catch (error) {}
	};

	return (
		<div className="card border-0 shadow-sm">
			<div className="card-body">
				<div className="vstack gap-2">
					{/* <div className="d-flex justify-content-between">
						<span>Subtotal:</span>
						<span>30,000Ks</span>
					</div>
					<div className="d-flex justify-content-between">
						<span>Discount:</span>
						<span className="text-danger">-</span>
					</div>
					<div className="d-flex justify-content-between">
						<span>Delivery charge:</span>
						<span className="text-success">+2,000Ks</span>
					</div> */}

					<hr className="text-muted" />

					<div className="d-flex justify-content-between">
						<span className="h5">Total:</span>
						<span className="fw-bold h5 mb-0">{formatCurrency(data)}</span>
					</div>

					{!pricingOnly && (
						<div className="d-grid gap-2 mt-2">
							<AppButton
								btnTextColor={'black'}
								btnStyle={'outline'}
								btnSize={'small'}
								btnWidth={'full-w'}
								onClick={handleOnClick}
								disabled={btnText === 'CREATED'}
							>
								{btnText}
							</AppButton>
							<Link to="/">
								<a className="btn btn-outline-primary">Continue Shopping</a>
							</Link>
						</div>
					)}
					{children}
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
