import { SiAseprite } from 'react-icons/si';
import { BsShop } from 'react-icons/bs';
import { FaFileContract } from 'react-icons/fa';

export const StepData = [
	{
		id: 1,
		name: 'Artwork Creator',
		stepIcon: <SiAseprite size="5em" />,
		description:
			'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
	},
	{
		id: 2,
		name: 'Marketplace Creator',
		stepIcon: <BsShop size="5em" />,
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. With the release of Letraset.',
	},
	{
		id: 3,
		name: 'Contract Maker',
		stepIcon: <FaFileContract size="5em" />,
		description:
			'Lorem Ipsum is simply dummy text of the printing of the printing and typesetting industry. With the release of Letraset.',
	},
];
