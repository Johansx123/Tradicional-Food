import iconGmail from '../../public/images/Gmiail.svg';
import iconWhatsapp from '../../public/images/Whatsapp.svg'
import iconInstagram from '../../public/images/Instagram.svg'
import iconFacebook from '../../public/images/Facebook.svg'
import iconBranchBlack from '../../public/images/Branch-black.svg'

export function Footer() {
  return (
    <footer className="wrapper-footer">
      <h2>Cotactanos</h2>
      <section className="wrapper-social">
        <div className="item-social">
          <a
            href="https://api.whatsapp.com/send?phone=573196095864"
            rel="me nofollow noopener noreferrer"
            target="_blank"
          >
            <span className="icon-social">
              <img src={iconWhatsapp} alt="" />
            </span>
            <p>3196095864</p>
          </a>
        </div>
        <div className="item-social">
          <a href="mailto:tradicionalfoodarepasymas@gmail.com">
            <span className="icon-social">
              <img src={iconGmail} alt="" />
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
              <img src={iconInstagram} alt="" />
            </span>
            <p>tradicional_food_arepas</p>
          </a>
        </div>
        <div className="item-social">
          <a href="https://www.facebook.com/profile.php?id=100071820720640">
            <span className="icon-social">
              <img src={iconFacebook} alt="" />
            </span>
            <p>Tradicional Arepas Mas</p>
          </a>
        </div>
      </section>

      <span>
        <img src={iconBranchBlack} alt="" />
      </span>
      <span id="botoom" className="cp">
        Copyright 2022 | Tradicional Food
      </span>
    </footer>
  );
}
