// 1. ดึง Element ตาม ID จาก HTML ของคุณ
const cookieBtn = document.getElementById("cookie-btn");
const cookieCount = document.getElementById("cookie-count");
const cpsEl = document.getElementById("cps");
const upgradeClickerBtn = document.getElementById("upgradeClicker");
const autoClickerBtn = document.getElementById("autoClikcer");

// 2. ตัวแปรสำหรับเก็บข้อมูลเกม
let count = 0; // จำนวนคุกกี้ทั้งหมด
let clickPower = 1; // พลังการคลิกต่อครั้ง (เริ่มต้น +1)
let clickerUpgradeCost = 25; // ราคาอัปเกรดพลังคลิก

let autoClickers = 0; // จำนวน Auto Clicker
let autoClickerCost = 15; // ราคา Auto Clicker
let cps = 0; // จำนวนคุกกี้ต่อวินาที (CPS)

// 3. ฟังก์ชันอัปเดตตัวเลขบนหน้าจอ (UI)
function updateUI() {
  // ปัดเศษทศนิยมทิ้งเพื่อแสดงเฉพาะจำนวนเต็ม
  cookieCount.textContent = Math.floor(count);
  cpsEl.textContent = `ต่อวินาที: ${cps}`;

  //   if (count < clickerUpgradeCost) {
  //     upgradeClickerBtn.classList.add("opacity-50", "cursor-not-allowed");
  //   } else {
  //     upgradeClickerBtn.classList.add("opacity-100", "cursor-pointer");
  //   }
  if (upgradeClickerBtn) {
    // อัปเดตข้อความและสถานะปุ่ม Upgrade Clicker
    upgradeClickerBtn.textContent = `Upgrade clicker (+1) for ${clickerUpgradeCost} cookies`;
    // แค่สั่ง true/false Tailwind จะสลับสไตล์ opacity และ cursor ตาม HTML ให้อัตโนมัติ
    upgradeClickerBtn.disabled = count < clickerUpgradeCost;
    upgradeClickerBtn.textContent = `Upgrade clicker (+1) for ${clickerUpgradeCost} cookies`;
    upgradeClickerBtn.disabled = count < clickerUpgradeCost;
  }

  // อัปเดตข้อความและสถานะปุ่ม Auto Clicker
  if (autoClickerBtn) {
    autoClickerBtn.textContent = `Purchase auto clicker (+1/s) for ${autoClickerCost} cookies`;
    autoClickerBtn.disabled = count < autoClickerCost;
    autoClickerBtn.textContent = `Upgrade clicker (+1) for ${autoClickerCost} cookies`;
    autoClickerBtn.disabled = count < autoClickerCost;
  }
}

// 4. ระบบกดคลิกคุกกี้
cookieBtn.addEventListener("click", (e) => {
  count += clickPower; // บวกตามพลังคลิกที่มี
  updateUI();
  createFloatingNumber(e.clientX, e.clientY, `+${clickPower}`);
});

// 5. ระบบซื้อ Upgrade Clicker (เพิ่มพลังกด)
if (upgradeClickerBtn) {
  upgradeClickerBtn.addEventListener("click", () => {
    if (count >= clickerUpgradeCost) {
      count -= clickerUpgradeCost;
      clickPower += 1; // เพิ่มพลังกดอีก +1
      clickerUpgradeCost = Math.floor(clickerUpgradeCost * 1.5); // เพิ่มราคาขึ้น 50%
      updateUI();
    }
  });
}

// 6. ระบบซื้อ Auto Clicker (เพิ่ม CPS)
if (autoClickerBtn) {
  autoClickerBtn.addEventListener("click", () => {
    if (count >= autoClickerCost) {
      count -= autoClickerCost;
      autoClickers += 1;
      cps = autoClickers * 1; // Auto Clicker 1 ตัว ให้ +1 คุกกี้/วินาที
      autoClickerCost = Math.floor(autoClickerCost * 1.4); // เพิ่มราคาขึ้น 40%
      updateUI();
    }
  });
}

// 7. ระบบปั๊มคุกกี้อัตโนมัติ (CPS)
setInterval(() => {
  if (cps > 0) {
    count += cps / 10; // แบ่งบวกทีละ 1/10 ทุกๆ 0.1 วินาที
    updateUI();
    createCpsFloatingNumber();
  }
}, 100);

// 8. ฟังก์ชันตัวเลขลอยขึ้นมาตอนคลิก
function createFloatingNumber(x, y, text) {
  const numberEl = document.createElement("div");
  numberEl.className = "floating-number";
  numberEl.textContent = text;
  numberEl.style.left = `${x - 15}px`;
  numberEl.style.top = `${y - 20}px`;
  document.body.appendChild(numberEl);

  setTimeout(() => {
    numberEl.remove();
  }, 800);
}

function createCpsFloatingNumber() {
  if (cps <= 0) return; // ถ้าไม่มี CPS ก็ไม่ต้องลอย

  // อ้างอิงพื้นที่ของปุ่มคุกกี้หลักเพื่อใช้เป็นจุดอ้างอิง
  const btnRect = cookieBtn.getBoundingClientRect();

  // กำหนดขอบเขตที่จะสุ่มจุดกำเนิด (เช่น รอบๆ ปุ่มคุกกี้)
  // ให้สุ่ม X ด้านซ้ายและขวาของปุ่ม
  const spawnX =
    btnRect.left + Math.random() * btnRect.width - btnRect.width * 0.1;
  // ให้สุ่ม Y บริเวณส่วนบนของปุ่ม
  const spawnY = btnRect.top + Math.random() * (btnRect.height * 0.4);

  // เรียกใช้ฟังก์ชันตัวกลาง โดยส่ง text และ Class พิเศษ
  createFloatingNumber(spawnX, spawnY, `+${cps}`, "cps-number");
}

// เรียกอัปเดตหน้าจอครั้งแรกเมื่อเปิดเกม
updateUI();
