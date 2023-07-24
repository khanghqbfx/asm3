import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";




const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      setError(null);
  
      fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          console.log(data)
          setLoading(false);
     
          
            
  
          if (product && product.category) {
            const filteredRelatedProducts = data.filter(item => item.category === product.category);
            setRelatedProducts(filteredRelatedProducts);
           
          }
          setLoading(false)
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          console.log(error)
        });
    }, [id, product]);
  
    if (loading ) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error occurred: {error.message}</div>;
    }
    if(!product) {
        return <div>No product found</div>
    }
  
        return (
        <div>
           {product && (
            <div> 
                <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
    
            <h3>Related Products</h3>
            {relatedProducts.map(relatedProduct => (
            <div key={relatedProduct.id}>
                <img src={relatedProduct.img1} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
                <p>Price: {relatedProduct.price}</p>
            </div>
            ))}</div>
           )}
        </div>
        );
    };
    
    export default Detail;