export default function Home({params}: {params: {id: string}}) {
    return <h1>Making a Home: {params.id}</h1>
  }