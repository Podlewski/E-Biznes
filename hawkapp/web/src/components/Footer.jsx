import React from "react";
import "./Style.css";

function Footer() {
  return (
    <div className="footer p-0">
      <footer class="py-3 bg-dark">
        <div class="row text-center flex mx-0">
          <div class="col px-1">
              <p class="mb-2 text-white small">Jastrzębik sp. z o.o.</p>
              <p class="mb-2 text-white-50 small">ul. Adresowa 20</p>
              <p class="mb-2 text-white-50 small">91-000 Łódź</p>
          </div>
          <div class="col px-1">
              <p class="mb-2 text-white small">Kontakt</p>
              <p class="mb-2 text-white-50 small">Mail: <a class="gh m-2" href="mailto:adres@e.mail">adres@e.mail</a></p>
              <p class="mb-2 text-white-50 small">Telefon: <a class="gh m-2" href="tel:+48-123-456-789">+48 123 456 789</a></p>
          </div>
          <div class="col px-1">
              <p class="mb-2 text-white-50 small">NIP: 0123456789</p>
              <p class="mb-2 text-white-50 small">REGON: 123456789</p>
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