import { FiTrash2 } from 'react-icons/fi';

export default function SelectedPlayers({ selectedPlayers, removePlayer, setView }) {
  return (
    <div className="bg-white  xs:p-8 rounded-md  mt-4">
      <h2 className="text-2xl font-bold mb-4">
        Selected Players ({selectedPlayers.length}/6)
      </h2>

      <ul>
        {selectedPlayers.map((player, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row  justify-between p-4 mb-2 border rounded-lg"
          >
            <div className="flex items-center">
              <img
                src={player.image}
                alt={player.name}
                className="w-16 h-16 rounded-full mr-4 sm:w-20 sm:h-20 object-cover"
              />
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                <div>
                  <p className="font-medium">{player.name}</p>
                  <p className="text-gray-500 text-sm">{player.role}</p>
                </div>
                <p className="font-semibold text-sm sm:text-base">Price: ${player.price}</p>
              </div>
            </div>
            <button onClick={() => removePlayer(player.id)} className="text-red-500  sm:mt-0 flex justify-end items-center mt-3 p-2">
              <FiTrash2 size={20} />
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setView('available')}
        className="px-4 mt-4 py-3 bg-yellow-400 text-black font-medium rounded-lg focus:outline-none hover:bg-yellow-500"
      >
        Add More Players
      </button>
    </div>
  );
}
