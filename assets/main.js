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
    imgs: [
      "./assets/codegym/1.jpg",
      "./assets/codegym/2.jpg",
      "./assets/codegym/3.jpg",
      "./assets/codegym/4.jpg",
      "./assets/codegym/5.jpg",
    ],
    name: "Công ty CP CodeGym Đà Nẵng",
    info: `
    <p>CodeGym Đà Nẵng là hệ thống đào tạo lập trình hiện đại dành cho mọi đối tượng từ những người mới bắt đầu, sinh viên công nghệ thông tin đến các lập trình viên muốn nâng cao tay nghề của mình.</p>
    <p>
    <span>TẦM NHÌN</span>
    "Trở thành hệ thống đào tạo lập trình hiện đại hàng đầu khu vực"
      CodeGym Đà Nẵng đang nỗ lực mỗi ngày nhằm trở thành chủ lực cung cấp nhân lực chất lượng cao cho ngành công nghiệp, góp phần nâng tầm phát triển ngành phần mềm Việt Nam.


    </p>
    <p>
      <span>SỨ MỆNH</span>
      "Phát triển các giải pháp học tập hiện đại".
Theo đó, CodeGym Đà Nẵng tập trung phát triển các giải pháp học tập hiện đại và hiệu quả thông qua các mô hình đào tạo tiên tiến trên nền tảng công nghệ giáo dục và sự cộng tác sâu rộng giữa các bên liên quan, đặc biệt là doanh nghiệp. Qua đó, CodeGym giúp người học phát triển tay nghề vững vàng, sẵn sàng làm việc, và có khả năng tự học suốt đời hiệu quả, thích ứng với cuộc Cách mạng Công nghiệp 4.0.

    </p>
    <p>
      <span>TRIẾT LÝ ĐÀO TẠO</span>
      "Học tập và rèn luyện như những người nghệ nhân"
CodeGym Đà Nẵng tin rằng bất kỳ ai cũng có thể học nghề từ con số 0 đến trở thành nghệ nhân với việc rèn luyện tay nghề liên tục, toàn tâm và nghiêm túc. Mỗi người học lập trình cũng chính là một nghệ nhân và sản phẩm của một nghệ nhân tạo ra phải tinh xảo, độc đáo, mang nét riêng và là niềm tự hào của người nghệ nhân.

    </p>
    <p>
      <span>MÔ HÌNH ĐÀO TẠO CODING BOOTCAMP</span>
      Tại CodeGym Đà Nẵng, mô hình đào tạo tiên tiến Coding Bootcamp được ứng dụng với nhiều ưu điểm như:
      <ul>
        <li> - Thời gian đào tạo ngắn giúp tiết kiệm tối đa chi phí.</li>
        <li> - Cường độ học tập cao giúp học viên nhanh chóng nắm bắt được kiến thức và nâng cao kỹ năng thực hành</li>
        <li> - Phương pháp học tập thực chiến, học thông qua thực hành trong môi trường công sở thật. Được kèm cặp 1 - 1 bởi các giảng viên, tutor dày dặn kinh nghiệm.
</li>
        <li> - Nội dung học được nghiên cứu để sát với nhu cầu tuyển dụng của các doanh nghiệp nhất.
</li>
        <li> - Hỗ trợ tối đa từ ngày đầu tiên nhập học tới lúc có việc làm và đi làm.
</li>
      </ul>
    </p>
    <p>
    <span>KHÓA HỌC JAVA FULLSTACK CÓ CAM KẾT VIỆC LÀM 100%</span>
    Điều đặc biệt ở CodeGym Đà Nẵng là hợp đồng cam kết việc làm cho học viên sau khi tốt nghiệp. Tất cả học viên của CodeGym Đà Nẵng đều có việc làm tại các doanh nghiệp đối tác!
    </p>
    <p><span>THÔNG TIN LIÊN HỆ</span> CodeGym Đà Nẵng
Địa chỉ: Tầng 10,11 – Tòa nhà Đại học Mở Hà Nội, 295 Nguyễn Tất Thành, quận Hải Châu, TP Đà Nẵng.
    <ul>
      <li>
      SĐT: 0236 6517 021
      </li>
      <li>
      
      Facebook: <a href=" www.facebook.com/codegymdanang" > www.facebook.com/codegymdanang</a>
      </li>
      <li>
      Website: <a href="https://danang.codegym.vn"> https://danang.codegym.vn</a>
      </li>
    </ul>
</p>
    `,
  },
  mgm: {
    name: "mgm partners technology Vietnam",
    info: `
     <p> mgm technology partners Vietnam now has one new office in Ho Chi Minh City and two offices in Da Nang, Vietnam!</p>
     <p> For nearly three decades, mgm technology partners has been taking long-term responsibility for applications for business-critical software systems of market-leading e-commerce companies, insurance clients, and public sector institutions. 
</p>
<p> Currently, with more than 800 employees and 18 locations in Europe and Asia, we are among the leading software houses for Java based application systems. Our work is further enhanced by our subsidiary mgm consulting partners and mgm security partners.</p>
<p>
mgm Research & Development identified the best innovations in our software projects and based on these developed a kit (A12) for online applications available to all mgm projects as well as customers and partners. A12 allows our customers to profit from the gains in efficiency and the easy adaptations when developing online applications.</p>
<p>
mgm lives the mission:
Innovation Implemented.</p>

<p>
Will you become a part of us? :D

<ul>
    <li>
      Join us: <a href="https://mgmtp.hire.trakstar.com/?country=Vietnam">https://mgmtp.hire.trakstar.com/?country=Vietnam</a>
    </li>
    <li>
      Website: <a href="https://www.mgm-tp.com/en/">https://www.mgm-tp.com/en/</a>
    </li>
    <li>
      Phone: 0236 3531 773
    </li>
</ul>
</p>

    `,
    career: `<span class="modal__body-title"> We are calling for talented developers - Front-end, Full stack, Java in both Danang and Ho Chi Minh City as we keep growing and expanding energetically.
 </span> 
              <span class="modal__body-title"> If you want to:</span>
              <ul class="modal__list">
             
              <li> Challenge yourself with high-scale and long-term projects in e-commerce, insurance, and public sector </li>
              <li> Work in an international environment and discover new knowledge, cultures… </li>
              <li> Enjoy every second not only in your daily work but also in sports clubs, parties, trips, monthly teambuilding...together with mgmies…  </li>
       
              </ul>
              <span class="modal__body-title">Then do not hesitate to join us at:</span>
              <ul class="modal__list">
              
              <li>
                Ho Chi Minh City: <a href="https://mgmtp.hire.trakstar.com/?state=HCMC">https://mgmtp.hire.trakstar.com/?state=HCMC</a>
              </li>
              <li>
                Da Nang: <a href="ttps://mgmtp.hire.trakstar.com/?state=Da+Nang">https://mgmtp.hire.trakstar.com/?state=Da+Nang</a>
              </li>
              </ul>
          <ul>
          <div class="modal__body-desc"> 
          <ul class="modal__list">
            <li>
              Join us: <a href="https://mgmtp.hire.trakstar.com/?country=Vietnam">https://mgmtp.hire.trakstar.com/?country=Vietnam</a>
            </li>
            <li>
              Website: <a href="https://www.mgm-tp.com/en/">https://www.mgm-tp.com/en/</a>
            </li>
            <li>
              Phone: 0236 3531 773
            </li>
        </ul>
        </div>
              `,
    imgs: [
      "./assets/mgm/1.jpg",
      "./assets/mgm/2.png",
      "./assets/mgm/3.jpg",
      "./assets/mgm/4.jpg",
      "./assets/mgm/5.jpg",
    ],
  },
  "one-tech-stop": {
    name: "ONE Tech Stop Viet Nam",
    imgs: [
      "./assets/onetech/1.jpg",
      "./assets/onetech/2.jpg",
      "./assets/onetech/3.jpg",
      "./assets/onetech/4.jpg",
      "./assets/onetech/5.jpg",
    ],
    career: `<span class="modal__body-desc"> Front-end Developer: <a href=" https://t.ly/DQiS"> https://t.ly/DQiS</a></span>`,
    info: `ONE Tech Stop (OTS) is a subsidiary of Ocean Network Express Pte. Ltd. (ONE). We focus on IT Operations & Infrastructure Optimisation, IT Governance & Security Enhancement as well as Realisation for Innovation & Offshore Transformation Activities for ONE.`,
  },
  mti: {
    name: "MTI Technology",
    imgs: [
      "./assets/mti/1.jpg",
      "./assets/mti/2.jpg",
      "./assets/mti/3.jpg",
      "./assets/mti/4.jpg",
      "./assets/mti/5.jpg",
    ],
    career: `<span class="modal__body-desc">Thông tin tuyển dụng</span> 
        <span class="modal__body-desc">Junior .NET/NodeJS (fresher accepted) <a href="https://mti-vietnam.vn/mticareers#HCMDN-Junior-Developer-NETNodeJS">https://mti-vietnam.vn/mticareers#HCMDN-Junior-Developer-NETNodeJS</a> </span>
    `,
    info: `
    <p>"Câu chuyện về sự phát triển nỗ lực của một trong những công ty công nghệ thông tin hàng đầu Việt Nam.</p>
    <p>Từ năm 2016, chỉ với 20 thành viên, MTI Technology đã vươn vai thành công ty lớn mạnh với hơn 200 nhân viên mang trong mình khao khát khẳng định vị thế tới toàn thế giới."</p>
    <p>Tháng 10/2016: MTI chính thức khai trương Văn phòng Hồ Chí Minh. Theo đà phát triển, tháng 7/2017, MTI tiếp tục mở rộng chi nhánh tại Đà Nẵng, và đến tháng 8/2017 MTI đã mở AI Lab tại HCM. Tháng 12/2017: MTI đại mốc có 100 thành viên và cho đến nay, MTI Technology Vietnam đã phát triển lớn mạnh với hơn 200 thành viên.</p>
    <p>Với sứ mệnh đem đến cho người dùng những dịch vụ tiện ích thông qua các trang web và ứng dụng điện thoại, MTI đã cho ra mắt các sản phẩm trong các lĩnh vực: Chăm sóc sức khỏe, âm nhạc, tài chính, và các ứng dụng giải trí khác, phục vụ khối lượng lớn những người sử dụng internet tại thị trường Nhật Bản. Các sản phẩm nổi bật với hàng triệu users như: music.jp, Luna Luna, &Pay, Carada,...</p>
    <p>"Điều gì tạo nên sự khác biệt của MTI Technology?
    </p>
    <ul>
    <li>- Là công ty product hướng tới thị trường Nhật Bản</li>
    <li>- Ứng dụng chuyển đổi số mạnh mẽ</li>
    <li>- Chất lượng Nhật Bản, dịch vụ toàn cầu</li>
    <li> Áp dụng thành công mô hình phát triển Agile "</li>
    </ul>
    <p>Tại MTI Technology, chúng tôi đã áp dụng thành công mô hình Agile và Scrum nhằm hướng tới mục đích đảm bảo chất lượng sản phẩm, giúp tối ưu hóa chi phí, đẩy nhanh quá trình đóng gói và bàn giao sản phẩm tới khách hàng. </p>
    <p>Bền bỉ trên con đường vươn ra biển lớn, MTI hiện đang có mặt trên 3 quốc gia: Nhật Bản, Trung Quốc và Việt Nam thể hiện khát vọng khẳng định bản lĩnh tiên phong trên bản đồ CNTT thế giới. Những thành tựu đạt được chính nhờ vào sự đam mê sáng tạo, tận tụy hết mình của đội ngũ lãnh đạo và hơn 200 cán bộ nhân viên. MTI Technology tự hào sánh vai cùng các công ty trong ngành tham gia đóng góp tích cực vào sự phát triển CNTT trên mạng lưới toàn cầu.
</p>
    `,
  },
  kms: {
    name: "KMS Technology",
    imgs: [
      "./assets/kms/1.jpg",
      "./assets/kms/2.jpg",
      "./assets/kms/3.jpg",
      "./assets/kms/1.jpg",
      "./assets/kms/2.jpg",
    ],
    career: `<span class="modal__body-desc">Fresher:</span>
      <ul class="modal__list">
        <li>Fresher Software Engineer (Low code platform)</li>
        <li>
          Fresher Front-end Software Engineer
        </li>
        <li>
          Fresher .NET Software Engineer
        </li>
        <li>
          Fresher Test Engineer
            Fresher Java Software Engineer
        </li>
      
      </ul>
      <span class="modal__body-desc">Internship:</span>
      <ul class="modal__list">
      
        <li>
       Java Software Engineer Intern
        </li>
        <li>
       .NET Software Engineer Intern
        </li>
        <li>
       Software Test Engineer Intern (QA/QC/Tester) 
        </li>
        </ul>
           <span class="modal__body-desc">Link JD: <a href="https://careers.kms-technology.com/job/?location=Da%20Nang&jobs_type=Fresher%2CIntern">https://careers.kms-technology.com/job</a></span>
    `,
    info: `
      <p>Năm 2009, công ty KMS Technology được thành lập bởi một nhóm các chuyên gia tiên phong trong lĩnh vực gia công phần mềm cho thị trường Mỹ, cung cấp hai mảng dịch vụ chính: Phát triển ứng dụng và kiểm thử chất lượng sản phẩm phần mềm. Xuyên suốt 13 năm hoạt động, KMS Technology đã xây dựng đội ngũ hơn 1500+ nhân viên tại Việt Nam và Mỹ; cũng như đạt được sự tín nhiệm của khách hàng toàn cầu về chất lượng sản phẩm vượt trội và trình độ chuyên môn cao của kỹ sư người Việt. </p>
      <p>Trong đó:</p>
      <ul>
      <li>
        - KMS Technology tập trung vào phát triển phần mềm tùy chỉnh và dịch vụ tư vấn
      </li>
      <li>
        - KMS Healthcare chuyên về lĩnh vực chăm sóc sức khỏe, cung cấp các giải pháp công nghệ chăm sóc sức khỏe
      </li>
      <li>
        - KMS Solutions phục vụ và mang đến các giải pháp công nghệ tiên tiến của thế giới để giúp các tổ chức đạt được mục tiêu kinh doanh của họ thông qua các khả năng kỹ thuật số và các giải pháp phù hợp với mục đích
      </li>
      </ul>
      <p>
        KMS xây dựng và ra mắt thành công các công ty phần mềm của riêng mình thông qua vườn ươm khởi nghiệp nội bộ, KMS Labs. Các công ty đáng chú ý với hàng triệu người dùng trên toàn thế giới bao gồm QASymphony, Kobiton, Katalon, Grove và Visily.
      </p>
      <p> 
        KMS cam kết tạo ra những đóng góp hữu và tác động lâu dài cho cộng đồng thông qua việc tận dụng kiến thức chuyên môn về CNTT. Công ty thường xuyên hợp tác với các tổ chức phi chính phủ, trường đại học, tham gia các hoạt động đào tạo CNTT và các sự kiện chuyên ngành, tài trợ các chương trình học bổng tại Việt Nam. Công ty đã nhận được nhiều giải thưởng danh giá trong ngành và được mệnh danh là một trong những nơi làm việc tốt nhất tại Việt Nam, Châu Á và Hoa Kỳ trong nhiều năm liên tiếp.
      </p>
      <p>
        Stay connected with KMS Technology:
      </p>
      <ul>
        <li>
          Website: <a href="www.kms-technology.com">www.kms-technology.com</a> 
        </li>
        <li>
        Facebook: <a href=" facebook.com/kmstechnologyvietnam"> facebook.com/kmstechnologyvietnam</a>
        </li>
        <li>
        Linkedin:  <a href="www.linkedin.com/company/kms-technology">www.linkedin.com/company/kms-technology</a>
        </li>
      </ul>
    `,
  },
  paradox: {
    name: "Paradox Vietnam",
    imgs: [
      "./assets/paradox/1.jpg",
      "./assets/paradox/2.jpg",
      "./assets/paradox/3.jpg",
      "./assets/paradox/1.jpg",
      "./assets/paradox/2.jpg",
    ],
    info: `
    <p>Là công ty phát triển ứng dụng trí tuệ nhân tạo (AI) trong lĩnh vực nhân sự đến từ Mỹ, Paradox được thành lập vào năm 2016 với sứ mệnh: tận dụng sức mạnh công nghệ để nâng cao trải nghiệm của con người. Tầm nhìn của công ty hướng đến một thế giới đẩy mạnh tự động hóa, giải phóng thời gian cho các nhà tuyển dụng khỏi những “công việc nhàm chán” (BS - boring stuff), từ đó tập trung nguồn lực và thời gian cho việc giao tiếp và tìm hiểu con người.</p>
    <p>Sản phẩm chủ lực của công ty - Trợ lý tuyển dụng Olivia, hiện đang được sử dụng bởi rất nhiều khách hàng lớn có nhu cầu tuyển dụng hàng loạt từ nhân viên thời vụ cho đến các vị trí chuyên môn đòi hỏi kĩ năng cao. Olivia có thể giúp đảm nhiệm và sắp xếp hợp lý những công việc mà các nhóm tuyển dụng không có quá nhiều thời gian để tập trung như sàng lọc ứng viên, hỗ trợ trả lời câu hỏi của ứng viên 24/7, sắp xếp lịch phỏng vấn, và còn nhiều hơn thế nữa thông qua việc tương tác với ứng viên một cách nhanh chóng, dễ dàng trên nhiều nền tảng. </p>
    <p>Sau hơn 5 năm hoạt động, Paradox đã tạo dựng được lòng tin với nhiều khách hàng là các tập đoàn hàng đầu thế giới như Unilever, McDonald's, CVS Health, PepsiCo, Lowe's, General Motors, Amazon, Nestlé, v.v… Đồng thời, Paradox cũng gặt hái được nhiều giải thưởng danh giá, một trong số đó phải kể đến như việc Paradox nằm trong danh sách những công ty khởi nghiệp đáng làm việc nhất trong ba năm liên tiếp 2020, 2021 và 2022 do Forbes bình chọn. Năm 2021, Paradox được xướng tên ở vị thứ 225 trong danh sách 5000 công ty tư nhân phát triển nhanh nhất nước Mỹ với doanh thu tăng trưởng vượt bậc 1941% trong giai đoạn 2017 - 2020. </p>
    <p>Trong vòng 2 năm gần đây, Paradox mua lại thành công hai công ty công nghệ Spetz và Traitify nhằm đẩy nhanh tốc độ phát triển của mình. Việc mua lại Spetz, một startup của Israel, vào năm 2020 nhằm mục đích hỗ trợ tăng tốc trong hoạt động đổi mới sáng tạo và mở rộng khả năng phục vụ khách hàng toàn cầu của Paradox. Trong khi đó, với việc mua lại Traitify và đưa nền tảng đánh giá tính cách trực quan của Traitify vào sản phẩm của mình, Paradox hi vọng điều này sẽ phát huy hơn nữa sứ mệnh của công ty trong việc tận dụng sức mạnh của công nghệ để nâng cao trải nghiệm của con người.</p>
    <p>
Hiện nay, Paradox có đội ngũ hơn 500 nhân sự trên toàn cầu, trong đó hơn 200 kỹ sư làm việc tại văn phòng Đà Nẵng và Thành phố Hồ Chí Minh, và sẽ tiếp tục mở rộng quy mô nhân sự trong thời gian tới. 
    </p>
    <p>Thông tin liên hệ:</p>
    <ul>
    <li>
    Paradox Vietnam

    </li>
    <li>
    
Văn phòng Đà Nẵng: Tầng 2-3, 460 Nguyễn Hữu Thọ, TP. Đà Nẵng

    </li>
    <li>Văn phòng Hồ Chí Minh: Tầng 6, 60 Nguyễn Đình Chiểu, Quận 1, TP. Hồ Chí Minh </li>
    <li>
     - Email: <a href="jobs.vn@paradox.ai">jobs.vn@paradox.ai </a>
    </li>
    <li>
     - Phone: (+84) 236 3788099 | Skype: live:hr_17855 
    </li>
    <li>
     - Website: <a href="www.paradox.ai">www.paradox.ai </a>
    </li>
    <li>
     - Career site: <a href="https://vncareers.paradox.ai/">https://vncareers.paradox.ai/ </a>
    </li>
    <li>
     - Linkedin: <a href="www.linkedin.com/company/paradoxolivia/"> www.linkedin.com/company/paradoxolivia/ </a>
    </li>
    <li>
     - Fan page: <a href="www.fb.com/ParadoxVietnam">www.fb.com/ParadoxVietnam </a>
    </li>
    </ul>
`,
    career: `
       <span class="modal__body-desc">JD và apply các vị trí đang tuyển dụng tại: <a href="https://vncareers.paradox.ai/">https://vncareers.paradox.ai/ </a> </span>
        <br>
       <span class="modal__body-desc">Các vị trí đang tuyển: </span>
      <ul class="modal__list">
        <li>
        * Văn phòng Đà Nẵng:
        </li>
        <li>
        - Full-stack/Back-end Web Developer (Tất cả level)

        </li>
        <li>
        - Manual Tester (Junior - Middle level)
        </li>
        <li>
        - Automation Tester (Junior - Middle level)

        </li>
        <li>
        - Performance Tester (Middle - Senior level)
        </li>
        <li>
        - Database Engineer (Middle - Senior level)

        </li>
        <li>
        - DevOps Engineer (Junior - Senior level)
        </li>
        <li>
        * Văn phòng Hồ Chí Minh:
        </li>
        <li>
        - Full-stack/Back-end Web Developer (Tất cả level)
        </li>
        <li>
        - Manual Tester (Junior - Middle level)
        </li>
        <li>
        
        </li>
      </ul>
`,
  },
  "gear-inc": {
    name: "Công ty TNHH Gear Inc Việt Nam (Gear Inc)",
    imgs: [
      "./assets/_/1.jpg",
      "./assets/_/2.jpg",
      "./assets/_/3.jpg",
      "./assets/_/1.jpg",
      "./assets/_/2.jpg",
    ],
    career: `
    <span class="modal__body-desc">TRẢI NGHIỆM VỪA LÀM GAME VỪA CHƠI GAME CÙNG PS5 VÀ KÍNH VR, BẠN ĐÃ THỬ CHƯA?</span>
    <br>
    <span class="modal__body-desc">Xin chào các bạn sinh viên Đà Nẵng. Chúng mình là Gear Inc - Studio Game đến từ Mỹ. Bật mí với các bạn là Gear vừa mới tậu xong dàn PS5 và cả kính thực tế ảo xịn xò để các đồng đội của chúng mình vừa làm game, vừa trải nghiệm game một cách chân thực nhất. Vì vậy, nếu bạn mong muốn:</span>
    <ul class="modal__list">
    <li> 
      👉 Được trải nghiệm chơi game cùng PS5 và kính VR
    </li>
    <li> 
      👉 Thực tập full-time với mức lương rủng rỉnh từ 4-5 triệu/tháng
    </li>
    <li> 
      👉 Được tham gia các dự án game thực tế
    </li>
    <li> 
      👉 Trải nghiệm môi trường làm việc chuyên nghiệp, năng động đến từ Mỹ
    </li>
    <li> 
      👉 Cơ hội trở thành nhân viên chính thức sau thời gian thực tập
    </li>
    <li> 
      👉 Phụ cấp cơm trưa và đồ uống miễn phí
    </li>
    <li> 
      👉 Tham gia lớp học tiếng Anh và tận hưởng dịch vụ phòng gym dành riêng cho Gearer
    </li>
    </ul>
    <br>
    <span class="modal__body-desc">
    
    Thì hãy nhanh tay ứng tuyển vào vị trí dưới đây để cùng Gear vừa làm vừa chơi nhé:
    </span>
    <ul class="modal__list">
    <li>
    
🪐Technical Artist Intern: Có background về thiết kế đồ họa 3D và kiến thức cơ bản về lập trình <a href="https://wrkbl.ink/aGMFnj9
">https://wrkbl.ink/aGMFnj9
</a>

    </li>
    <li>
⭐️ Ngoài ra, khi đến phỏng vấn tại Gear, bạn còn được rinh về những món quà xinh xắn nữa. Vì vậy, đừng chần chừ mà hãy apply ngay và hẹn bạn một ngày gặp gỡ tại văn phòng của chúng mình nha!
    
    </li>
    </ul>
    `,
    info: `<p>Gear Inc là Game Studio đến từ Mỹ và hiện đang có văn phòng tại HN, ĐN và TP.HCM. Công ty hiện hoạt động trong 3 lĩnh vực: Phát triển Game, kiểm định chất lượng và kiểm duyệt phần mềm. Về mảng game, công ty mình đang có quy mô là +500 người và đang không ngừng chào đón thêm nhiều thành viên mới!
</p>`,
  },
  enlab: {
    name: "Enlab Software",
    imgs: [
      "./assets/enlab/1.png",
      "./assets/enlab/2.png",
      "./assets/enlab/3.png",
      "./assets/enlab/4.png",
      "./assets/enlab/2.png",
    ],
    info: `
    <p> 
    Enlab Software - Ươm mầm tài năng công nghệ
    </p> 
    <p> 
      Enlab Software được thành lập năm 2013, với mong muốn mang đến một không gian sáng tạo, giúp hiện thực hóa các ý tưởng kinh doanh của doanh nghiệp bằng công nghệ. Với mạng lưới khách hàng tại các nước Châu Mỹ, Châu Âu, Úc, Singapore, Thái Lan..., Enlab là điểm đến lý tưởng để các kỹ sư phần mềm được làm việc trực tiếp với các khách hàng quốc tế, phát triển kỹ năng chuyên môn và rèn luyện kỹ năng ngôn ngữ. 
    </p> 
    <p> 
    Bên cạnh những nỗ lực mang đến dịch vụ khách hàng tốt nhất, Enlab luôn đặt mục tiêu xây dựng môi trường làm việc chuyên nghiệp và gắn kết lên hàng đầu. Tại đây, mọi thành viên đều được đào tạo on-job, kết hợp với các buổi seminar chuyên môn, đào tạo tiếng Anh, các hoạt động team building đa dạng, nhằm mang đến một sự phát triển cân bằng về cả chuyên môn lẫn đời sống tinh thần. Enlab tin rằng một môi trường chuyên nghiệp và đầy cảm hứng sẽ là nguồn năng lượng tích cực cho sự phát triển của mỗi cá nhân. Khi mọi người đều có cơ hội được kiểm chứng năng lực bản thân, làm việc hết mình và hỗ trợ lẫn nhau trên con đường phát triển sự nghiệp, đó là lúc chúng ta tìm được niềm hạnh phúc trong công việc và cuộc sống. 
    </p> 
    <p> 
    Enlab Software hiện đồng hành cùng một đội ngũ hơn 60 lập trình viên trong lĩnh vực .NET, Angular, Flutter, NodeJS,... và tiếp tục gia tăng quy mô, chất lượng nhân sự với mong muốn mang đến nhiều hơn những sản phẩm công nghệ chất lượng cao đến cho khách hàng trong nước và quốc tế. 

    </p> 
    <p>
Mọi thông tin chi tiết về Enlab Software được cập nhật tại:</p>
    <ul>
    <li> 
    - Website: <a href="www.enlabsoftware.com">www.enlabsoftware.com</a>
    </li>
    <li> 
     - LinkedIn: <a href="https://www.linkedin.com/company/enlabsoftware">https://www.linkedin.com/company/enlabsoftware  </a>
    </li>
    <li> 
    - Facebook: <a href="https://www.facebook.com/enlabsoftware ">https://www.facebook.com/enlabsoftware </a>
    </li>
    <li> 
    - Twitter: <a href="https://twitter.com/Enlab_Software ">https://twitter.com/Enlab_Software ​</a>
    </li>
    <li> 
    - Instagram: <a href="https://www.instagram.com/enlab_software/">https://www.instagram.com/enlab_software/ </a>
    </li>
   
    </ul>
    `,
    career: `
    <span class="modal__body-title"> Các vị trí tuyển dụng:</span>
    <ul class="modal__list">
      <li>
      - Full-stack .NET Developer
      </li>
      <li>
      - Full-stack NodeJS Developer
      </li>
      <li>
      - Angular Developer
      </li>
      <li>
      - DevOps Engineer (AWS)
      </li>
      <li>
      - Business Analyst
      </li>
    </ul>
    <span class="modal__body-desc"> Job Description: <a href="https://enlabsoftware.com/careers "> https://enlabsoftware.com/careers </a> </span>
    `,
  },
  aptech: {
    name: "Công ty cổ phần Softech - Chi nhánh Đà Nẵng",
    imgs: [
      "./assets/_/1.png",
      "./assets/_/2.png",
      "./assets/_/3.png",
      "./assets/_/4.png",
      "./assets/_/2.png",
    ],
    info: `
    <p>Hệ thống đào tạo Lập trình viên Quốc tế Softech Aptech ra đời từ năm 2001 trên cơ sở hợp tác giữa tập đoàn đào tạo Công nghệ thông tin hàng đầu thế giới Aptech Ấn Độ và Công ty Cổ phần Công nghệ Phần mềm Đà Nẵng (Softech).</p>
    <p>Qua hơn 22 năm hoạt động, tính đến nay có gần 14.000 học viên đã và đang theo học tại Softech Aptech. Thực tế đào tạo tại Softech Aptech cho thấy, sinh viên của các trường Đại học, các bạn đang đi làm chuyển ngành và các bạn vừa tốt nghiệp phổ thông theo học với số lượng rất đông. Softech Aptech cam kết đảm bảo việc làm cho các bạn học viên sau khi tốt nghiệp, Chất lượng làm việc của học viên Softech Aptech sau khi ra trường được các công ty phần mềm trong nước và nước ngoài đánh giá cao.</p>
    `,
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
  if (DATA_SPONSOR[company.getAttribute("data-sponsor")].career) {
    document.querySelector(".modal__body-career").innerHTML =
      DATA_SPONSOR[company.getAttribute("data-sponsor")].career;
  } else {
    document.querySelector(
      ".modal__body-career"
    ).innerHTML = `<span class="modal__body-title"> Hiện tại ${
      DATA_SPONSOR[company.getAttribute("data-sponsor")].name
    } chưa có thông tin tuyển dụng nào</span> `;
  }
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
