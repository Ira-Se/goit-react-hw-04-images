import {Component} from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { fetchImages } from "./api"
import { Layout } from "./Layuot"
import toast, {Toaster} from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
    error: false,
    page: 1,
    isLoadBtn: false


  }
  
  searchUpdate = currentQuery => {
    this.setState({
      query: currentQuery,
      page: 1,
      images: [],
      isLoadBtn: false
    })
  }

    
loadBtnUpdate = ()=> {
  this.setState(prevState => ({ page: prevState.page + 1 }));
  console.log(this.state.page)
  }
  
  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (
        prevState.query !== query ||
        prevState.page !== page
      ) {
        this.setState({ loading: true });
        const visibleImages = await fetchImages(query, page);
        this.setState({
          images: page === 1 ? visibleImages.hits : [...prevState.images, ...visibleImages.hits],
          loading: false,
          error: false,
          isLoadBtn: this.state.page < Math.ceil(visibleImages.totalHits / 12)
        })
        if (visibleImages.totalHits === 0) {
          toast.error("Unfortunately, your search returned no results")
        }
      }
    } catch (error) {
    toast.error("Please reload the page"); 
  }
}

  render() {
    const { images, loading, isLoadBtn, error } = this.state
    console.log(typeof(images))
    return <Layout>
       
      <Searchbar onSubmit={this.searchUpdate} />
      {loading && <Loader />}
      {error && <p> Please reload the page</p>}
      {images && <ImageGallery images={images} />}
      {isLoadBtn &&  <Button onClickButton ={this.loadBtnUpdate}/> } 
      <Toaster position="top-left"/>
    </Layout>
    
  }
}