import { useState } from 'react'

function App() {

  // todos os links <a> serão substituidos por tags <Link> do react-router-dom?? estudar a respeito
  // as imagens dos icones serão substituidas pelos icones da biblioteca feathericons
  return (
    <>
      {/* TELA DE LOGIN E CADASTRO */}

      <section className="login signOut">
        <h1>Audio</h1>
        <p>It's modular and designed to last</p>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {/* essa tag <a> pode ficar dentro do form? */}
          <a>Forgot Password</a>
          <button type="submit">Sign in</button>
          {/* depois do botão tem que ter a opção de entrar com o google */}
        </form>
        <p>Didn’t have any account? <a>Sign Up here</a></p>
      </section>

      {/* TELA INICIAL/HOME */}

      <header className="header">
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Explore Products</a></li>
            <li><a href="">Shopping Cart</a></li>
          </ul>
        </nav>
        <img src="../../public/logo-full" alt="" />
        <img src="../../public/profile-pic" alt="" />
      </header>
      <main>
        <section className="headline">
          <p>Hi, username-dinamico</p>
          <h2>What are you looking for today?</h2>
          {/* o input abaixo será um componente que renderiza um input de pesquisa */}
          <input type="text" placeholder="Search headphone" />
        </section>
        <section className="featured-products">
          {/* o filtro abaixo será um componente que seleciona o filtro de produtos */}
          {/* a estilização do filtro selecionado/não selecionado será condicional, isso se aplicará a todos os filtros */}
          <div>
            <button>Headphone</button>
            <button>Headset</button>
          </div>
            {/* aqui vai ter uma renderização condicional, dependendo de qual filtro o usuário escolher */}
          <div className="carrousel">
            {/* a div abaixo será um componente de card com botão para comprar, o botão leva para detalhes do produto (overview) */}
            <div className="carrousel-card">
              <h3>TMA-2 Modular Headphone</h3>
              <button>Shop now</button>
            </div>
            <img src="../../public/headset" alt="" />
          </div>
          <div>
            <p>Featured Products</p>
            <a href="">See all</a>
          </div>
          <div className="carrousel">
            {/* a div abaixo será um componente de card simples que mostra somente o nome e preço */}
            {/* esse mesmo card também será utilizado na tela "explore products", porém com algumas informações adicionais (avaliação, review e opções)  */}
            <div className="carrousel-card">
              <img src="../../public/headset" alt="" />
              <p>TMA-2 HD Wireless</p>
              <p>USD 350</p>
            </div>
          </div>
        </section>
      </main>

      {/* TELA SEARCH */}

      <header>
        {/* componente reutilizavel de header */}
        <img src="../../public/chevron-left" alt="" />
        <p>Search</p>
        <img src="../../public/shopping-cart" alt="" />
      </header>
      <main>
        <section>
          <input type="text" placeholder="Search Headphone" />
          {/* a div abaixo será um componente de card detalhado horizontal (imagem, nome, preço, avaliação, review e 3 pontinhos) */}
          <div>
            <div>
              <img src="../../public/headset" alt="" />
            </div>
            <div>
              <p>TMA-2 Comfort Wireless </p>
              <p>USD 270</p>
              <div>
                <p><img src="../../public/star" alt="" />rating-dinamico</p>
                <p>review dinamica</p>
                <img src="../../public/opcoes" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>Popular product</p>
          {/* aqui o card detalhado vertical será reutilizado para os 3 produtos mais populares */}
        </section>
      </main>

      {/* TELA EXPLORE PRODUCTS */}

      <header>
        {/* reutilizar o componente de header sem o titulo no centro */}
      </header>
      <main>
        <section>
          {/* o titulo provavelmente será um componente reutilizavel */}
          <h2>All products</h2>
          <button><img src="../../public/sliders" alt="" />Filter</button>
        </section>
        <section>
            {/* aqui será renderizado o card simples com as informações adicionais (avaliação, review e opções) */}
        </section>
      </main>

      {/* BOTTOM SHEET NAVIGATOR (FILTRO) */}

      <div>
        <h2>Filter</h2>
        <img src="../../public/x" alt="" />
      </div>
      {/* a div abaixo pode ser reutilizada para o filtro "sort by" porém com estilização diferente */}
      <div>
        <p>Category</p>
        <div>
          <button>Headphone</button>
          <button>Headset</button>
        </div>  
      </div>
      <button>Apply Filter</button>

      {/* TELA PRODUCT DETAIL */}

      <header>
        {/* header reutilizavel sem o titulo no centro */}
      </header>
      <main>
        <section>
            <div>
              <h2>TMA-2 HD WIRELESS</h2>
              <h3>USD 350</h3>
            </div>
            <div>
              {/* componente de texto/seletor com/sem sublinhado */}
              <button>Overview</button>
              <button>Features</button>
            </div>
          </section>
            {/* aqui vem a renderização condicional: overview ou features */}
          <button>Add To Cart</button>
      </main>

      {/* SEÇÃO PRODUCT DETAIL (OVERVIEW) */}

        <section>
          <div>
            {/* carrosel com as imagens do produto */}
          </div>
        </section>
        <section>
          <p>número-dinamico Reviews</p>
          {/* componente de comentario que irá se repetir 3x */}
          <div>
            <img src="../../public/profile-pic" alt="" />
            <div>
              <p>nome-dinamico</p>
              {/* componente de rating dinamico */}
              <p>comentario-dinamico</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <p>Another Product</p>
            <a href="">See All</a>
          </div>
          <div className="carrousel">
            {/* carrossel com 5 outros produtos */}
            <div className="carrousel-card">
                <img src="../../public/headset" alt="" />
                <p>TMA-2 HD Wireless</p>
                <p>USD 350</p>
            </div>
          </div>
        </section>

      {/* SEÇÃO TELA PRODUCT DETAIL (FEATURES) */}

      <section>
        <h4>Highly Detailed Audio</h4>
        <p>detalhes do produto</p>
      </section>

      {/* TELA CARRINHO */}

    <header>
      {/* header reutilizavel com o titulo no centro */}
    </header>
    <main>
      <section>
        {/* card reutilizavel porém com botão de remover e botões para aumentar ou diminuir a quantidade na parte inferior */}
        <div>
            <div>
              <img src="../../public/headset" alt="" />
            </div>
            <div>
              <p>TMA-2 Comfort Wireless </p>
              <p>USD 270</p>
              <div>
                <div>
                  <button>-</button>
                  <p>qtd</p>
                  <button>+</button>
                </div>
                <img src="../../public/thrash-2" alt="" />
              </div>
            </div>
          </div>
      </section>
      <div>
        <p>Total x items</p>
        <p>USD x</p>
      </div>
      <button>Proceed to checkout <img src="../../public/chevron-right"></img></button>
    </main>
    </>
  )
}

export default App
