
import './App.css'
import Search from './components/search/Search';
import Skeleton from './components/skeleton/Skeleton';
import { useFetch } from './hooks/useFetch';
import { ProductResponce } from './types';

function App() {
   const {data,loading,error} = useFetch<ProductResponce>(`/products`)


  return (
    <div>
      {loading?<Skeleton count={6}/>:<Search/>}

    </div>
  )
}

export default App
