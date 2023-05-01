import styles from '~/styles/aboutus.css';

export function meta(){
    return[{
        title: 'RevTech - Home',
        description: 'Our products'
        }
    ]
}


export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
]
}
//This function inject the component into the DOM
function Index(){
    return(
        <main className=' content home'>
            <h2 className='heading'> &#123; Home Page &#125; 
            </h2>
            <img src="https://media.licdn.com/dms/image/D5612AQFh4G5ir0AOsg/article-cover_image-shrink_720_1280/0/1654023482723?e=2147483647&v=beta&t=kBvRymoayfZl2S_CfoPf8QI-ydJJdxVYe4sjySufVog" alt="Image description"></img>

        <p className=' content'>
          Market? Or perhaps a high-performance laptop for your daily tasks? Whatever it may be, we are here to help you find the perfect device for you. 
          In our online store, we offer a wide range of technological products, all carefully selected to ensure that they are of the highest quality and at the forefront of current technology. Additionally, we provide you with all the features and specifications so that you can make the best decision in your purchase. 
          Don't wait any longer and start discovering the technological products that will revolutionize your life!
          </p>
        </main>
                )}
    
export default Index
