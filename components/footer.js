class footerComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
        <section class="footer">
        <h4>Connect with me!</h4>
        <p>
        Just kidding, these links are fake! If you like what I do, then that's
        great! You can just tell me and I'll be happy. I'm kind of a learning genius.
        </p>
        <div class="icons">
        <a href="https://facebook.com/" target="_blank"
            ><i class="fa fa-facebook"></i
        ></a>
        <a
            href="https://twitter.com/ninomaeinanis/status/1539865249620398082"
            target="_blank"
            ><i class="fa fa-twitter"></i
        ></a>
        <a
            href="https://www.instagram.com/amelie.penelope.toto/"
            target="_blank"
            ><i class="fa fa-instagram"></i
        ></a>
        <a href="https://www.linkedin.com/" target="_blank"
            ><i class="fa fa-linkedin"></i
        ></a>
        </div>
    </section>`;
  }
}

customElements.define("footer-element", footerComponent);
