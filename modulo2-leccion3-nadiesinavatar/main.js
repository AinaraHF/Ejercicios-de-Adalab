"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
userAvatar = '';

const img = document.querySelector('.user__avatar');
img.setAttribute('src', userAvatar);

const isPic = true;
const picMissing = false;

isPic === img.setAttribute('src', userAvatar) || picMissing === img.setAttribute('src', DEFAULT_AVATAR);


