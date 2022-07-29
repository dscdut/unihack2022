var bar = document.getElementById("open-mnav");
var mobileNav = document.getElementById("nav-details");
let textDiv = document.querySelector(".coming-soon");
const btnAward = document.querySelector(".award__btn");
console.log(btnAward);
const btnClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let checkNav = 0;
bar.addEventListener("click", () => {
  if (checkNav === 0) {
    mobileNav.style.display = "flex";
    checkNav = 1;
  } else {
    mobileNav.style.display = "none";
    checkNav = 0;
  }
});

let size = window.matchMedia("(min-width: 900px)");
function reszieScreen(size) {
  if (size.matches) {
    mobileNav.style.display = "flex";
    checkNav = 1;
  } else {
    mobileNav.style.display = "none";
    checkNav = 0;
  }
}
reszieScreen(size);
size.addEventListener("change", reszieScreen);

// Set the date we're counting down to
var countDownDate = new Date("July 14, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("remain-day").innerHTML = "EXPIRED";
  }
}, 1000);

// let text = `Coming soon... `;
// let i = 0;
// (function type() {
//   if (i < text.length) {
//     textDiv.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(type, Math.floor(Math.random() * 400) + 50);
//     if (i === text.length) {
//       textDiv.innerHTML = "";
//       i = 0;
//     }
//   }
// })();

togglePopup = () => {
  modal.classList.toggle("active");

  overlay.classList.toggle("active");
};

btnClose.addEventListener("click", togglePopup);
// btnAward.addEventListener("click", togglePopup);

window.addEventListener("click", (e) => {
  if (e.target == overlay) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
});
const DATA_SPONSOR = Object.freeze({
  enouvo: {
    name: "ENOUVO",
    career: `<span class="modal__body-title"> Các vị trí đang tuyển dụng tại ENOUVO: </span> 
              <ul class="modal__list">
              <li> 10+ Frontent Engineers (ReactJS) </li>
              <li> 5+ Backend Engineers (NodeJS) </li>
              <li> 2+ Tech Leads  </li>
              <li> 2+ iOS Developers </li>
              <li> 2+ Automation Testers </li>
              <li> 2+ Business Analysts  </li>
              </ul>
              <span class="modal__body-desc">
              
                  Xem thêm thông tin tuyển dụng tại: <a href="https://enouvo.com/career/" >https://enouvo.com/career/</a> 
              </span>
              `,
    imgs: [
      "./assets/enouvo/1.jpg",
      "./assets/enouvo/2.jpg",
      "./assets/enouvo/3.jpg",
      "./assets/enouvo/4.jpg",
      "./assets/enouvo/5.jpg",
    ],
    info: `
    <p>
    
    ENOUVO được thành lập với tầm nhìn mang lại các giải pháp công nghệ hữu ích giúp cải thiện chất lượng cuộc sống. Sau hơn 10 năm phát triển, ENOUVO hiện có hệ sinh thái phục vụ cho đổi mới sáng tạo, cung cấp các dịch vụ trong nhiều ngành nghề khác nhau, từ thiết kế, phát triển phần mềm, xây dựng website, cung cấp dịch vụ marketing – launching sản phẩm, đến cung cấp không gian làm việc...
    
    </p>
    <p>
    Các Thương hiệu thuộc hệ sinh thái ENOUVO bao gồm:
    </p>
    <ul>
      <li>
        - Enouvo IT Solutions - cung cấp dịch vụ tư vấn cho các khách hàng tại thị trường nước ngoài như Úc, Canada, Mỹ, Singapore, Pháp..và phát triển giải pháp công nghệ trên nền tảng web hay mobile app, giúp các doanh nghiệp chuyển đổi số hay phát triển ý tưởng mới nổi trội để đưa ra thị trường.
      </li>
      <li> - Enouvo Space: Hệ sinh thái coworking và coliving đầu tiên tại Đà Nẵng - Hỗ trợ cộng đồng sáng tạo và Startup.</li>
    </ul>
    <p>
     Enosta Agency: Cung cấp giải pháp xây dựng Thương hiệu để ra mắt sản phấm với những dịch vụ gồm Website, Design, Branding và Digital Marketing.
    </p>
     <ul>
      <li>
       - Enouv8: Xây dựng và phát triển những sản phẩm công nghệ - Made by Enouvo như KuuHo - Ứng dụng hỗ trợ Cộng đồng và Smartos - Nền tảng quản lý không gian cho thuê
      </li>
      <li> - Enouvo Cafe - Danang Coworking Cafe: Mô hình coworking cafe cung cấp đồ uống chất lượng và healthy - Chuyên tổ chức và tài trợ những sự kiện hỗ trợ cộng đồng sinh viên.</li>
     </ul>
     <p>
     Lựa chọn Đà Nẵng là nơi để khởi nghiệp, ENOUVO mong muốn sẽ góp phần giúp nhiều người biết đến một hình ảnh Đà Nẵng đa màu sắc hơn, không chỉ là một thành phố du lịch xinh đẹp mà còn là mảnh đất tiềm năng để đầu tư và khởi nghiệp, đồng thời hỗ trợ thành phố trên con đường trở thành IT-hub tiếp theo tại Việt Nam. 
     </p>

      <p>
      Đặt mục tiêu đánh thức sức mạnh của các tài năng trẻ Việt Nam, ENOUVO đã và đang tạo ra một môi trường làm việc linh động và sáng tạo tại Việt Nam - nơi các bạn trẻ có thể được truyền cảm hứng và động lực để phát triển bản thân toàn diện, cũng như cơ hội nâng cao chuyên môn nghề nghiệp.
      ENOUVO VISION
      </p>
      <p>
      Trở thành hệ sinh thái kỹ thuật số toàn cầu về Thiết kế và Phát triển Sản phẩm Công nghệ tiên phong tại Đà Nẵng, Việt Nam.
      </p>
      <p>
      <span>
      ENOUVO MISSION
      </span>
      Phát triển các giải pháp hữu ích và có mục đích nhằm nâng cao chất lượng cuộc sống, đồng thời không ngừng bồi đắp những tài năng trẻ. 
      </p>

    `,
  },
  codegym: {
    name: "Công ty CP CodeGym Đà Nẵng",
  },
  mgm: {
    name: "mgm",
  },
  "one-tech-stop": {
    name: "mgm partners technology Vietnam",
  },
  mti: {
    name: "mti",
  },
  kms: {
    name: "kms",
  },
  paradox: {
    name: "Paradox Vietnam",
  },
  "gear-inc": {
    name: "gear-inc",
  },
  enlab: {
    name: "enlab",
  },
  ybox: {
    name: "ybox",
  },
  iVolunteer: {
    name: "iVolunteer",
  },
  bonpas: {
    name: "bonpas",
  },
});
console.log("hehe");
const sponsors = document.querySelectorAll(".sponsor__item");
const tabItems = document.querySelectorAll(".modal__tab-item");
tabItems.forEach((item) => {
  item.addEventListener("click", () => {
    let currActive = document.querySelector(".modal__tab-item.tab-active");
    currActive.classList.remove("tab-active");
    item.classList.add("tab-active");
    if (item.classList.value === "modal__tab-item tab-img tab-active") {
      document.querySelector(".slideshow-container").style.display = "block";
      document.querySelector(".modal__body-company-desc").style.display =
        "block";
      document.querySelector(".modal__body-career").style.display = "none";
    } else {
      document.querySelector(".slideshow-container").style.display = "none";
      document.querySelector(".modal__body-career").style.display = "block";
      document.querySelector(".modal__body-company-desc").style.display =
        "none";
    }
  });
});
sponsors.forEach((item) => {
  item.addEventListener("click", () => {
    // btnAward.addEventListener("click", togglePopup);
    togglePopup();
    document.querySelector(".modal__company-name").innerHTML =
      DATA_SPONSOR[item.getAttribute("data-sponsor")].name;
    showCareerInfo(item);
    showCompanyInfo(item);
  });
});

const showCareerInfo = (company) => {
  document.querySelector(".modal__body-career").innerHTML =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].career;
};

const showCompanyInfo = (company) => {
  document.querySelector(".modal__body-company-desc").innerHTML =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].info;
  document.querySelector(".modal__slide-img-1").src =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].imgs[0];
  document.querySelector(".modal__slide-img-2").src =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].imgs[1];
  document.querySelector(".modal__slide-img-3").src =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].imgs[2];
  document.querySelector(".modal__slide-img-4").src =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].imgs[3];
  document.querySelector(".modal__slide-img-5").src =
    DATA_SPONSOR[company.getAttribute("data-sponsor")].imgs[4];
};

//Coursel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
