import image from '../../public/img/aboutus.jpg';
import styles from '~/styles/aboutus.css';

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

export function meta() {
  return [
    {
      title: 'MyShop - About US',
      description: 'About us page'
    }
  ];
}
function AboutUs() {
  return (
    <main className="container aboutus">
      <h2 className="heading">
        &#123;About Us&#125;
      </h2>
      <div className="content">
        <img src={image} alt="about us image" />
        <div>
          <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
          cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería 
          de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
          </p>
          <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
          cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería 
          de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
          </p>
        </div>
      </div>
    </main>
  )
}

export default AboutUs;