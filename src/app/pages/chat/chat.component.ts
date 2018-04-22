import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ]
})
export class ChatComponent implements OnInit {
  @ViewChild('file') file;
  public settings: Settings;
  public userImage = 'assets/img/users/user.jpg';
  public chats: Array<Chat>;
  public talks: Array<Chat>;
  public currentChat:Chat;
  public newMessage:string;

  constructor(public appSettings:AppSettings, private chatService:ChatService, public router:Router) { 
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.chats = this.chatService.getChats();
    this.getChat(this.chats[0]);
    /*if(window.innerWidth <= 768){
      this.sidenavOpen = false;
    }*/    
  } 

  /*@HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }*/

  public getChat(obj){
    if(this.talks){
       this.talks.length = 2;
    }   
    this.talks = this.chatService.getTalk();
    this.talks.push(obj);
    this.currentChat = obj;      
    this.talks.forEach(talk => {
      if(!talk.my){
        talk.image = obj.image;
      }
    });
    /*if(window.innerWidth <= 768){
      this.sidenav.close();
    }*/     
  }

  public sendMessage($event) {       
    if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
      if(this.talks){ 
        this.talks.push(
            new Chat(
              'assets/img/users/user.jpg', 
              'Emilio Verdines', 
              'online', 
              this.newMessage, false, null,
              new Date(), 
              true)
        )
        this.newMessage = '';
        let chatContainer = document.querySelector('.chat-content');
        if(chatContainer){
          setTimeout(() => {
            var nodes = chatContainer.querySelectorAll('.mat-list-item');
            let newChatTextHeight = nodes[nodes.length- 1];
            chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
          }); 
        }
      }
    }
  }

  public ngOnDestroy(){
    if(this.talks)
      this.talks.length = 2;
  }

  showOrders() {
    // navigate to ~/tables/filtering
    this.router.navigate(['/tables/filtering']);
  }

  addFile() {
    this.file.nativeElement.click();
  }

  onFileAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    // FIXME: Will this work with a single selected file?
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        // Process the added file by reading :
        // files[key]
      }
    }
  }

}