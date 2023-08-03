function toggleLike() {
    const likeIcon = document.querySelector('.like-icon');
    likeIcon.classList.toggle('liked');
    const dislikeIcon = document.querySelector('.dislike-icon');
    dislikeIcon.classList.remove('disliked');

    const explosion = document.querySelector('.explosion');
    explosion.classList.add('explode');
    setTimeout(() => explosion.classList.remove('explode'), 500);
}

function toggleDislike() {
    const dislikeIcon = document.querySelector('.dislike-icon');
    dislikeIcon.classList.toggle('disliked');
    const likeIcon = document.querySelector('.like-icon');
    likeIcon.classList.remove('liked');

    const explosion = document.querySelector('.explosion');
    explosion.classList.add('explode');
    setTimeout(() => explosion.classList.remove('explode'), 500);
}
