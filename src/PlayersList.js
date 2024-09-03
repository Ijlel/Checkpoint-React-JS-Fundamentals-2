import Player from './Player'
import joueurs from './players'

const PlayersList = () => {
  return (
    <div className='contPlayers'>
         { joueurs.map((joueur) => <Player joueur={joueur}/>) }
    </div>
  )
}

export default PlayersList