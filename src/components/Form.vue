
<template>
  <div class="form-panel">
    <form id="checkout-form">
       <!--  part 1    -->
      <div class="shipping-address part">
        <div class="title mb-8">寄送地址</div>
        <div class="input-name mb-8">
          <div class="name-title">
            <label for="name-title">稱謂</label>
            <div class="select-wrapper">
              <select id="name-title" required>
                <option>先生</option>
                <option>小姐</option>
              </select>
            </div>
          </div>
          <div class="name">
            <label for="name">姓名</label>
            <input type="text" id="name" placeholder="請輸入姓名">
          </div>
        </div>
        <div class="input-phone mb-8">
          <div class="phone mb-5">
            <label for="phone">電話</label>
            <input type="phone" id="phone" placeholder="請輸入行動電話">
          </div>
          <div class="email">
            <label for="name">Email</label>
            <input type="email" id="email" placeholder="請輸入電子郵件">
          </div>
        </div>
        <div class="input-address">
          <div class="state mb-5">
            <label for="state">縣市</label>
            <div class="select-wrapper">
              <select id="state" required>
                <option disabled selected value="">請選擇縣市</option>
                <option>台北市</option>
                <option>新北市</option>
              </select>
            </div>
          </div>
          <div class="address">
            <label for="address">地址</label>
            <input type="address" id="address" placeholder="請輸入地址">
          </div>
        </div>
      </div>
       <!--  part 2    -->
      <div class="shipping-method part d-none">
        <div class="form-title title-header title">運送方式</div>
        <div class="method" data-id="0">
          <input type="radio" id="standard-shipping" name="shipping-method">
          <div class="method-input-wrapper">
            <div class="shipping-detail">
              <label for="standard-shipping" >標準運送</label>
              <div class="price">免費</div>
            </div>
            <span>約3~7個工作天</span>
          </div>
        </div>
        <div class="method" data-id="1">
          <input type="radio" id="standard-shipping" name="shipping-method">
          <div class="method-input-wrapper">
            <div class="shipping-detail">
              <label for="standard-shipping" class="font-heavy">DHL貨運</label>
              <div class="price">$500</div>
            </div>
            <span>48小時內送達</span>
          </div>
        </div>
      </div>
        <!--  part 3    -->
      <div class="payment-info part d-none">
        <div class="form-title title-header title">付款資訊</div>
        <div class="card-info-wrapper">
          <div class="card-name">
            <label for="card-name">持卡人姓名</label>
            <input type="text" id="card-name" placeholder="John Doe">
          </div>
          <div class="card-number">
            <label for="card-number">卡號</label>
            <input type="text" id="card-number" placeholder="1111 2222 3333 4444 ">
          </div>
        </div>
        <div class="card-validation">
          <div class="card-date">
            <label for="card-date">有效期限</label>
            <input type="text" id="card-date" placeholder="MM/YY">
          </div>
          <div class="ccv">
            <label for="ccv">cvc/ccv</label>
            <input type="text" id="ccv" placeholder="123">
          </div>
        </div>
      </div>
</form>
  </div>

</template>

<script>

</script>

<style scoped>

.title {
  height: 38px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: var(--text-color);
}

.form-panel {
  width: 100%;
}
.form-panel #checkout-form {
  width: 100%;
}

input {
  color: var(--text-color);
  width: 100%;
  margin-top: 8px;
}

select {
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  color: gray;
}
select option {
  background-color: var(--background-color);
  color: var(--text-color);
}
select:valid {
  color: var(--text-color);
}

.select-wrapper {
  margin-top: 8px;
  width: 100%;
  position: relative;
}
.select-wrapper::after {
  content: "";
  border-style: solid;
  border-width: 6px 5px 0 5px;
  border-color: var(--text-color) transparent transparent transparent;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  z-index: -1;
}

input[type=radio] {
  -webkit-appearance: none;
  border-radius: 50%;
}
input[type=radio]:checked {
  box-shadow: inset 0 0 0 6px var(--text-color);
}

.input-name {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
}

.name-title {
  grid-column: 1/3;
}

.name {
  grid-column: 3/7;
}

.payment-info,
.shipping-method,
.shipping-address {
  margin-top: 32px;
}

.shipping-method .method {
  display: flex;
  height: 60px;
  margin-top: 24px;
  border: 1px solid var(--text-color);
  border-radius: 4px;
  padding: 0 20px;
  align-items: center;
}
.shipping-method .method.active {
  border: 1px solid purple;
}
.shipping-method .method .method-input-wrapper {
  margin-left: 20px;
  flex: 1;
}
.shipping-method .method input[type=radio] {
  margin: 0px;
  height: 20px;
  width: 20px;
}

.shipping-detail {
  display: flex;
  justify-content: space-between;
}
.shipping-detail label {
  font-size: 14px;
}

.font-heavy {
  font-weight: bold;
}

.main_step_btn {
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.main_step_btn .step_btn {
  margin-top: 1.5rem;
  width: 100%;
  height: 46px;
  border-radius: 8px;
}
.main_step_btn .step_btn img {
  height: 0.7em;
}
.main_step_btn .step_btn.next {
  background: var(--pink);
  color: white;
}
.main_step_btn .step_btn.prev {
  text-align: start;
  color: var(--text-color);
}

.cart-wrapper {
  margin-top: 32px;
  border: 1px solid var(--border-color);
  padding: 18px 16px;
  border-radius: 8px;
}

.item-panel {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 16px;
}

.item {
  display: flex;
  justify-content: space-between;
}
.item img {
  background-image: url("https://specials-images.forbesimg.com/imageserve/62388d0010e8ea0e5a92d1c7/GOOD-AMERICAN-GOOD-STRAIGHT-SPLIT-POCKETS---BLUE449/0x800.jpg?cropX1=0&cropX2=768&cropY1=0&cropY2=969");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
.item .item-title {
  font-size: 16px;
  text-align: end;
}
.item .item-number {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
}
.item .item-number .fas {
  width: 26px;
  height: 27px;
  border-radius: 50%;
  background-color: var(--footer-color);
  text-align: center;
  line-height: 27px;
  color: var(--text-color);
}
.item .item-price {
  text-align: end;
}

.shipping {
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;
}

.total {
  padding-top: 16px;
}

.btn-section {
  border-top: 1px solid orange;
  margin-top: 32px;
  padding: 24px 0;
}
.btn-section .btn-next {
  width: 100%;
  background-color: orange;
  color: var(--text-color);
}
.btn-section .btn-next.active {
  width: 40%;
}
.btn-section .btn-next::after {
  content: "→";
  margin-left: 1rem;
}
.btn-section .btn-pre {
  width: 106px;
  position: relative;
  display: none;
}
.btn-section .btn-pre.active {
  display: initial;
}
.btn-section .btn-pre::before {
  position: absolute;
  left: 0;
  content: "←";
}

.btn {
  height: 46px;
  font-size: 14px;
  border-radius: 8px;
}


@media screen and (min-width: 1024px) {
   .main-section {
    padding: 0 7%;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    grid-template-rows: auto 500px auto;
    grid-template-areas: "left . right" "left . right" "step . right";
  }
  .main-section .left-section {
    grid-area: left;
  }
  .main-section .right-section {
    grid-area: right;
  }
  .main-section .main_step_btn {
    grid-area: step;
  }
  .main-section .step-indicator .text {
    display: block;
  }

  .input-phone {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
  }
  .input-phone .phone {
    grid-column: 1/4;
  }
  .input-phone .email {
    grid-column: 4/7;
  }

  .input-address {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
  }
  .input-address .state {
    grid-column: 1/3;
  }
  .input-address .address {
    grid-column: 3/7;
  }

  .cart-title {
    display: initial;
    font-size: 1.5rem;
  }

  .item-panel {
    margin-top: 34px;
  }

  .item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 21px;
  }
  .item .item-detail {
    display: grid;
    grid-template-columns: auto auto;
  }
  .item .item-detail .item-title {
    text-align: start;
  }
  .item .item-detail .item-number {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 30px;
  }
  .item .item-detail .item-price, .item .item-detail .item-title {
    font-size: 16px;
  }

  .shipping,
.total {
    font-size: 14px;
  }

  .shipping {
    padding: 16px 0 32px 0;
  }

  .total {
    padding-bottom: 16px;
  }

  .main_step_btn .step_btn {
    width: 180px;
  }

 
}
</style>