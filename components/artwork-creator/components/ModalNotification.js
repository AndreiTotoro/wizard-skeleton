import Modal from 'react-modal';

const ModalNotification = ({
	openNotification,
	callBack,
	title,
	text,
	setCurrentLayer,
}) => {
	return (
		<Modal
			style={{ overlay: { backgroundColor: 'rgba(71, 71, 71, 0.6)' } }}
			ariaHideApp={false}
			isOpen={openNotification}
			className=" text-white drop-shadow-lg  top-1/3 left-modal fixed w-1/4 h-1/4"
		>
			<div className="flex flex-col bg-void rounded-lg p-16 items-center content-center pt-14 justify-center">
				<div className="header">{title != '' ? <h3>{title}</h3> : null}</div>
				<div className="content">
					<p>{text}</p>
				</div>
				<div className="flex justify-center gap-10 pt-6">
					<div className="bg-candy text-void px-5 p-3 rounded-md">
						<button
							onClick={() => {
								callBack(false);
							}}
							className="btn btn-cancel w-100"
						>
							No
						</button>
					</div>
					<div className="bg-candy text-void px-5 p-3 rounded-md">
						<button
							onClick={() => {
								setCurrentLayer('');
								callBack(true);
							}}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ModalNotification;
