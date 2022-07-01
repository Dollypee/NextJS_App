import footballStyles from '../styles/Football.module.css';
import Link from 'next/link';

const FootballItem = ({football}) => {
  return (
    <Link href={`/football/[id]`} as={`/football/${football.id}`}>
      <a className={footballStyles.card}>
        <h3>{football.name} &rarr; </h3>
        <p>Points - {football.points}</p>
        <p>Played - { football.played}</p>
        <p>Wins - {football.won}</p>
        <p>Draws - {football.drawn}</p>
        <p>Lost - {football.lost}</p>
      </a>
    </Link>  
    )
}

export default FootballItem