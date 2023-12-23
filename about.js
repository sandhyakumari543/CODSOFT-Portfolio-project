function toggleReadMore() {
 
    const additionalInfo = document.querySelector('.hidden');
    additionalInfo.style.display = (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') ? 'block' : 'none';
    const readMoreBtn = document.querySelector('.read-more-btn');
    readMoreBtn.textContent = (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') ? 'Read More' : 'Read Less';
}


function toggleReadMore1() {
 
    const additionalInfo1 = document.querySelector('.hidden1');
    additionalInfo1.style.display = (additionalInfo1.style.display === 'none' || additionalInfo1.style.display === '') ? 'block' : 'none';
    const readMoreBtn = document.querySelector('.read-more-btn1');
    readMoreBtn.textContent = (additionalInfo1.style.display === 'none' || additionalInfo1.style.display === '') ? 'Read More' : 'Read Less';
}
