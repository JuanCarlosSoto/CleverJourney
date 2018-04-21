import { Injectable } from '@angular/core'
import { Chat } from './chat.model';

let date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = date.getHours(),
    minute = date.getMinutes();

// let chats = [
//     new Chat(
//         'assets/img/profile/ashley.jpg',
//         'Ashley Ahlberg', 
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/bruno.jpg',
//         'Bruno Vespa',
//         'Do not disturb',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/julia.jpg',
//         'Julia Aniston',
//         'Away',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/adam.jpg',
//         'Adam Sandler',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/tereza.jpg',
//         'Tereza Stiles',
//         'Offline',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),  
//     new Chat(
//         'assets/img/profile/michael.jpg',
//         'Michael Blair',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     )
// ]

let chats = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg', 
        'Online',
        'Thanks!', false, null,
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/bruno.jpg',
        'Bruno Vespa',
        'Do not disturb',
        'Great, then I\'ll definitely buy this theme. Thanks!', false, null,
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/julia.jpg',
        'Julia Aniston',
        'Away',
        'Great, then I\'ll definitely buy this theme. Thanks!', false, null,
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/adam.jpg',
        'Adam Sandler',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!', false, null,
        new Date(year, month, day-2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/tereza.jpg',
        'Tereza Stiles',
        'Offline',
        'Great, then I\'ll definitely buy this theme. Thanks!', false, null,
        new Date(year, month, day-2, hour, minute),
        false
    ),  
    new Chat(
        'assets/img/profile/michael.jpg',
        'Michael Blair',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!', false, null,
        new Date(year, month, day-2, hour, minute),
        false
    )
]

let talks = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg', 
        'Online',
        'Hi, This order needs a document attachment for the customs office.', false, null,
        new Date(year, month, day-2, hour, minute+3),
        false
    ),
    new Chat(
        'assets/img/users/user.jpg',
        'Emilio Verdines', 
        'Online',
        'Hi, Please take a look at this document, hopefully is what you are lookig for...', true, 'important_12345.docx',
        new Date(year, month, day-2, hour, minute+2),
        true
    )
]

@Injectable()
export class ChatService {

    public getChats():Array<Chat> {
        return chats;
    }

    public getTalk():Array<Chat> {
        return talks;
    }

}

