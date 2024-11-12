import { AiOutlineUser } from 'react-icons/ai';
import { FiFlag } from 'react-icons/fi';

const PlayerCard = ({ player, onSelect }) => (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 ">

        <div className="mb-4">
            <img
                src={player.image}
                alt={player.name}
                className="h-60 w-full object-cover rounded-lg"
            />
        </div>


        <div className="flex items-center justify-start gap-2 my-2">
            <AiOutlineUser className="text-gray-600 mr-1" size={24} />
            <h3 className="text-xl font-semibold text-gray-900">{player.name}</h3>
        </div>


        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span className='flex items-center'>
                <FiFlag className="text-gray-500 mr-1" size={20} />
                <p className="mr-2">{player.country}</p>
            </span>
            <span className="py-2 px-3 bg-gray-100 rounded-md text-xs font-medium text-gray-700">
                {player.role}
            </span>
        </div>


        <div className="border-t border-gray-200 my-3"></div>


        <div className="flex justify-between items-center mb-4 px-2">
            <p className="font-bold ">Rating</p>
            <p className="text-sm text-gray-700">{player.rating || 'N/A'}</p>
        </div>


        <div className="flex justify-between items-center text-left mb-4 px-2">
            <div className="w-1/2">
                <p className="font-bold">{player.batting_style || 'N/A'}</p>
            </div>
            <div className="w-1/2 text-right">
                <p className="text-sm text-gray-700">{player.bowling_style || 'N/A'}</p>
            </div>
        </div>

        <div className='flex justify-between items-center gap-4 md:gap-0'>
            <div className="text-left flex items-center gap-1">
                <p className="font-bold">Price:</p>
                <p className="font-bold">${new Intl.NumberFormat().format(player.price)}</p>
            </div>


            <div className="text-center">
                <button
                    className="bg-gray-100  text-sm px-2 py-2 rounded-lg border border-gray-300 hover:bg-yellow-400 focus:outline-none"
                    onClick={onSelect}
                >
                    Choose Player
                </button>
            </div>
        </div>
    </div>
);

export default PlayerCard;
