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
    ul.innerHTML = `
        <li><button onclick="btnId0()" id="btn-list1" class="btn btn-outline-success">Home</button></li>
        <li><button onclick="btnId1()" id="btn-list2" class="btn btn-outline-success">Breaking News</button></li>
        <li><button onclick="btnId2()" id="btn-list3" class="btn btn-outline-success">Regular News</button></li>
        <li><button onclick="btnId3()" id="btn-list4" class="btn btn-outline-success">International News</button></li>
        <li><button onclick="btnId4()" id="btn-list5" class="btn btn-outline-success">Sports</button></li>
        <li><button onclick="btnId5()" id="btn-list6" class="btn btn-outline-success">Entertainment</button></li>
        <li><button onclick="btnId6()" id="btn-list7" class="btn btn-outline-success">Culture</button></li>
        <li><button onclick="btnId7()" id="btn-list8" class="btn btn-outline-success">Arts</button></li>
        <li><button onclick="btnId8()" id="btn-list9" class="btn btn-outline-success">All News</button></li>
    `
    topButtonGrp.appendChild(ul);
}

const btnId1 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
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
        <div class="d-flex justify-content-between card mb-3" style="max-width: auto;">
            <div class="col-md-4">
                <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.details.slice(0, 200)}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.author.name}</small></p>
                </div>
            </div>
        </div>
    `
        breakingNews.appendChild(dynamicDivSec);
    });
}


topListItems();