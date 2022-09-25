
<template>
   <section class="step-indicator">
    <div class="step">     
      <div class="step-icon active"></div>         
      <div class="text ml-3">寄送地址</div>
    </div>
    <div class="indicator-line active"></div>
    <div class="step">
      <div class="step-icon"></div>
      <div class="text ml-3">運送方式 </div>
    </div>
    <div class="indicator-line"></div>
    <div class="step">
      <div class="step-icon"></div>
      <div class="text ml-3">付款方式 </div>
    </div>
  </section>
</template>

<style scoped>

/*標頭內容結束*/
.main-section {
  margin: 72px 15px 0px 15px;
}

.title {
  height: 38px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: var(--text-color);
}

.step-indicator {
  display: flex;
  align-items: center;
}
.step-indicator .step {
  display: flex;
  align-items: center;
}
.step-indicator .step:nth-child(1) .step-icon::after {
  content: "1";
}
.step-indicator .step:nth-child(2) .step-icon::after {
  content: "1.5";
}
.step-indicator .step:nth-child(3) .step-icon::after {
  content: "2";
}
.step-indicator .step:nth-child(4) .step-icon::after {
  content: "2.5";
}
.step-indicator .step:nth-child(5) .step-icon::after {
  content: "3";
}
.step-indicator .step-icon {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: var(--background-color);
  font-size: 10px;
  text-align: center;
  color: var(--text-color);
  position: relative;
  line-height: 32px;
  font-size: 16px;
  color: gray;
  border: 1px var(--circle-border-color) solid;
}
.step-indicator .indicator-line {
  margin: 0 1.5rem;
  height: 2px;
  background: var(--circle-border-color);
  flex: 1;
}
.step-indicator .step-icon.active {
  background: var(--circle-background-color);
  border: none;
  color: var(--circle-color);
}
.step-indicator .indicator-line.active {
  background: var(--circle-line-active);
  border: none;
  color: var(--text-color);
}
.step-indicator .text {
  display: none;
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

