
export class Form {
 constructor(){

 }
render() {
   const container = document.createElement("div");
    container.className = "px-8 py-10 w-full lg:w-3/5 mx-auto rounded-lg shadow-lg shadow-gray-300/50 dark:shadow-black/50";
    container.innerHTML = `
       <h3 class="text-xl font-medium ">سوال یا انتقاد و پیشنهادی دارید؟</h3>
            <form id="getInTouch" class="mt-6">
              <div class="flex-1">
                <label for="name" class="block mb-2 ">نام</label>
                <input type="text" id="name" placeholder="" class="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white input-style " />
                <small id="nameCheck">بین 5 تا20 کاراکتر  حروف فاصله و _ مجاز است </small>
              </div>
              <div class="flex-1 mt-6">
                 <label for="userName" class="block mb-2 ">ایمیل یا شماره تلفن</label>
                 <input type="text"  id="userName"  placeholder="@example.com" class="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white input-style" />
                 <small id="userNameCheck">بین 11 تا 30 کاراکتر حروف عدد . @ مجاز است</small>
              </div>
              <div class="w-full mt-6">
                <textarea  id="message" class="block w-full h-32 px-5 py-3 mt-2  md:h-48 input-style" placeholder="دیدگاه خود را وارد کنید" ></textarea> 
                <small id="messageCheck">بین 30 تا 500 کاراکتر  حروف عدد فاصله و علامت +*-_@. مجاز است</small>
              </div>
              <button type="submit" id="subBtn" class="w-full  px-6 py-3 mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform btn">ثبت</button>
            </form>
              <div id="modal" class="p-6 rounded-xl max-w-5xl hidden text-center hidden fixed  top-30 left-1/2 -translate-x-1/2 transition-opacity duration-300 opacity-0 shadow-xl">
                <p class="modal-message text-center mx-6"></p>
                <button id="closeModal" class=" mx-auto mt-4 p-2 rounded-2xl text-black">بستن ✖</button>
              </div>
          </div>`
          return container;
}
     init() {
    this.form = document.getElementById("getInTouch");
    this.subBtn = document.getElementById("subBtn");
    this.modal = document.getElementById("modal");
    this.closeMdl = document.getElementById("closeModal");
    this.modalMessage = this.modal.querySelector(".modal-message");

    this.inputItems = [
      {
        input: document.getElementById("name"),
        feedback: document.getElementById("nameCheck"),
        regEx: /^[a-zA-Z0-9آ-ی\s_]{5,20}$/,
        label: "نام"
      },
      {
        input: document.getElementById("userName"),
        feedback: document.getElementById("userNameCheck"),
        regEx: /^[a-zA-Z0-9@.]{11,30}$/,
        label: "ایمیل یا شماره تلفن"
      },
      {
        input: document.getElementById("message"),
        feedback: document.getElementById("messageCheck"),
        regEx: /^[a-zA-Z0-9آ-ی.@\s\-_*+]{30,500}$/,
        label: "پیام"
      }
    ];

    for (const item of this.inputItems) {
      item.input.addEventListener("input", () => {
        item.input.classList.add("dirty");
        this.validate();
      });
    }

    this.subBtn.addEventListener("click", (e) => {
      e.preventDefault();
      for (const item of this.inputItems) {
        item.input.classList.add("dirty");
      }
      this.checkShowModal();
    });

    this.closeMdl.addEventListener("click", () => this.closeModal());
  }

   validate() {
    let isValid = true;
    const errorMessage = [];

    for (const item of this.inputItems) {
      const value = item.input.value.trim();
      if (item.input.classList.contains("dirty")) {
        if (value === "" || !item.regEx.test(value)) {
          const msg = value === "" ? "ورودی نمی‌تواند خالی باشد" : "مقدار نامعتبر است";
          errorMessage.push(`${item.label} : ${msg}`);
          item.feedback.style.color = "red";
          item.feedback.textContent = msg;
          item.input.classList.remove("input-style");
          item.input.classList.add("error-input-style");
          isValid = false;
        } else {
          item.feedback.textContent = "قابل قبول";
          item.feedback.style.color = "green";
          item.input.classList.remove("error-input-style");
          item.input.classList.add("input-style");
        }
      }
    }

    return { isValid, errorMessage };
  }

   checkShowModal() {
    const result = this.validate();

    if (result.isValid) {
      this.modalMessage.textContent = "✅ پیام با موفقیت ثبت شد";
      this.modal.classList.remove("bg-red-200");
      this.modalMessage.classList.remove("text-red-800");
      this.modal.classList.add("bg-green-200");
      this.modalMessage.classList.add("text-green-800");
    } else {
      this.modalMessage.innerHTML = `<br>${result.errorMessage.join("<br>")}`;
      this.modal.classList.remove("bg-green-200");
      this.modal.classList.add("bg-red-200");
      this.modalMessage.classList.remove("text-green-800");
      this.modalMessage.classList.add("text-red-800");
    }

    this.showModal();
  }

  showModal() {
    this.modal.classList.remove("hidden");
    setTimeout(() => {
      this.modal.classList.remove("opacity-0");
      this.modal.classList.add("opacity-100");
    }, 150);
  }

  closeModal() {
    this.modal.classList.remove("opacity-100");
    this.modal.classList.add("opacity-0");
    setTimeout(() => {
      this.modal.classList.add("hidden");
    }, 1000);
  }
}