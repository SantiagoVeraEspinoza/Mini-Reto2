import styles from '~/styles/blog.css';

export function links(){
    return[
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }
  
  export function meta() {
    return [
      {
        title: 'MyShop - Blog',
        description: 'Blog page'
      }
    ];
  }



function Blog(){
    return(
        <div className="container">
<div class="radio-btns" role="radiogroup">
<h2 className="heading">
        &#123;Our Blog&#125;
      </h2> 
  <div class="radio-btns__btn" role="radio" aria-checked="false" tabindex="-1" aria-label="Select image one">
    <img src="https://singularityhub.com/wp-content/uploads/2018/11/young-gamer-playing-video-game_shutterstock_624801452.jpg" alt="Image description"></img>
  </div>

  <div class="radio-btns__btn" role="radio" aria-checked="false" tabindex="-1" aria-label="Select image two">
    <img src="https://www.theweek.in/content/dam/week/news/sci-tech/images/2020/10/31/gaming.jpg.transform/schema-16x9/image.jpg" alt="Image description"></img>
  </div>

  <div class="radio-btns__btn" role="radio" aria-checked="false" tabindex="-1" aria-label="Select image three">
    <img src="https://cdn.proactiveinvestors.com/eyJidWNrZXQiOiJwYS1jZG4iLCJrZXkiOiJ1cGxvYWRcL05ld3NcL0ltYWdlXC8yMDIyXzA4XC8yMDIyLTA4LTI2LTEwLTMzLTE1LTExMmUxMjM5YzI1N2Y1YzM5ZjY1Y2ZjODZhNDgyYjk5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MzAsImZpdCI6ImNvdmVyIn19fQ==" alt="Image description"></img>
  </div>
</div>
</div>
    )
}
export default Blog
