import { ArrowDownIcon } from '@heroicons/react/solid';

interface EnterProps {
    setEntered: () => void;
}

const Enter: React.FC<EnterProps> = ({ setEntered }) => {
    const label = "More";

    return (
        <button
            className="bg-white hover:bg-gray-300 text-black font-bold mt-2 py-3 px-4 rounded-lg flex items-center"
            onClick={setEntered}
        >
            {label}
            <ArrowDownIcon className="h-5 w-5 ml-2" />
        </button>
    );
};

export default Enter;