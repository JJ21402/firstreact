import React, { Component } from 'react'

import styled from 'styled-components'

    const Button = styled.button`
    font-family: 'Athiti', sans-serif;
    font-size:16px
    color: black;
    border: 2px solid black;
    background-color:#FCC56C;
    
    `
    const Bg = styled.div`
        font-family: 'Athiti', sans-serif;
        background-color:#FCC56C;
        background-image:url("/static/img/Pattern.png") ;
        min-height:250vh;
    `
    const Upper = styled.nav`
        /* padding:10px 10px; */
        background-color:#FCC56C;
    `

    const Text = styled.a`
      text-decoration: none;
      color: brown;
      border: 2px solid black;
      padding: 5px;

      :hover{
        color:white;
        background-color:#613D02;
      }
    `
    
    const Cont = styled.div`
     
      padding-top:20px;
    `
    const But = styled.button`
      background-color:#613D02  ;
      color:white;
      border-radius:5px;
      border:none;
    `
    const Whitesec = styled.div`
    min-height:20vh;
      background-image:url("static/img/Top.png");
    `

    const Content = styled.div`
      background: rgb(240,240,240);
      min-height:100vh;
    `
    const Spon = styled.div`
      padding-top:40px;
      text-align:center;
    `
    const Sir = styled.div`
      padding-top:60px;
      text-align:center;
    `
    const Cir = styled.div`
      padding-top:60px;
      text-align:center;
      
    `
    const Com = styled.div`
    
    min-height:120vh;
      background-color:#FCC56C;
      background-image:url("/static/img/Pattern.png") ;
    `
    const Fire = styled.div`
      
    `
   
   
export default class App extends Component {
  
  render() {
    
    return (
      <Bg>
          <Upper className="navbar navbar-expand-sm sticky-top">
          <a className="navbar-brand" href="#"><img src='/static/img/Asset_10.svg' width='50px' height='25px' /></a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="#">คืออะไร</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ใครมาพูด</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">จัดที่ไหน</a>
            </li>
            
          </ul>
          </div>
          <Text>ส่งหัวข้อสุดชิพ</Text>
          </Upper>


          <Cont>
          <div className="container">
            <h1>ถ้าพูดเยอะอาจจะเจ็บคอ</h1>
            <h1> แต่ถ้ามา Talk n' Chip 2019</h1>
            <h1> แล้วพูดไม่พอจะเสียใจ</h1>

            <p>23 กุมพาพันธ์ 2019 ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี อาคารเรียนรวม 2 ชั้น 4 ห้อง 2401 และ 2402</p>         
            <But>ส่งหัวข้อที่จะไปพูดกันเลย !</But> <span> หรือ  </span> <span><a href="#">ดูหัวข้อที่น่าสนใจ ></a></span>
          </div>
          </Cont>

          <Whitesec>
          </Whitesec>
          <Content>
            <div className = "container" >
            <div class="row">
            <div class="col-2">ด้วยรักจึงจัดให้จาก

</div>
            <div class="col-3"><img src="/static/img/ITFORGE.png" width="200px" height="50"/></div>X
            <div class="col-3"><img src="/static/img/logoAlchemist.png" width="50px" height="50"/></div>X
            <div class="col-3"><img src="/static/img/Thinc.png" width="50px" height="50"/></div>
            </div>
            </div>
 <Spon>
              <small>
              สนับสนุนโดย
              </small>
              <br></br>
              <img src="/static/img/bangmod.png"width="200px" height="50"/>
          </Spon>
          <Sir>
          <h2>เพราะใดๆ ในโลกล้วนเป็น เรื่องน่าเมาท์</h2>
          <p>ในปีนี้ทางชุมนุม ITForge KMITL , Alchemist KMUTT , Thinc. CU จึงได้</p>
          <p> ลงเอย มานัดพบ ชวนทุกคนมานั่งเมาท์กินขนมให้เจ็บคอเล่นอย่างเป็นกันเอง</p> 
          <p>เพื่อให้ทุกคนได้รู้จักกันมากขึ้นผ่าน Open Session ที่ใครอยากจะแชร์อะไร ก็เสนอหัวข้อกันมาได้แล้วมาฝอยกัน</p>
          
          </Sir>
          <Cir>< div class="container">
          <div className="row">
          
          <div class="col-4">
            <img src="/static/img/oval1.png"/>
          </div>
          <div class="col-4">
            <img src="/static/img/oval2.png"/>
          </div>
          <div class="col-4">
          <img src="/static/img/oval3.png" />
          </div>
           </div>
           </ div>
           </Cir>
          
          </Content>
          
          <Com>
          <img src="/static/img/Bottom.png"/>
          <div className="container">
            <div className="row">
              <div className="col-6">
               <h1>คนอยากเมาท์</h1>
                <h1>
                  <span>
                    กับเรื่องที่จะเมาท์
                  </span>
                 </h1>
                  <p>
                  นอกจากจะมี Open Session แล้ว  </p>
                  <p>เรายังมีหัวข้อดีๆ จาก Speaker  </p>
                  <p> ของทั้งสามทีม ที่จะมาแชร์ความรู้ </p>
                  <p>บบวร้ายๆ ให้ได้ฟังกันอีกด้วย </p> 
              </div>
              <div className="col-3">
                <Fire>
                  <img src="/static/img/Asset_10.svg" width="50px" height="50px"/>
                  <h1>Coming soon...</h1>
                  <br/>
                  <img src="/static/img/Asset_10.svg" width="50px" height="50px"/>
                  <h1>Coming soon...</h1>
                  <img src="/static/img/Asset_10.svg" width="50px" height="50px"/>
                  <h1>Coming soon...</h1>
                </Fire>
               
                
              </div>
              <div className="col-3">
              <Fire>
                  <img src="/static/img/Asset_10.svg" width="50px" height="50px"/>
                  <h1>Coming soon...</h1>
                  <br/>
                  <img src="/static/img/Asset_10.svg" width="50px" height="50px"/>
                  <h1>Coming soon...</h1>
                  <img src="/static/img/Asset_10.svg" width="50px" height="50px"/>
                  <h1>Coming soon...</h1>
                </Fire>
              </div>
            
            </div>
            
            </div>
           </Com>
          
          
          
         


       
          
      </Bg>
        
         
          
          
       
    
    )
  }
}
