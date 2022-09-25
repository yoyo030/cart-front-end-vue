
<template>
  <div class="form-panel">
    <form id="checkout-form">
       <!--  part 1    -->
      <div class="shipping-address part" :class="{ 'd-none': 1!=initialFormData.step }">
        <div class="title mb-8">寄送地址</div>
        <div class="input-name mb-8">
          <div class="name-title">
            <label for="name-title">稱謂</label>
            <div class="select-wrapper">
              <select id="name-title" v-model="formData.salutation" required>
                <option value="" selected disabled>--請選擇--</option>
              
         <option>先生</option>
                <option>小姐</option>
              </select>
            </div>
          </div>
          <div class="name">
            <label for="name">姓名</label>
            <input type="text" id="name" placeholder="請輸入姓名" v-model="formData.username">
          </div>
        </div>
        <div class="input-phone mb-8">
          <div class="phone mb-5">
            <label for="phone">電話</label>
            <input type="phone" id="phone" placeholder="請輸入行動電話" v-model="formData.phone">
          </div>
          <div class="email">
            <label for="name">Email</label>
            <input type="email" id="email" placeholder="請輸入電子郵件" v-model="formData.email">
          </div>
        </div>
        <div class="input-address">
          <div class="state mb-5">
            <label for="state">縣市</label>
            <div class="select-wrapper">
              <select id="state" required  v-model="formData.city">
                <option disabled selected value="" >請選擇縣市</option>
                <option>台北市</option>
                <option>新北市</option>
              </select>
            </div>
          </div>
          <div class="address">
            <label for="address">地址</label>
            <input type="address" id="address" placeholder="請輸入地址" v-model="formData.addr">
          </div>
        </div>
      </div>
       <!--  part 2    -->
      <div class="shipping-method part" :class="{ 'd-none': 2!=initialFormData.step }">
        <div class="form-title title-header title">運送方式</div>
        <div class="method" data-id="0">
          <input type="radio" id="standard-shipping" name="shipping-method" @click="radioChoose(0)" :checked="Number(formData.shippingFee) == 0">
          <div class="method-input-wrapper">
            <div class="shipping-detail">
              <label for="standard-shipping" >標準運送</label>
              <div class="price">免費</div>
            </div>
            <span>約3~7個工作天</span>
          </div>
        </div>
        <div class="method" data-id="1">
          <input type="radio" id="standard-shipping" name="shipping-method" @click="radioChoose(500)" :checked="Number(formData.shippingFee) == 500">
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
      <div class="payment-info part"  :class="{ 'd-none': 3!=initialFormData.step }">
        <div class="form-title title-header title">付款資訊</div>
        <div class="card-info-wrapper">
          <div class="card-name">
            <label for="card-name">持卡人姓名</label>
            <input type="text" id="card-name" placeholder="John Doe" v-model="formData.ccname">
          </div>
          <div class="card-number">
            <label for="card-number">卡號</label>
            <input type="text" id="card-number" placeholder="1111 2222 3333 4444 "  v-model="formData.cardnumber">
          </div>
        </div>
        <div class="card-validation">
          <div class="card-date">
            <label for="card-date">有效期限</label>
            <input type="text" id="card-date" placeholder="MM/YY"  v-model="formData.expdate">
          </div>
          <div class="ccv">
            <label for="ccv">cvc/ccv</label>
            <input type="text" id="ccv" placeholder="123" v-model="formData.cvv">
          </div>
        </div>
      </div>
</form>
  </div>

</template>

<script>



export default {
    props: {
    initialFormData: {
      type: Object   
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  created() {
    this.fetchFormData()    

  },
  methods: {
    fetchFormData() {
      this.formData = this.initialFormData;
    },
    radioChoose(fee){
    this.formData.shippingFee = fee
    //console.log(this.formData.shippingFee)
    }    
  },
  watch: {
    formData: {
      handler: function () {
       localStorage.setItem('CartInfo', JSON.stringify(this.formData));
      },
      deep: true,
    },
  },
}
</script>

<style scoped>
@charset "UTF-8";
/* reset css */
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}

ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

button[disabled] {
  pointer-events: none;
}

input {
  padding: 0;
}

input:required {
  box-shadow: none;
}

input:invalid {
  box-shadow: none;
}

::-webkit-scrollbar {
  /* make scrollbar transparent */
  width: 0px;
  background: transparent;
}

.font-16 {
  font-size: 2rem;
}

a,
a:hover,
a:focus {
  color: var(--text-color);
}

/* 使用@each 產出css size設定 */
.w-25 {
  width: 25%;
}

.w-50 {
  width: 50%;
}

.w-75 {
  width: 75%;
}

.w-100 {
  width: 100%;
}

.h-25 {
  height: 25%;
}

.h-50 {
  height: 50%;
}

.h-75 {
  height: 75%;
}

.h-100 {
  height: 100%;
}

/* 使用@each 產出css spacer設定 */
.m-0 {
  margin: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.m-1 {
  margin: 0.25rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.m-2 {
  margin: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.m-3 {
  margin: 0.75rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.m-4 {
  margin: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.m-5 {
  margin: 1.25rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mr-5 {
  margin-right: 1.25rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.m-6 {
  margin: 1.5rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.m-7 {
  margin: 1.75rem;
}

.mt-7 {
  margin-top: 1.75rem;
}

.mr-7 {
  margin-right: 1.75rem;
}

.mb-7 {
  margin-bottom: 1.75rem;
}

.ml-7 {
  margin-left: 1.75rem;
}

.mx-7 {
  margin-left: 1.75rem;
  margin-right: 1.75rem;
}

.my-7 {
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}

.m-8 {
  margin: 2rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mr-8 {
  margin-right: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.ml-8 {
  margin-left: 2rem;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.p-0 {
  padding: 0;
}

.pt-0 {
  padding-top: 0;
}

.pr-0 {
  padding-right: 0;
}

.pb-0 {
  padding-bottom: 0;
}

.pl-0 {
  padding-left: 0;
}

.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.p-1 {
  padding: 0.25rem;
}

.pt-1 {
  padding-top: 0.25rem;
}

.pr-1 {
  padding-right: 0.25rem;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pl-1 {
  padding-left: 0.25rem;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pl-4 {
  padding-left: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pr-5 {
  padding-right: 1.25rem;
}

.pb-5 {
  padding-bottom: 1.25rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.pl-6 {
  padding-left: 1.5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.p-7 {
  padding: 1.75rem;
}

.pt-7 {
  padding-top: 1.75rem;
}

.pr-7 {
  padding-right: 1.75rem;
}

.pb-7 {
  padding-bottom: 1.75rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

.py-7 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

.p-8 {
  padding: 2rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pr-8 {
  padding-right: 2rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pl-8 {
  padding-left: 2rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.cart-wrapper {
  box-shadow: 3px 0 13px 0 rgba(100, 112, 134, 0.1);
}

select, input {
  border: 1px solid var(--text-color);
  background: var(--background-color);
  border-radius: 4px;
  font-size: 12px;
  padding: 1rem;
}
html {
  font-size: 12px;
  height: 100%;
}

body {
  height: 100%;
  background: var(--background-color);
  color: var(--text-color);
  font-family: "Noto Sans TC";
}

.d-none {
  display: none;
}

.d-inline {
  display: inline;
}

.d-inline-block {
  display: inline-blockt;
}

.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-content-start {
  justify-content: flex-start;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-around {
  justify-content: space-around;
}

.align-content-start {
  align-content: flex-start;
}

.align-content-end {
  align-content: flex-end;
}

.align-content-center {
  align-content: center;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-end {
  align-items: flex-end;
}

.align-items-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.cursor-pointer {
  cursor: pointer;
}

:root {
  --text-color: black;
  --background-color: white;
  --pink: #f67599;
  --btn-color: #a7aaaf;
  --border-color: #e5e5e5;
  --form-text-color: black;
  --form-border-color: #333333;
  --next-color: white;
  --back-color: black;
  --cart-color: white;
  --cart-border-color: #e5e5e5;
  --input-color: black;
  --input-border-color: #e5e5e5;
  --footer-color: #e5e5e5;
  --period-color: black;
  --option-background-color: white;
  --option-color: black;
  --circle-background-color: black;
  --circle-color: white;
  --circle-border-color: #afb1bd;
  --label-color: #afb1bd;
  --label-check-color: black;
  --circle-text-color: #afb1bd;
  --hr-color: #e5e5e5;
  --count-color: #e5e5e5;
  --logo-url: url("https://i.postimg.cc/MGc3v4d9/Logo-2x.png");
  --mode-url: url("https://i.postimg.cc/ZqGvnKDb/icon-1.png");
  --search-url: url("https://i.postimg.cc/jjDc72xB/icon.png");
  --cart-url: url("https://i.postimg.cc/vThTdC2M/Icon-5.png");
  --circle-line-active: #333333;
}

[data-theme=dark] {
  --text-color: white;
  --background-color: black;
  --pink: #f67599;
  --btn-color: #a7aaaf;
  --border-color: #e5e5e5;
  --form-text-color: #e5e5e5;
  --form-border-color: white;
  --next-color: white;
  --back-color: white;
  --cart-color: #383838;
  --cart-border-color: #383838;
  --period-color: rgba(255, 255, 255, 0.3);
  --input-color: white;
  --input-border-color: rgba(255, 255, 255, 0.3);
  --footer-color: #383838;
  --option-background-color: black;
  --option-color: white;
  --circle-background-color: #333333;
  --circle-color: white;
  --circle-border-color: #383838;
  --label-color: #383838;
  --label-check-color: white;
  --circle-text-color: #383838;
  --hr-color: rgba(255, 255, 255, 0.2);
  --count-color: #808080;
  --logo-url: url("https://i.postimg.cc/52pNWQLV/Logo.png");
  --mode-url: url("https://i.postimg.cc/MTJXx3vX/icon-2.png");
  --search-url: url("https://i.postimg.cc/rwQp0GQF/Icon-3.png");
  --cart-url: url("https://i.postimg.cc/fbV9fW2d/Icon-4.png");
  --circle-line-active: white;
}

/*標頭內容*/
header {
  top: 0px;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 60px;
  padding: 0 17px;
  display: grid;
  grid-template-columns: 1.3rem 1fr 1.3rem;
  grid-gap: 0rem;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
}

.navbar-toggle-label {
  grid-column: 1/2;
}

.navbar-brand {
  position: relative;
  top: 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  grid-column: 2/3;
  cursor: auto;
  font-weight: 700;
}

.navbar-brand-text {
  font-size: 1.2rem;
  font-weight: 700;
}

.navbar-brand-text span {
  margin: auto 3px;
}

.nav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-icon .nav-item {
  border-bottom: none;
}

.nav-item {
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0;
  padding: 5px 17px;
  cursor: pointer;
  font-weight: 100;
  font-size: 16px;
  margin-top: 10px;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  justify-content: center;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
}

.nav {
  position: absolute;
  top: 100%;
  background: var(--background-color);
  width: 100%;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
}

.navbar-toggle:checked ~ .nav {
  transform: scale(1, 1);
}

.navbar-toggle:checked ~ .nav .nav-item {
  /*開啟時透明度為1*/
  transition: opacity 0.2s ease-out 0.15s;
  opacity: 0.8;
}

.navbar-toggle-label {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  height: 3px;
  background: var(--text-color);
}

.hamburger::before,
.hamburger::after {
  position: absolute;
  left: 0;
  content: "";
}

.hamburger {
  position: relative;
  width: 15px;
}

.hamburger::before {
  top: 8px;
  width: 10px;
}

.hamburger::after {
  bottom: 8px;
  width: 20px;
}

.navbar-toggle {
  visibility: hidden;
  position: absolute;
}

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

footer {
  display: none;
}

.card-validation {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
}
.card-validation .card-date {
  grid-column: 1/4;
}
.card-validation .ccv {
  grid-column: 4/7;
}

@media screen and (min-width: 1024px) {
  .nav-icon {
    display: none;
  }

  .nav_right {
    display: block;
  }

  header {
    padding: 0 7%;
    grid-template-columns: 40% 20% 40%;
    grid-template-rows: 60px;
    grid-auto-flow: column;
  }
  header .navbar-toggle-label {
    display: none;
  }
  header .nav {
    all: unset;
    grid-column: 1/2;
  }
  header .nav-list {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    grid-gap: 0rem;
  }
  header .nav_right-list {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    grid-gap: 0.5rem;
  }
  header .nav-item {
    font-size: 14px;
    border: none;
    margin: 0;
    opacity: 1;
    padding: 5px 10px;
  }

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