<template>
    <footer>
    <div class="footer-container">
      <div class="footer-brand"></div>
      <div class="footer-description">
        <div class="service">
          <h2>客戶服務</h2>
          <div>運送說明</div>
          <div>退換貨相關</div>
          <div>付款資訊</div>
          <div>FAQ</div>
        </div>
        <div class="about">
          <h2>關於我們</h2>
          <div>品牌故事</div>
          <div>媒體連繫</div>
          <div>Press kit</div>
        </div>
        <div class="info">
          <h2>資訊</h2>
          <div>隱私權政策</div>
          <div>Cookie</div>
          <div>GDPR</div>
        </div>
        <div class="track">
          <h2>追蹤 ALPHA Shop</h2>
          <div>+886 02123-45678</div>
          <div>
            <span><i class="fa-brands fa-facebook-f fa-xl"></i></span>
            <span><i class="fa-brands fa-instagram fa-xl"></i></span>
            <span><i class="fa-brands fa-whatsapp fa-xl"></i></span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>


footer {
  display: none;
}

@media screen and (min-width: 1024px) {
  footer {
    display: flex;
    height: 24vh;
    background-color: var(--footer-color);
  }
  footer .footer-container {
    width: 80%;
    height: 60%;
    margin: auto;
    display: flex;
  }
  footer .footer-container .footer-brand {
    background: var(--logo-url);
    background-size: 100% 100%;
    margin: auto 0;
    height: 30px;
    width: 175px;
  }
  footer .footer-container .footer-description {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  footer .footer-container .footer-description div {
    color: var(--btn-color);
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 2px;
  }
  footer .footer-container .footer-description h2 {
    color: var(--text-color);
    margin-bottom: 10px;
  }
  footer .footer-container .footer-description span {
    letter-spacing: 5px;
    line-height: 40px;
  }
}
</style>
