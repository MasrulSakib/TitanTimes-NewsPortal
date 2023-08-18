const topListItems = (value) => {

    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.news_category))

    const topButtonGrp = document.getElementById('top-btn-group')
    const ul = document.createElement('ul');
    ul.classList.add('d-flex');
    ul.classList.add('justify-content-between');
    ul.classList.add('list-unstyled');
    ul.classList.add('text-decoration-underline');
    ul.innerHTML = `
        <li><button onclick="btnId0()" id="btn-list1" class="btn btn-outline-dark">Home</button></li>
        <li><button onclick="btnId1()" id="btn-list2" class="btn btn-outline-dark">Breaking News</button></li>
        <li><button onclick="btnId2()" id="btn-list3" class="btn btn-outline-dark">Regular News</button></li>
        <li><button onclick="btnId3()" id="btn-list4" class="btn btn-outline-dark">International News</button></li>
        <li><button onclick="btnId4()" id="btn-list5" class="btn btn-outline-dark">Sports</button></li>
        <li><button onclick="btnId5()" id="btn-list6" class="btn btn-outline-dark">Entertainment</button></li>
        <li><button onclick="btnId6()" id="btn-list7" class="btn btn-outline-dark">Culture</button></li>
        <li><button onclick="btnId7()" id="btn-list8" class="btn btn-outline-dark">Arts</button></li>
        <li><button onclick="btnId8()" id="btn-list9" class="btn btn-outline-dark">All News</button></li>
    `
    topButtonGrp.appendChild(ul);
}

const btnId1 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId2 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/02`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId3 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/03`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId4 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/04`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId5 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/05`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId6 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/06`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId7 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/07`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId8 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/08`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}

const sendData = (data) => {

    console.log(data);
    const breakingNews = document.getElementById('breaking News');
    breakingNews.innerHTML = ``;

    data.forEach(element => {
        const dynamicDivSec = document.createElement('div');
        dynamicDivSec.classList.add('col');

        dynamicDivSec.innerHTML = `
        <div class="d-flex flex-row justify-content-between card mb-3" style="max-width: auto;">
            <div class="col-md-4">
                <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.details.slice(0, 200)}</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex mt-5">
                            <img class="author-img me-3" src="${element.author.img}">
                            <div class="lh-1 text-decoration"> 
                               <p class="card-text"><small class="text-body-secondary">${element.author.name}</small></p>
                               <p class="card-text"><small class="text-body-secondary">${element.author.published_date}</small></p>
                            </div>
                        </div>
                        <div class="d-flex mt-5">
                            <p class="me-2"><i class="fa-regular fa-eye fa-xl"></i></p>
                            <div>
                                <p class="fw-bolder">${element.total_view}</p>
                                
                            </div>
                        </div>
                        <div class="d-flex mt-5">
                            <p ><i onclick="detailsModal('${element._id}')" class="fa-solid fa-arrow-right fa-beat fa-2xl" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
        breakingNews.appendChild(dynamicDivSec);
    });
}

const detailsModal = async (newsId) => {
    const url = `https://openapi.programming-hero.com/api/news/${newsId}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data[0]);
    dynamicModal(data.data[0]);


}

const dynamicModal = (element) => {
    const detailsText = document.getElementById('exampleModal');
    const detailsTextHeader = document.getElementById('exampleModalLabel');
    detailsTextHeader.innerText = element.title;
    const portalInnerInfo = document.getElementById('newsInnerInfo');

    portalInnerInfo.innerHTML = `
        <p> Details: ${element.details}</p><br>
        <p> Author: ${element.author.name}</p>
    
    `
};


topListItems();