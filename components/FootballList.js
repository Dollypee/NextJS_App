import FootballItem from './FootballItem';
import footballStyles from '../styles/Football.module.css';


const FootballList = ({formGuide}) => {
  return (
    <>
      <h1 className={footballStyles.heading}>{formGuide.competition.name} - {formGuide.description}</h1>
      <div className={footballStyles.grid}>
      
      {formGuide.teams.map((item, i) => (
        <FootballItem key={i} football={item} />
      ))}
    </div>
    </>
    
  )
}

export default FootballList