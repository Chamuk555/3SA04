# 3SA04 6135512064 นางสาวชยาภรณ์ สารีสุข

เครื่องมือที่จำเป็นสำหรับการทำ React-Native

-	Chocolatey (for Windows), Brew (for OSX)
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio

- เมื่อติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt

– choco install nodejs
– choco install yarn
– choco install git

ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt

– yarn global add expo-cli

 - สร้างโครงร่างโปรเจ็คสำหรับการพัฒนา React Native ด้วย expo โดยเลือก template เป็น blank
 
สร้างโฟล์เดอร์ wt-app และใช้คำสั่ง cd ในการเข้าไปในโฟล์เดอร์

– expo init wt-app
– cd wt-app

- ทำการรันตัวโปรแกรมขึ้นมา แล้วใช้โทรศัพท์รันโปรแกรม expo แล้วสแกน QR Code ที่ได้จากคำสั่ง yarn start
 
– yarn start คำสั่งสำหรับเริ่มการทำงานของตัวแอพลิเคชั่น


- สังเกตผลลัพธ์ที่ได้บนโปรแกรม Expo ในสมาร์ทโฟน

- สร้างโฟลเดอร์ components ในโปรเจ็ค แล้วสร้างไฟล์ Weather.js
- เพิ่มคอมโพเนนต์ Weather ให้รับ Props ที่ชื่อ zipCode 


- ในไฟล์App.js ให้มีการเรียกใช้คอมโพเนนต์ Weather และส่ง Props ที่ชื่อ zipCode เป็นค่า 90110


- สร้างคอมโพเนนต์ Forecast ที่มีการใช้ props ดังต่อไปนี้ main, description และ temp


- กำหนด State โดยใช้ useState hook แล้วใช้เป็น props ส่งผ่านไปยังคอมโพเนนต์ Forecast ที่สร้างขึ้นมาใหม่
>>หมายเหตุ: ให้ดาวน์โหลดรูปภาพพื้นหลังมาไว้ในโฟลเดอร์นอกสุดของโปรเจค โดยตั้งชื่อไฟล์ว่า bg.jpg

ในส่วนของ Flex Box จะเป็นคำสั่งสำหรับการจัด Layout โดยหลักๆจะมีคำสั่งตามด้านล่างนี้
-	flex – เป็นตัวเลข น้ำหนักในการแบ่งพื้นที่ เช่นถ้าคอมโพเนนต์ A มี flex เท่ากับ 1, คอมโพเนนต์ B มี flex เท่ากับ 2 หมายความว่า B จะใช้พื้นที่มากกว่า A สองเท่า และถ้ามีคอมโพเนนต์ A เพียง คอมโพเนนต์เดียว จะใช้เต็มพื้นที่
-	flexDirection – แกนหลักของ Layout ว่าคอมโพเนนต์ลูกควรจะจัดเรียงแนวนอน (row) และแนวตั้ง (column) โดยค่า default คือ column
-	justifyContent – การกระจายตัวของคอมโพเนนต์ลูกว่าควรจะเป็นแบบแบบใด ในแนวแกนเดียวกับ flexDirection
-	alignItems – การกระจายตัวของคอมโพเนนต์ลูกว่าควรจะเป็นแบบแบบใด ในคนละแกนกับ flexDirection



- เพิ่ม useEffect ลงไปในคอมโพเนนต์ Weather (ให้ทำการ sign up แบบฟรีที่ https://home.openweathermap.org/users/sign_up  เพื่อรับ APPID)

- ในส่วนของไฟล์ Weather.js (ให้นำ api key ที่ได้จาก url ด้านบน มาแทนที่คำว่า YOUR_API_KEY)




- Application ที่สมบูรณ์มักมีหน้าจอ UI (สกรีน) มากกว่า 1 หน้าจอ ในการสลับหน้าจอไปมา สามารถทำได้ผ่านการใช้ Navigation Library ซึ่งไลบรารีที่ถือเป็น Official จาก React คือ react-navigation

>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

>> yarn add @react-navigation/stack @react-navigation/native

เพิ่มคอมโพเนนต์ ZipCodeScreen ซึ่งเป็นหน้าจอสำหรับเลือกรหัสไปรษณีย์ (zip code) จากรายการที่กำหนดไว้ ทั้งนี้นักศึกษาจะต้องกำหนด Style ให้เหมาะสมด้วยตนเอง


ปรับ App.js ให้ render ผลลัพธ์จากไลบรารี react-navigation แทนการ render คอมโพเนนต์ Weather โดยตรง



ในการทำงานร่วมกันของแต่ละหน้าจอ UI เราสามารถส่งผ่านค่าการทำงานได้โดยการใช้ Route Parameter
เพิ่มคอมโพเนนต์ WeatherScreen สำหรับหน้าจอแสดงคอมโพเนนต์ Weather

ปรับ ZipItem ในไฟล์ ZipCodeScreen.js เพื่อสร้างลิงค์ไปยังหน้า Weather พร้อมส่งผ่าน Route Parameter

# โดยสรุปแล้วภาพรวมของแอพลิเคชั่นนั้น 
# จะประกอบด้วยไฟล์หลักๆ 5 ไฟล์ ได้แก่ 
- App.js ซึ่งทำหน้าที่เป็นหน้าหลักของแอพ 
- Weather.js เป็นหน้าที่สอง ถัดมาจากการเลือกจังหวัดในหน้าแรก 
- Forecast.js เป็นการรับค่ารหัสไปรษณีย์ จาก WeatherScreen.js
- WeatherScreen.js เป็นส่งออกรหัสไปรษณีย์ ไปยัง Forecast.js
- ZipCodeScreen.js เป็นองค์ประกอบต่างๆในหน้า Home โดยมีการกำหนดจังหวัด และรหัสไปรณีย์
