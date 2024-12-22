document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
          <nav class="nav-bar">
            <a href="/多音言葉/">
            <img src="logo.jpg" width="170" class="left-logo" draggable="false">
          </a> 
            <ul>
              <li><a href="/多音言葉/">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#development">Dev</a></li>
              <li><a href="#taon-info">多音言葉について</a></li>
    
              <ul>
                <li class="dropdown">
                  <a href="#" class="dropbtn" tabindex="0">ドロップダウン▼</a>
                  <div class="dropdown-content">
                                                  
                    <div class="dropdown-submenu">
                      <a href="#" class="submenu-btn" tabindex="0">ソフトウェア▶</a>
                      <div class="submenu-content">
                        <a href="#option1" tabindex="0">ソフト1</a>
                        <a href="#option2" tabindex="0">ソフト2</a>
                      </div>
                    </div>
    
                    <div class="dropdown-submenu">
                      <a href="#" class="submenu-btn" tabindex="0">イラスト▶</a>
                      <div class="submenu-content">
                        <a href="#option1" tabindex="0">イラスト1</a>
                        <a href="#option2" tabindex="0">イラスト2</a>
                      </div>
                    </div>
                    
                  </div>
                </li>
              </ul>     
            </ul>
            <a href="index.html">
            <img src="link.png" width="40" class="right-logo" draggable="false">
            </a>
          </nav>
    `;


    document.getElementById('navbar-mein').innerHTML = navbarHTML;
});
