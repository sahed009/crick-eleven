import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import PlayerCard from './components/PlayerCard';
import Footer from './components/Footer';
import SelectedPlayers from './components/SelectedPlayers';
import playersData from './player.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState('available');

  const handleClaimCredit = () => {
    setCoins((prevCoins) => prevCoins + 1000000);
    toast.success('Credit claimed successfully!');
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error('You can only select up to 6 players.');
      return;
    }
    if (coins < player.price) {
      toast.error("You don't have enough coins.");
      return;
    }
    if (selectedPlayers.find((p) => p.id === player.id)) {
      toast.error('Player already selected.');
      return;
    }

    setCoins(coins - player.price);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.name} selected!`);
  };

  const handleRemovePlayer = (playerId) => {
    const player = selectedPlayers.find((p) => p.id === playerId);
    setCoins(coins + player.price);
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== playerId));
    toast.warning(`${player.name} removed from selection.`, {
      position: "top-right",
    });
  };

  return (
    <div className='font-sora'>
      <Navbar coins={coins} />
      <div className="min-h-screen container mx-auto">

        <Banner onClaimCredit={handleClaimCredit} />

        <div className="flex justify-end mb-4 sticky top-[100px]  z-40 p-4">
          <button
            className={`px-4 py-3 rounded-l-lg focus:outline-none ${view === 'available'
              ? 'bg-yellow-500 text-black'
              : 'bg-white text-gray-500 border border-gray-300'
              }`}
            onClick={() => setView('available')}
          >
            Available
          </button>

          <button
            className={`px-4 py-2 rounded-r-lg focus:outline-none ${view === 'selected'
              ? 'bg-yellow-500 text-black'
              : 'bg-white text-gray-500 border border-gray-300'
              }`}
            onClick={() => setView('selected')}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>

        <section className="container mx-auto p-8">
          {view === 'available' ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Available Players</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {playersData.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    onSelect={() => handleSelectPlayer(player)}
                    selected={selectedPlayers.some((p) => p.id === player.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              removePlayer={handleRemovePlayer}
              setView={setView}
            />
          )}
        </section>
        <div className="h-40"></div>

        
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
