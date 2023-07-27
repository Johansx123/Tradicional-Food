export function Footer() {
  return (
    <footer className="wrapper-footer">
      <h2>Contáctenos</h2>
      <section className="wrapper-social">
        <div className="item-social">
          <a
            href="https://api.whatsapp.com/send?phone=573196095864"
            rel="me nofollow noopener noreferrer"
            target="_blank"
          >
            <span className="icon-social">
              <img src="../public/Whatsapp.svg" alt="" />
            </span>
            <p>3196095864</p>
          </a>
        </div>
        <div className="item-social">
          <a href="mailto:tradicionalfoodarepasymas@gmail.com">
            <span className="icon-social">
              <img src="../public/Gmiail.svg" alt="" />
            </span>
            <p>tradicionalfoodarepasymas@gmail.com</p>
          </a>
        </div>
        <div className="item-social">
          <a
            target="_blank"
            href="https://www.instagram.com/tradicional_food_arepas"
            rel="noreferrer"
          >
            <span className="icon-social">
              <img src="../public/Instagram.svg" alt="" />
            </span>
            <p>tradicional_food_arepas</p>
          </a>
        </div>
        <div className="item-social">
          <a href="https://www.facebook.com/profile.php?id=100071820720640">
            <span className="icon-social">
              <img src="../public/Facebook.svg" alt="" />
            </span>
            <p>Tradicional Arepas Mas</p>
          </a>
        </div>
      </section>

      <span>
        <img src="../public/Branch-black.svg" alt="" />
      </span>
      <span id="botoom" className="cp">
        Copyright 2022 | Tradicional Food
      </span>
    </footer>
  );
}
