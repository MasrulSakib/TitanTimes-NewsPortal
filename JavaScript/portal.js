// portal and cards unit

const topListItems = (value) => {
    toggleLoader(false);

    try {
        const url = 'https://openapi.programming-hero.com/api/news/categories'
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data.data.news_category))
    }
    catch (error) {
        console.log(error);
    }

    const topButtonGrp = document.getElementById('top-btn-group')
    topButtonGrp.innerHTML = ``;
    const ul = document.createElement('ul');
    ul.classList.add('row');
    ul.classList.add();
    ul.classList.add('g-2');
    ul.classList.add('justify-content-around');
    ul.classList.add('list-unstyled');
    ul.innerHTML = `
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId1()" id="btn-list2" class="btn btn-outline-dark btn-sm">Breaking News</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId2()" id="btn-list3" class="btn btn-outline-dark btn-sm">Regular News</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId3()" id="btn-list4" class="btn btn-outline-dark btn-sm">International News</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId4()" id="btn-list5" class="btn btn-outline-dark btn-sm">Sports</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId5()" id="btn-list6" class="btn btn-outline-dark btn-sm">Entertainment</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId6()" id="btn-list7" class="btn btn-outline-dark btn-sm">Culture</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId7()" id="btn-list8" class="btn btn-outline-dark btn-sm">Arts</button></li>
        <li class = "row g-1 col-6 col-lg-3 col-sm-3"><button onclick="btnId8()" id="btn-list9" class="btn btn-outline-dark btn-sm">All News</button></li>
    `
    topButtonGrp.appendChild(ul);


}


const btnId1 = async () => {
    toggleLoader(true);

    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);


}
const btnId2 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/02`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);


}
const btnId3 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/03`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);


}
const btnId4 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/04`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);


}
const btnId5 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/05`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);
}
const btnId6 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/06`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);
}
const btnId7 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/07`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);

}
const btnId8 = async () => {

    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/08`
    const res = await fetch(url);
    const data = await res.json();
    sendData(data.data);
}

const sendData = (data) => {

    console.log(data);
    const countPortals = document.getElementById('news-count');
    const countPortals2 = document.getElementById('news-count2');
    countPortals2.innerText = ``;

    if (data.length !== 0) {
        countPortals.classList.remove('d-none');
        countPortals.innerText = `${data.length} related contents found`;
    }
    else {
        countPortals.classList.add('d-none');
        countPortals2.innerText = `Content not Available`;
    }


    const newsPortalOpt = document.getElementById('news-portal-opt');
    newsPortalOpt.innerHTML = ``;

    data.forEach(element => {
        const dynamicDivSec = document.createElement('div');
        dynamicDivSec.classList.add('col');

        dynamicDivSec.innerHTML = `


        <div class="d-md-flex flex-md-row justify-content-between card mb-3 p-3" style="max-width: auto;">
            <div class="col-md-4">
                <img src="${element.thumbnail_url}" class="img-fluid img-shape rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.details.slice(0, 200)}...</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex mt-5">
                            <img class="author-img me-3" src="${element.author.img}">
                            <div class="lh-1 text-decoration"> 
                               <p class="card-text"><small class="text-body-secondary">${element.author.name === null || element.author.name === "" ? "No Data Found" : element.author.name}</small></p>
                               <p class="card-text"><small class="text-body-secondary">${element.author.published_date === null || element.author.published_date === "" ? "To be Announced" : element.author.published_date}</small></p> 
                            </div>
                        </div>
                        <div class="d-flex mt-5">
                            <p class="me-2"><i class="fa-regular fa-eye fa-xl"></i></p>
                            <div>
                                <p class="fw-bolder">${element.total_view === null || element.total_view === "" ? "No Data Found" : element.total_view}</p>
                                
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
        newsPortalOpt.appendChild(dynamicDivSec);
    });
    toggleLoader(false);
}


// sorting unit

// modal unit
const detailsModal = async (newsId) => {

    toggleLoader(true);

    try {
        const url = `https://openapi.programming-hero.com/api/news/${newsId}`
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.data[0]);
        dynamicModal(data.data[0]);
    }

    catch (error) {
        console.log(error);
    }

}

const dynamicModal = (element) => {
    const detailsText = document.getElementById('exampleModal');
    const detailsTextHeader = document.getElementById('exampleModalLabel');
    detailsTextHeader.innerText = element.title;
    const portalInnerInfo = document.getElementById('newsInnerInfo');
    portalInnerInfo.innerHTML = `
        <p> Details: ${element.details}</p><br>
        <p> Author: ${element.author.name === null || element.author.name === "" ? "No Data Found" : element.author.name}</p>
    
    `
    toggleLoader(false);
}


const blogContent = () => {
    const portalInnerHTML = document.getElementById('offcanvasWithBothOptions');
    const title = document.getElementById('offcanvasWithBothOptionsLabel')
    title.innerText = `Welcome to the Blog`;
    const portalInnerInfo = document.getElementById('blog-container');
    portalInnerInfo.innerHTML = `

        <ul class = "list-group list-group-numbered">
            <li> 
                <h5>Q1: What is the difference between var, let, const?</h5>
                <p>Ans: var is function-scoped and can be re-declared. let is block-scoped and can be reassigned.
                        const is block-scoped and cannot be reassigned after declaration.</p>
            </li>
            <li> 
                <h5>Q2: What is the difference between arrow function and regular function?</h5>
                <p>Ans: Arrow functions are more concise and lexically bind the value of this.
                        They lack their own arguments and can't be used as constructors, while regular functions have flexible this binding and support arguments.</p>
            </li>
            <li>
                <h5>Q3: What is the difference between map, forEach, filter, find?</h5>
                <p>
                    Ans: map returns a new array by applying a provided function to each element and creating a new element with the returned value.
                        forEach executes a provided function once for each array element, without creating a new array. Used for side effects.
                        filter creates a new array with all elements that pass a test implemented by the provided function.
                        find returns the first element in the array that satisfies a provided testing function, or undefined if none is found.
                        All these methods operate on arrays in JavaScript, but they have different purposes and outcomes.
                </p>
            </li>
            <li>
                <h5>Q4: Why we use template string?</h5>
                <p>Ans: Template strings in JavaScript enable interpolation of variables and expressions within strings, facilitate multiline text without escape characters, 
                        and improve code readability for dynamic content creation, making complex string manipulation more concise and developer-friendly.</p>
             </li>
        </ul>
    `
}

// loader unit
const toggleLoader = (spinner) => {

    const loaderDiv = document.getElementById('loader');
    if (spinner === true) {
        loaderDiv.classList.remove('d-none')
    }
    else if (spinner === false) {
        loaderDiv.classList.add('d-none')
    }
}


topListItems();


