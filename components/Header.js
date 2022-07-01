import headerStyles from '../styles/Header.module.css';


const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Football</span> News
      </h1>
      <p className={headerStyles.description}>Keep up to date with latest football news</p>
      {/* <style jsx>
        {
          `
          .title {
            color: red;
            }
          `
        }
      </style> */}
    </div>
  )
}

export default Header