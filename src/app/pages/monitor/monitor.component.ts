import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less']
})
export class MonitorComponent implements OnInit {
    array = ["Nguyễn Tuấn Anh", "Nguyễn Thị Ánh Sương", "Lâm Kiều My", "Trình Hoàng Lương", "Lê Quyết Chiến"]; 
    brray = ["https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&w=1000&q=80", "https://cdn.wallpapersafari.com/72/11/MecWJT.jpg", "https://images.unsplash.com/photo-1541423408854-5df732b6f6d1?ixlib=rb-1.2.1&w=1000&q=80", "https://i.pinimg.com/originals/2f/88/0e/2f880ef2e1761ec234bf68cba9e7f3bb.jpg", "https://4.bp.blogspot.com/-Tn42Xj78wc4/VHE6xfU9pNI/AAAAAAAAGuo/JQJ6jBuMRyk/s1600/Wallpaper%2B-%2BM%E1%BB%97i%2BNg%C3%A0y%2B5%2BH%C3%ACnh%2BN%E1%BB%81n%2BM%C3%A1y%2BT%C3%ADnh%2BFull%2BHD%2B%231%2B2.jpg"];
  constructor() { }
  
  ngOnInit() {
  }

}
