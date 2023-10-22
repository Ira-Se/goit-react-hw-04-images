import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { fetchImages } from "./api"
import { Layout } from "./Layuot"
import toast, {Toaster} from 'react-hot-toast';
import { useEffect, useState } from "react"

export const App = () => {
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [isLoadBtn, setIsLoadBtn] = useState(false)
    
  const searchUpdate = currentQuery => {
    setQuery(currentQuery)
    setPage(1)
    setImages([])
    setIsLoadBtn(false)
  }

    
const loadBtnUpdate = ()=> {
  setPage(prevState => prevState + 1);
  }
  
  useEffect(() => {
    if (query === '') {
      return
    }
    async function getImages() {
      try {
        setLoading(true) 

        const visibleImages = await fetchImages(query, page)

        setImages(page === 1 ? visibleImages.hits : (prevState => [...prevState, ...visibleImages.hits]))
        setLoading(false)
        setError(false)
        setIsLoadBtn(page < Math.ceil(visibleImages.totalHits / 12))
      

        if (visibleImages.totalHits === 0) {
          toast.error("Unfortunately, your search returned no results")
        }
      } catch (error) {
        toast.error("Please reload the page");
        console.log(error)
      }    
    }
    getImages()
  }, [page, query])
     
    return <Layout>
      <Searchbar onSubmit={searchUpdate} />
      {loading && <Loader />}
      {error && <p> Please reload the page</p>}
      {images && <ImageGallery images={images} />}
      {isLoadBtn &&  <Button onClickButton ={loadBtnUpdate}/> } 
      <Toaster position="top-left"/>
    </Layout>
    
  }
