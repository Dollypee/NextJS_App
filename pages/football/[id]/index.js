import { useRouter } from "next/router"
import Link from "next/link";	


const football = ({ data })=> {
   console.log(data)
  // const router = useRouter();
  // const { id } = router.query;
  // const filterData = data['form-guide'].teams.filter(item => item.id === id);

  return (
    <div>This is footall 
      <br/>
    <Link href='/'>Go back</Link>
    </div>

       
  )
}

// export const getServerSideProps = async (ctx) => {
//   const res = await fetch(`https://api.football-data.org/v2/competitions/${ctx.params.id}/standings`);
  
//   const data = await res.json();
//   return {
//     props: {
//       data
//     }
//   }
// }

// export const getStaticProps = async (ctx) => {
//   const res = await fetch(`https://api.football-data.org/v2/competitions/${ctx.params.id}/standings`);
  
//   const data = await res.json();
//   return {
//     props: {
//       data
//     }
//   }
// }

export const getStaticPaths = async () => {
  // const router = useRouter();
  const { id } = useRouter().query;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    }
  };
  
  const res = await fetch('https://football-web-pages1.p.rapidapi.com/form-guide.json?comp=1&team=1', options)
    
  const football = await res.json()

  const filterData = football['form-guide'].teams.filter(item => item.id === id);

  if (filterData.length > 0) {
    return {
      props: {
        data: filterData[0]
      }
    }
  }
  
  // const ids = football['form-guide'].teams.map(item => item.id)

  // const paths = ids.map (id => ({params: {id: id.toString()}}))
  
  // return {
  //   paths,
  //   fallback: false,
  //   }

  // return {
  //   props: {
  //     data: football
  //   }
  // }
  } 
  

  export default football