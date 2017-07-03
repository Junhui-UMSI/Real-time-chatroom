# Capstone Design Doc From Junhui
## Overview
This Real Time Online Chatting System is intended to support online chatting, including sending images, emojis and audio messages. This document covers the details of the implementation of this system.

## Major Use Cases
1. User can use the interactive message box to add, edit messages and send to other people in the chat. In addition, I'm keeping the option of adding the localization feature into this(i18n).
2. User could create, join, delete a group chat, each of user's action could be seen and applied to the group chat.
3. User could add image, emoji to his/her image/ emoji box for future use in the chat.
4. User could generate and send aduio messages to the chat
5. User could get history of the chat by scrolling up in the chat box


## High Level Stack List
Frontend  - - Client   (react.js,  Socket.io, Redux, React-Router, Web Audio API)  
Frontend  - -  Server   (node.js,  Socket.io)  
Backend - - Database (MongoDB, GridFS for image and emoji storing)  

## Project Structure
![Alt text](/images/Socket.png)
#### React JS Component
ChatPanel:  Component for Chat Room  
ChatBox: Component for displaying chat messages  
MessageBox: Component for entering, editing messages  
ChatList: Component for Chat Room list for the user  
Login: Component for user login page  
Register: Component for user register page  


## Data Flow
![Alt text](/images/EventListener.png)
#### Socket Event Listener
Join: When a user joins the chat room, trigger this event. Will take user_id, group_id and group_number  
Leave: When a user leaves the chat room, trigger this event. Will take user_id, group_id and group_number  
Change: When the chatbox has changes, triggers the event, which divides into three different circumstances: add, revert and typing hint. add will take user_id, group_id, time and message itself. revert will take user_id, group_id, message and time.

## Use Case
![Alt text](/images/UseCase.png)
The use case here takes the circumstances which user add a new message into a chatbox as an example.
