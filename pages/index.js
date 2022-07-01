import Head from 'next/head'
import FootballList from '../components/FootballList'

export default function Home({ football }) {
  console.log(football)
  const formGuide = football['form-guide']
  return (
    <div>
      <Head>
        <title>
          Next JS Web Application
        </title>
        <meta name="keywords" content="web development with nextjs, programming, learning nextjs" />
      </Head>
      <FootballList formGuide={formGuide} />
    </div>
  )
}

export const getStaticProps = async () => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com',
		'X-RapidAPI-Key': 'e61824c92dmsh74a11d12e65e67ap1245b1jsn70b30e90c382'
	}
};

const res = await fetch('https://football-web-pages1.p.rapidapi.com/form-guide.json?comp=1&team=1', options)
  
  const football = await res.json()

  return {
    props: {
      football
    }
  }
} 
