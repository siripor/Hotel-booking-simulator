
   // ฟังก์ชันสำหรับเปิด "เว็บไซด์การจอง"
     
         // เพิ่ม event listener ให้ปุ่ม
        const accommodationFlightButton = document.getElementById("accommodationFlightButton");
        accommodationFlightButton.addEventListener("click", accommodationFlightHandler);
   const accommodationFlightHandler = () => {
            const message = "เว็บไซด์การจอง";
            alert(message); // แสดงข้อความแจ้งเตือน
            window.open("", "_blank").document.write(`<h1>${message}</h1>`); // เปิดหน้าต่างใหม่พร้อมแสดงข้อความ
        };

    
     

        // ฟังก์ชันสำหรับเปิด "จองที่พัก"
      
     
        const accommodationBtn = document.getElementById("accommodationBtn");
        accommodationBtn.addEventListener("click", accommodationHandler);

  const accommodationHandler = () => {
            const message = "จองที่พัก";
            alert(message); // แสดงข้อความแจ้งเตือน
            window.open("", "_blank").document.write(`<h1>${message}</h1>`); // เปิดหน้าต่างใหม่พร้อมแสดงข้อความ
        };

