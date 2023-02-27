const Header = () => {
  return <>
    <h1>The Mercantile</h1>
    <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search..." name="search"/>
      <button type="submit"></button>
    </form>
    </div>
  </>
}

export default Header