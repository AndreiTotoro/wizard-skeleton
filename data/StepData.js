import { SiAseprite } from 'react-icons/si';
import { BsShop } from 'react-icons/bs';
import { FaFileContract } from 'react-icons/fa';
import ArtworkCreator from '../components/artwork-creator/app/ArtworkCreator';

export const StepData = [
	{
		id: 2,
		name: 'Artwork Creator',
		stepIcon: <SiAseprite size="5em" />,
		description:
			'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
		app: <ArtworkCreator />,
	},
	{
		id: 1,
		name: 'Marketplace Creator',
		stepIcon: <BsShop size="5em" />,
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. With the release of Letraset.',
		app: '',
	},
	{
		id: 3,
		name: 'Contract Maker',
		stepIcon: <FaFileContract size="5em" />,
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. With the release of Letraset.',
		app: '',
	},
];
