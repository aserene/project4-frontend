const Header = () => {
  return <>
  <div className="header">
      <h1>The Mercantile</h1>
      <div className="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Search..." name="search"/>
        <button className="search-icon" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      </div>
      <a href="">Log In</a>
      <button className="cart-icon" type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
      
    </div>
  </>
}

export default Header