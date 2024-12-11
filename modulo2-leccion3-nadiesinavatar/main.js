"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
const img = document.querySelector('user__avatar');

img.innerHTML === '<img src="userAvatar" alt="avatar"/>';

let userAvatar = '';