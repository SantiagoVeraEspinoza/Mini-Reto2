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
          Welcome to our tech blog, where you can find the latest and most exciting news about the world of technology. Our team of expert writers and tech enthusiasts are here to bring you insightful and engaging content on a variety of topics, from the latest gadgets and devices to the hottest trends and innovations in the industry.

Whether you're a tech novice or an experienced enthusiast, our blog has something for everyone. We aim to provide informative and entertaining content that will inspire and empower you to explore the vast and ever-evolving world of technology.

Join us on our journey as we discover new and exciting ways that technology is transforming the world around us. From cutting-edge AI and machine learning to the latest in gaming and virtual reality, we've got you covered.

So, sit back, grab a cup of coffee, and enjoy our latest blog entries. We can't wait to share our passion for technology with you!
          </p>
          
        </div>
      </div>
    </main>
  )
}

export default AboutUs;