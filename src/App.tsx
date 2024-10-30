import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>Chun_Shao Chen</h1>
        <h2>陳俊劭</h2>
        <h3>淡江大學資訊管理學系</h3>
        <p>這是課程作業！</p>
      </header>

      <div className="content">
        <div className="left-side">
          <section className="skills-section card">
            <h4>基本資料</h4>
            <ul>
              <li><strong>學號:</strong>410630494</li>
              <li><strong>生日:</strong>2003-01-03(21y)</li>
              <li><strong>身高:</strong>186</li>
              <li><strong>體重:</strong>70</li>
              <li><strong>Email:</strong>410630494@gms.tku.edu.tw</li>
            </ul>
          </section>


          <section className="experience-section card">
            <h4>經歷</h4>
            <table>
              <tr>
                <th>單位</th>
                <th>職位</th>
                <th>官方帳號</th>
              </tr>
              <tr>
                <th>37th資訊管理學系系學會</th>
                <th>活動組組員</th>
                <th><a href="https://www.instagram.com/tku_im?igsh=c3lxd3Fna2ZjNHpq">淡江資管系系學會instagram</a></th>
              </tr>
              <tr>
                <th>38th網球社</th>
                <th>器材長</th>
                <th><a href="https://www.instagram.com/tku_tennis?igsh=aTF5eDAwdGZ2b3Zu">淡江網球社instagram</a></th>
              </tr>
            </table>
          </section>


        </div>
      </div>
      </>
      )
}


      export default App
