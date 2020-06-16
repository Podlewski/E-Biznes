import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-3 bg-dark ">
        <div class="row">
          <div class="col-6 ml-auto mb-5 mb-lg-0 text-center">
              <a class="text-white small">Jastrzębik sp. z o.o.</a><br/>
              <a class="text-white-50 small">Adres firmy linia 1</a><br/>
              <a class="text-white-50 small">Adres firmy linia 2</a><br/>
          </div>
          <div class="col-6 ml-auto mb-5 mb-lg-0 text-center">
              <a class="text-white small">Kontakt</a><br/>
              <a class="text-white-50 small" href="mailto:adres@e.mail">adres@e.mail</a><br/>
              <a class="text-white-50 small" href="tel:+48-123-456-789">+48 123 456 789</a><br/>
          </div>
        </div>
        <div class="container pt-3">
          <p class="m-0 text-center text-white small">
            Copyright &copy; Zbigniew Nowacki, Karol Podlewski, Patrycja Szczakowska 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;