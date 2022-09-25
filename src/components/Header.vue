<template>
  <div>
     <header>
  <!--  hamburger    -->
  <label class="navbar-toggle-label" for="navbar-toggle">
    <span class="hamburger"></span>
  </label>  
  <!--  logo    -->
  <a href="#" class="navbar-brand" >
    <img src="https://upload.cc/i1/2022/06/19/0t6eUc.png" alt="" class="navbar-brand-img" />
  </a>
  <!--  hidden checkbox    -->
  <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
  <!--  nav    -->
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item"><a class="nav-link" href="#">男款</a></li>
      <li class="nav-item"><a class="nav-link" href="#">女款</a></li>
      <li class="nav-item"><a class="nav-link" href="#">最新消息</a></li>
      <li class="nav-item"><a class="nav-link" href="#">客製商品</a></li>
       <li class="nav-item"><a class="nav-link" href="#">聯絡我們</a></li>
      <div class="nav-icon">
       <li class="nav-item"><button >
          <img src="https://upload.cc/i1/2022/06/18/VvRyuD.png
" class="function_icon" alt="">
        </button></li>
       <li class="nav-item"><button >
        <img src="https://upload.cc/i1/2022/06/18/fxnQRv.png" class="function_icon" alt="">
      </button></li>
         <li class="nav-item"><button id="modeBtn" @click.stop.prevent="handleSubmit">
         <img src="https://upload.cc/i1/2022/06/18/rhURPf.png" class="function_icon theme-mode-dark" alt="">
        </button></li>
      </div>
    </ul>
  </nav>
  
   <div class="nav_right">
     <ul class="nav_right-list">
      <li class="nav-item"><button >
          <img src="https://upload.cc/i1/2022/06/18/VvRyuD.png
" class="function_icon" alt="">
        </button></li>
       <li class="nav-item"><button >
        <img src="https://upload.cc/i1/2022/06/18/fxnQRv.png" class="function_icon" alt="">
      </button></li>
         <li class="nav-item" ><button id="modeBtn" @click.stop.prevent="handleSubmit">
         <img src="https://upload.cc/i1/2022/06/18/rhURPf.png" class="function_icon theme-mode-dark" alt="">
        </button></li>
    </ul>
  </div>
    
</header>
    
  </div>
</template>
<script>

export default {    
   props: {
    defaultMode: {
      type: Object,
    }
  },
  data() {
    return {
      mode:Number(this.defaultMode.mode)
    };
  },  
  methods: {   
    handleSubmit () {
     
      if(this.mode == 0)
      this.mode = 1
      else
      this.mode = 0


      this.$emit('after-submit', this.mode)
    }
  },
};
</script>

<style scoped>



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
header .nav-list{
  width: 100%;
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
 .nav_right {
    display: none;
  }

/*標頭內容結束*/

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
}
</style>
